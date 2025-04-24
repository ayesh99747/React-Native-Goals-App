# RNCourse: A React Native Goal Tracking App

This React Native application allows users to create, manage, and track their course goals.  It provides a simple and intuitive interface for adding goals, deleting them, and clearing all goals at once.

<p align="center">
  <img src="screenshots/1 Home Screen - Andorid.png" alt="Home Screen Android" width="45%" style="margin-right: 20px;" />
  <img src="screenshots/1 Home Screen - iOS.png" alt="Home Screen iOS" width="45%" />
</p>
<p align="center"><em>Figure 1: Home Screen on Android (left) and iOS (right)</em></p>

<p align="center">
  <img src="screenshots/2 Adding a Goal - Android.png" alt="Adding a Goal Android" width="45%" style="margin-right: 20px;" />
  <img src="screenshots/2 Adding a Goal - iOS.png" alt="Adding a Goal iOS" width="45%" />
</p>
<p align="center"><em>Figure 2: Adding a Goal on Android (left) and iOS (right)</em></p>

<p align="center">
  <img src="screenshots/3 Goal Shown on Home Screen - Android.png" alt="Goal Display Android" width="45%" style="margin-right: 20px;" />
  <img src="screenshots/3 Goal Shown on Home Screen - iOS.png" alt="Goal Display iOS" width="45%" />
</p>
<p align="center"><em>Figure 3: Goal shown on Home Screen on Android (left) and iOS (right)</em></p>

## Key Features

* **Add Goals:** Easily add new course goals with a user-friendly input form.  Error handling prevents adding empty goals.
* **Delete Goals:** Remove individual goals from the list.
* **Clear All Goals:**  Delete all goals simultaneously.
* **Intuitive UI:** Clean and easy-to-navigate interface built with React Native.
* **Toast Notifications:** Provides visual feedback on successful actions (adding, deleting, clearing goals).


## Technologies Used

* **React Native:**  The core framework for building the mobile application.
* **Expo:** Used for managing the project and simplifying development.
* **JavaScript (ES6+):** The programming language used for the application logic.


## Prerequisites

* **Node.js and npm (or yarn):**  Make sure you have Node.js and npm (or yarn) installed on your system. You can download them from [https://nodejs.org/](https://nodejs.org/).
* **Expo CLI:** Install the Expo CLI globally using npm or yarn:
  ```bash
  npm install -g expo-cli
  ```
  or
  ```bash
  yarn global add expo-cli
  ```


## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository_url>
   ```
2. **Navigate to the project directory:**
   ```bash
   cd rncourse
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```
4. **Start the development server:**
   ```bash
   expo start
   ```
   This will start a development server and open a QR code in your browser. Scan the QR code with the Expo Go app on your mobile device to run the application.  Alternatively, you can run the app on a simulator (Android or iOS) using the Expo CLI commands.


## Usage Examples

* **Adding a Goal:** Open the app, tap the "Add new goal" button. Enter your goal in the text input field and tap "Add Goal".  A toast notification will confirm the addition.
* **Deleting a Goal:** Tap the goal item in the list. A ripple effect confirms the deletion and a toast notification will appear.
* **Clearing All Goals:** Tap the "Clear All" button in the modal.  A toast notification will confirm that all goals have been cleared.


## Project Structure

```
rncourse/
├── assets/              // Contains images and icons.
│   ├── images/
│   │   └── goal.png
│   ├── adaptive-icon.png
│   ├── favicon.png
│   ├── icon.png
│   └── splash-icon.png
├── components/           // Reusable UI components.
│   ├── GoalInput.js
│   └── GoalItem.js
├── App.js                // Main application component.
├── app.json              // Expo configuration file.
├── index.js              // Entry point of the application.
└── package.json          // Project dependencies and scripts.
```

## `package.json` Scripts

* `"start"`: Starts the Expo development server.
* `"android"`: Starts the Expo development server for Android.
* `"ios"`: Starts the Expo development server for iOS.
* `"web"`: Starts the Expo development server for web.


## `app.json` Configuration

This file contains the application's metadata, including the name, version, icons, and splash screen configuration.  Modify this file to customize these aspects of your application.  Refer to the Expo documentation for details on available options.

## License

### Disclaimer

This repository contains code created while following the course  
**"React Native - The Practical Guide"** by **Academind** and **Maximilian Schwarzmüller**,  
available at: [O’Reilly Learning Platform](https://learning.oreilly.com/course/react-native-/9781789139747/)

The content is intended for educational purposes only and closely follows the structure and lessons from the original course.

All rights to the course content and materials belong to **Academind GmbH** and **Maximilian Schwarzmüller**.  
This repository is not affiliated with or endorsed by Academind or O’Reilly.

If you are the content owner and would like this repository modified or removed, please contact me directly.


## Error Messages

* **Empty Goal Error:** If you try to add a goal with an empty text input, a toast message will appear: "Please enter a goal before adding."


## RepopackPy Note

This README was generated from a RepopackPy output file.  This file is a packed representation of the repository's contents and should be treated as read-only. For the latest code changes, refer to the actual code repository.
