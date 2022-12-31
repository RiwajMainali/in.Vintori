import { StyleSheet } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import Frame from '../components/Frame';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
      <Frame size={100} gradient='linear-gradient(45deg, red, 50%, orange)' shadow={0.5} style={{ top: 0, left: 0, position: 'relative' }}>
        <Frame size={50} gradient='linear-gradient(45deg, pink, 50%, blue)' shadow={0.5} style={{ top: '50%', left: '50%', position: 'absolute', marginRight: '-50%', transform: 'translate(-50%, -50%)' }} />
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
