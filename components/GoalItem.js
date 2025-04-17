import { StyleSheet, View, Text, Pressable, } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={props.onDeleteItem.bind(this, props.id)}
        android_ripple={{ color: "#dddddd" }}
        style={({ pressed }) => (pressed ? styles.pressedItem : null)}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    padding: 8,
    color: "#fff",
    fontStyle: "bold",
    fontSize: 16,
  },
  pressedItem: {
    opacity: 0.5,
    backgroundColor: "#5e0acc",
    borderRadius: 6,
  },
});
