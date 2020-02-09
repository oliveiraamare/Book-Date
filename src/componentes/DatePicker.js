import React, { Component } from 'react';
import {View, StyleSheet} from 'react-native';
import DatePicker from 'react-native-datepicker';
 
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
            dateTouchBody: {
             // backgroundColor:'green', 
            },
            dateText: {
              color:'white', 
            },
            dateInput: {
              alignItems: 'flex-start',
              alignSelf: 'center',
              borderBottomWidth: 1, 
              borderColor: '#CCCCCC', 
              borderLeftWidth: 0,  
              borderRightWidth: 0,
              borderTopWidth: 1, 
              justifyContent:'center',   
              height: 60,  
              paddingLeft: 40,
              paddingRight: 20 ,  
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
    flex: 1,    
    justifyContent:'flex-start', 
    marginBottom: 20, 
    marginTop: 10
  }
})