import './App.css';
import WrappedUserForm from './UserForm';
import React from 'react';
import { Table } from 'antd';
import { useSelector } from 'react-redux';

function App() {
  const columns = useSelector(state => state.columns);
  const users = useSelector(state => state.users);
  return (
    <div className="app">
      <header>
        <h1 className="app-header">Coding Challenge 3</h1>
      </header>
      <section className="app-body">
        <article className="form">
          <header>
            <h2 className="secondary-heading">user form</h2>
          </header>
          <WrappedUserForm className="form" />
        </article>
        <article className="table">
          <header>
            <h2 className="secondary-heading">user table</h2>
          </header>
          <Table
            className="table"
            columns={columns}
            dataSource={users}
          />
        </article>
      </section>
    </div>
  );
}

export default App;
