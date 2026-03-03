npx create-expo-app lesson1 --template
npm i -g @expo/ngrok
npx expo install react-native-web react-dom @expo/metro-runtime
npm install @react-navigation/native @react-navigation/stack
npx expo install react-native-screens react-native-safe-area-context
npm install @expo/ngrok
npx expo start --tunnel
npm install expo@^54.0.0 
npx expo install --fix 
npx expo-doctor
# if duplicated dependencies
npm why react-native 
npm dedupe 
npx expo-doctor