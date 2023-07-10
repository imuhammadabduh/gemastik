import { TouchableOpacity } from "react-native";
import ParagraphComponent from "./ParagraphComponent";

function ItemSusunKata({ TextTouch, data }) {
  const random = Math.floor(Math.random() * 360) + 1;
  return (
    <TouchableOpacity
      style={{
        borderColor: `hsl(${random},30%,50%)`,
        borderBottomWidth: 2,
        borderTopWidth: 2,
        paddingHorizontal: 20,
        paddingVertical: 3,
        borderRadius: 7,
      }}
      onPress={() => TextTouch(data)}
    >
      <ParagraphComponent style={{ color: `hsl(${random},30%,50%)` }}>
        {data}
      </ParagraphComponent>
    </TouchableOpacity>
  );
}

export default ItemSusunKata;
