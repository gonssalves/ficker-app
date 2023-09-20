import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FormContainer5 from "./FormContainer5";
import ContainerCard1 from "./ContainerCard1";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const PageEntrar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pageEntrar}>
      <View style={styles.formLogin}>
        <View style={styles.ttuloDaPgina}>
          <Text style={styles.entrar}>Entrar</Text>
        </View>
        <FormContainer5
          nameInputEmailInput="E-mail"
          propTextAlign="center"
          propJustifyContent="center"
          propWidth={58}
        />
        <View style={styles.campoSenha}>
          <Text style={[styles.senha, styles.senhaFlexBox]}>Senha</Text>
          <View style={[styles.campoSenhaChild, styles.cadastrarSePosition]} />
        </View>
        <Pressable
          style={styles.botoEntrar}
          onPress={() => navigation.navigate("HomePage")}
        >
          <View style={styles.background} />
          <Text style={[styles.entrar1, styles.senhaFlexBox]}>Entrar</Text>
        </Pressable>
        <View style={styles.links}>
          <Pressable
            style={styles.esqueceuASenhaContainer}
            onPress={() => navigation.navigate("PageEsqueceuASenha")}
          >
            <Text style={[styles.esqueceuASenha, styles.cadastrarSeTypo]}>
              Esqueceu a senha?
            </Text>
          </Pressable>
          <Text style={[styles.cadastrarSe, styles.cadastrarSeTypo]}>
            Cadastrar-se?
          </Text>
        </View>
      </View>
      <ContainerCard1 onLogoUIHUTPress={() => navigation.navigate("Landing")} />
    </View>
  );
};

const styles = StyleSheet.create({
  senhaFlexBox: {
    justifyContent: "center",
    display: "flex",
    height: 33,
    textAlign: "center",
    alignItems: "center",
    position: "absolute",
  },
  cadastrarSePosition: {
    left: 0,
    position: "absolute",
  },
  cadastrarSeTypo: {
    fontSize: FontSize.text_size,
    justifyContent: "center",
    display: "flex",
    fontFamily: FontFamily.regular12,
    textAlign: "center",
    color: Color.colorBlack,
    width: 313,
    alignItems: "center",
  },
  entrar: {
    fontSize: FontSize.bold25_size,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.medium14,
    fontWeight: "500",
    left: 0,
    top: 0,
    height: 67,
    width: 313,
    position: "absolute",
  },
  ttuloDaPgina: {
    height: 67,
    width: 313,
  },
  senha: {
    fontSize: FontSize.size_base,
    width: 58,
    height: 33,
    fontFamily: FontFamily.regular12,
    justifyContent: "center",
    display: "flex",
    left: 1,
    color: Color.colorBlack,
    top: 0,
  },
  campoSenhaChild: {
    top: 33,
    backgroundColor: Color.colorWhitesmoke_100,
    borderStyle: "solid",
    borderColor: Color.colorAliceblue_100,
    borderBottomWidth: 1,
    height: 53,
    opacity: 0.75,
    width: 412,
    borderRadius: Border.br_xs,
    left: 0,
  },
  campoSenha: {
    height: 85,
    marginTop: 20,
    width: 412,
  },
  background: {
    left: 11,
    backgroundColor: Color.colorCrimson_100,
    width: 291,
    height: 52,
    top: 0,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  entrar1: {
    top: 8,
    fontSize: FontSize.semibold18_size,
    color: Color.neutral10,
    height: 33,
    justifyContent: "center",
    display: "flex",
    fontFamily: FontFamily.medium14,
    fontWeight: "500",
    left: 0,
    width: 313,
  },
  botoEntrar: {
    height: 52,
    marginTop: 20,
    width: 313,
  },
  esqueceuASenha: {
    height: 33,
  },
  esqueceuASenhaContainer: {
    left: 1,
    top: 0,
    position: "absolute",
  },
  cadastrarSe: {
    top: 29,
    height: 17,
    left: 0,
    position: "absolute",
  },
  links: {
    width: 314,
    height: 46,
    marginTop: 20,
  },
  formLogin: {
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
    position: "absolute",
    borderRadius: Border.br_xs,
  },
  pageEntrar: {
    backgroundColor: Color.colorWhitesmoke_200,
    width: 1440,
    height: 1024,
    overflow: "hidden",
  },
});

export default PageEntrar;
