import { Image, ImageSourcePropType, Text, View } from "react-native";

type CardImagemProps = {
  imagem: ImageSourcePropType;
  titulo: string;
  descricao: string;
};

export default function CardImagem({
  imagem,
  titulo,
  descricao,
}: CardImagemProps) {
  return (
    <>
      <Image source={imagem} style={{ height: 380, width: 350 }} />

      <View style={{ paddingTop: 10, gap: 5 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{titulo}</Text>
        <Text style={{ fontSize: 14, fontWeight: "regular" }}>{descricao}</Text>
      </View>
    </>
  );
}
