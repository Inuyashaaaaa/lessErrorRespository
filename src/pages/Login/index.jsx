import { Form, Input, Button } from "antd";
import {
  UserOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import imageUrl from "../../assets/image/login.png";
import styles from "./index.less";

import { setClsPrefixHOC } from "../../utils/setClsPrefixHoc";
import { pageClsPrefixs } from "../../constants";
console.log(styles)

const setClsPrefix = setClsPrefixHOC(pageClsPrefixs.Login);

const Login = () => {
  const handleFormFinish = (value) => {
    console.log(value);
  };


  return (
    <div className={styles.scope}>
      <div className={setClsPrefix("login")}>
        <div className={setClsPrefix("content")}>
          <div className={setClsPrefix("content_logo")}>
            <img src={imageUrl} alt="登陆图标" />
          </div>
          <div className={setClsPrefix("content_title")}>
            “帮福”后台管理系统
          </div>
          <Form
            className={setClsPrefix("content-input")}
            onFinish={handleFormFinish}
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: "请填写邮箱!" }]}
            >
              <Input
                size="large"
                placeholder="请输入邮箱"
                prefix={<UserOutlined />}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: "请填写密码!" }]}
            >
              <Input.Password
                size="large"
                placeholder="请输入密码"
                prefix={<LockOutlined />}
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" size="large" htmlType="submit">
                登陆
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
