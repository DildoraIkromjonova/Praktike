import { useRef } from "react";
import axios from "axios";
import {
  Container,
  Form,
  Title,
  InputGroup,
  Label,
  Input,
  Button,
  Footer,
} from "./login";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const userNameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const Submit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(
        "https://692eaf5d91e00bafccd4d6a2.mockapi.io/api/v1/register"
      );

      const user = res.data.find(
        (item) =>
          item.user_name === userNameRef.current.value &&
          item.password === passwordRef.current.value
      );

      if (user) {
        localStorage.setItem("token", "true");
        localStorage.setItem("user", JSON.stringify(user));

        alert("Login muvaffaqiyatli!");

        navigate("/");
      } else {
        alert("Username yoki password noto'g'ri!");
      }
    } catch (err) {
      console.log(err);
      alert("Server bilan bog'lanib bo'lmadi!");
    }
  };

  return (
    <Container>
      <Form onSubmit={Submit}>
        <Title>Sign in</Title>

        <InputGroup>
          <Label>Username</Label>
          <Input
            ref={userNameRef}
            type="text"
            placeholder="Enter username"
          />
        </InputGroup>

        <InputGroup>
          <Label>Password</Label>
          <Input
            ref={passwordRef}
            type="password"
            placeholder="Enter password"
          />
        </InputGroup>

        <Button type="submit">Login</Button>

        <Footer>
          Don't have an account?{" "}
          <span onClick={() => navigate("/register")}>
            Sign up
          </span>
        </Footer>
      </Form>
    </Container>
  );
};

export default Login;