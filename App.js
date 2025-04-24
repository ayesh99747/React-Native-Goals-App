/*
  * App.js
  * This is the main entry point of the React Native application.
*/
import { useState } from "react";
import { StyleSheet, ToastAndroid, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  // State to manage the visibility of the modal and the list of goals
  const [modalIsVisible, setModalIsVisible] = useState(false);
  // State to manage the list of course goals
  const [courseGoals, setCourseGoals] = useState([]);

  /*
   * Function to clear all goals from the list
   * It sets the courseGoals state to an empty array and shows a toast message
   */
  function clearGoalsHandler() {
    setCourseGoals([]);
    ToastAndroid.show("All goals cleared successfully.", ToastAndroid.SHORT);
    setModalIsVisible(false);
  }

  /*
   * Function to delete a goal from the list
   * It filters out the goal with the specified id and updates the courseGoals state
   * It also shows a toast message indicating successful deletion
   */
  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
    ToastAndroid.show("Goal deleted successfully.", ToastAndroid.SHORT);
  }
  /*
   * Function to start adding a new goal by making the modal visible
   */
  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  /*
   * Function to end adding a goal by making the modal invisible
   */
  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  /*
   * Function to add a new goal to the list
   * It checks if the entered goal text is not empty before adding it
   * If the text is empty, it shows a toast message and prevents adding
   */
  function addGoalHandler(enteredGoalText) {
    if (enteredGoalText.trim().length === 0) {
      ToastAndroid.show(
        "Please enter a goal before adding.",
        ToastAndroid.SHORT
      );
      return; // Prevent adding empty goals
    }
    // Add the new goal to the list
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    setModalIsVisible(false);
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add new goal"
          color="#5e0acc"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
          clearGoalsHandler={clearGoalsHandler}
          isVisible={modalIsVisible}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
});
