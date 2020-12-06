import React, { useState, useEffect } from "react";
import { Image, View } from "react-native";
import { Container, Content, Text, Title, Header } from "native-base";
import ShowerList from "../components/ShowerList";

import { GOOGLEID } from "../config";

const axios = require("axios").default;

const Profile = (props) => {
  let [user, setUser] = useState(null);
  let [refreshing, setRefreshing] = useState(false);

  async function fetchData() {
    setRefreshing(true);
    const result = await axios(`http://localhost:8000/api/users/${GOOGLEID}`);
    console.log(result);
    setUser(result.data);
    setRefreshing(false);
  }

  useEffect(() => {
    // fetchData();
  }, []);

  const onRefresh = React.useCallback(async () => {
    //await fetchData();
  }, [refreshing]);

  return (
    <Container style={{ backgroundColor: "#88d1e3" }}>
      <Header style={{ backgroundColor: "#3898b0" }}>
        <Title>Your Profile</Title>
      </Header>
      <Content padder>
        <View style={{ flexDirection: "row", padding: 8, paddingLeft: 25 }}>
          <Image
            source={{
              uri:
                "https://www.ikea.com/us/en/images/products/blahaj-soft-toy-shark__0710175_PE727378_S5.JPG",
            }}
            style={{
              height: 100,
              width: 100,
              borderRadius: 100,
            }}
          />
          <View
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
              paddingLeft: 30,
            }}
          >
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>rreshmi</Text>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>46 points</Text>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text style={{ fontSize: 15, marginRight: 15 }}>
                View Playlists
              </Text>
              <Text style={{ fontSize: 15 }}>Edit Profile</Text>
            </View>
          </View>
        </View>
        <ShowerList feed={false} />
      </Content>
    </Container>
  );
};

export default Profile;
