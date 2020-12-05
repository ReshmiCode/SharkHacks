import React, { useState, useRef } from "react";
import { View } from "react-native";
import { Container, Header, Content, Title, Text, Button } from "native-base";
import Wave from "react-native-waveview";

export default function StartShower(props) {
  const [start, setStart] = useState(false);
  const [timer, setTimer] = useState("5:00");
  const wave = useRef(null);

  const startShower = () => {
    setStart(true);
    wave.current.setWaterHeight(550);
  };

  const endShower = () => {
    setStart(false);
    wave.current.setWaterHeight(0);
  };

  return (
    <Container style={{ backgroundColor: "#88d1e3" }}>
      <Header style={{ backgroundColor: "#3898b0" }}>
        <Title>Start Shower</Title>
      </Header>
      <Content padder>
        {!start && (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignSelf: "center",
            }}
          >
            <Button dark onPress={startShower} style={{ marginRight: 20 }}>
              <Text>Start</Text>
            </Button>
            <Button dark onPress={startShower}>
              <Text>Start with Music</Text>
            </Button>
          </View>
        )}
        {start && (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignSelf: "center",
            }}
          >
            <Text>hi</Text>
            <Button dark onPress={endShower}>
              <Text>End</Text>
            </Button>
          </View>
        )}
        <Wave
          ref={(wave) => wave && wave.setWaterHeight(0)}
          style={{
            width: 700,
            aspectRatio: 1,
            borderRadius: 50,
          }}
          H={70}
          waveParams={[
            { A: 10, T: 380, fill: "#62c2ff" },
            { A: 15, T: 340, fill: "#0087dc" },
            { A: 20, T: 300, fill: "#1aa7ff" },
          ]}
          animated={true}
        />
      </Content>
    </Container>
  );
}
