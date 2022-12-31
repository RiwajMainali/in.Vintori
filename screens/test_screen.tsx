import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import CustomButton from '../components/customButton';

export default function TestScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Testing Tab</Text>
      <Text>henlo</Text>
      <Text style={styles.container}>henlo henlo</Text>
      <CustomButton text={'add'} />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/test_Screen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
