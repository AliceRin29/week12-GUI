import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
const LotsOfstyle=()=>{
  return(
<View style={styles.container}>
  <Text style={styles.bigBlue}>Yuumi</Text>
  <Text style={{color:'blue',fontSize:30}}>cat</Text>
  <Text style={{color:'red',fontSize:18,fontWeight:'bold'}}> in the league</Text>
  <Text style={{color:'red',fontSize:18}}>of</Text>
  <Text style={{color:'red',fontSize:18,fontWeight:'bold'}}>legend</Text>
</View>
  )
}

const styles=StyleSheet.create({
  container:{
    marginTop:50,
    alignItems:'center',
  },
  bigBlue:{
    color:'green',fontSize:30,fontWeight:'bold'
  }
})
export default LotsOfstyle