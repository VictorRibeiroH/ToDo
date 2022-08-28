import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const onSubmit = () => {
    // submit
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Seu nome"
        value={name}
        onChangeText={setName}
        style={{
          color: "white",
          fontSize: 18,
          width: "100%",
          marginVertical: 25,
        }}
      />

      <TextInput
        placeholder="seuemail@email.com"
        value={email}
        onChangeText={setEmail}
        style={{
          color: "white",
          fontSize: 18,
          width: "100%",
          marginVertical: 25,
        }}
      />

      <TextInput
        placeholder="sua senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{
          color: "white",
          fontSize: 18,
          width: "100%",
          marginVertical: 25,
        }}
      />

      <Pressable
        onPress={onSubmit}
        style={{
          backgroundColor: "#e33062",
          height: 50,
          borderRadius: 5,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 30,
        }}
      >
        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
          Crie sua conta
        </Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate("SignIn")}
        style={{
          height: 50,
          borderRadius: 5,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 30,
        }}
      >
        <Text style={{ color: "#e33062", fontSize: 18, fontWeight: "bold" }}>
          Já tem uma conta? Login
        </Text>
      </Pressable>
    </View>
  );
};

export default SignUpScreen;
