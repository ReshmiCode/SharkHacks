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
  let [email, setEmail] = useState("");
  let [name, setName] = useState("");
  let [password, setPassword] = useState("");
  let [usualTime, setTime] = useState("");
  let [gpm, setGPM] = useState("");
  const [addUser, { loading, error }] = useMutation(ADD_PROFILE);

  const submit = () => {
    addUser({
      variables: { name, email, password, gpm, usualTime },
    });
    if (!error && !loading) props.navigation.replace("Root");
  };

  return (
    <Container>
      <Header>
        <Title>Create Your Profile</Title>
      </Header>
      <Content style={{ padding: 10 }}>
        <Form>
          <Item floatingLabel>
            <Label>Name</Label>
            <Input onChangeText={(name) => setName(name)} />
          </Item>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input onChangeText={(email) => setEmail(email)} />
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
            <Label>Your shower is how many gal per min?</Label>
            <Input onChangeText={(gpm) => setGPM(gpm)} />
          </Item>
          <Button
            onPress={submit}
            style={{ alignSelf: "center", marginTop: 50 }}
          >
            <Text>{loading ? "Loading..." : "Create Profile"}</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
}
