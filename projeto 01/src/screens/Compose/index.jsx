import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Compose = ({color="black", text="anything"}) => {
  return (
    <View style={styles.container(color)}>
        <Text style={styles.text}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.compose ({
    container: (color) => ({
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: color,
}),

text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
}

});

export default Compose;