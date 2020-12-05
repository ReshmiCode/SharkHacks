import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { Content } from "native-base";
import * as Google from "expo-google-app-auth";
import { IOS_CLIENT_ID, ANDROID_CLIENT_ID } from "../config";

const axios = require("axios").default;

const Login = ({ navigate }) => {
  const createAcc = (user) => {
    console.log(user.id);
    axios
      .get(`http://localhost:8000/api/users/${user.id}`)
      .then(function (res) {
        console.log("User already exists");
        navigate.replace("Root");
      })
      .catch(function (error) {
        if (error.response.status === 404) {
          console.log("User does not exist");
          const newUser = {
            googleID: user.id,
            userName: user.name,
            profilePic: user.photoUrl,
          };

          axios
            .post("http:localhost:8000/api/users", newUser)
            .then(async function (res) {
              console.log("User added");
              navigate.replace("Root");
            })
            .catch(function (error) {
              console.log("Error in adding user", error);
            });
        } else {
          console.log("Error in getting user", error);
        }
      });
  };

  const signInWithGoogle = async () => {
    try {
      const LogInResult = await Google.logInAsync({
        iosClientId: IOS_CLIENT_ID,
        androidClientId: ANDROID_CLIENT_ID,
        scopes: ["profile", "email"],
      });

      if (LogInResult.type === "success") {
        // createAcc(LogInResult.user);
        navigate.replace("UserForm");
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      console.log("Error with login", e);
      return { error: true };
    }
  };

  return (
    <Content>
      <TouchableOpacity onPress={signInWithGoogle}>
        <Image
          source={require("../assets/images/google_sign_in.png")}
          //Image from Google's branding guidlines
          //https://developers.google.com/identity/branding-guidelines
        />
      </TouchableOpacity>
    </Content>
  );
};

export default Login;
