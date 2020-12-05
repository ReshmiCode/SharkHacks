import React, { useState } from "react";
import { Container, Header, Content, List, ListItem, Text } from "native-base";

//list divider in documentation
export default function UserForm() {
  return (
    <Container>
      <Header />
      <Content>
        <List>
          <ListItem itemDivider>
            <Text>A</Text>
          </ListItem>
          <ListItem itemDivider>
            <Text>B</Text>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
}
