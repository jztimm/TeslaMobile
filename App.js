import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Cars from './components/CarItem/Cars';

export default function App() {
  return (
    <View style={styles.container}>
      <Cars
        name={"Model 3"}
        tagline={"Order Online for "}
        taglineCTA={"Touchless Delivery"}
        image={require('./assets/images/Model3.jpeg')}
      />
      
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
  }
});
