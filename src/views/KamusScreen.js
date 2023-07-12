import { Text, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import TouchTextComponent from "../components/TouchTextComponent";
import { useRoute } from "@react-navigation/native";




const datas = [
  { language: "Mangan", translate: "Makan" },
  { language: "Dolanan", translate: "Bermain" },
  { language: "Ngendi", translate: "Dimana" },
  { language: "Kanggo", translate: "Untuk" },
  { language: "Ngombe", translate: "Minum" },
  { language: "Ngertos", translate: "Mengerti" },
  { language: "Dhewe", translate: "Sendiri" },
  { language: "Nganggo", translate: "Menggunakan" },
  { language: "Golek", translate: "Mencari" },
  { language: "Sliramu", translate: "Anda" },
  { language: "Ngerti", translate: "Paham" },
  { language: "Jaluk", translate: "Meminta" },
  { language: "Manganan", translate: "Makanan" },
  { language: "Wong", translate: "Orang" },
  { language: "Turu", translate: "Turun" },
  { language: "Kepethuk", translate: "Terima" },
  { language: "Gawe", translate: "Bekerja" },
  { language: "Njaluk", translate: "Menginginkan" },
  { language: "Kang", translate: "Yang" },
  { language: "Kaki", translate: "Kaki" },
  { language: "Mbok", translate: "Ibu" },
  { language: "Gawe", translate: "Membuat" },
  { language: "Kerja", translate: "Kerja" },
  { language: "Soko", translate: "Dari" },
  { language: "Wong", translate: "Manusia" },
  { language: "Dadi", translate: "Menjadi" },
  { language: "Ora", translate: "Tidak" },
  { language: "Basa", translate: "Bahasa" },
  { language: "Durasine", translate: "Durasi" },
  { language: "Rumiyin", translate: "Terang" },
  { language: "Ngadeg", translate: "Berdiri" },
  { language: "Uga", translate: "Juga" },
  { language: "Kowe", translate: "Kamu" },
  { language: "Nulis", translate: "Menulis" },
  { language: "Ngendi", translate: "Dimana" },
  { language: "Tulung", translate: "Tolong" },
  { language: "Saka", translate: "Dari" },
  { language: "Neng", translate: "Ke" },
  { language: "Ngrasakne", translate: "Merasakannya" },
  { language: "Dek", translate: "Anak" },
  { language: "Saben", translate: "Setiap" },
  { language: "Wekasan", translate: "Terakhir" },
  { language: "Seneng", translate: "Senang" },
  { language: "Maring", translate: "Ke" },
  { language: "Gendhing", translate: "Lagu" },
  { language: "Ora", translate: "Tidak" },
  { language: "Beda", translate: "Berbeda" },
  { language: "Sudah", translate: "Sudah" },
  { language: "Mulai", translate: "Mulai" },
  { language: "Nyuwun", translate: "Meminta" },
  { language: "Mlaku", translate: "Berjalan" },
  { language: "Wonten", translate: "Ada" },
  { language: "Gawe", translate: "Membuat" },
  { language: "Ana", translate: "Ada" },
  { language: "Maneh", translate: "Lagi" },
  { language: "Ngucapake", translate: "Mengucapkan" },
  { language: "Saben", translate: "Setiap" },
  { language: "Dina", translate: "Hari" },
  { language: "Kapisan", translate: "Terakhir" },
  { language: "Gawe", translate: "Mengerjakan" },
  { language: "Ora", translate: "Tidak" },
  { language: "Jenenge", translate: "Namanya" },
  { language: "Badhe", translate: "Akan" },
  { language: "Kepengin", translate: "Ingin" },
  { language: "Kembang", translate: "Bunga" },
  { language: "Apa", translate: "Apa" },
  { language: "Ngangeni", translate: "Menginginkan" },
  { language: "Pikiran", translate: "Pikiran" },
  { language: "Sing", translate: "Yang" },
  { language: "Mundak", translate: "Lalu" },
  { language: "Urip", translate: "Hidup" },
  { language: "Pergi", translate: "Pergi" },
  { language: "Takon", translate: "Tanya" },
  { language: "Buka", translate: "Buka" },
  { language: "Ngulon", translate: "Timur" },
  { language: "Mlebu", translate: "Masuk" },
  { language: "Ing", translate: "Di" },
  { language: "Mandheg", translate: "Berhenti" },
  { language: "Tresna", translate: "Cinta" },
  { language: "Kanggo", translate: "Untuk" },
  { language: "Jalaran", translate: "Karena" },
  { language: "Sampun", translate: "Telah" },
  { language: "Larang", translate: "Larang" },
  { language: "Suwun", translate: "Terima kasih" },
  { language: "Bentar", translate: "Sebentar" },
  { language: "Sak", translate: "Satu" },
  { language: "Garing", translate: "Rapuh" },
  { language: "Nora", translate: "Bukan" },
  { language: "Wates", translate: "Tangan" },
  { language: "Sok", translate: "Sering" },
  { language: "Telung", translate: "Tiga" },
  { language: "Mati", translate: "Mati" },
  { language: "Nggawe", translate: "Membuat" },
  { language: "Saben", translate: "Setiap" },
  { language: "Sewu", translate: "Seribu" },
  { language: "Kekasih", translate: "Kekasih" },
  { language: "Wengi", translate: "Malam" },
  { language: "Lungguh", translate: "Tunggu" },
  { language: "Kowe", translate: "Kamu" },
  { language: "Mangan", translate: "Makan" },
  { language: "Dolanan", translate: "Bermain" },
  { language: "Ngendi", translate: "Dimana" },
  { language: "Kanggo", translate: "Untuk" },
  { language: "Ngombe", translate: "Minum" },
  { language: "Ngertos", translate: "Mengerti" },
  { language: "Dhewe", translate: "Sendiri" },
  { language: "Nganggo", translate: "Menggunakan" },
  { language: "Golek", translate: "Mencari" },
  { language: "Sliramu", translate: "Anda" },
  { language: "Ngerti", translate: "Paham" },
  { language: "Jaluk", translate: "Meminta" },
  { language: "Manganan", translate: "Makanan" },
  { language: "Wong", translate: "Orang" },
  { language: "Turu", translate: "Turun" },
  { language: "Kepethuk", translate: "Terima" },
  { language: "Gawe", translate: "Bekerja" },
  { language: "Njaluk", translate: "Menginginkan" },
  { language: "Kang", translate: "Yang" },
  { language: "Kaki", translate: "Kaki" },
  { language: "Mbok", translate: "Ibu" },
  { language: "Gawe", translate: "Membuat" },
  { language: "Kerja", translate: "Kerja" },
  { language: "Soko", translate: "Dari" },
  { language: "Wong", translate: "Manusia" },
  { language: "Dadi", translate: "Menjadi" },
  { language: "Ora", translate: "Tidak" },
  { language: "Basa", translate: "Bahasa" },
  { language: "Durasine", translate: "Durasi" },
  { language: "Rumiyin", translate: "Terang" },
  { language: "Ngadeg", translate: "Berdiri" },
  { language: "Uga", translate: "Juga" },
  { language: "Kowe", translate: "Kamu" },
  { language: "Nulis", translate: "Menulis" },
  { language: "Ngendi", translate: "Dimana" },
  { language: "Tulung", translate: "Tolong" },
  { language: "Saka", translate: "Dari" },
  { language: "Neng", translate: "Ke" },
  { language: "Ngrasakne", translate: "Merasakannya" },
  { language: "Dek", translate: "Anak" },
  { language: "Saben", translate: "Setiap" },
  { language: "Wekasan", translate: "Terakhir" },
  { language: "Seneng", translate: "Senang" },
  { language: "Maring", translate: "Ke" },
  { language: "Gendhing", translate: "Lagu" },
  { language: "Ora", translate: "Tidak" },
  { language: "Beda", translate: "Berbeda" },
  { language: "Sudah", translate: "Sudah" },
  { language: "Mulai", translate: "Mulai" },
  { language: "Nyuwun", translate: "Meminta" },
  { language: "Mlaku", translate: "Berjalan" },
  { language: "Wonten", translate: "Ada" },
  { language: "Gawe", translate: "Membuat" },
  { language: "Ana", translate: "Ada" },
  { language: "Maneh", translate: "Lagi" },
  { language: "Ngucapake", translate: "Mengucapkan" },
  { language: "Saben", translate: "Setiap" },
  { language: "Dina", translate: "Hari" },
  { language: "Kapisan", translate: "Terakhir" },
  { language: "Gawe", translate: "Mengerjakan" },
  { language: "Ora", translate: "Tidak" },
  { language: "Jenenge", translate: "Namanya" },
  { language: "Badhe", translate: "Akan" },
  { language: "Kepengin", translate: "Ingin" },
  { language: "Kembang", translate: "Bunga" },
  { language: "Apa", translate: "Apa" },
  { language: "Ngangeni", translate: "Menginginkan" },
  { language: "Pikiran", translate: "Pikiran" },
  { language: "Sing", translate: "Yang" },
  { language: "Mundak", translate: "Lalu" },
  { language: "Urip", translate: "Hidup" },
  { language: "Pergi", translate: "Pergi" },
  { language: "Takon", translate: "Tanya" },
  { language: "Buka", translate: "Buka" },
  { language: "Ngulon", translate: "Timur" },
  { language: "Mlebu", translate: "Masuk" },
  { language: "Ing", translate: "Di" },
  { language: "Mandheg", translate: "Berhenti" },
  { language: "Tresna", translate: "Cinta" },
  { language: "Kanggo", translate: "Untuk" },
  { language: "Jalaran", translate: "Karena" },
  { language: "Sampun", translate: "Telah" },
  { language: "Larang", translate: "Larang" },
  { language: "Suwun", translate: "Terima kasih" }
];
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
