import { useRef, useContext, useEffect } from "react";
import AuthContext from "../../store/auth-context";
import { useHistory } from "react-router-dom";
import { Button, Form, Input, InputNumber } from "antd";

import classes from "./ProfileForm.module.css";
import { useForm } from "antd/lib/form/Form";

const ProfileForm = ({ user, setUserEdit }) => {
  const history = useHistory();
  const [form] = useForm();
  useEffect(() => {
    form.setFieldsValue(user);
  }, [form, user]);

  const submitHandler = (event) => {
    console.log(event, "user");
    setUserEdit({ ...event, id: user.id });
  };
  return (
    <div className={classes.container_user_form_info}>
      <h3>Change your information</h3>
      <Form
        form={form}
        layout="vertical"
        className={classes.form}
        onFinish={submitHandler}
      >
        <div className={classes.control}>
          <Form.Item
            name={"first_name"}
            label="First Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"last_name"}
            label="Last Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"address"}
            label="Address"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"email"}
            label="Email"
            rules={[
              {
                required: true,
                type: "email",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"phone_number"}
            label="Phone"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber className="w-100" />
          </Form.Item>
          <Button type="submit" htmlType="submit" className="main-button">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ProfileForm;
