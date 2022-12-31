import { StyleSheet } from 'react-native';
import Frame from '../components/Frame';
import ScrollingGrid from '../components/ScrollingGrid';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
      <Frame gradient='linear-gradient(45deg, red, 50%, orange)' shadow={0.5} style={{ width: 100, height: 100, position: 'relative' }}>
        <Frame gradient='linear-gradient(45deg, pink, 50%, blue)' shadow={0.5} style={{ width: 25, height: 25, top: '50%', left: '50%', position: 'absolute', marginRight: '-50%', transform: 'translate(-50%, -50%)' }} />
      </Frame>
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
