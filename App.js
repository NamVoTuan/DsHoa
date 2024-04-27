import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
  Image,
} from "react-native";
import { ChiTiet_DSHoa } from "./comp/ChiTiet_DSHoa";

export default function App() {
  const [selectedFlower, setSelectedFlower] = useState(null);

  const DSHoa = [
    {
      id: "HOA-CUC",
      name: "Hoa Cúc",
      hinh: require("./assets/images/hoa-cuc.webp"),
    },
    {
      id: "HOA-HONGC",
      name: "Hoa Hồng",
      hinh: require("./assets/images/hoa-hong.jpeg"),
    },
    {
      id: "WHITE-ORCHIDS",
      name: "White Orchids",
      hinh: require("./assets/images/white-orchids.jpeg"),
    },
  ];

  const handleSelectFlower = (flower) => {
    alert("Tên Hoa: " + flower.name);
    setSelectedFlower(flower);
  };

  const renderFlowerList = ({ item }) => {
    return (
      <TouchableHighlight onPress={() => handleSelectFlower(item)}>
        <View
          style={{ padding: 10, borderBottomWidth: 1, borderColor: "lightgray", width:150 }}
        >
          <Text>{item.name}</Text>
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 20, fontSize:30 }}>Hãy chọn loại hoa</Text>
      <View style={styles.container2}>
        <View style={{ width: "50%" ,height:300}}>
          {selectedFlower ? (
            <ChiTiet_DSHoa maHoa={selectedFlower.id} />
          ) : (
            <Text>Phần hiển thị hình ảnh các loài hoa</Text>
          )}
        </View>
        <FlatList data={DSHoa} renderItem={renderFlowerList} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 50,
    marginLeft: 30,
  },
  container2:{
    flexDirection:'row',

  },
  tenHoa: {
    
  }
});
