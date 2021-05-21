import React, { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native";
import { StyleSheet, ScrollView, Text, View } from "react-native";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
import CustomListItem from "../components/CustomListItem";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { auth } from "../firebase";

const HomeScreen = ({ navigation }) => {
  const singOutUser = () => {
    auth.signOut().then(() => {
      navigation.replace("Login");
    });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Signal",
      headerStyle: { backgroundColor: "white" },
      headerTitleStyle: { color: "black" },
      headerTintColor: "black",
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity onPress={singOutUser} activeOpacity={0.5}>
            <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 80,
            marginRight: 20,
          }}
        >
          <TouchableOpacity activeOpacity={0.5}>
            <AntDesign name="camerao" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate("AddChat")}
          >
            <SimpleLineIcons
              onPress={() => navigation.navigate("AddChat")}
              name="pencil"
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <CustomListItem />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
