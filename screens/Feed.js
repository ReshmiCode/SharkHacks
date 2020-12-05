import React, { useState } from "react";
import { Container, Header, Content, Title, Text, Button } from "native-base";
import ShowerList from "../components/ShowerList";

export default function Feed(props) {
  return (
    <Container style={{ backgroundColor: "#88d1e3" }}>
      <Header style={{ backgroundColor: "#3898b0" }}>
        <Title>Feed</Title>
      </Header>
      <Content padder>
        <ShowerList feed={true} />
      </Content>
    </Container>
  );
}
