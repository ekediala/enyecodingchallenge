import { put, take, fork, takeEvery } from 'redux-saga/effects';
import { myDatabase } from '../firebase';
import actionCreator from '../redux/actions';
import { eventChannel } from 'redux-saga';
import axios from 'axios';
import { notification } from 'antd';

function* keepDatabaseInSyncWithStore() {
  const channel = new eventChannel(emiter => {
    const listener = myDatabase.ref('users').on('value', snapshot => {
      let users;
      if (snapshot.exists()) {
        users = Object.values(snapshot.val()); // Tables only accept arrays; snapshot.val() is object
      } else users = [];
      emiter({ users });
    });

    return () => listener.off();
  });

  while (true) {
    const { users } = yield take(channel);
    const data = actionCreator('UPDATE_TABLE', users);
    yield put(data);
  }
}

function* addUser({ payload }) {
  axios.defaults.headers.post['Content-Type'] = 'application/json';

  const url =
    'https://us-central1-ekecodingchallenge3.cloudfunctions.net/createUser/create';

  yield axios
    .post(url, payload)
    .then(() => {
      const type = 'success';
      const desc = 'User successfully added.';
      notify(type, desc);
    })
    .catch(error => {
      const type = 'error';
      const desc = 'Something went wrong. Please try again.';
      notify(type, desc);
      console.log('Error: ', error);
    });

  function notify(type, desc) {
    notification[type]({
      message: 'Coding Challenge 3',
      description: desc,
    });
  }
}

export default function* root() {
  yield fork(keepDatabaseInSyncWithStore);
  yield takeEvery('ADD_USER', addUser);
}
