import React from "react";
import { View } from "react-native";
import { ButtonText, Container, PressableLogin, Title, InnerText, LoginFundo } from "./styles";

const Login = () => {
  return (
    <Container>
      <LoginFundo>
        <Title>
          Login
        </Title>
        <View style={{ marginTop: 20 }}>
          <InnerText placeholder="username"  />
          <InnerText placeholder="password"  />
          <PressableLogin>
            <ButtonText>
              Login
            </ButtonText>
          </PressableLogin>
        </View>
      </LoginFundo>
    </Container>
  );
};

export default Login;