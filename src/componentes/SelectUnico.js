import React, { Component } from 'react';
import { View } from 'react-native'
import MultiSelect from 'react-native-multiple-select';

//https://www.npmjs.com/package/react-native-multiple-select

const items = 
  [
    { id: 'leitor', name: 'Leitor', color:'red' },  
    { id: 'leitora',name: 'Leitora' }
  ];

export default class SelectUnico extends Component {

  state = {
    selectedItems :[]
  };

  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems });
  }

  render() {
    const { selectedItems } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MultiSelect
          hideTags
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          selectText="Como se identifica?"
          searchInputPlaceholderText="Search Items..."
          onChangeInput={ (text)=> console.log(text)}
          single={true}
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#CCC"
          itemTextColor="#000"
          displayKey="name"
          searchInputStyle={{ backgroundColor: 'black' }}
          styleDropdownMenuSubsection  ={{ backgroundColor: 'black' }}
          styleInputGroup ={{ backgroundColor: 'black' }}
          styleRowList={{ backgroundColor: '#CCC' }}
          styleTextDropdown ={{ backgroundColor: 'black' }}
          styleDropdownMenu={{backgroundColor: 'black'}}
          textColor='white'
          hideSubmitButton={true}
          hideDropdown={true}
          iconSearch={false}         
        />
      </View>
    )
  }
}