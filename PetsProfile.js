import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import{EvilIcons} from "@expo/vector-icons";


export default function PetsProfile({name,type,age}) {
  return (
    <View style={styles.container}>
      <View style={styles.petContainer}>
          <Image source={require("./assets/pets.jpg")} style={styles.Image}/>
          <View style={styles.containerInfo}>
           <Text style={styles.name}>{name}</Text>
              <Text style={styles.info}>{type}</Text>
               <Text style={styles.info}>{age}</Text>
              <View style={styles.icon}>
                <EvilIcons name="location" size={18} color="#7e7f82"/><Text style={styles.location}>Brookyln</Text>
              </View>
        
              
              
              
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    marginTop: 25
    
  },
  Image : {
    width: 150,
    height: 150,
    borderRadius: 10
  },
  containerInfo: {
    width: 150,
    height: 100,
    borderColor: '#ebe6e6',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    
    
  },
  petContainer: {
    flexDirection: 'row',
    alignItems:'center'
  },
  name: {
    color: '#091675',
    fontSize: 18,
    fontWeight: "bold",
    paddingTop: 2
    
  },
  info: {
    fontSize: 12,
    color: '#7e7f82',
    paddingTop: 2 
  },
  icon: {
    flexDirection:'row',
    marginLeft: -6,
    paddingTop: 5 
    
  },
  location: {
    marginLeft: 5,
    color:"#7e7f82",
    marginTop: -2,
    fontSize: 12,
  },
  
  
  
  
});
