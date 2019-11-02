import { Form, Input, Button, DatePicker, InputNumber } from 'antd';
import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import actionCreator from './redux/actions';

function UserForm(props) {
  const { getFieldDecorator } = props.form;
  const dispatch = useDispatch();

  const disabledDate = current => {
    // Can not select days after today
    return current > moment().endOf('day');
  };

  const submitForm = event => {
    event.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        const birthday = moment(values.birthday).format('MMMM Do YYYY');
        values = { ...values, birthday };
        dispatch(actionCreator('ADD_USER', values));
        props.form.resetFields();
      }
    });
  };

  return (
    <Form layout="vertical" onSubmit={submitForm} className="form">
      <Form.Item label="First Name">
        {getFieldDecorator('firstName', {
          rules: [{ required: true, message: 'Please enter your first name' }],
        })(<Input placeholder="Enter first name" />)}
      </Form.Item>

      <Form.Item label="Last Name">
        {getFieldDecorator('lastName', {
          rules: [{ required: true, message: 'Please enter your last name' }],
        })(<Input placeholder="Enter last name" />)}
      </Form.Item>

      <Form.Item label="Hobby">
        {getFieldDecorator('hobby', {
          rules: [{ required: true, message: 'Please enter your hobby' }],
        })(<Input multiple={true} placeholder="Enter a hobby" />)}
      </Form.Item>

      <Form.Item label="Age">
        {getFieldDecorator('age', {
          rules: [{ required: true, message: 'Please enter your age' }],
        })(
          <InputNumber
            className="match-form-size"
            placeholder="Enter your age"
            min={0}
          />
        )}
      </Form.Item>

      <Form.Item label="Date of Birth">
        {getFieldDecorator('birthday', {
          rules: [{ required: true, message: 'Please enter your birthday' }],
        })(
          <DatePicker
            placeholder="Pick your birthday"
            className="match-form-size"
            disabledDate={disabledDate}
          />
        )}
      </Form.Item>

      <Form.Item>
        <Button type="primary" block className="form-button" htmlType="submit">
          Submit data
        </Button>
      </Form.Item>
    </Form>
  );
}

const WrappedUserForm = Form.create({ name: 'user_form' })(UserForm);

export default WrappedUserForm;
