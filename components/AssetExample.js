import * as React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';

export default class AssetExample extends React.Component {

  render() {
// https://media.giphy.com/media/26n6B5rXfGDfpDpe0/giphy.gif
// https://i.dlpng.com/static/png/473654_preview.png
// https://outdoorindustry.org/wp-content/themes/outdoorindustry/2016-annual-report/images/higgens.png
// https://media.giphy.com/media/1ntLC9V0TGkEw/giphy.gif
// https://media.giphy.com/media/t09TLX9ca7Cw0/giphy.gif (chess)
// https://media.giphy.com/media/AKm0EIVA53Fe/giphy.gif (guitar)
// https://media.giphy.com/media/RJrjuDwmAtLhe/giphy.gif (bear)

// A prop is a value (or set of values.) passed to a component based on the state of the program that is // used to customize how the component sent back to the main application is rendered. 

if(this.props.isInTheClub){
    return (
      <View style={styles.container}>
      <Text style={styles.header}>The Cool Club </Text>
      <Text style={styles.paragraph}> </Text>
        <Text style={styles.paragraph}>
          A Secret Organization
        </Text>
        <Image style={styles.logo} source={{uri: "https://media.giphy.com/media/26n6B5rXfGDfpDpe0/giphy.gif"}}/>
        <Text style={styles.paragraph}></Text>
      </View>
    );
    }else{
      return (
        <View style={styles.container}>
      <Text style={styles.header}>The Cool Club </Text>
      <Text style={styles.paragraph}> </Text>
        <Text style={styles.paragraph}>
          A Secret Organization
        </Text>
        <Image style={styles.logo} source={{uri: "https://outdoorindustry.org/wp-content/themes/outdoorindustry/2016-annual-report/images/higgens.png"}}/>
        <Text style={styles.paragraph}></Text>
      </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
  header: {
    margin: 0, 
    marginTop: 10,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph: {
    margin: 8,
    marginTop: 0,
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 148,
    width: 148,
  }
});