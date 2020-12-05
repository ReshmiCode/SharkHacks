import * as React from "react";
import { Button, Container, Text, Content, Title, Header } from "native-base";
import Login from "../components/Login";

export default function OnboardingScreen(props) {
  return (
    <Container style={{ backgroundColor: "#88d1e3" }}>
      <Header style={{ backgroundColor: "#3898b0" }}>
        <Title>DropSaver</Title>
      </Header>
      <Content padder>
        <Text>
          The shower is a place where we can clean up, cool off, wake up, or
          relax after a long day. But it’s also a place where we waste a lot of
          water and energy! Consider this: • The average shower lasts about
          eight minutes. Since the average showerhead has a water flow of 2.1
          gallons per minute, each shower uses more than 16 gallons of water! •
          Across the United States, we use more than one trillion gallons of
          water each year just for showering.
        </Text>
        <Login navigate={props.navigation} />
      </Content>
    </Container>
  );
}
