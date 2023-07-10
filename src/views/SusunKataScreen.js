import { View } from "react-native";
import React, { useEffect, useState } from "react";
import BoxButtonComponent from "../components/BoxButtonComponent";
import ParagraphComponent from "../components/ParagraphComponent";
import TitleComponent from "../components/TitleComponent";
import ItemSusunKata from "../components/ItemSusunKataComponent";
const datas = {
  languageSentence: "saya makan nasi sayur dengan lauk ikan",
  translateSentence: "aku mangan sego sayor karo laok iwak",
};
let dataTranslateSentenceToArray = datas.translateSentence.split(" ");
const SusunKataScreen = () => {
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  const randomArr = shuffleArray(datas.translateSentence.split(" "));
  const [dataTranslateSentence, setDataTranslateSentence] = useState(randomArr);
  const [dataArrangeWords, setDataArrangeWords] = useState([]);
  function TextTouch(data) {
    setDataTranslateSentence(
      dataTranslateSentence.filter((res) => res !== data)
    );
    setDataArrangeWords((dataArrangeWords) => [...dataArrangeWords, data]);
  }
  function TextTouch2(data) {
    setDataArrangeWords(dataArrangeWords.filter((res) => res !== data));
    setDataTranslateSentence((dataArrangeWords) => [...dataArrangeWords, data]);
  }
  return (
    <View style={{ marginHorizontal: 10 }}>
      <TitleComponent size={18} position="left" title={"Ikuti:"} />
      <ParagraphComponent style={{ fontSize: 16, textAlign: "center" }}>
        {datas.languageSentence}
      </ParagraphComponent>

      {dataArrangeWords.length === 0 ? null : (
        <TitleComponent size={18} position="left" title={"Susun Kalimat:"} />
      )}
      <View
        style={{
          flexGrow: 1,
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 10,
          justifyContent: "center",
        }}
      >
        {dataArrangeWords.map((data, index) => (
          <ItemSusunKata key={index} TextTouch={TextTouch2} data={data} />
        ))}
      </View>
      {dataTranslateSentence.length === 0 ? null : (
        <TitleComponent size={18} position="left" title={"Susun Kata-kata:"} />
      )}

      <View
        style={{
          flexGrow: 1,
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 10,
          justifyContent: "center",
          marginBottom: 10,
        }}
      >
        {dataTranslateSentence.map((data, index) => (
          <ItemSusunKata key={index} TextTouch={TextTouch} data={data} />
        ))}
      </View>
      <BoxButtonComponent
        onPress={() => {
          if (
            dataArrangeWords.toString() ===
            dataTranslateSentenceToArray.toString()
          ) {
            alert("Selamat, Anda benar!");
          } else {
            console.log(dataTranslateSentenceToArray.toString());
            alert("Maaf, Anda Salah!");
          }
        }}
        title={"Lihat Hasil"}
      />
    </View>
  );
};

export default SusunKataScreen;
