import React, { Component } from 'react';
import {
  Animated,
  Dimensions,
  Easing,
  PanResponder,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Icon } from 'react-native-elements';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import cor from '../cores';

const SCREEN_WIDTH = Dimensions.get('window').width;
const FORCE_TO_OPEN_THRESHOLD = SCREEN_WIDTH / 3.5;
const FORCING_DURATION = 350;
const SCROLL_THRESHOLD = SCREEN_WIDTH / 15;
const LEFT_BUTTONS_THRESHOLD = SCREEN_WIDTH / 7;

class Itens extends Component {

  constructor(props) {
    super(props);

    const position = new Animated.ValueXY(0, 0);
    this.scrollStopped = false;

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => false, // we don't want the item to be animated with a touch
      onMoveShouldSetPanResponder: () => true, // we want to animate the item with a movement
      onResponderTerminationRequest: () => false,
      onPanResponderGrant: () => {
        this.position.setOffset({ x: this.position.x._value, y: 0 }); // we specify the offset to continue swiping from the place where user left.
        this.position.setValue({ x: 0, y: 0 }); // clearing the position
      },
      onPanResponderMove: (event, gesture) => {
        if (gesture.dx >= SCROLL_THRESHOLD) {
          this.enableScrollView(true);
          const x = gesture.dx - SCROLL_THRESHOLD;
          this.position.setValue({ x, y: 0 });
        } else if (gesture.dx <= -SCROLL_THRESHOLD) {
          this.enableScrollView(true);
          const x = gesture.dx + SCROLL_THRESHOLD;
          this.position.setValue({ x, y: 0 });
        }
      },
      onPanResponderRelease: (event, gesture) => {
        this.position.flattenOffset(); // adding animated value to the offset value then it reset the offset to 0.
          this.userSwipedRight(gesture);
      },
      onPanResponderTerminate: () => {
        Animated.spring(this.position, {
          toValue: { x: 0, y: 0 }
        }).start();
      }
    });

    this.position = position;
    this.panResponder = panResponder;
  }

  getLeftButtonProps() {
    const opacity = this.position.x.interpolate({
      inputRange: [35, 75, 320],
      outputRange: [0, 1, 0.25]
    });
    const width = this.position.x.interpolate({
      inputRange: [0, 70],
      outputRange: [0, 70]
    });
    return {
      opacity,
      width
    };
  }

  resetPosition() {
    Animated.timing(this.position, {
      toValue: { x: 0, y: 0 },
      duration: 200
    }).start();
  }

  completeSwipe(dimension, callback) {
    const x = dimension === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;
    Animated.timing(this.position, {
      toValue: { x, y: 0 },
      duration: FORCING_DURATION
    }).start(() => this.props.cleanFromScreen(this.props.id));
    callback();
  }

  enableScrollView(isEnabled) {
    if (this.scrollView !== isEnabled) {
      this.props.swipingCheck(isEnabled);
      this.scrollView = isEnabled;
    }
  }

  userSwipedRight(gesture) {
    if (gesture.dx >= FORCE_TO_OPEN_THRESHOLD) {
      this.completeSwipe('right', this.props.leftButtonPressed.bind(this));
    } else if (gesture.dx >= LEFT_BUTTONS_THRESHOLD && gesture.dx < FORCE_TO_OPEN_THRESHOLD) {
      this.showButton('right');
    } else {
      this.resetPosition();
    }
  }

  showButton(side) {
    const x = side === 'right' ? SCREEN_WIDTH / 4 : -SCREEN_WIDTH / 2.5; // 4 from 4.5 // BURASI DEĞİŞTİRİLECEK
    Animated.timing(this.position, {
      toValue: { x, y: 0 },
      duration: 400,
      easing: Easing.out(Easing.quad)
    }).start(() => this.enableScrollView(false));
  }

  render() {
    return (
      <View style={styles.containerNotificacao}> 
        <Animated.View style={[styles.apagar, this.getLeftButtonProps()]} >
          <TouchableOpacity onPress={() => this.completeSwipe('right', () => this.props.leftButtonPressed())}>
            <Icon type="font-awesome" name="trash" />
          </TouchableOpacity>
        </Animated.View>
        <Animated.View // THE CONTENT OF ITEM
          style={[styles.containerTexto, this.position.getLayout()]}
          {...this.panResponder.panHandlers}
        >
          <MaterialCommunityIcons 
            name="face-agent" color={cor.amarelo} size={30} 
            style={{position:'absolute',left: 0, marginLeft:5, marginRight: 10}} 
          />
          <Text style={styles.notificacao}>{this.props.message}</Text>
        </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  apagar: {
    alignItems: 'center',
    backgroundColor: cor.amarelo,
    elevation: 3,
    justifyContent: 'center',
    marginRight: 5,
    paddingHorizontal: 18,
    paddingVertical: 23,
    position: 'absolute'
  },
  containerNotificacao: {
    borderBottomColor: cor.branco,
    borderWidth: 1,
    elevation: 3,
    flexDirection: 'row'
  },
  containerTexto: {
    alignItems: 'center',
    backgroundColor: cor.pretoTransparente,
    elevation: 3,
    flexDirection: 'row', 
    paddingHorizontal: 18,
    paddingVertical: 23,
    width: SCREEN_WIDTH / 1,
    zIndex: 2
  },
  notificacao: {
    color: cor.branco,
    fontSize: 15,
    marginLeft: 20,
    textAlign: 'justify'
  }
});

export default Itens;