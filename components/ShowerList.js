import React, { useState, useEffect } from "react";
import { Image } from "react-native";
import {
  Container,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
} from "native-base";

const axios = require("axios").default;

const Shower = (props) => {
  let showers = props.feed
    ? [
        {
          user: "blahaj",
          date: "December 5th, 2020",
          duration: 10,
          points: 20,
          profPic:
            "https://www.ikea.com/us/en/images/products/blahaj-soft-toy-shark__0710175_PE727378_S5.JPG",
          extra: "Listened to a playlist including Save the Sharks and more",
        },
        {
          user: "sarahSings",
          date: "December 5th, 2020",
          duration: 3,
          points: 50,
          profPic:
            "https://www.ikea.com/us/en/images/products/blahaj-soft-toy-shark__0710175_PE727378_S5.JPG",
          extra: "Listened to a playlist including Twenty One Pilots and more",
        },
      ]
    : [
        {
          user: "rreshmi",
          date: "December 4th, 2020",
          duration: 6,
          points: 40,
          profPic:
            "https://www.ikea.com/us/en/images/products/blahaj-soft-toy-shark__0710175_PE727378_S5.JPG",
          extra: "Listened to a playlist including Ariana Grande and more",
        },
        {
          user: "rreshmi",
          date: "December 3th, 2020",
          duration: 8,
          points: 30,
          profPic:
            "https://www.ikea.com/us/en/images/products/blahaj-soft-toy-shark__0710175_PE727378_S5.JPG",
        },
      ];
  /*let [showers, setShowers] = useState([]);

  useEffect(() => {
    fetchData();
    async function fetchData() {
      const result = await axios(
        `http://localhost:3000/api/posts/user/${props.user}`
      );
      setShowers(result.data.payload.reverse());
    }
  }, []);*/

  return (
    <>
      {props.feed && (
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    "https://www.ikea.com/us/en/images/products/blahaj-soft-toy-shark__0710175_PE727378_S5.JPG",
                }}
              />
              <Body>
                <Text>blahaj</Text>
                <Text note>December 5th, 2020</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body>
              <Image
                source={{
                  uri:
                    "https://community.spotify.com/t5/image/serverpage/image-id/102455i71E9CBC86A66460A/image-size/large?v=1.0&px=999",
                }}
                style={{ height: 200, width: 360, marginBottom: 6 }}
              />
              <Text>
                blahaj has shared their playlist titled Save the Sharks!
              </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent textStyle={{ color: "#87838B" }}>
                <Icon name="md-download" />
                <Text>5 downloads</Text>
              </Button>
            </Left>
          </CardItem>
        </Card>
      )}
      {showers.map(function (shower, i) {
        return (
          <Card style={{ flex: 0 }} key={i}>
            <CardItem>
              <Left>
                <Thumbnail
                  source={{
                    uri: shower.profPic,
                  }}
                />
                <Body>
                  <Text>{shower.user}</Text>
                  <Text note>{shower.date}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image
                  source={{
                    uri:
                      "https://static.vecteezy.com/system/resources/previews/000/599/225/non_2x/shower-icon-vector.jpg",
                  }}
                  style={{ height: 200, width: 360, marginBottom: 6 }}
                />
                <Text>Shower lasting {shower.duration} minutes</Text>
                {shower.extra && <Text>{shower.extra} </Text>}
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{ color: "#87838B" }}>
                  <Icon name="md-hand" />
                  <Text>{shower.points} points</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        );
      })}
    </>
  );
};

export default Shower;
