import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Padding, Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const CardContainer = ({
  onComponent11Press,
  onComponent4Press,
  onComponent14Press,
  onComponent12Press,
  onComponent13Press,
  onComponent15Press,
}) => {
  return (
    <View style={styles.component12Wrapper}>
      <View>
        <Pressable
          style={[styles.component11, styles.componentSpaceBlock]}
          onPress={onComponent11Press}
        >
          <View style={styles.despesas1Parent}>
            <Image
              style={styles.despesas1Icon}
              contentFit="cover"
              source={require("../assets/despesas-1.png")}
            />
            <Text style={[styles.incio, styles.incioFlexBox]}>Início</Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.component4, styles.componentSpaceBlock]}
          onPress={onComponent4Press}
        >
          <View style={styles.despesas1Parent}>
            <Image
              style={styles.despesas1Icon}
              contentFit="cover"
              source={require("../assets/bolsadedinheiro-1.png")}
            />
            <Text style={[styles.entradas, styles.incioFlexBox]}>Entradas</Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.component4, styles.componentSpaceBlock]}
          onPress={onComponent14Press}
        >
          <View style={styles.despesas1Parent}>
            <Image
              style={styles.despesas1Icon}
              contentFit="cover"
              source={require("../assets/despesas-11.png")}
            />
            <Text style={[styles.entradas, styles.incioFlexBox]}>Saídas</Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.component4, styles.componentSpaceBlock]}
          onPress={onComponent12Press}
        >
          <View style={styles.despesas1Parent}>
            <Image
              style={styles.despesas1Icon}
              contentFit="cover"
              source={require("../assets/cofrinho-1.png")}
            />
            <Text style={[styles.entradas, styles.incioFlexBox]}>Cofrinho</Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.component4, styles.componentSpaceBlock]}
          onPress={onComponent13Press}
        >
          <View style={styles.despesas1Parent}>
            <Image
              style={styles.despesas1Icon}
              contentFit="cover"
              source={require("../assets/analise-1.png")}
            />
            <Text style={[styles.entradas, styles.incioFlexBox]}>Análises</Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.component4, styles.componentSpaceBlock]}
          onPress={onComponent15Press}
        >
          <View style={styles.despesas1Parent}>
            <Image
              style={styles.despesas1Icon}
              contentFit="cover"
              source={require("../assets/perfil-1-1.png")}
            />
            <Text style={[styles.entradas, styles.incioFlexBox]}>
              Meu Perfil
            </Text>
          </View>
        </Pressable>
        <View style={[styles.component4, styles.componentSpaceBlock]}>
          <View style={styles.despesas1Parent}>
            <Image
              style={styles.despesas1Icon}
              contentFit="cover"
              source={require("../assets/settings-1.png")}
            />
            <Text style={[styles.entradas, styles.incioFlexBox]}>
              Configurações
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  componentSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_mini,
    width: 188,
    borderRadius: Border.br_xs,
  },
  incioFlexBox: {
    marginLeft: 8,
    textAlign: "left",
    lineHeight: 22,
    flex: 1,
  },
  despesas1Icon: {
    width: 25,
    height: 25,
  },
  incio: {
    fontSize: FontSize.text_size,
    fontWeight: "700",
    fontFamily: FontFamily.bold28,
    color: Color.neutral10,
  },
  despesas1Parent: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  component11: {
    backgroundColor: Color.colorCrimson_100,
  },
  entradas: {
    fontSize: FontSize.sRegular_size,
    fontWeight: "500",
    fontFamily: FontFamily.medium14,
    color: Color.ndTextColor,
  },
  component4: {
    backgroundColor: Color.whiteColor,
  },
  component12Wrapper: {
    position: "absolute",
    top: 0,
    left: 1,
    backgroundColor: Color.neutral10,
    height: 1024,
    paddingLeft: Padding.p_xl,
    paddingTop: Padding.p_79xl,
    paddingRight: Padding.p_23xl,
    paddingBottom: Padding.p_79xl,
    flexDirection: "row",
  },
});

export default CardContainer;
