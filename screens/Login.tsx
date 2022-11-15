import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

// @ts-ignore
const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const openRegisterScreen = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter your email"
        label="Email"
        leftIcon={{ type: "material", name: "email" }}
        value={email}
        onChangeText={(text) => setEmail(text)}
        autoCompleteType={undefined}
      />
      <Input
        placeholder="Enter your password"
        label="Password"
        leftIcon={{ type: "material", name: "lock" }}
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        autoCompleteType={undefined}
      />
      <Button title="sign in" style={styles.button} />
      <Button
        title="register"
        style={styles.button}
        onPress={openRegisterScreen}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    marginTop: 100,
  },
  button: {
    width: 370,
    marginTop: 10,
  },
});

export default Login;
