import React from 'react';
import { StyleSheet } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import Frame from '../components/Frame';
import ScrollingGrid from '../components/ScrollingGrid';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  let testArr: { id: string, element: React.ReactElement }[] = [] // ScrollingGrids MUST have an id: element: structure.

  for (let i = 0; i < 40; i++) {
    testArr.push({
      id: "test-" + i,
      element: <Frame gradient='linear-gradient(-45deg, black, 30%, grey)' shadow={0.5} style={{ height: '100%', width: "100%" }} />
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
      <ScrollingGrid
        size={500}
        data={testArr}
        gradient='linear-gradient(45deg, red, 50%, orange)'
        style={{ width: 500, height: 500, top: 0, left: 0, position: 'relative', padding: 0 }}
        numColumns={4}
        cellPadding={14}
        cellMargin={3}
      />
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
