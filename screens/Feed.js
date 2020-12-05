import React, { useState } from "react";
import { Container, Header, Content, Title, Text, Button } from "native-base";

export default function Feed(props) {
  return (
    <Container>
      <Header>
        <Title>Feed</Title>
      </Header>
      <Content padder>
        <Button>
          <Text>Done</Text>
        </Button>
      </Content>
    </Container>
  );
}
