import * as React from 'react';
import { Text, View, StyleSheet, Image, Button, Switch} from 'react-native';
import { Constants } from 'expo';

// You can import from local files
import AssetExample from './components/AssetExample';
import TopAsset from './components/TopAsset';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
    
  state = { isInTheClub: false }
    
  // when the state changes, the boolean used to determine is button is pressed changes. 
  changeImage = () => {
    this.setState( prevState => ({
      isInTheClub: !prevState.isInTheClub,
    }) )
  }

 // When we pass AssetExample we also pass a prop. 
  render() {
    return (
      <View style={styles.container2}>
        <Image style={styles.icon} source={{uri: 'https://png2.kisspng.com/sh/f0f90aa13f604e0513e74031bb6d80e1/L0KzQYm3VMA5N6RBfZH0aYP2gLBuTfV3cZ0yfetuLX7kirL5TfhidaRmReVEbXLyfH77lgJsNWZme9MCM3LpQoi7hMc4Nmg4TqgAMEm8QYa5U8IyP2Q5S6MBMT7zfri=/kisspng-evil-eye-nazar-hamsa-symbol-turk-5aca73bf274d77.736650991523217343161.png'}} />
        <Card>
          <AssetExample isInTheClub={this.state.isInTheClub}/>
        </Card>
        <Text />
        <Text />
         <Text style={styles.paragraph}> Join the Club </Text>
        <Switch style={styles.icon} value={this.state.isInTheClub} onValueChange={() => this.changeImage()} /> 
      </View>
    )
  }
} // END Class

// '#43485F' '#ecf0f1'
const styles = StyleSheet.create({
  container2: {
    flex: 1, 
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ECEFFF',
    padding: 10,
  },
  paragraph: {
    margin: 24,
    fontSize: 28,
    fontFamily: 'verdana',
    fontWeight: 'bold',
    textAlign: 'center',
  },
    icon: {
    height: 40,
    width: 40,
    padding: 30,
    resizeMode: 'contain',
    alignSelf: 'center',
  }
});