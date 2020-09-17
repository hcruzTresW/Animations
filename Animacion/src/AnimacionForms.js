import React, {Component} from 'react';
import {
  Animated,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Easing,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
const menu = <Icon name="menu-outline" size={30} color="#3AAACf" />;
const aproved = <Icon name="checkmark-outline" size={30} color="#3AAACf" />;
const pencil = <Icon name="pencil-outline" size={30} color="#3AAACf" />;



const backgroundImage = require('./images/images.jpeg');
export default class AnimationForms extends Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
    this.state = {
      isVisible: false,
      isVisibleProfile: false,
      textoName: 'Chico',
      bred: 'Russian Blue',
      year: '3 years old',
      isVisibleForm: false,
    };
  }

  MuestraAnimacion = () => {
    console.warn('do its work');
    this.setState({
      isVisible: this.state.isVisible ? false : true,
      isVisibleProfile: this.state.isVisibleProfile ? false : true,
      isVisibleForm: this.state.isVisibleForm ? false : true,
    });
    if (!this.state.isVisible) {
      Animated.timing(this.animatedValue, {
        toValue: 1,
        duration: 400,
        easing: Easing.linear,
      }).start();
    } else {
      Animated.timing(this.animatedValue, {
        toValue: 0,
        duration: 400,
        easing: Easing.linear,
      }).start();
    }
  };

  render() {

    const zoomOut = {
      0: {
        opacity: 1,
        scale: 1,
      },
      0.5: {
        opacity: 1,
        scale: 0.3,
      },
      1: {
        opacity: 0,
        scale: 0,
      },
    };
    return (
      <View>
        <View style={styles.navBar}>
          <View>{menu}</View>
          <View style={{paddingTop: 5}}>
            {this.state.isVisibleProfile ? (
              <Text
                style={{color: '#3AAACf', fontWeight: 'bold', fontSize: 20}}>
                Edit Profile
              </Text>
            ) : (
              <Text
                style={{color: '#3AAACf', fontWeight: 'bold', fontSize: 20}}>
                Profile
              </Text>
            )}
          </View>
          <View>
            <TouchableOpacity onPress={() => this.MuestraAnimacion()}>
              {this.state.isVisible ? (
                <View>{aproved}</View>
              ) : (
                <View>{pencil}</View>
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View style={{}}>
          <View>
            <Animated.Image
              source={backgroundImage}
              resizeMode="cover"
              style={{
                borderRadius: 10,
                position: 'absolute',
                left: 10,
                top: 10,
                height: 200,
                width: '40%',
                transform: [
                  {
                    translateX: this.animatedValue.interpolate({
                      inputRange: [0, 0],
                      outputRange: [0, 0],
                    }),
                  },
                  {
                    translateY: this.animatedValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 5],
                    }),
                  },
                  {
                    scaleX: this.animatedValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: [1, 1.8],
                    }),
                  },
                  {
                    scaleY: this.animatedValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: [1, 1.4],
                    }),
                  },
                ],
              }}
            />
          </View>
          <Animated.View>
          <View style={{paddingLeft: '50%', paddingTop: '5%'}}>
            <Text style={styles.title}>Name</Text>
            <Text style={styles.title}>Name</Text>
            <Text style={styles.title}>Name</Text>
          </View>
          </Animated.View>
         
        </View>
        {!this.state.isVisibleForm ? (
          <View style={{marginTop: '60%'}}>
            <View style={{paddingBottom: 15}}>
              <Text style={styles.title}>Genero</Text>
              <Text style={styles.input}>Female</Text>
            </View>
            <View style={{paddingBottom: 15}}>
              <Text style={styles.title}>Weigth</Text>
              <Text style={styles.input}>38 Kg</Text>
            </View>
            <View style={{paddingBottom: 15}}>
              <Text style={styles.title}>Heigth</Text>
              <Text style={styles.input}>61 cm</Text>
            </View>
          </View>
        ) : (
          <View style={{marginTop: '60%'}}>
            <View style={{paddingBottom: 15}}>
              <Text style={styles.title}>Name</Text>
              <Text style={styles.input}>{this.state.textoName}</Text>
            </View>
            <View style={{paddingBottom: 15}}>
              <Text style={styles.title}>Breed</Text>
              <Text style={styles.input}>{this.state.bred}</Text>
            </View>
            <View style={{paddingBottom: 15}}>
              <Text style={styles.title}>Age</Text>
              <Text style={styles.input}>{this.state.year}</Text>
            </View>
            <View style={{paddingBottom: 15}}>
              <Text style={styles.title}>Gender</Text>
              <Text style={styles.input}>Female</Text>
            </View>
            <View style={{paddingBottom: 15}}>
              <Text style={styles.title}>Weigth</Text>
              <Text style={styles.input}>38 Kg</Text>
            </View>
          </View>
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
    marginTop: 10,
  },
  title: {
    paddingLeft: 10,
    color: '#9c9c9c',
  },
  input: {
    width: '90%',
    borderColor: 'black',
    padding: 10,
    color: '#535150',
    fontSize: 20,
  },
});
