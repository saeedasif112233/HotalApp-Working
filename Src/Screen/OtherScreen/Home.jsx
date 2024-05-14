import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Pressable,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import Statusbar from "../../Component/statusbar";
import HomeHeader from "../../Component/HomeHeader";
import { color } from "../../Global/Styles";
import Icon from "react-native-vector-icons/Ionicons";
import { data } from "../../Global/Data";

const Screen_width = Dimensions.get("window").width;
const { height, width } = Dimensions.get("window");

export default function Home({ navigation }) {
  const [isFocused, setIsFocused] = useState(false);
  const [Delivery, setDelivery] = useState(true);
  const [indexCheck, setindexCheck] = useState("0");
  const [indexCheck2, setindexCheck2] = useState("0");
  const [indexCheck3, setindexCheck3] = useState("0");

  return (
    <View>
      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={true}>
        <View style={styles.container}>
          <Statusbar color={color.dgreen} />
          <View>
            <HomeHeader Title={"Food App"} navigation={navigation} />

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 1,
              }}
            >
              <TouchableOpacity
                style={[
                  styles.btn,
                  {
                    backgroundColor: isFocused ? color.dgreen : color.lYellow,
                  },
                ]}
                onPress={() => {
                  setIsFocused(true);
                  setDelivery(true);
                }}
              >
                <Text
                  style={{
                    color: isFocused ? color.lYellow : color.dgreen,
                    textAlign: "center",
                  }}
                >
                  Delivery
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.btn,
                  {
                    backgroundColor: isFocused ? color.lYellow : color.dgreen,
                  },
                ]}
                onPress={() => {
                  setIsFocused(false);
                  setDelivery(false);
                }}
              >
                <Text
                  style={{
                    color: isFocused ? color.dgreen : color.lYellow,
                    textAlign: "center",
                  }}
                >
                  Pick-up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.textView}>
          <Text style={styles.titletext}>Breakfast</Text>
        </View>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={data}
          keyExtractor={(item) => item.id}
          extraData={indexCheck}
          renderItem={({ item }) => (
            <Pressable onPress={() => setindexCheck(item.id)}>
              <View
                style={
                  indexCheck === item.id
                    ? { ...styles.cardSelected }
                    : { ...styles.card }
                }
              >
                <Image
                  style={{ height: 60, width: 60, borderRadius: 30 }}
                  source={item.image}
                />
                <Text
                  style={{
                    top: 0,
                    color: indexCheck === item.id ? color.lYellow : "black",
                    fontWeight: "bold",
                  }}
                >
                  {item.name}
                </Text>
              </View>
            </Pressable>
          )}
        />

        <View style={styles.textView}>
          <Text style={styles.titletext}>Lunch</Text>
        </View>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={data}
          keyExtractor={(item) => item.id}
          extraData={indexCheck2}
          renderItem={({ item }) => (
            <Pressable onPress={() => setindexCheck2(item.id)}>
              <View
                style={
                  indexCheck2 === item.id
                    ? { ...styles.cardSelected }
                    : { ...styles.card }
                }
              >
                <Image
                  style={{ height: 60, width: 60, borderRadius: 30 }}
                  source={item.image}
                />
                <Text
                  style={{
                    top: 0,
                    color: indexCheck2 === item.id ? color.lYellow : "black",
                    fontWeight: "bold",
                  }}
                >
                  {item.name}
                </Text>
              </View>
            </Pressable>
          )}
        />

        <View style={styles.textView}>
          <Text style={styles.titletext}>Dinner</Text>
        </View>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={data}
          keyExtractor={(item) => item.id}
          extraData={indexCheck3}
          renderItem={({ item }) => (
            <Pressable onPress={() => setindexCheck3(item.id)}>
              <View
                style={
                  indexCheck3 === item.id
                    ? { ...styles.cardSelected }
                    : { ...styles.card }
                }
              >
                <Image
                  style={{ height: 60, width: 60, borderRadius: 30 }}
                  source={item.image}
                />
                <Text
                  style={{
                    top: 0,
                    color: indexCheck3 === item.id ? color.lYellow : "black",
                    fontWeight: "bold",
                  }}
                >
                  {item.name}
                </Text>
              </View>
            </Pressable>
          )}
        />
      </ScrollView>

      {Delivery && (
        <View style={styles.FloatingButton}>
          <TouchableOpacity onPress={() => navigation.navigate("MapScreen")}>
            <Icon name="location" size={30} color="black" />
            <Text>Map</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0efeb",
    paddingBottom: 5,
  },
  btn: {
    borderRadius: 30,
    width: 125,
    height: 35,
    textAlign: "center",
    justifyContent: "center",
    marginLeft: 10,
    marginTop: 15,
  },
  card: {
    borderRadius: 20,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: 80,
    height: 100,
    marginTop: 15,
    marginLeft: 10,
  },
  cardSelected: {
    borderRadius: 20,
    backgroundColor: color.dgreen,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: 80,
    height: 100,
    margin: 15,
    marginBottom: 25,
  },
  FloatingButton: {
    position: "absolute",
    bottom: -50,
    right: 13,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: color.lYellow,
    elevation: 10,
  },
  titletext: {
    fontSize: 21,
    fontWeight: "bold",
    marginLeft: 10,
    textAlign: "center",
  },
  textView: {
    backgroundColor: color.lYellow,
    borderRadius: 13,
    padding: 4,
    marginTop: 0,
  },
});
