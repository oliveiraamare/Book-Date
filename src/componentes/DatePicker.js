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
    alignSelf: 'center', 
    marginBottom: 10, 
    marginTop: 5
  },
  dateInput: {
    alignItems: 'flex-start',
    borderBottomWidth: 1, 
    borderColor: cor.branco, 
    borderTopColor: 'transparent',
    borderLeftWidth: 0,
    borderRightWidth : 0,
    height: 50,  
    margin: 40,
    paddingLeft: 15
  }
})