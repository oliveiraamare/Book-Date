import React from 'react';
import { LayoutAnimation, ScrollView, UIManager } from 'react-native';

import Item from './item';

class List extends React.Component {

  state = {
    data: this.props.data,
    swiping: false
  }

  componentWillUpdate() {
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    LayoutAnimation.spring();
  }

  cleanFromScreen(id) {
    const data = this.state.data.filter(item => {
      return item.id !== id;
    });
    this.setState({ data });
  }

  renderItems() {
    return this.state.data.map((item) => {
      return (
        <Item
          key={item.id}
          swipingCheck={(swiping) => this.setState({ swiping })}
          message={item.message}
          id={item.id}
          cleanFromScreen={(id) => this.cleanFromScreen(id)}
          leftButtonPressed={() => alert('Notificação apagada')}
        />
      );
    });
  }

  render() {
    return (
      <ScrollView scrollEnabled={!(this.state.swiping)}>
        {this.renderItems()}
      </ScrollView>
    );
  }
}

export default List;