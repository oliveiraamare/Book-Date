//https://www.npmjs.com/package/react-native-datepicker

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import DatePicker from 'react-native-datepicker';

import cor from '../estilos/cores'; 
export default class Calendario extends Component {
  render(){
    const { date, onDateChange } = this.props
    return (
      <View style={styles.container}>
        <DatePicker
          style={{width: 400 }}
          date={date}
          onDateChange={onDateChange}
          mode="date"
          androidMode="spinner"
          showIcon= {false}
          placeholder="Quando você nasceu?"
          format="DD-MM-YYYY"
          minDate="01-01-1910"
          maxDate="06-06-2002"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateInput: styles.dateInput,
            dateText: {
              color: cor.branco 
            },
            dateTouchBody: {
             // backgroundColor:'green', 
            },
            placeholderText: {
              color: cor.branco
            }
          }}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create ({
 container: {  
    alignItems: 'flex-start',
    alignSelf: 'center', 
    justifyContent:'flex-start', 
    marginBottom: 10, 
    marginTop: 5
  },
  dateInput: {
    alignItems: 'flex-start',
    alignSelf: 'center',
    borderTopColor: 'transparent',
    borderBottomWidth: 1, 
    borderColor: cor.branco, 
    justifyContent:'center',   
    height: 50,  
    paddingLeft: 40,
    paddingRight: 20  
  }
})