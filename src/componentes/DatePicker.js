import React, { Component } from 'react';
import {View, StyleSheet} from 'react-native';
import DatePicker from 'react-native-datepicker';

//https://www.npmjs.com/package/react-native-datepicker
 
export default class Calendario extends Component {
  constructor(props){
    super(props)
    //set value in state for initial date
    this.state = {date:''}
  }
 
  render(){
    return (
      <View style={styles.container}>
        <DatePicker
          style={{width: 400 }}
          date={'Quando você nasceu?', this.state.date}
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
            dateInput: {
              alignItems: 'flex-start',
              alignSelf: 'center',
              borderTopColor: 'transparent',
              borderBottomWidth: 1, 
              borderColor: 'white', 
              justifyContent:'center',   
              height: 50,  
              paddingLeft: 40,
              paddingRight: 20 ,   
            },
            dateText: {
              color:'white', 
            },
            dateTouchBody: {
             // backgroundColor:'green', 
            },
            placeholderText:{
              color:'white'
            }
          }}
          onDateChange={(date) => {this.setState({date: date})}}
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
  }
})