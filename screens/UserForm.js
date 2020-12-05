import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_PROFILE } from "../components/queries";
import {
  Container,
  Header,
  Content,
  Form,
  Label,
  Title,
  Item,
  Input,
  Text,
  Button,
} from "native-base";

export default function UserForm(props) {
  let [name, setName] = useState("");
  let [password, setPassword] = useState("");
  let [usualTime, setTime] = useState("");
  let [gpm, setGPM] = useState("");
  const [addUser, { loading, error }] = useMutation(ADD_PROFILE);

  const submit = () => {
    /*addUser({
      variables: { name, email, password, GPM: gpm, showerLength: usualTime },
    });*/
    // if (!error && !loading) props.navigation.replace("Root");
    props.navigation.replace("Root");
  };

  return (
    <Container style={{ backgroundColor: "#88d1e3" }}>
      <Header style={{ backgroundColor: "#3898b0" }}>
        <Title>Profile Setup</Title>
      </Header>
      <Content style={{ padding: 10 }}>
        <Form>
          <Item floatingLabel>
            <Label>Name</Label>
            <Input onChangeText={(name) => setName(name)} />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input onChangeText={(password) => setPassword(password)} />
          </Item>
          <Item floatingLabel>
            <Label>How long is your usual shower?</Label>
            <Input onChangeText={(usualTime) => setTime(usualTime)} />
          </Item>
          <Item floatingLabel>
            <Label>Your showerhead is how many gpm*?</Label>
            <Input onChangeText={(gpm) => setGPM(gpm)} />
          </Item>
          <Button onPress={submit} style={{ alignSelf: "center", margin: 50 }}>
            <Text>{loading ? "Loading..." : "Create Profile"}</Text>
          </Button>
          {error && <Text>{error.message}</Text>}
        </Form>
        <Text>
          *gpm means gallons per minute. If you are not sure of your own, the
          average is 2.5
        </Text>
      </Content>
    </Container>
  );
}
