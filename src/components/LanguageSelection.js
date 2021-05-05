import {ScrollView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {changeLanguage, t} from '../messages';
import {List} from 'react-native-paper';
import LocalStorage from '../LocalStorage';

const languageOptions = [
  {label: 'english', locale: 'en'},
  {label: 'hindi', locale: 'hi_In'}
];

const styles = StyleSheet.create({
  commonItem: {
    marginTop: 10,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  selectedItem: {
    backgroundColor: '#38A160',
  },
  nonSelectedItem: {
    backgroundColor: '#F4F5F6',
  },
  commonAnswerText: {
    fontSize: 30,
    alignSelf: 'center',
  },
  selectedAnswerText: {
    color: '#FFFFFF',
  },
  nonSelectedAnswerText: {
    color: '#192734',
  },
});

export default ({selectedLanguageLocale, onLanguageSelect}) => {
  const [currentLanguageLocale, setLanguageLocale] = useState(
    selectedLanguageLocale,
  );

  const chooseLanguage = function (lang) {
    LocalStorage.languageSelected(lang.locale).then(() => {
      changeLanguage(lang.locale);
      setLanguageLocale(lang.locale);
      onLanguageSelect();
    });
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{marginTop: 30}}>
      {languageOptions.map(language => {
        let isSelected = language.locale === currentLanguageLocale;
        return (
          <List.Item
            key={language.locale}
            title={t(language.label)}
            style={[
              styles.commonItem,
              isSelected ? styles.selectedItem : styles.nonSelectedItem,
            ]}
            titleStyle={[
              styles.commonAnswerText,
              isSelected
                ? styles.selectedAnswerText
                : styles.nonSelectedAnswerText,
            ]}
            onPress={() => chooseLanguage(language)}
          />
        );
      })}
    </ScrollView>
  );
};
