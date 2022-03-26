import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const Task = ({ text }) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
      <TouchableOpacity style={styles.square}></TouchableOpacity>

        <Text style={styles.itemText}>{text}</Text>
      </View>
      <View style={styles.citcular}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding:15,
    borderRadius:10,
    flexDirection:'row' ,
    alignItems:'center' ,
    justifyContent:'space-between',
    marginBottom:20,

  },
  itemLeft: {
      flexDirection:'row' ,
      alignItems:'center' ,
      flexWrap:'wrap' ,
      
  },
  square: {
      width:24,
      height:24,
      backgroundColor:'rgba(85, 188, 246, 0.4)' ,
      borderRadius:5,
      opacity:0.4,
      marginRight:15,

  },
  itemText: {
      maxWidth:'80%'
  },
  citcular: {
    width:12,
    height:12,
    borderColor:'#55BCF6',
    borderWidth:2,
    borderRadius:5,



  },
});

export default Task;
