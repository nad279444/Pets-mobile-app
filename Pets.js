import React from "react";
import { View, FlatList } from "react-native";
import PetsProfile from "./PetsProfile";

export default function Pets() {
  const PetsData = [
    { name: "Blaze", type: "Dog", age: "2 years old", key: 45344657687868 },
    { name: "Marco", type: "Dog", age: "4 years old", key: 45344632578186 },
    { name: "Polo", type: "Dog", age: "10 years old", key: 23454465766709 },
    { name: "Libra", type: "Dog", age: "5 years old", key: 34465745665286 },
    { name: "Santa", type: "Dog", age: "6 years old", key: 45677467345569 },
  ];

  return (
    <View>
      <FlatList
        data={PetsData}
        renderItem={({ item }) => {
          return <PetsProfile name={item.name} type={item.type} age={item.age} />
            
          ;
        }}
        keyExtractor={(item)=> item.key}
      />
    </View>
  );
}
