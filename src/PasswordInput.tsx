import React from "react";
import {
  StyleProp,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";

interface PropTypes extends TextInputProps {
  containerStyle: StyleProp<ViewStyle>;
}

const PasswordInput: React.FC<PropTypes> = ({
  containerStyle,
  ...textInputProps
}) => {
  return (
    <View style={containerStyle}>
      <TextInput {...textInputProps} />
    </View>
  );
};

export default PasswordInput;
