// jshint ignore:start
import './App.css';
import WrappedUserForm from './UserForm';
import React, { Component } from 'react';
import { Table } from 'antd';

class App extends Component {
  state = {
    users: [],
    colums: [
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

  render() {
    return (
      <article className="app">
        <header>
          <h1 className="app-header">Coding Challenge 1</h1>
        </header>
        <section className="app-body">
          <article className="form">
            <header>
              <h2 className="secondary-heading">user form</h2>
            </header>
            <WrappedUserForm className="form" addUser={this.addUser} />
          </article>
          <article className="table">
            <header>
              <h2 className="secondary-heading">user table</h2>
            </header>
            <Table
              className="table"
              columns={this.state.colums}
              dataSource={this.state.users}
            />
          </article>
        </section>
      </article>
    );
  }

  addUser = ({ firstName, lastName, age, birthday, hobby }) => {
    const { users } = this.state;
    this.setState({
      users: [
        ...users,
        { firstName, lastName, age, birthday, hobby, key: users.length },
      ],
    });
  };
}

export default App;
