import React, { useState, useRef, useEffect } from "react";
import { View, Image } from "react-native";
import {
  Container,
  Header,
  Content,
  Title,
  Text,
  Root,
  Button,
  Toast,
} from "native-base";
import Wave from "react-native-waveview";
import { SliderPicker } from "react-native-slider-picker";

export default function StartShower(props) {
  const [timer, setTimer] = useState(null);
  const [showPlaylist, setPlaylist] = useState(false);
  const [counter, setCounter] = useState(-1);
  const [start, setStart] = useState(false);
  const [numPicker, setNumPicker] = useState(5);
  const wave = useRef(null);

  useEffect(() => wave.current.setWaterHeight(0), []);

  useEffect(() => {
    let originVal = numPicker * 60;
    wave.current.setWaterHeight(
      750 - (750 / originVal) * (originVal - counter)
    );
  }, [counter]);

  const startShower = () => {
    setPlaylist(false);
    setCounter(numPicker * 60);
    let locTimer = setInterval(tick, 1000);
    setTimer(locTimer);
    setStart(true);
    wave.current.setWaterHeight(750);
  };

  const tick = () => {
    setCounter((prev) => prev - 1);
  };

  const endShower = () => {
    clearInterval(timer);
    setCounter(0);
    setStart(false);
    wave.current.setWaterHeight(0);
    Toast.show({
      text: `You've gotten ${30 - numPicker} points!`,
      buttonText: "Okay",
      duration: 3000,
    });
  };

  const formatTime = () => {
    let m = Math.floor(counter / 60);
    let s = Math.floor(counter % 60);
    return m + ":" + s < 10 ? "0" : "" + s;
  };

  return (
    <Root>
      <Container style={{ backgroundColor: "#88d1e3" }}>
        <Header style={{ backgroundColor: "#3898b0" }}>
          <Title>{start ? "Shower" : "Start Shower"}</Title>
        </Header>
        <Content padder>
          {!start && (
            <View>
              <Title style={{ marginBottom: 30 }}>
                Choose Your Shower Duration
              </Title>
              <SliderPicker
                minLabel={"1"}
                midLabel={"10"}
                maxLabel={"20"}
                maxValue={20}
                callback={(pos) => setNumPicker(pos)}
                defaultValue={numPicker}
                labelFontColor={"#000"}
                labelFontSize={14}
                showFill={true}
                fillColor={"red"}
                labelFontWeight={"bold"}
                showNumberScale={true}
                showSeparatorScale={true}
                buttonBackgroundColor={"#095c70"}
                buttonBorderColor={"#095c70"}
                fillColor="#3898b0"
                scaleNumberFontWeight={"300"}
                buttonDimensionsPercentage={6}
                heightPercentage={2}
                widthPercentage={80}
              />
              <Text style={{ padding: 15, marginBottom: 10 }}>
                Based on your gpm, the recommended shower time is 6 minutes. The
                currently selected shower time is {numPicker} minutes. This will
                earn you {30 - numPicker} points!
              </Text>
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
                <Button dark onPress={() => setPlaylist(true)}>
                  <Text>Start with Music</Text>
                </Button>
              </View>
            </View>
          )}
          {showPlaylist && (
            <>
              <Image
                source={{
                  uri:
                    "https://community.spotify.com/t5/image/serverpage/image-id/102455i71E9CBC86A66460A/image-size/large?v=1.0&px=999",
                }}
                style={{
                  height: 300,
                  width: 300,
                  alignSelf: "center",
                  margin: 20,
                }}
              />
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignSelf: "center",
                }}
              >
                <Button dark onPress={startShower} style={{ marginRight: 20 }}>
                  <Text>Shuffle Playlist</Text>
                </Button>
                <Button dark onPress={startShower}>
                  <Text>Start Playlist</Text>
                </Button>
              </View>
            </>
          )}
          {start && (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignSelf: "center",
              }}
            >
              <Title style={{ marginRight: 20 }}>{formatTime()}</Title>
              <Button dark onPress={endShower}>
                <Text>End</Text>
              </Button>
            </View>
          )}
          <Wave
            ref={wave}
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
    </Root>
  );
}
