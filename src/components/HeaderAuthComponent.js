import { View, Image, Keyboard } from "react-native";
import React, { useEffect, useState } from "react";
import TitleComponent from "./TitleComponent";

const HeaderAuthComponent = ({ source, title }) => {
  const [kbd, setKbd] = useState(false);
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKbd(true);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKbd(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  return (
    <View
      style={[
        {
          width: "100%",
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent: "space-between",
        },
        kbd
          ? {
              flexDirection: "row-reverse",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }
          : {
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            },
      ]}
    >
      <Image
        resizeMode="contain"
        source={source}
        style={[
          kbd
            ? { height: 100, width: 100 }
            : { height: 250, width: 250, marginBottom: 16 },
        ]}
      />
      <TitleComponent title={title} />
    </View>
  );
};

export default HeaderAuthComponent;
