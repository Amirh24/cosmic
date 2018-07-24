// Application Starter
import App from "./app";
import { Platform, AppRegistry } from "react-native";

// Register Application
AppRegistry.registerComponent('cosmic', () => App);
if (Platform.OS === 'web') {
  AppRegistry.runApplication('cosmic', {
    rootTag: document.getElementById('root')
  });
}
