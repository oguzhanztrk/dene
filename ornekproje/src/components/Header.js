

import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={ viewStyle }>
        <Text style={ textStyle }>{props.headerText} </Text>
        </View>
    );
};

const styles = {
    textStyle: {
        fontSize: 50,
        color: 'yellow'
    },
    viewStyle: {
        
        backgroundColor: 'black',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        margintop :15,
        shadowOffset: {widht : 0, height:10},
        shadowOpacity: 10,
         }
};

export default Header;