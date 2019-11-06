import { createStore, applyMiddleware, compose } from 'redux';
import { tableReducer } from '../reducers';
import createSagaMiddleware from 'redux-saga';
import root from '../../saga';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let initialTableState = {
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

    {
      title: 'User Id',
      dataIndex: 'User Id',
      key: 'User Id',
    },
  ],
};

const store = createStore(
  tableReducer,
  initialTableState /* preloadedState, */,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(root);

export default store;
