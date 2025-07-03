- How to run expo
  to start project = npx expo start

///////////

- navigation
  need both Navigation Container & create Native stack Navigator
- navigation stack
  fist install this
  npm install @react-navigation/native @react-navigation/native-stack
- if using expo
  npx expo install react-native-screens react-native-safe-area-context
  **Navigation container** = required = for a Root wrapper for navigation logic
  **Stack.Navigator** = required = Defines screen stack + transitions

```js
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
```

\///////////////////

- <Stack.Screen name="" component = {}/>
  properties that you need to use are name and component

<!-- icon  -->

npm install react-native-vector-icons

<!-- camera access -->

npx expo install expo-image-picker
npm install --save expo-image-picker

<!-- safeAreaView  -->

npm install react-native-safe-area-context

- R.N safeAreaView limited to ios
- R.N.S.A.C can be used for both ios and android

<!-- Main Page  -->

- Main Page

how to incorporate crud, the save and like feature.

1. add a new useState for like and save

2. Toggle handler
   function that is used to mange state of like and save

3. render like and save inb scroll view
   need to update the map() so that it can now include both the buttons

4. Must update the styles sheet

- Favorites page

1.  update page so that you can use Navigation to update the page.

react native "save" id to photos

async storage
