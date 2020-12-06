import React, { useState, useEffect } from "react";
import { Image, Animated } from "react-native";
import { Button, Container, Text, Content, Title, Header } from "native-base";
import Login from "../components/Login";
import shark from "../assets/images/shark.png";

export default function OnboardingScreen(props) {
  const [startVal, setStartVal] = useState(new Animated.Value(350));

  useEffect(() => {
    Animated.loop(
      Animated.timing(startVal, {
        toValue: -350,
        duration: 5000,
        useNativeDriver: true,
      }),
      { iterations: 10 }
    ).start();
    // setInterval(resetAnim, 10000);
  });

  const resetAnim = () => {
    setStartVal(new Animated.Value(400));
  };

  return (
    <Container style={{ backgroundColor: "#88d1e3" }}>
      <Header style={{ backgroundColor: "#3898b0" }}>
        <Title>DropSaver</Title>
      </Header>
      <Content padder>
        <Text style={{ marginBottom: 10 }}>
          The shower is a place where we can clean up, cool off, wake up, or
          relax after a long day. But it’s also a place where we waste a lot of
          water and energy! The average shower lasts about eight minutes. Since
          the average showerhead has a water flow of 2.5 gallons per minute,
          each shower uses more than 16 gallons of water! Across the United
          States, we use more than one trillion gallons of water each year just
          for showering. Will you take the pledge to take shorter showers?
        </Text>
        <Animated.Image
          source={shark}
          style={{
            width: 300,
            height: 150,
            transform: [
              {
                translateX: startVal,
              },
            ],
          }}
        />
        <Login navigate={props.navigation} />
      </Content>
    </Container>
  );
}
