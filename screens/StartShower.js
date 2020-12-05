import React, { useState } from "react";
import { View } from "react-native";
import { Container, Header, Content, Title, Text, Button } from "native-base";

export default function StartShower(props) {
  function startShower() {
    props.navigation.replace("Leaderboard");
  }

  return (
    <Container style={{ backgroundColor: "#88d1e3" }}>
      <Header style={{ backgroundColor: "#3898b0" }}>
        <Title>Start Shower</Title>
      </Header>
      <Content padder>
        <View
          style={{ display: "flex", flexDirection: "row", alignSelf: "center" }}
        >
          <Button dark onPress={startShower} style={{ marginRight: 20 }}>
            <Text>Start</Text>
          </Button>
          <Button dark onPress={startShower}>
            <Text>Start with Music</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
}
