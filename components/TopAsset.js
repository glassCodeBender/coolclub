import * as React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';

export default class TopAsset extends React.Component {

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.header}>The Cool Club </Text>
      <Text style={styles.paragraph}> </Text>
        <Text style={styles.paragraph}>
          A Secret Organization
        </Text>
        <Image style={styles.logo} source={{uri: 'https://i.dlpng.com/static/png/473654_preview.png'}}/>
        <Text style={styles.paragraph}></Text>
      </View>
    );
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
