import React, {useEffect} from 'react';
import {Button, Text} from 'react-native-paper';
import {Dimensions, View, StyleSheet} from 'react-native';
import HandShow from '../assets/handShow.svg';
import messages from '../domain/messages';
import {resetCalculator} from '../actions/form';
import {connect} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';

const styles = StyleSheet.create({
  wrapper: {flex: 1, alignItems: 'center', backgroundColor: 'white'},
  welcomeMessage: {
    color: '#2A4965',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 2,
  },
  title: {
    fontWeight: 'bold',
    color: '#2A4965',
    fontSize: 45,
    textAlign: 'center',
  },
  subtitle: {
    color: '#2A4965',
    fontSize: 32,
    textAlign: 'center',
    marginTop: 2,
  },
  pushDown: {marginTop: 'auto'},
  buttonStyle: {width: '100%', borderRadius: 0},
});
const {width} = Dimensions.get('window');

const Home = ({navigation, resetCalculator}) => {
  useEffect(() => navigation.addListener('focus', resetCalculator), []);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.welcomeMessage}>Welcome to</Text>
      <Text style={styles.title}>{messages.title}</Text>
      <Text style={styles.subtitle}>{messages.subTitle}</Text>
      <View style={styles.pushDown}>
        <HandShow height={width * 0.7} width={width * 0.8} />
      </View>
      <Button
        icon="arrow-right"
        style={styles.buttonStyle}
        contentStyle={{width: '100%', height: 70, flexDirection: 'row-reverse'}}
        labelStyle={{fontSize: 20}}
        color="#2A4965"
        mode={'contained'}
        onPress={() => {
          navigation.navigate('Questionnaire');
        }}>
        Get started
      </Button>
    </View>
  );
};

export default connect(null, {resetCalculator})(Home);
