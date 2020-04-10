import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import TagInput from 'react-native-tags-input';

const PINK = '#ff33cc';
const WHITE = '#ffffff';
  
export default class Tag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: {
        tag: '',
        tagsArray: []
      },
      isFocused: false
    };
  }
  
  updateTagState = (state) => {
    this.setState({
      tags: state
    })
  };
  
  handleFocus = event => {
    this.setState({ isFocused: true });
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  };

  handleBlur = event => {
    this.setState({ isFocused: false });
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  };

  render() {
    const { isFocused } = this.state;
    const { icon, label, placeholder, containerStyle, style, onBlur, onFocus, ...otherProps } = this.props;
    return (
      <View style={style,styles.container}>
        <TagInput
          updateState={this.updateTagState}
          tags={this.state.tags}
          leftElement={icon}
          leftElementContainerStyle={{marginLeft: 3}}
          label={label}
          labelStyle={{color: '#ff33cc', marginLeft: 10}}
          placeholder={placeholder}    
          placeholderTextColor={WHITE}  
          containerStyle={containerStyle}
          style={styles.textInputFocused} 
          tagStyle={styles.tag}
          tagTextStyle={styles.tagText}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          underlineColorAndroid={
            isFocused ? PINK : WHITE
          }
          keysForTag={','}
          {...otherProps} 
        />   
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flex: 1
  },
  tag: {
    backgroundColor: PINK,
    borderColor: PINK, 
    height: 40
  },
  tagText: {
    color: WHITE
  },
  textInputFocused: {
    color: WHITE,
    fontSize: 15,      
    marginBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'justify'
  },
});