import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  View
} from 'react-native';
import {Icon} from 'react-native-elements';
 
import TagInput from 'react-native-tags-input';
import ReactChipsInput from 'react-native-chips';

 
const mainColor = '#3ca897';
const WHITE = '#ffffff';
const PINK = '#ff33cc';
 
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: {
        tag: '',
        tagsArray: []
      },
      tagsColor: mainColor,
      tagsText: '#fff',
    isFocused: false

    };
  }
  
  updateTagState = (state) => {
      this.setState({
        tags: state
      })
    };

 
  render() {
    const { isFocused } = this.state.isFocused;
    const { inputStyle, onBlur, onFocus, placeHolder, ...otherProps } = this.props;
    return (
      <View style={styles.container}>
      <TagInput
          updateState={this.updateTagState}
          tags={this.state.tags}
          placeholder="Tags..."                            
          label='Press comma & space to add a tag'
          labelStyle={{color: 'white'}}
          leftElement={<Icon name={'face'} type={'material-io'} color={'red'}/>}
          leftElementContainerStyle={{marginLeft: 3}}
          containerStyle={{width: (Dimensions.get('window').width - 40)}}
          inputContainerStyle={[styles.textInput, {backgroundColor: 'transparent', borderBottomWidth: 1, borderColor:'pink'}]}
          underlineColorAndroid={ this.state.isFocused ? 'pink' : 'red'}
          inputStyle={{color: this.state.tagsText}}
          onFocus={() => this.setState({tagsColor: 'red', tagsText: 'brown' , borderColor:'pink', underlineColorAndroid:'white'})}
          onBlur={() => this.setState({tagsColor: 'purple', tagsText: 'blue'})}
          autoCorrect={false}
          tagStyle={styles.tag}
          tagTextStyle={styles.tagText}
          
          keysForTag={'return'}/>
          <ReactChipsInput
          chipStyle={{backgroundColor: 'blue', borderBottomWidth: 1, borderColor:'pink', color:'red'}}
          />
          
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  textInput: {
      height: 40,
      borderColor: 'transparent',
      borderBottomWidth: 1,
      
      marginTop: 8,
      borderRadius: 5,
      padding: 3,
    },
    tag: {
        backgroundColor: 'red'
      },
    tagText: {
        color: mainColor
      },
});