// jshint ignore:start
import { Form, Input, Button, DatePicker, InputNumber } from 'antd';
import React, { Component } from 'react';
import moment from 'moment';

class UserForm extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="vertical" onSubmit={this.submitForm} className="form">
        <Form.Item label="First Name">
          {getFieldDecorator('firstName', {
            rules: [
              { required: true, message: 'Please enter your first name' },
            ],
          })(<Input placeholder="Salut, please enter your name ?" />)}
        </Form.Item>

        <Form.Item label="Last Name">
          {getFieldDecorator('lastName', {
            rules: [{ required: true, message: 'Please enter your last name' }],
          })(<Input placeholder="Thanks, please enter your last name ?" />)}
        </Form.Item>

        <Form.Item label="Hobby">
          {getFieldDecorator('hobby', {
            rules: [{ required: true, message: 'Please enter your hobby' }],
          })(
            <Input
              multiple={true}
              placeholder="Great, please enter your hobby ?"
            />
          )}
        </Form.Item>

        <Form.Item label="Age">
          {getFieldDecorator('age', {
            rules: [{ required: true, message: 'Please enter your age' }],
          })(
            <InputNumber
              className="match-form-size"
              placeholder="Awesome, how old are you ?"
              min={0}
            />
          )}
        </Form.Item>

        <Form.Item label="Date of Birth">
          {getFieldDecorator('birthday', {
            rules: [{ required: true, message: 'Please enter your birthday' }],
          })(
            <DatePicker
              placeholder="Finally, pick your birthday"
              className="match-form-size"
              disabledDate={this.disabledDate}
            />
          )}
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            block
            className="form-button"
            htmlType="submit"
          >
            Submit data
          </Button>
        </Form.Item>
      </Form>
    );
  }

  submitForm = event => {
    event.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const birthday = moment(values.birthday).format('MMMM Do YYYY');
        values.birthday = birthday;
        this.props.addUser(values);
        this.props.form.resetFields();
      }
    });
  };

  disabledDate = current => {
    // Can not select days after today
    return current > moment().endOf('day');
  };
}

const WrappedUserForm = Form.create({ name: 'user_form' })(UserForm);

export default WrappedUserForm;
