import { useRef } from "react";
import axios from "axios";
import {
  Container, Form, Title,
  InputGroup, Label, Input, Button, Footer
} from "./style.js";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const fullnameRef = useRef();
  const userNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const Submit = async (e) => {
    e.preventDefault();
    const data = {
      full_name: fullnameRef.current.value,
      user_name: userNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      const res = await axios.post(
        "https://692eaf5d91e00bafccd4d6a2.mockapi.io/api/v1/register",
        data
      );
      if (res.status === 201 || res.status === 200) {
        fullnameRef.current.value = "";
        userNameRef.current.value = "";
        emailRef.current.value = "";
        passwordRef.current.value = "";

        navigate("/login");
      }

    } catch (error) {
      console.error(error);
      alert("Serverda xatolik yuz berdi!");
    }
  };

  return (
    <Container>
      <Form onSubmit={Submit} autoComplete="off">
        <Title>Sign in</Title>

        <InputGroup>
          <Label>Your full name</Label>
          <Input
            ref={fullnameRef}
            name="random_fullname"
            type="text"
            placeholder="Enter your name"
            autoComplete="off"
          />
        </InputGroup>

        <InputGroup>
          <Label>Your username</Label>
          <Input
            ref={userNameRef}
            name="random_username"
            type="text"
            placeholder="Enter your username"
            autoComplete="off"
          />
        </InputGroup>

        <InputGroup>
          <Label>Your email</Label>
          <Input
            ref={emailRef}
            name="random_email"
            type="email"
            placeholder="Enter your email"
            autoComplete="off"
          />
        </InputGroup>

        <InputGroup>
          <Label>Password</Label>
          <Input
            ref={passwordRef}
            name="new_password_field"
            type="password"
            placeholder="Enter your password"
            autoComplete="new-password"
          />
        </InputGroup>

        <Button type="submit">Next</Button>

        <Footer>
          Already signed in?
          <span onClick={() => navigate("/login")}>
            Go to login
          </span>
        </Footer>
      </Form>
    </Container>
  );
};

export default Register;