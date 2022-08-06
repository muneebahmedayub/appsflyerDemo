import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import appsFlyer from 'react-native-appsflyer';

appsFlyer.initSdk(
  {
    devKey: 'qyqrPbidC6srkE7MduvbmS',
    isDebug: false,
  },
  (result) => {
    console.log({ result });
  },
  (error) => {
    console.error(error);
  }
);

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
