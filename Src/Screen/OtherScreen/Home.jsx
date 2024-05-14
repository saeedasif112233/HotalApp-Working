import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  FlatList,
  Pressable,
  Image,
  Dimensions,
} from "react-native";
import Statusbar from "../../Component/statusbar";
import HomeHeader from "../../Component/HomeHeader";
import { color, header } from "../../Global/Styles";
import { ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Icon1 from "react-native-vector-icons/MaterialCommunityIcons";
import { data, foodCardData } from "../../Global/Data";
import FoodCard from "../../Component/FoodCard";
import HomeTab from "../../Navigation/HomeTab";

const Screen_width = Dimensions.get("window").width;
const { height, width } = Dimensions.get("window");

export default function Home({ navigation }) {
  const [isFocused, setIsFocused] = useState(false);
  const [Delivery, setDelivery] = useState(true);
  const [loc, setloc] = useState(false);
  const [indexCheck, setindexCheck] = useState("0");

  return (
    <View>
      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={true}>
        <View style={styles.container}>
          <Statusbar color={color.dgreen} />
          <View>
            <View>
              <HomeHeader Title={"Food App"} navigation={navigation} />
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 1,
              }}
            >
              {/* <FoodCard /> */}
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
                  // navigation.navigate("MapScreen");
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
        <View style={{ flexDirection: "row" }}>
          <View
            backgroundColor="lightgrey"
            style={{
              flexDirection: "row",
              marginTop: 15,
              borderRadius: 50,
              marginLeft: 15,
              marginRight: 45,
              justifyContent: "space-around",
            }}
          ></View>
        </View>

        <View style={styles.Titlebar}>
          <Text style={styles.Texttitle}>Breakfast</Text>
        </View>

        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={data}
          keyExtractor={(item) => item.id}
          extraData={indexCheck}
          renderItem={({ item, index }) => (
            <Pressable
              onPress={() => {
                setindexCheck(item.id);
              }}
            >
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

        <View style={styles.Titlebar}>
          <Text style={styles.Texttitle}>Lunch</Text>
        </View>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 17,
                marginTop: 13,
                marginLeft: 14,
                marginRight: 10,
              }}
            >
              Option Changing in
            </Text>
          </View>
          <FlatList
            style={{ marginTop: 10, marginBottom: 10 }}
            horizontal={true}
            data={foodCardData}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={{ marginLeft: 3 }}>
                <FoodCard
                  screenWidth={Screen_width * 0.8}
                  RestName={item.RestName}
                  faraway={item.faraway}
                  BussinessAddress={item.BussinessAddress}
                  image={item.image}
                  AvrgReview={item.AvrgReview}
                  NoOfReview={item.NoOfReview}
                />
              </View>
            )}
          />
        </View>
        <View style={styles.Titlebar}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Promotion Avaiable
          </Text>
        </View>
        <View>
          <FlatList
            style={{ marginTop: 10, marginBottom: 10 }}
            horizontal={true}
            data={foodCardData}
            showsHorizontalScrollIndicator={true}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={{ marginLeft: 3 }}>
                <FoodCard
                  screenWidth={Screen_width * 0.8}
                  RestName={item.RestName}
                  faraway={item.faraway}
                  BussinessAddress={item.BussinessAddress}
                  image={item.image}
                  AvrgReview={item.AvrgReview}
                  NoOfReview={item.NoOfReview}
                />
              </View>
            )}
          />
        </View>

        <View style={styles.Titlebar}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Restaurant in your Area
          </Text>
        </View>
        <View style={{ width: Screen_width, padding: 10 }}>
          {foodCardData.map((item, index) => (
            <View key={index}>
              <FoodCard
                screenWidth={Screen_width * 0.95}
                RestName={item.RestName}
                faraway={item.faraway}
                BussinessAddress={item.BussinessAddress}
                image={item.image}
                AvrgReview={item.AvrgReview}
                NoOfReview={item.NoOfReview}
              />
            </View>
          ))}
        </View>
      </ScrollView>
      {Delivery && (
        <View style={styles.FloatingButton}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("MapScreen");
            }}
          >
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
    // borderRadius: -10,
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
    color: "lightgrey",
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
    color: "red",
    backgroundColor: color.dgreen,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: 80,
    height: 100,
    margin: 15,
    marginBottom: 25,
  },
  Titlebar: {
    backgroundColor: color.lYellow,
    borderRadius: 10,
    padding: 4,
    marginTop: 0,
  },
  FloatingButton: {
    position: "absolute",
    bottom: 10,
    right: 13,
    backgroundColor: "white",
    elevation: 10,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: color.lYellow,
    // textAlign: "center",
  },
  Texttitle: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
});
