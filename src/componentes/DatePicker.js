//https://www.npmjs.com/package/react-native-datepicker

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import DatePicker from 'react-native-datepicker';

import cor from '../estilos/cores'; 
export default class Calendario extends Component {
  render(){
    const { date, onDateChange, placeholder, format, dateInputStyle } = this.props
    return (
      <View style={styles.container}>
        <DatePicker
          style={{width: 400 }}
          date={date}
          onDateChange={onDateChange}
          mode="date"
          androidMode="spinner"
          showIcon= {false}
          placeholder={placeholder}
          format="YYYY-MM-DD"
          minDate="1910-01-01"
          maxDate="2002-06-06"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateInput: dateInputStyle,
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
  }
})