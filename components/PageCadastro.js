import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FormContainer5 from "./FormContainer5";
import ContainerCard1 from "./ContainerCard1";
import { Border, FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

const PageCadastro = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pageCadastro}>
      <View style={[styles.formCadastro, styles.backgroundLayout]}>
        <View style={styles.ttuloDaPgina}>
          <Text style={[styles.cadastro, styles.cadastroTypo]}>Cadastro</Text>
        </View>
        <FormContainer5 nameInputEmailInput="Nome" />
        <FormContainer5
          nameInputEmailInput="E-mail"
          propTextAlign="left"
          propJustifyContent="unset"
          propWidth={58}
        />
        <FormContainer5
          nameInputEmailInput="Senha"
          propTextAlign="left"
          propJustifyContent="unset"
          propWidth={58}
        />
        <FormContainer5
          nameInputEmailInput="Confirma senha"
          propTextAlign="left"
          propJustifyContent="unset"
          propWidth={121}
        />
        <Pressable
          style={styles.botoCadastrar}
          onPress={() => navigation.navigate("HomePageEmpity")}
        >
          <View style={[styles.background, styles.backgroundLayout]} />
          <Text style={[styles.cadastrar, styles.cadastroTypo]}>Cadastrar</Text>
        </Pressable>
      </View>
      <ContainerCard1 onLogoUIHUTPress={() => navigation.navigate("Landing")} />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundLayout: {
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  cadastroTypo: {
    textAlign: "center",
    fontFamily: FontFamily.medium14,
    fontWeight: "500",
    left: 0,
    width: 313,
    position: "absolute",
  },
  cadastro: {
    fontSize: FontSize.bold25_size,
    color: Color.colorBlack,
    top: 0,
    height: 67,
  },
  ttuloDaPgina: {
    height: 67,
    width: 313,
  },
  background: {
    left: 11,
    backgroundColor: Color.colorCrimson_100,
    width: 291,
    height: 52,
    top: 0,
  },
  cadastrar: {
    top: 8,
    fontSize: FontSize.semibold18_size,
    color: Color.neutral10,
    display: "flex",
    justifyContent: "center",
    height: 33,
    alignItems: "center",
  },
  botoCadastrar: {
    marginTop: 20,
    height: 52,
    width: 313,
  },
  formCadastro: {
    top: 130,
    left: 462,
    backgroundColor: Color.neutral10,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 516,
    paddingHorizontal: Padding.p_53xl,
    paddingVertical: Padding.p_14xl,
    alignItems: "center",
  },
  pageCadastro: {
    backgroundColor: Color.colorWhitesmoke_200,
    width: 1440,
    height: 1024,
    overflow: "hidden",
  },
});

export default PageCadastro;
