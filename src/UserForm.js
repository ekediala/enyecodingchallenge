// jshint ignore:start
import {
  Form,
  Input,
  Button,
  DatePicker,
  InputNumber,
  notification,
} from 'antd';
import React, { Component } from 'react';

class UserForm extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="vertical" onSubmit={this.submitForm} className="form">
        <Form.Item label="First Name">
          {getFieldDecorator('first_name', {
            rules: [
              { required: true, message: 'Please enter your first name' },
            ],
          })(<Input placeholder="Salut, please enter your name ?" />)}
        </Form.Item>

        <Form.Item label="Last Name">
          {getFieldDecorator('last_name', {
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
            rules: [{ required: true, message: 'Please enter your age ?' }],
          })(
            <InputNumber
              className="match-form-size"
              placeholder="Awesome, how old are you ?"
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
        this.sendUserData(values);
      }
    });
  };

  sendUserData = values => {
    this.showNotification('success');
    console.log('Submitted', values);
  };

  showNotification = type => {
    notification[type]({
      message: 'Sent',
      description: 'Data sent to server. Thank you.',
    });
  };
}

const WrappedUserForm = Form.create({ name: 'user_form' })(UserForm);

export default WrappedUserForm;
