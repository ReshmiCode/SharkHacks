import * as React from "react";
import { Button, Container, Text, Content, Title, Header } from "native-base";
import Login from "../components/Login";

export default function OnboardingScreen(props) {
  return (
    <Container>
      <Header>
        <Title>DropSaver</Title>
      </Header>
      <Content padder>
        <Text>Sign up here or Login</Text>
        <Button onPress={() => props.navigation.push("UserForm")}>
          <Text>Create Profile</Text>
        </Button>
        <Login navigate={props.navigation} />
        <Button>
          <Text>Login</Text>
        </Button>
      </Content>
    </Container>
  );
}
