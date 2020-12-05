import React, { useState } from "react";
import { Container, Header, Content, Title, Text, Button } from "native-base";

export default function StartShower(props) {
  function whenClicked() {
    props.navigation.replace("Leaderboard");
  }

  return (
    <Container style={{ backgroundColor: "#88d1e3" }}>
      <Header style={{ backgroundColor: "#3898b0" }}>
        <Title>Start Shower</Title>
      </Header>

      <Content padder>
        <Button large dark onPress={() => whenClicked()}>
          <Text>Done</Text>
        </Button>
      </Content>
    </Container>
  );
}
