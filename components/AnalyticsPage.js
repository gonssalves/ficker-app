import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Modal, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import NotifyOverlay from "./NotifyOverlay";
import CardContainer1 from "./CardContainer1";
import FormContainer2 from "./FormContainer2";
import FormContainer1 from "./FormContainer1";
import FormContainer from "./FormContainer";
import ContainerCard from "./ContainerCard";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const AnalyticsPage = () => {
  const navigation = useNavigation();
  const [notification1IconVisible, setNotification1IconVisible] =
    useState(false);

  const openNotification1Icon = useCallback(() => {
    setNotification1IconVisible(true);
  }, []);

  const closeNotification1Icon = useCallback(() => {
    setNotification1IconVisible(false);
  }, []);

  return (
    <>
      <View style={styles.analyticsPage}>
        <View style={styles.component12Wrapper}>
          <View>
            <CardContainer1
              onFramePressablePress={() => navigation.navigate("HomePage")}
            />
            <FormContainer2
              iconImageUrl={require("../assets/bolsadedinheiro-1.png")}
              operationLabels="Entradas"
              onComponent3Press={() => navigation.navigate("IncomePage")}
            />
            <FormContainer2
              iconImageUrl={require("../assets/despesas-11.png")}
              operationLabels="Saídas"
              onComponent3Press={() => navigation.navigate("ExpensesPage")}
            />
            <FormContainer2
              iconImageUrl={require("../assets/cofrinho-1.png")}
              operationLabels="Cofrinho"
              onComponent3Press={() => navigation.navigate("SavingPage")}
            />
            <FormContainer1
              dimensionCode={require("../assets/analise-11.png")}
              transactionCode="Análises"
              propBackgroundColor="#e32d40"
              propColor="#fff"
            />
            <FormContainer2
              iconImageUrl={require("../assets/perfil-1-1.png")}
              operationLabels="Meu Perfil"
              onComponent3Press={() => navigation.navigate("MyProfilePage")}
            />
            <FormContainer />
          </View>
        </View>
        <ContainerCard onNotification1Press={openNotification1Icon} />
        <Text style={[styles.anlises, styles.anualTypo]}>Análises</Text>
        <View style={[styles.totalRevenueUihut, styles.totalLayout]}>
          <View style={[styles.totalRevenueUihutChild, styles.totalLayout]} />
          <View style={styles.parent}>
            <Text style={styles.textTypo2}>3000</Text>
            <Text style={[styles.text1, styles.textTypo2]}>1200</Text>
            <Text style={[styles.text1, styles.textTypo2]}>800</Text>
            <Text style={[styles.text1, styles.textTypo2]}>400</Text>
            <Text style={[styles.text1, styles.textTypo2]}>0</Text>
          </View>
          <View style={styles.parentPosition2}>
            <View style={styles.top}>
              <View style={styles.receitaTotalWrapper}>
                <Text style={[styles.receitaTotal, styles.anualTypo]}>
                  Receita Total
                </Text>
              </View>
              <View style={styles.groupParent}>
                <View style={styles.frameParent}>
                  <View style={styles.frameGroup}>
                    <View style={styles.anualParent}>
                      <Text style={[styles.anual, styles.sadaTypo1]}>
                        Anual
                      </Text>
                      <Text style={[styles.mensal, styles.sadaTypo1]}>
                        Mensal
                      </Text>
                      <Text style={[styles.mensal, styles.sadaTypo1]}>
                        Diário
                      </Text>
                    </View>
                    <View style={styles.frameChild} />
                  </View>
                  <View
                    style={[styles.groupChild, styles.groupChildPosition1]}
                  />
                </View>
                <Image
                  style={[styles.iconsMenu, styles.iconsLayout]}
                  contentFit="cover"
                  source={require("../assets/icons-menu.png")}
                />
              </View>
            </View>
            <View style={styles.r23653Parent}>
              <Text style={[styles.r23653, styles.r23653Typo]}>R$236,53</Text>
              <View style={styles.frameContainer}>
                <View style={styles.unionWrapper}>
                  <Image
                    style={styles.unionIcon}
                    contentFit="cover"
                    source={require("../assets/union.png")}
                  />
                </View>
                <View style={styles.group}>
                  <Text style={[styles.text5, styles.sadaTypo]}>0,8%</Text>
                  <Text style={[styles.doQueNo, styles.textTypo3]}>
                    Do que no último dia
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.container, styles.parentPosition1]}>
            <Text style={[styles.text6, styles.textTypo1]}>06</Text>
            <View style={[styles.rectangleParent, styles.groupChildPosition]}>
              <View style={[styles.groupItem, styles.groupChildLayout1]} />
              <View style={[styles.groupInner, styles.groupChildLayout1]} />
            </View>
          </View>
          <View style={[styles.groupView, styles.parentLayout]}>
            <Text style={[styles.text6, styles.textTypo1]}>07</Text>
            <View style={[styles.rectangleGroup, styles.groupChildPosition]}>
              <View style={[styles.groupItem, styles.groupChildLayout1]} />
              <View style={[styles.groupChild1, styles.groupChildLayout1]} />
            </View>
          </View>
          <View style={[styles.parent1, styles.parentPosition1]}>
            <Text style={[styles.text6, styles.textTypo1]}>08</Text>
            <View style={[styles.rectangleParent, styles.groupChildPosition]}>
              <View style={[styles.groupItem, styles.groupChildLayout1]} />
              <View style={styles.groupChild3} />
            </View>
          </View>
          <View style={[styles.parent2, styles.parentPosition1]}>
            <Text style={[styles.text6, styles.textTypo1]}>09</Text>
            <View style={[styles.rectangleGroup, styles.groupChildPosition]}>
              <View style={[styles.groupItem, styles.groupChildLayout1]} />
              <View style={[styles.groupChild5, styles.groupChildLayout1]} />
            </View>
          </View>
          <View style={[styles.parent3, styles.parentPosition1]}>
            <Text style={[styles.text6, styles.textTypo1]}>10</Text>
            <View style={[styles.rectangleParent2, styles.groupChildPosition]}>
              <View style={[styles.groupItem, styles.groupChildLayout1]} />
              <View style={[styles.groupChild7, styles.groupChildLayout1]} />
            </View>
          </View>
          <View style={[styles.parent4, styles.parentPosition1]}>
            <Text style={[styles.text11, styles.textTypo1]}>11</Text>
            <View style={[styles.rectangleParent2, styles.groupChildPosition]}>
              <View style={[styles.groupItem, styles.groupChildLayout1]} />
              <View style={[styles.groupChild1, styles.groupChildLayout1]} />
            </View>
          </View>
          <View style={[styles.parent5, styles.parentPosition1]}>
            <Text style={[styles.text6, styles.textTypo1]}>12</Text>
            <View style={[styles.rectangleParent2, styles.groupChildPosition]}>
              <View style={[styles.groupItem, styles.groupChildLayout1]} />
              <View style={[styles.groupChild11, styles.groupChildLayout1]} />
            </View>
          </View>
          <View style={[styles.parent6, styles.parentPosition1]}>
            <Text style={[styles.text6, styles.textTypo1]}>13</Text>
            <View style={[styles.rectangleParent2, styles.groupChildPosition]}>
              <View style={[styles.groupItem, styles.groupChildLayout1]} />
              <View style={[styles.groupChild13, styles.groupChildLayout1]} />
            </View>
          </View>
          <View style={[styles.parent7, styles.parentPosition1]}>
            <Text style={[styles.text6, styles.textTypo1]}>14</Text>
            <View style={[styles.rectangleParent2, styles.groupChildPosition]}>
              <View style={[styles.groupItem, styles.groupChildLayout1]} />
              <View style={[styles.groupChild15, styles.groupChildLayout1]} />
            </View>
          </View>
          <View style={[styles.parent8, styles.parentPosition1]}>
            <Text style={[styles.text6, styles.textTypo1]}>15</Text>
            <View style={[styles.rectangleParent2, styles.groupChildPosition]}>
              <View style={[styles.groupItem, styles.groupChildLayout1]} />
              <View style={[styles.groupChild17, styles.groupChildLayout1]} />
            </View>
          </View>
          <View style={[styles.parent9, styles.parentPosition1]}>
            <Text style={[styles.text6, styles.textTypo1]}>16</Text>
            <View style={[styles.rectangleParent2, styles.groupChildPosition]}>
              <View style={[styles.groupItem, styles.groupChildLayout1]} />
              <View style={[styles.groupChild19, styles.groupChildLayout1]} />
            </View>
          </View>
          <View style={[styles.parent10, styles.parentPosition1]}>
            <Text style={[styles.text11, styles.textTypo1]}>17</Text>
            <View style={[styles.rectangleParent2, styles.groupChildPosition]}>
              <View style={[styles.groupChild20, styles.groupChildLayout1]} />
              <View style={[styles.groupChild21, styles.groupChildLayout1]} />
            </View>
          </View>
          <View style={[styles.parent11, styles.parentPosition1]}>
            <Text style={[styles.text6, styles.textTypo1]}>18</Text>
            <View style={[styles.rectangleParent2, styles.groupChildPosition]}>
              <View style={[styles.groupItem, styles.groupChildLayout1]} />
              <View style={[styles.groupChild23, styles.groupChildLayout1]} />
            </View>
          </View>
          <View style={[styles.parent12, styles.parentPosition1]}>
            <Text style={[styles.text6, styles.textTypo1]}>19</Text>
            <View style={[styles.rectangleGroup, styles.groupChildPosition]}>
              <View style={[styles.groupItem, styles.groupChildLayout1]} />
              <View style={[styles.groupChild25, styles.groupChildLayout1]} />
            </View>
          </View>
          <View style={[styles.parent13, styles.parentPosition1]}>
            <Text style={[styles.text6, styles.textTypo1]}>20</Text>
            <View style={[styles.rectangleGroup, styles.groupChildPosition]}>
              <View style={[styles.groupItem, styles.groupChildLayout1]} />
              <View style={[styles.groupChild27, styles.groupChildLayout1]} />
            </View>
          </View>
          <View style={[styles.parent14, styles.parentPosition1]}>
            <Text style={[styles.text6, styles.textTypo1]}>21</Text>
            <View style={[styles.rectangleParent2, styles.groupChildPosition]}>
              <View style={[styles.groupItem, styles.groupChildLayout1]} />
              <View style={[styles.groupChild29, styles.groupChildLayout1]} />
            </View>
          </View>
          <View style={[styles.parent15, styles.parentLayout]}>
            <Text style={[styles.text6, styles.textTypo1]}>22</Text>
            <View style={[styles.rectangleGroup, styles.groupChildPosition]}>
              <View style={[styles.groupItem, styles.groupChildLayout1]} />
              <View style={[styles.groupChild31, styles.groupChildLayout]} />
            </View>
          </View>
          <View style={[styles.parent16, styles.parentLayout]}>
            <Text style={[styles.text6, styles.textTypo1]}>23</Text>
            <View style={[styles.rectangleGroup, styles.groupChildPosition]}>
              <View style={[styles.groupItem, styles.groupChildLayout1]} />
              <View style={[styles.groupChild33, styles.groupChildLayout1]} />
            </View>
          </View>
          <View style={[styles.parent17, styles.parentLayout]}>
            <Text style={[styles.text6, styles.textTypo1]}>24</Text>
            <View style={[styles.rectangleGroup, styles.groupChildPosition]}>
              <View style={[styles.groupItem, styles.groupChildLayout1]} />
              <View style={[styles.groupChild35, styles.groupChildLayout1]} />
            </View>
          </View>
          <View style={[styles.parent18, styles.parentLayout]}>
            <Text style={[styles.text6, styles.textTypo1]}>25</Text>
            <View style={[styles.rectangleGroup, styles.groupChildPosition]}>
              <View style={[styles.groupItem, styles.groupChildLayout1]} />
              <View style={[styles.groupChild23, styles.groupChildLayout1]} />
            </View>
          </View>
          <View style={[styles.parent19, styles.parentPosition1]}>
            <Text style={[styles.text6, styles.textTypo1]}>26</Text>
            <View style={[styles.rectangleParent, styles.groupChildPosition]}>
              <View style={[styles.groupItem, styles.groupChildLayout1]} />
              <View style={[styles.groupChild39, styles.frameViewPosition]} />
            </View>
          </View>
          <View style={styles.parent20}>
            <Text style={[styles.text27, styles.textTypo3]}>27</Text>
            <View style={[styles.rectangleGroup, styles.groupChildPosition]}>
              <View style={[styles.groupItem, styles.groupChildLayout1]} />
              <View style={[styles.groupChild39, styles.frameViewPosition]} />
            </View>
          </View>
        </View>
        <View style={[styles.overviewUihut, styles.overviewLayout]}>
          <View style={[styles.overviewUihutChild, styles.overviewLayout]} />
          <View style={[styles.frameView, styles.frameViewPosition]}>
            <Text style={[styles.text28, styles.sadaTypo]}>7000</Text>
            <Text style={[styles.text29, styles.sadaTypo]}>4000</Text>
            <Text style={[styles.text29, styles.sadaTypo]}>2500</Text>
            <Text style={[styles.text29, styles.sadaTypo]}>1200</Text>
            <Text style={[styles.text29, styles.sadaTypo]}>900</Text>
          </View>
          <View style={[styles.abrilParent, styles.vectorIconPosition]}>
            <Text style={[styles.text28, styles.sadaTypo]}>Abril</Text>
            <Text style={[styles.maio, styles.sadaTypo]}>Maio</Text>
            <Text style={[styles.maio, styles.sadaTypo]}>Junho</Text>
            <Text style={[styles.maio, styles.sadaTypo]}>Julho</Text>
            <Text style={[styles.maio, styles.sadaTypo]}>Aug</Text>
            <Text style={[styles.maio, styles.sadaTypo]}>Set</Text>
            <Text style={[styles.maio, styles.sadaTypo]}>Out</Text>
            <Text style={[styles.maio, styles.sadaTypo]}>Nov</Text>
            <Text style={[styles.maio, styles.sadaTypo]}>Dez</Text>
          </View>
          <View style={styles.topUihut}>
            <View style={styles.visoGeralParent}>
              <Text style={[styles.visoGeral, styles.anualTypo]}>
                Visão Geral
              </Text>
              <View style={styles.frameParent1}>
                <View style={styles.visoGeralParent}>
                  <Image
                    style={styles.frameItem}
                    contentFit="cover"
                    source={require("../assets/ellipse-143.png")}
                  />
                  <Text style={[styles.sada, styles.sadaTypo]}>Saída</Text>
                </View>
                <View style={styles.ellipseGroup}>
                  <Image
                    style={styles.frameItem}
                    contentFit="cover"
                    source={require("../assets/ellipse-1431.png")}
                  />
                  <Text style={[styles.sada, styles.sadaTypo]}>Entrada</Text>
                </View>
              </View>
            </View>
          </View>
          <Image
            style={[styles.iconsMenu1, styles.iconsLayout]}
            contentFit="cover"
            source={require("../assets/icons-menu1.png")}
          />
          <Image
            style={[styles.overviewUihutItem, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector-648.png")}
          />
          <Image
            style={[styles.overviewUihutInner, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-147.png")}
          />
          <Image
            style={styles.groupIcon}
            contentFit="cover"
            source={require("../assets/group-239.png")}
          />
          <Image
            style={[styles.vectorIcon, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector-647.png")}
          />
          <View style={styles.lineView} />
          <View style={[styles.rectangleParent20, styles.groupChild42Layout]}>
            <View style={[styles.groupChild42, styles.groupChild42Layout]} />
            <Image
              style={[styles.polygonIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/polygon-1.png")}
            />
          </View>
          <View style={styles.julho2022Parent}>
            <Text style={[styles.julho2022, styles.sadaTypo]}>Julho 2022</Text>
            <View style={[styles.gastouR270000Parent, styles.parentPosition]}>
              <Text style={[styles.gastouR270000, styles.sadaTypo1]}>
                Gastou R$ 2700,00
              </Text>
              <Image
                style={[styles.ellipseIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-147.png")}
              />
            </View>
            <View style={[styles.recebeuR120000Parent, styles.parentPosition]}>
              <Text style={[styles.gastouR270000, styles.sadaTypo1]}>
                Recebeu R$ 1200,00
              </Text>
              <Image
                style={[styles.ellipseIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-146.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.propertyReferralsUihut, styles.propertyLayout]}>
          <View
            style={[styles.propertyReferralsUihutChild, styles.propertyLayout]}
          />
          <View style={[styles.frameParent2, styles.parentPosition2]}>
            <View>
              <Text style={[styles.despesasPorCategoria, styles.anualTypo]}>
                Despesas por Categoria
              </Text>
              <View style={styles.frameParent3}>
                <View style={styles.visoGeralParent}>
                  <View style={styles.visoGeralParent}>
                    <Image
                      style={styles.frameChild1}
                      contentFit="cover"
                      source={require("../assets/ellipse-148.png")}
                    />
                    <Text style={[styles.educao, styles.textTypo]}>
                      Educação
                    </Text>
                  </View>
                  <Text style={[styles.text33, styles.textTypo]}>20%</Text>
                </View>
                <View style={styles.r23653Parent}>
                  <View style={styles.visoGeralParent}>
                    <Image
                      style={styles.frameChild1}
                      contentFit="cover"
                      source={require("../assets/ellipse-149.png")}
                    />
                    <Text style={[styles.educao, styles.textTypo]}>Comida</Text>
                  </View>
                  <Text style={[styles.text34, styles.textTypo]}>40%</Text>
                </View>
                <View style={styles.r23653Parent}>
                  <View style={styles.visoGeralParent}>
                    <Image
                      style={styles.frameChild1}
                      contentFit="cover"
                      source={require("../assets/ellipse-150.png")}
                    />
                    <Text style={[styles.educao, styles.textTypo]}>
                      Entretenimento
                    </Text>
                  </View>
                  <Text style={[styles.text35, styles.textTypo]}>15%</Text>
                </View>
                <View style={styles.r23653Parent}>
                  <View style={styles.visoGeralParent}>
                    <Image
                      style={styles.frameChild1}
                      contentFit="cover"
                      source={require("../assets/ellipse-151.png")}
                    />
                    <Text style={[styles.educao, styles.textTypo]}>Contas</Text>
                  </View>
                  <Text style={[styles.text36, styles.textTypo]}>25%</Text>
                </View>
                <View style={styles.r23653Parent}>
                  <View style={styles.visoGeralParent}>
                    <Image
                      style={styles.frameChild1}
                      contentFit="cover"
                      source={require("../assets/ellipse-152.png")}
                    />
                    <Text style={[styles.educao, styles.textTypo]}>Outros</Text>
                  </View>
                  <Text style={[styles.text37, styles.textTypo]}>15%</Text>
                </View>
              </View>
            </View>
            <Image
              style={[styles.iconsMenu2, styles.iconsLayout]}
              contentFit="cover"
              source={require("../assets/icons-menu1.png")}
            />
          </View>
          <Image
            style={styles.propertyReferralsUihutItem}
            contentFit="cover"
            source={require("../assets/group-250.png")}
          />
          <Text style={[styles.text38, styles.textTypo]}>100%</Text>
        </View>
        <View style={styles.cards}>
          <View style={styles.propertiesForSale}>
            <View style={styles.frameParent9}>
              <View style={styles.transaoMaisCaraParent}>
                <Text style={[styles.transaoMaisCara, styles.textTypo]}>
                  Transação Mais Cara
                </Text>
                <Text style={[styles.r13245, styles.r13245Typo]}>
                  R$ 132,45
                </Text>
              </View>
              <Image
                style={styles.frameChild6}
                contentFit="cover"
                source={require("../assets/group-268.png")}
              />
            </View>
          </View>
          <View style={[styles.propertiesForRentuihut, styles.totalSpaceBlock]}>
            <View style={styles.frameParent9}>
              <View style={styles.transaoMaisCaraParent}>
                <Text style={[styles.transaesDeEntrada, styles.textTypo]}>
                  Transações de Entrada
                </Text>
                <Text style={[styles.r13245, styles.r13245Typo]}>45</Text>
              </View>
              <Image
                style={[styles.frameChild7, styles.frameChildLayout]}
                contentFit="cover"
                source={require("../assets/group-269.png")}
              />
            </View>
          </View>
          <View style={[styles.totalCustomerUihut, styles.totalSpaceBlock]}>
            <View style={styles.frameParent9}>
              <View style={styles.transaoMaisCaraParent}>
                <Text style={[styles.transaesDeSada, styles.textTypo]}>
                  Transações de Saída
                </Text>
                <Text style={[styles.r13245, styles.r13245Typo]}>55</Text>
              </View>
              <Image
                style={styles.frameChild8}
                contentFit="cover"
                source={require("../assets/group-270.png")}
              />
            </View>
          </View>
          <View style={[styles.totalCityuihut, styles.totalSpaceBlock]}>
            <View style={styles.frameParent9}>
              <View style={styles.transaoMaisCaraParent}>
                <Text style={[styles.transaesDeSada, styles.textTypo]}>
                  Transações Totais
                </Text>
                <Text style={styles.r13245Typo}>100</Text>
              </View>
              <Image
                style={[styles.frameChild9, styles.frameChildLayout]}
                contentFit="cover"
                source={require("../assets/group-271.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.recentCustomerUihut}>
          <View>
            <View style={styles.anualParent}>
              <Text style={[styles.transaesRecentes, styles.anualTypo]}>
                Transações Recentes
              </Text>
              <Image
                style={[styles.iconsMenu3, styles.iconsLayout]}
                contentFit="cover"
                source={require("../assets/icons-menu1.png")}
              />
            </View>
            <View style={styles.memberListUihut}>
              <View style={styles.bennyFlexBox}>
                <Image
                  style={styles.despesas1Icon}
                  contentFit="cover"
                  source={require("../assets/despesas-13.png")}
                />
                <View style={styles.entradaParent}>
                  <Text style={[styles.entrada1, styles.textTypo]}>
                    Entrada
                  </Text>
                  <Text style={[styles.investimento, styles.textTypo3]}>
                    Investimento
                  </Text>
                </View>
              </View>
              <View style={[styles.bennyChagur1, styles.bennyFlexBox]}>
                <Image
                  style={styles.despesas1Icon}
                  contentFit="cover"
                  source={require("../assets/bolsadedinheiro-11.png")}
                />
                <View style={styles.entradaParent}>
                  <Text style={[styles.entrada1, styles.textTypo]}>Saída</Text>
                  <Text style={[styles.investimento, styles.textTypo3]}>
                    Comida
                  </Text>
                </View>
              </View>
              <View style={[styles.bennyChagur1, styles.bennyFlexBox]}>
                <Image
                  style={styles.despesas1Icon}
                  contentFit="cover"
                  source={require("../assets/bolsadedinheiro-11.png")}
                />
                <View style={styles.entradaParent}>
                  <Text style={[styles.entrada1, styles.textTypo]}>Saída</Text>
                  <Text style={[styles.investimento, styles.textTypo3]}>
                    Aluguel
                  </Text>
                </View>
              </View>
              <View style={[styles.bennyChagur1, styles.bennyFlexBox]}>
                <Image
                  style={styles.despesas1Icon}
                  contentFit="cover"
                  source={require("../assets/bolsadedinheiro-11.png")}
                />
                <View style={styles.entradaParent}>
                  <Text style={[styles.entrada1, styles.textTypo]}>Saída</Text>
                  <Text style={[styles.investimento, styles.textTypo3]}>
                    Educação
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={notification1IconVisible}
      >
        <View style={styles.notification1IconOverlay}>
          <Pressable
            style={styles.notification1IconBg}
            onPress={closeNotification1Icon}
          />
          <NotifyOverlay onClose={closeNotification1Icon} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  anualTypo: {
    fontFamily: FontFamily.semibold18,
    fontWeight: "600",
  },
  totalLayout: {
    height: 286,
    width: 844,
    position: "absolute",
  },
  textTypo2: {
    color: Color.colorSlategray_100,
    fontFamily: FontFamily.regular12,
    lineHeight: 18,
    fontSize: FontSize.regular12_size,
    textAlign: "left",
  },
  sadaTypo1: {
    fontSize: FontSize.size_2xs,
    color: Color.ndTextColor,
    textAlign: "left",
  },
  groupChildPosition1: {
    top: 23,
    position: "absolute",
  },
  iconsLayout: {
    height: 18,
    width: 18,
    overflow: "hidden",
  },
  r23653Typo: {
    fontFamily: FontFamily.bold28,
    fontWeight: "700",
  },
  sadaTypo: {
    fontFamily: FontFamily.medium14,
    fontWeight: "500",
  },
  textTypo3: {
    fontSize: FontSize.regular12_size,
    textAlign: "left",
  },
  parentPosition1: {
    height: 124,
    top: 147,
    position: "absolute",
  },
  textTypo1: {
    top: 106,
    color: Color.ndTextColor,
    fontFamily: FontFamily.regular12,
    lineHeight: 18,
    fontSize: FontSize.regular12_size,
    textAlign: "left",
    position: "absolute",
  },
  groupChildPosition: {
    height: 99,
    top: 0,
    position: "absolute",
  },
  groupChildLayout1: {
    borderTopRightRadius: Border.br_7xs_5,
    borderTopLeftRadius: Border.br_7xs_5,
    width: 11,
  },
  parentLayout: {
    width: 14,
    height: 124,
    top: 147,
    position: "absolute",
  },
  groupChildLayout: {
    height: 63,
    left: 0,
  },
  frameViewPosition: {
    top: 73,
    position: "absolute",
  },
  overviewLayout: {
    height: 264,
    position: "absolute",
  },
  vectorIconPosition: {
    left: 71,
    position: "absolute",
  },
  iconLayout: {
    height: 8,
    position: "absolute",
  },
  groupChild42Layout: {
    width: 147,
    position: "absolute",
  },
  parentPosition: {
    height: 15,
    left: 0,
    position: "absolute",
  },
  propertyLayout: {
    width: 560,
    height: 264,
    position: "absolute",
  },
  parentPosition2: {
    left: 20,
    top: 20,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.sRegular_size,
    textAlign: "left",
  },
  r13245Typo: {
    marginTop: 5,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.bold28,
    fontWeight: "700",
    textAlign: "left",
    color: Color.textPrimaryColor,
  },
  totalSpaceBlock: {
    marginLeft: 25,
    backgroundColor: Color.whiteColor,
    flex: 1,
    borderRadius: Border.br_mini,
  },
  frameChildLayout: {
    width: 72,
    height: 72,
  },
  bennyFlexBox: {
    width: 236,
    alignItems: "center",
    flexDirection: "row",
  },
  notification1IconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  notification1IconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  component12Wrapper: {
    paddingLeft: Padding.p_xl,
    paddingTop: Padding.p_79xl,
    paddingRight: Padding.p_23xl,
    paddingBottom: Padding.p_79xl,
    flexDirection: "row",
    backgroundColor: Color.neutral10,
    left: 1,
    top: 0,
    position: "absolute",
    height: 1024,
  },
  anlises: {
    top: 98,
    textAlign: "left",
    color: Color.textPrimaryColor,
    fontSize: FontSize.semibold18_size,
    fontWeight: "600",
    left: 275,
    position: "absolute",
  },
  totalRevenueUihutChild: {
    borderRadius: Border.br_mini,
    left: 0,
    backgroundColor: Color.neutral10,
    top: 0,
  },
  text1: {
    marginTop: 9,
  },
  parent: {
    top: 120,
    left: 26,
    alignItems: "flex-end",
    position: "absolute",
  },
  receitaTotal: {
    width: 308,
    textAlign: "left",
    color: Color.textPrimaryColor,
    fontSize: FontSize.semibold18_size,
    fontWeight: "600",
  },
  receitaTotalWrapper: {
    paddingRight: 186,
    flex: 1,
    flexDirection: "row",
  },
  anual: {
    color: Color.ndTextColor,
    fontFamily: FontFamily.semibold18,
    fontWeight: "600",
  },
  mensal: {
    marginLeft: 37,
    color: Color.ndTextColor,
    fontFamily: FontFamily.semibold18,
    fontWeight: "600",
  },
  anualParent: {
    flexDirection: "row",
  },
  frameChild: {
    backgroundColor: "#d5d0fc",
    height: 1,
    marginTop: 8,
    width: 210,
  },
  frameGroup: {
    width: 210,
    alignItems: "center",
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    left: 152,
    backgroundColor: Color.primaryColor,
    width: 58,
    height: 3,
  },
  frameParent: {
    height: 26,
    flex: 1,
  },
  iconsMenu: {
    marginLeft: 38,
  },
  groupParent: {
    width: 266,
    marginLeft: 221,
    flexDirection: "row",
  },
  top: {
    width: 804,
    alignItems: "center",
    flexDirection: "row",
  },
  r23653: {
    fontSize: FontSize.bold28_size,
    textAlign: "left",
    color: Color.textPrimaryColor,
  },
  unionIcon: {
    height: 10,
    width: 8,
  },
  unionWrapper: {
    borderRadius: Border.br_xl,
    paddingHorizontal: 6,
    paddingVertical: 5,
    backgroundColor: Color.pefitra,
    flexDirection: "row",
  },
  text5: {
    fontSize: FontSize.text_size,
    color: Color.pefitra,
    textAlign: "left",
  },
  doQueNo: {
    color: Color.ndTextColor,
    fontFamily: FontFamily.regular12,
    lineHeight: 18,
  },
  group: {
    marginLeft: 14,
  },
  frameContainer: {
    marginLeft: 38,
    alignItems: "center",
    flexDirection: "row",
  },
  r23653Parent: {
    marginTop: 20,
    alignItems: "center",
    flexDirection: "row",
  },
  text6: {
    left: 0,
  },
  groupItem: {
    backgroundColor: Color.gray1,
    height: 99,
    top: 0,
    position: "absolute",
    left: 0,
  },
  groupInner: {
    top: 60,
    height: 39,
    backgroundColor: Color.pefitra,
    left: 0,
    position: "absolute",
  },
  rectangleParent: {
    left: 2,
    width: 11,
  },
  container: {
    left: 72,
    width: 15,
    height: 124,
    top: 147,
  },
  groupChild1: {
    top: 43,
    height: 56,
    backgroundColor: Color.pefitra,
    left: 0,
    position: "absolute",
  },
  rectangleGroup: {
    width: 11,
    left: 1,
  },
  groupView: {
    left: 109,
  },
  groupChild3: {
    top: 27,
    height: 72,
    borderTopRightRadius: Border.br_7xs_5,
    borderTopLeftRadius: Border.br_7xs_5,
    width: 11,
    backgroundColor: Color.pefitra,
    left: 0,
    position: "absolute",
  },
  parent1: {
    left: 145,
    width: 15,
    height: 124,
    top: 147,
  },
  groupChild5: {
    top: 37,
    height: 62,
    backgroundColor: Color.pefitra,
    left: 0,
    position: "absolute",
  },
  parent2: {
    left: 182,
    width: 15,
    height: 124,
    top: 147,
  },
  groupChild7: {
    top: 48,
    height: 51,
    backgroundColor: Color.pefitra,
    left: 0,
    position: "absolute",
  },
  rectangleParent2: {
    width: 11,
    left: 0,
  },
  parent3: {
    left: 219,
    width: 12,
    height: 124,
    top: 147,
  },
  text11: {
    left: 1,
  },
  parent4: {
    left: 253,
    width: 11,
    height: 124,
    top: 147,
  },
  groupChild11: {
    top: 45,
    height: 54,
    backgroundColor: Color.pefitra,
    left: 0,
    position: "absolute",
  },
  parent5: {
    left: 287,
    width: 12,
    height: 124,
    top: 147,
  },
  groupChild13: {
    top: 39,
    height: 60,
    backgroundColor: Color.pefitra,
    left: 0,
    position: "absolute",
  },
  parent6: {
    left: 321,
    width: 12,
    height: 124,
    top: 147,
  },
  groupChild15: {
    top: 35,
    height: 64,
    backgroundColor: Color.pefitra,
    left: 0,
    position: "absolute",
  },
  parent7: {
    left: 355,
    width: 12,
    height: 124,
    top: 147,
  },
  groupChild17: {
    top: 11,
    height: 88,
    backgroundColor: Color.pefitra,
    left: 0,
    position: "absolute",
  },
  parent8: {
    left: 389,
    width: 12,
    height: 124,
    top: 147,
  },
  groupChild19: {
    height: 76,
    backgroundColor: Color.pefitra,
    top: 23,
    position: "absolute",
    left: 0,
  },
  parent9: {
    left: 423,
    width: 13,
    height: 124,
    top: 147,
  },
  groupChild20: {
    backgroundColor: "#f2f6fc",
    height: 99,
    top: 0,
    position: "absolute",
    left: 0,
  },
  groupChild21: {
    height: 99,
    top: 0,
    position: "absolute",
    backgroundColor: Color.pefitra,
    left: 0,
  },
  parent10: {
    left: 458,
    width: 12,
    height: 124,
    top: 147,
  },
  groupChild23: {
    top: 47,
    height: 52,
    backgroundColor: Color.pefitra,
    left: 0,
    position: "absolute",
  },
  parent11: {
    left: 492,
    width: 12,
    height: 124,
    top: 147,
  },
  groupChild25: {
    top: 26,
    height: 73,
    backgroundColor: Color.pefitra,
    left: 0,
    position: "absolute",
  },
  parent12: {
    left: 526,
    width: 13,
    height: 124,
    top: 147,
  },
  groupChild27: {
    top: 54,
    height: 45,
    backgroundColor: Color.pefitra,
    left: 0,
    position: "absolute",
  },
  parent13: {
    left: 561,
    width: 15,
    height: 124,
    top: 147,
  },
  groupChild29: {
    top: 66,
    height: 33,
    backgroundColor: Color.pefitra,
    left: 0,
    position: "absolute",
  },
  parent14: {
    left: 597,
    width: 12,
    height: 124,
    top: 147,
  },
  groupChild31: {
    top: 36,
    borderTopRightRadius: Border.br_7xs_5,
    borderTopLeftRadius: Border.br_7xs_5,
    width: 11,
    backgroundColor: Color.pefitra,
    position: "absolute",
  },
  parent15: {
    left: 631,
  },
  groupChild33: {
    top: 30,
    height: 69,
    backgroundColor: Color.pefitra,
    left: 0,
    position: "absolute",
  },
  parent16: {
    left: 667,
  },
  groupChild35: {
    top: 59,
    height: 40,
    backgroundColor: Color.pefitra,
    left: 0,
    position: "absolute",
  },
  parent17: {
    left: 703,
  },
  parent18: {
    left: 739,
  },
  groupChild39: {
    borderTopRightRadius: Border.br_7xs_5,
    borderTopLeftRadius: Border.br_7xs_5,
    width: 11,
    backgroundColor: Color.pefitra,
    height: 26,
    left: 0,
  },
  parent19: {
    left: 775,
    width: 15,
    height: 124,
    top: 147,
  },
  text27: {
    top: 103,
    color: Color.ndTextColor,
    fontFamily: FontFamily.regular12,
    lineHeight: 18,
    left: 0,
    position: "absolute",
  },
  parent20: {
    top: 146,
    left: 812,
    height: 121,
    width: 13,
    position: "absolute",
  },
  totalRevenueUihut: {
    top: 289,
    left: 275,
  },
  overviewUihutChild: {
    width: 570,
    borderRadius: Border.br_mini,
    left: 0,
    backgroundColor: Color.neutral10,
    top: 0,
  },
  text28: {
    color: Color.ndTextColor,
    fontSize: FontSize.regular12_size,
    textAlign: "left",
  },
  text29: {
    marginTop: 16,
    color: Color.ndTextColor,
    fontSize: FontSize.regular12_size,
    textAlign: "left",
  },
  frameView: {
    left: 30,
  },
  maio: {
    marginLeft: 30,
    color: Color.ndTextColor,
    fontSize: FontSize.regular12_size,
    textAlign: "left",
  },
  abrilParent: {
    top: 228,
    flexDirection: "row",
  },
  visoGeral: {
    textAlign: "left",
    color: Color.textPrimaryColor,
    fontSize: FontSize.semibold18_size,
    fontWeight: "600",
  },
  frameItem: {
    width: 9,
    height: 9,
  },
  sada: {
    marginLeft: 5,
    color: Color.ndTextColor,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    lineHeight: 18,
  },
  visoGeralParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  ellipseGroup: {
    marginLeft: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  frameParent1: {
    marginLeft: 315,
    alignItems: "center",
    flexDirection: "row",
  },
  topUihut: {
    left: 10,
    top: 20,
    flexDirection: "row",
    position: "absolute",
  },
  iconsMenu1: {
    top: 15,
    left: 542,
    position: "absolute",
  },
  overviewUihutItem: {
    top: 91,
    width: 475,
    height: 102,
  },
  overviewUihutInner: {
    top: 127,
    left: 246,
    width: 8,
  },
  groupIcon: {
    top: 79,
    left: 69,
    width: 476,
    height: 137,
    position: "absolute",
  },
  vectorIcon: {
    top: 134,
    width: 474,
    height: 61,
  },
  lineView: {
    top: 136,
    left: 248,
    borderStyle: "dashed",
    borderColor: "#a198e2",
    borderRadius: 0.001,
    borderRightWidth: 2,
    width: 2,
    height: 81,
    position: "absolute",
  },
  groupChild42: {
    borderRadius: 10,
    backgroundColor: Color.whiteColor,
    height: 63,
    left: 0,
    top: 0,
  },
  polygonIcon: {
    top: 63,
    left: 67,
    width: 13,
  },
  rectangleParent20: {
    top: 51,
    left: 177,
    shadowColor: "rgba(49, 49, 49, 0.1)",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    height: 71,
  },
  julho2022: {
    fontSize: FontSize.regular12_size,
    textAlign: "left",
    left: 0,
    color: Color.textPrimaryColor,
    top: 0,
    position: "absolute",
  },
  gastouR270000: {
    left: 12,
    color: Color.ndTextColor,
    fontFamily: FontFamily.regular12,
    top: 0,
    position: "absolute",
  },
  ellipseIcon: {
    top: 3,
    width: 8,
    left: 0,
  },
  gastouR270000Parent: {
    top: 19,
    width: 109,
  },
  recebeuR120000Parent: {
    top: 34,
    width: 116,
  },
  julho2022Parent: {
    top: 58,
    left: 189,
    height: 49,
    width: 116,
    position: "absolute",
  },
  overviewUihut: {
    left: 855,
    width: 565,
    top: 600,
  },
  propertyReferralsUihutChild: {
    borderRadius: Border.br_mini,
    left: 0,
    backgroundColor: Color.neutral10,
    top: 0,
  },
  despesasPorCategoria: {
    color: Color.colorBlack,
    textAlign: "left",
    fontSize: FontSize.semibold18_size,
    fontWeight: "600",
  },
  frameChild1: {
    height: 12,
    width: 12,
  },
  educao: {
    marginLeft: 10,
    fontFamily: FontFamily.medium14,
    fontWeight: "500",
    color: Color.textPrimaryColor,
  },
  text33: {
    marginLeft: 60,
    fontFamily: FontFamily.medium14,
    fontWeight: "500",
    color: Color.ndTextColor,
  },
  text34: {
    marginLeft: 52,
    fontFamily: FontFamily.medium14,
    fontWeight: "500",
    color: Color.ndTextColor,
  },
  text35: {
    marginLeft: 81,
    fontFamily: FontFamily.medium14,
    fontWeight: "500",
    color: Color.ndTextColor,
  },
  text36: {
    marginLeft: 73,
    fontFamily: FontFamily.medium14,
    fontWeight: "500",
    color: Color.ndTextColor,
  },
  text37: {
    marginLeft: 97,
    fontFamily: FontFamily.medium14,
    fontWeight: "500",
    color: Color.ndTextColor,
  },
  frameParent3: {
    marginTop: 22,
  },
  iconsMenu2: {
    marginLeft: 307,
  },
  frameParent2: {
    flexDirection: "row",
  },
  propertyReferralsUihutItem: {
    top: 46,
    left: 328,
    width: 172,
    height: 172,
    position: "absolute",
  },
  text38: {
    top: 122,
    left: 395,
    fontFamily: FontFamily.bold28,
    fontWeight: "700",
    color: Color.ndTextColor,
    position: "absolute",
  },
  propertyReferralsUihut: {
    top: 600,
    left: 275,
  },
  transaoMaisCara: {
    width: 167,
    fontFamily: FontFamily.medium14,
    fontWeight: "500",
    color: Color.ndTextColor,
  },
  r13245: {
    alignSelf: "stretch",
  },
  transaoMaisCaraParent: {
    flex: 1,
  },
  frameChild6: {
    width: 60,
    marginLeft: 13,
    height: 60,
  },
  frameParent9: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  propertiesForSale: {
    height: 108,
    paddingVertical: Padding.p_5xl,
    paddingHorizontal: Padding.p_3xl,
    backgroundColor: Color.whiteColor,
    flex: 1,
    borderRadius: Border.br_mini,
  },
  transaesDeEntrada: {
    width: 153,
    fontFamily: FontFamily.medium14,
    fontWeight: "500",
    color: Color.ndTextColor,
  },
  frameChild7: {
    marginLeft: 8,
  },
  propertiesForRentuihut: {
    paddingVertical: Padding.p_lg,
    marginLeft: 25,
    paddingHorizontal: Padding.p_3xl,
  },
  transaesDeSada: {
    alignSelf: "stretch",
    fontFamily: FontFamily.medium14,
    fontWeight: "500",
    color: Color.ndTextColor,
  },
  frameChild8: {
    width: 83,
    height: 83,
    marginLeft: 1,
  },
  totalCustomerUihut: {
    padding: Padding.p_smi,
  },
  frameChild9: {
    marginLeft: 16,
  },
  totalCityuihut: {
    paddingHorizontal: Padding.p_2xl,
    paddingVertical: Padding.p_lg,
    marginLeft: 25,
  },
  cards: {
    top: 160,
    width: 1140,
    left: 275,
    flexDirection: "row",
    position: "absolute",
  },
  transaesRecentes: {
    width: 185,
    textAlign: "left",
    color: Color.textPrimaryColor,
    fontSize: FontSize.semibold18_size,
    fontWeight: "600",
  },
  iconsMenu3: {
    marginLeft: 67,
  },
  despesas1Icon: {
    width: 25,
    height: 25,
  },
  entrada1: {
    alignSelf: "stretch",
    fontFamily: FontFamily.medium14,
    fontWeight: "500",
    color: Color.textPrimaryColor,
  },
  investimento: {
    marginTop: 1,
    alignSelf: "stretch",
    color: Color.ndTextColor,
    fontFamily: FontFamily.regular12,
  },
  entradaParent: {
    marginLeft: 10,
    flex: 1,
  },
  bennyChagur1: {
    marginTop: 15,
  },
  memberListUihut: {
    marginTop: 15,
  },
  recentCustomerUihut: {
    left: 1139,
    width: 286,
    paddingLeft: Padding.p_mini,
    paddingTop: Padding.p_xl,
    paddingRight: Padding.p_xl,
    paddingBottom: Padding.p_xl,
    borderRadius: Border.br_mini,
    top: 289,
    flexDirection: "row",
    backgroundColor: Color.neutral10,
    position: "absolute",
  },
  analyticsPage: {
    backgroundColor: Color.colorWhitesmoke_200,
    width: 1440,
    overflow: "hidden",
    height: 1024,
  },
});

export default AnalyticsPage;
