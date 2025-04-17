import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function clearGoalsHandler() {
    props.clearGoalsHandler();
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")} 
          style={styles.image}/>
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="Your Course Goal"
            style={styles.textInput}
            onChangeText={goalInputHandler}
            value={enteredGoalText}
            placeholderTextColor="#ccc"
          />
        </View>

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={addGoalHandler}
              color="#5e0acc"
              style={styles.button}
            />
          </View>

          <View style={styles.button}>
            <Button
              title="Clear All"
              onPress={clearGoalsHandler}
              color="#ff0000"
            />
          </View>

          <View style={styles.button}>
            <Button
              title="Back"
              onPress={props.onCancel}
              color="#f31282"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 16,
    backgroundColor: "#311b6b",
  },
  textInputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    padding: 8,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderRadius: 1,
    backgroundColor: "#f9f9f9", // Light background for text input
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  button: {
    flex: 1,
    width: "50%",
    borderRadius: 6,
    padding: 10,
  },
  buttonContainer: {
    width: "70%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    placeholderTextColor: "#120438",
    borderRadius: 6,
    width: "90%",
    padding: 8,
    marginRight: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});
