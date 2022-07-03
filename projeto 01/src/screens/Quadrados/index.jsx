import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

const Quadrados = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ height: 100, width: 100, backgroundColor: "black" }} />
        <View style={{ height: 100, width: 100, backgroundColor: "blue" }} />
      </View>
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: "red",
          alignSelf: "center",
        }}
      />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ height: 100, width: 100, backgroundColor: "orange" }} />
        <View style={{ height: 100, width: 100, backgroundColor: "violet" }} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: "#fff",
    // alignItems: 'center',
    justifyContent: "space-between",
  },
});

export default Quadrados