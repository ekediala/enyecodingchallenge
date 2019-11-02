import { createStore } from 'redux';
import { tableReducer } from '../reducers';

const initialTableState = {
  users: [],
  columns: [
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
    },

    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Birthday',
      dataIndex: 'birthday',
      key: 'birthday',
    },

    {
      title: 'Hobby',
      dataIndex: 'hobby',
      key: 'hobby',
    },
  ],
};

const store = createStore(
  tableReducer,
  initialTableState /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
