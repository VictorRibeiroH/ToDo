import { Pressable, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";

interface CheckBoxProps {
  isChecked: boolean;
  onPress: () => void;
}

const Checkbox = (props: CheckBoxProps) => {
  const { onPress } = props;

  const name = props.isChecked
    ? "checkbox-marked-outline"
    : "checkbox-blank-outline";

  return (
    <Pressable onPress={onPress}>
      <MaterialCommunityIcons name={name} size={24} color="white" />
    </Pressable>
  );
};

export default Checkbox;
