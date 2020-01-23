# react-native-layout

## Getting started

`$ npm install react-native-layout --save`

### Mostly automatic installation

`$ react-native link react-native-layout`

## Usage
```javascript
import React from 'react';
import { layout } from 'react-native-layout';
import { View, Text } from 'react-native';

// TODO: What to do with the module?
export default class ItemComp extends React.Component {
  render() {
    return <View style={{ width: layout.wt(100), height: layout.ht(80) }}>
      <Text>hello</Text>
    </View>
  };
};
```
