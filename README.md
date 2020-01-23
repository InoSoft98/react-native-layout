# react-native-layout

## Getting started

`$ npm install react-native-layout --save`
or

`$ npm install https://github.com/InoSoft98/react-native-layout --save`

### Mostly automatic installation

`$ react-native link react-native-layout`

## Usage
```javascript
import React from 'react';
import { layout } from 'react-native-layout';
import { View, Text } from 'react-native';

// TODO: What to do with the module?
export default class App extends React.Component {
  render() {
    return <View style={{ width: layout.wt(100), height: layout.ht(80) }}>
      <Text>hello</Text>
    </View>
  };
};
