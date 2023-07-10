import { useState } from "react";
import { Text, TouchableOpacity } from "react-native";

function TouchTextComponent({ data}) {
  const [showTranslate, setShowTranslate] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => setShowTranslate((showTranslate) => !showTranslate)}
      style={[
        {
          flexGrow: 1,
          padding: 10,
          borderRadius: 10,
        },
        showTranslate
          ? {
              borderColor: `hsl(${data.clr},30%,50%)`,
              borderWidth: 1,
            }
          : {
              backgroundColor: `hsl(${data.clr},30%,50%)`,
              padding: 11,
            },
      ]}
    >
      <Text
        style={[
          { textAlign: "center" },
          showTranslate
            ? {
                color: `hsl(${data.clr},30%,50%)`,
              }
            : {
                color: "white",
              },
        ]}
      >
        {showTranslate ? data.language : data.translate}
      </Text>
    </TouchableOpacity>
  );
}

export default TouchTextComponent;
