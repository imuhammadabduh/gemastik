import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";

const data =
  "In the example above, we are using the map function to iterate over each item in the dataArray. For each item, we create a View component with a unique key prop (in this case, we use the index as the key). Inside the View, we render a Text component with the value of the current item. This code will create a ScrollView with all the items rendered in a vertical list. You can customize the content of each item based on your specific requirements. Remember to import the necessary components and adjust the code according to your project's structure and styling needs.".split(
    " "
  );

export default function KamusScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        margin: 10,
      }}
    >
      <ScrollView
        // scrollEnabled={true}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 10,
        }}
      >
        {data.map((data, index) => (
          // const randomNumber = ;

          <TouchableOpacity
            key={index}
            style={{
              flexGrow: 1,
              backgroundColor: `hsl(${
                Math.floor(Math.random() * 360) + 1
              },30%,50%)`,
              padding: 10,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
              }}
            >
              {data}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
