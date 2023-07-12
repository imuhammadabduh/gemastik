import { Text, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import TouchTextComponent from "../components/TouchTextComponent";
import { useRoute } from "@react-navigation/native";




const datas = [{
  language: "kulo",
  translate: "aku"
}, {
  language: "koe",
  translate: "kamu"
}, {
  language: "dewe",
  translate: "kami"
}, {
  language: "mangan",
  translate: "Transcof"
}, {
  language: "Holdlamis",
  translate: "Zontrax"
}, {
  language: "Sonsing",
  translate: "Sonsing"
}, {
  language: "Toughjoyfax",
  translate: "Aerified"
}, {
  language: "Bytecard",
  translate: "Subin"
}, {
  language: "Matsoft",
  translate: "Prodder"
}, {
  language: "Konklux",
  translate: "Pannier"
}, {
  language: "Gembucket",
  translate: "Aerified"
}, {
  language: "Kanlam",
  translate: "Subin"
}, {
  language: "Vagram",
  translate: "Bamity"
}, {
  language: "Holdlamis",
  translate: "Keylex"
}, {
  language: "Viva",
  translate: "Voltsillam"
}, {
  language: "Transcof",
  translate: "Alpha"
}, {
  language: "Daltfresh",
  translate: "Bytecard"
}, {
  language: "Sub-Ex",
  translate: "Redhold"
}, {
  language: "Bytecard",
  translate: "Job"
}, {
  language: "Cookley",
  translate: "Zoolab"
}, {
  language: "Tempsoft",
  translate: "Fixflex"
}, {
  language: "Voltsillam",
  translate: "Zamit"
}, {
  language: "Sonsing",
  translate: "Bitchip"
}, {
  language: "Tampflex",
  translate: "Tampflex"
}, {
  language: "Flexidy",
  translate: "Sonair"
}, {
  language: "Biodex",
  translate: "Ventosanzap"
}, {
  language: "Rank",
  translate: "Ventosanzap"
}, {
  language: "Sonsing",
  translate: "Bytecard"
}, {
  language: "Job",
  translate: "Otcom"
}, {
  language: "Otcom",
  translate: "Domainer"
}, {
  language: "Matsoft",
  translate: "Treeflex"
}, {
  language: "Ronstring",
  translate: "Duobam"
}, {
  language: "Greenlam",
  translate: "Sub-Ex"
}, {
  language: "Home Ing",
  translate: "Sub-Ex"
}, {
  language: "Redhold",
  translate: "Voyatouch"
}, {
  language: "Kanlam",
  translate: "Fixflex"
}, {
  language: "Latlux",
  translate: "Sub-Ex"
}, {
  language: "Veribet",
  translate: "Flowdesk"
}, {
  language: "Toughjoyfax",
  translate: "Daltfresh"
}, {
  language: "Lotlux",
  translate: "Namfix"
}, {
  language: "It",
  translate: "Zathin"
}, {
  language: "Gembucket",
  translate: "Lotstring"
}, {
  language: "Home Ing",
  translate: "Keylex"
}, {
  language: "Zaam-Dox",
  translate: "Namfix"
}, {
  language: "Redhold",
  translate: "Transcof"
}, {
  language: "Voyatouch",
  translate: "Alphazap"
}, {
  language: "Bytecard",
  translate: "Temp"
}, {
  language: "Duobam",
  translate: "Zathin"
}, {
  language: "Cardguard",
  translate: "Bitchip"
}, {
  language: "Flexidy",
  translate: "Rank"
}, {
  language: "Keylex",
  translate: "Bytecard"
}, {
  language: "Zathin",
  translate: "Domainer"
}, {
  language: "Stim",
  translate: "Domainer"
}, {
  language: "Viva",
  translate: "Regrant"
}, {
  language: "Zamit",
  translate: "Tampflex"
}, {
  language: "Gembucket",
  translate: "Tin"
}, {
  language: "Tresom",
  translate: "Overhold"
}, {
  language: "Sonsing",
  translate: "Zamit"
}, {
  language: "Tres-Zap",
  translate: "Duobam"
}, {
  language: "Tresom",
  translate: "Home Ing"
}, {
  language: "Veribet",
  translate: "Sub-Ex"
}, {
  language: "Alpha",
  translate: "Bitchip"
}, {
  language: "Rank",
  translate: "Fixflex"
}, {
  language: "Tresom",
  translate: "Tin"
}, {
  language: "Solarbreeze",
  translate: "Redhold"
}, {
  language: "Treeflex",
  translate: "Viva"
}, {
  language: "Regrant",
  translate: "Veribet"
}, {
  language: "Konklab",
  translate: "Prodder"
}, {
  language: "Opela",
  translate: "Viva"
}, {
  language: "Aerified",
  translate: "Duobam"
}, {
  language: "Wrapsafe",
  translate: "Cardify"
}, {
  language: "Veribet",
  translate: "Cookley"
}, {
  language: "Tresom",
  translate: "Treeflex"
}, {
  language: "Stringtough",
  translate: "Redhold"
}, {
  language: "Redhold",
  translate: "It"
}, {
  language: "Zamit",
  translate: "Flexidy"
}, {
  language: "Fixflex",
  translate: "Fix San"
}, {
  language: "Toughjoyfax",
  translate: "Y-Solowarm"
}, {
  language: "Kanlam",
  translate: "Vagram"
}, {
  language: "Sonair",
  translate: "Tres-Zap"
}, {
  language: "Zontrax",
  translate: "Redhold"
}, {
  language: "Sub-Ex",
  translate: "Lotstring"
}, {
  language: "Treeflex",
  translate: "Stronghold"
}, {
  language: "Transcof",
  translate: "Bitchip"
}, {
  language: "Ronstring",
  translate: "Domainer"
}, {
  language: "Voltsillam",
  translate: "Asoka"
}, {
  language: "Duobam",
  translate: "Biodex"
}, {
  language: "Voltsillam",
  translate: "Tres-Zap"
}, {
  language: "Daltfresh",
  translate: "Treeflex"
}, {
  language: "Bytecard",
  translate: "Job"
}, {
  language: "Fixflex",
  translate: "Zamit"
}, {
  language: "Flexidy",
  translate: "Tempsoft"
}, {
  language: "Daltfresh",
  translate: "Latlux"
}, {
  language: "Duobam",
  translate: "Zaam-Dox"
}, {
  language: "Regrant",
  translate: "Home Ing"
}, {
  language: "Matsoft",
  translate: "Flowdesk"
}, {
  language: "Alphazap",
  translate: "Cookley"
}, {
  language: "Bitchip",
  translate: "Cardguard"
}, {
  language: "Opela",
  translate: "Sonsing"
}, {
  language: "Duobam",
  translate: "Zaam-Dox"
}]
for (let index = 0; index < datas.length; index++) {
  const random = Math.floor(Math.random() * 360) + 1;
  datas[index] = { ...datas[index], clr: random };
}

function KamusScreen({ navigation }) {
  const [search, setSearch] = React.useState("");
  const searchArray = (arr, regex) => {
    const regexPattern = new RegExp(regex, "i"); // 'i' flag for case-insensitive search
    return arr.filter((str) => regexPattern.test(str.translate));
  };
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        onChangeText: (event) => setSearch(event.nativeEvent.text),
      },
    });
  }, [navigation]);
  const searchResult = searchArray(datas, search);
  // console.log(search, searchResult);
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          flexWrap: "wrap",
          padding: 10,
          gap: 10,
        }}
      >
        {searchResult.map((data, index) => {
          return <TouchTextComponent key={index} data={data} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
export default KamusScreen;
