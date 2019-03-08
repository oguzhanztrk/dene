

import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import Liste from './src/components/Liste';

const App = () => (
   <View style = {{ flex: 1 }}>
   <Header headerText={'Ornek Proje'} />
   <Liste />
   </View>
   );



AppRegistry.registerComponent('ornekproje', () => App);
