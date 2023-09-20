import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const AppInserirDadosBancrios = () => {
  return (
    <View style={styles.appInserirDadosBancrios}>
      <View style={[styles.componentParent, styles.componentParentLayout1]}>
        <View style={[styles.component, styles.componentLayout1]}>
          <View style={styles.componentChild} />
        </View>
        <Text style={[styles.cvv, styles.cvvTypo]}>CVV</Text>
      </View>
      <Text style={styles.inserirDadosDoContainer}>
        <Text style={styles.inserirDadosDo}>{`Inserir dados do banco `}</Text>
        <Text style={styles.nubank}>Nubank</Text>
      </Text>
      <View style={styles.componentGroup}>
        <View style={styles.componentShadowBox}>
          <View style={[styles.componentItem, styles.componentPosition]} />
        </View>
        <Image
          style={styles.image13Icon}
          contentFit="cover"
          source={require("../assets/image-13.png")}
        />
        <Text style={styles.paypal}>Paypal</Text>
      </View>
      <View style={[styles.componentContainer, styles.componentLayout]}>
        <View style={[styles.component2, styles.componentLayout]}>
          <View style={[styles.componentInner, styles.componentPosition]} />
        </View>
        <Image
          style={[styles.downloadRemovebgPreview1Icon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/downloadremovebgpreview-1.png")}
        />
        <Text style={[styles.mastercard, styles.visaTypo]}>Mastercard</Text>
      </View>
      <View style={[styles.groupView, styles.componentLayout]}>
        <View style={styles.componentShadowBox}>
          <View style={[styles.componentItem, styles.componentPosition]} />
        </View>
        <Image
          style={[styles.image14Icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/image-14.png")}
        />
        <Text style={[styles.visa, styles.visaTypo]}>Visa</Text>
      </View>
      <View style={[styles.botoEntrar, styles.botoEntrarLayout]}>
        <View style={[styles.background, styles.botoEntrarLayout]} />
        <Text style={styles.conectarConta}>conectar conta</Text>
      </View>
      <View style={[styles.componentParent1, styles.componentParentLayout]}>
        <View style={[styles.component4, styles.componentParentLayout]}>
          <View style={styles.componentChild} />
        </View>
        <Text style={[styles.kanyeEast, styles.cvvTypo]}>Kanye East</Text>
        <Image
          style={[styles.image15Icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/image-15.png")}
        />
      </View>
      <View style={[styles.componentParent2, styles.componentParentLayout]}>
        <View style={[styles.component4, styles.componentParentLayout]}>
          <View style={styles.componentChild} />
        </View>
        <Text style={[styles.kanyeEast, styles.cvvTypo]}>
          1222 3546 9985 1552
        </Text>
        <Image
          style={[styles.image16Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-16.png")}
        />
        <Image
          style={[styles.image17Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-16.png")}
        />
      </View>
      <View style={[styles.componentParent3, styles.componentParentLayout1]}>
        <View style={[styles.component, styles.componentLayout1]}>
          <View style={styles.componentChild} />
        </View>
        <Text style={[styles.text1, styles.cvvTypo]}>11/06/2023</Text>
        <Image
          style={[styles.image17Icon1, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/image-17.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  componentParentLayout1: {
    width: 143,
    position: "absolute",
  },
  componentLayout1: {
    borderRadius: Border.br_31xl,
    left: 0,
    top: 0,
    height: 52,
  },
  cvvTypo: {
    textAlign: "justify",
    color: Color.colorBlack,
    fontFamily: FontFamily.dMSansRegular,
    fontSize: FontSize.text_size,
    top: 16,
    position: "absolute",
  },
  componentPosition: {
    backgroundColor: Color.colorWhitesmoke_300,
    opacity: 0.75,
    borderBottomWidth: 1,
    borderColor: Color.colorAliceblue_100,
    borderStyle: "solid",
    borderRadius: Border.br_xs,
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  componentLayout: {
    height: 29,
    position: "absolute",
  },
  iconLayout2: {
    width: 24,
    position: "absolute",
  },
  visaTypo: {
    left: 35,
    top: 9,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
    textAlign: "justify",
    color: Color.colorBlack,
    position: "absolute",
  },
  iconLayout1: {
    width: 27,
    height: 27,
    position: "absolute",
  },
  botoEntrarLayout: {
    height: 48,
    position: "absolute",
  },
  componentParentLayout: {
    width: 317,
    position: "absolute",
  },
  iconLayout: {
    height: 30,
    width: 30,
    position: "absolute",
  },
  componentChild: {
    height: "101.92%",
    bottom: "-1.92%",
    backgroundColor: Color.colorGainsboro_100,
    opacity: 0.75,
    borderBottomWidth: 1,
    borderColor: Color.colorAliceblue_100,
    borderStyle: "solid",
    left: "0%",
    right: "0%",
    top: "0%",
    borderRadius: Border.br_xs,
    position: "absolute",
    width: "100%",
  },
  component: {
    width: 143,
    position: "absolute",
  },
  cvv: {
    left: 53,
    width: 37,
  },
  componentParent: {
    left: 210,
    height: 52,
    top: 473,
    width: 143,
  },
  inserirDadosDo: {
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
  },
  nubank: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  inserirDadosDoContainer: {
    top: 66,
    fontSize: FontSize.size_16xl,
    color: Color.colorCrimson_100,
    textAlign: "left",
    width: 305,
    left: 43,
    position: "absolute",
  },
  componentItem: {
    height: "103.7%",
    bottom: "-3.7%",
  },
  componentShadowBox: {
    width: 67,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: 27,
    left: 0,
    top: 0,
    position: "absolute",
  },
  image13Icon: {
    top: 8,
    left: 8,
    width: 14,
    height: 16,
    position: "absolute",
  },
  paypal: {
    top: 7,
    left: 26,
    width: 54,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
    textAlign: "justify",
    color: Color.colorBlack,
    position: "absolute",
  },
  componentGroup: {
    left: 54,
    width: 80,
    height: 27,
    top: 233,
    position: "absolute",
  },
  componentInner: {
    height: "103.45%",
    bottom: "-3.45%",
  },
  component2: {
    width: 98,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: 29,
    left: 0,
    top: 0,
  },
  downloadRemovebgPreview1Icon: {
    top: 5,
    left: 5,
    height: 24,
  },
  mastercard: {
    width: 69,
  },
  componentContainer: {
    top: 232,
    left: 134,
    width: 104,
  },
  image14Icon: {
    top: 2,
    left: 4,
  },
  visa: {
    width: 54,
  },
  groupView: {
    left: 248,
    width: 89,
    top: 233,
    height: 29,
  },
  background: {
    left: 67,
    backgroundColor: Color.colorCrimson_100,
    width: 170,
    borderRadius: Border.br_xs,
    height: 48,
    top: 0,
  },
  conectarConta: {
    fontSize: FontSize.semibold18_size,
    color: Color.neutral10,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 31,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    width: 303,
    top: 9,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    left: 0,
    position: "absolute",
  },
  botoEntrar: {
    top: 618,
    width: 303,
    left: 43,
  },
  component4: {
    borderRadius: Border.br_31xl,
    left: 0,
    top: 0,
    height: 52,
  },
  kanyeEast: {
    left: 18,
    width: 280,
  },
  image15Icon: {
    top: 12,
    left: 274,
  },
  componentParent1: {
    top: 309,
    left: 36,
    height: 52,
  },
  image16Icon: {
    top: 11,
    left: 272,
  },
  image17Icon: {
    top: 93,
    left: 189,
  },
  componentParent2: {
    top: 391,
    height: 123,
    left: 36,
  },
  text1: {
    left: 9,
    width: 83,
  },
  image17Icon1: {
    top: 15,
    left: 109,
    height: 22,
  },
  componentParent3: {
    left: 36,
    height: 52,
    top: 473,
    width: 143,
  },
  appInserirDadosBancrios: {
    backgroundColor: Color.neutral10,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default AppInserirDadosBancrios;
