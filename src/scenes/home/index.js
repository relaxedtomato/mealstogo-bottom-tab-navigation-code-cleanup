import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import TopBar from '~/components/TopBar';
import RestaurantList from './components/RestaurantList';
import RestaurantMap from '~/scenes/map';
import { Colors } from '~/styles';

const HEIGHT = 55;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topbar: {
    height: HEIGHT,
    // Note: only works on Android
    marginTop: StatusBar.currentHeight,
  },
  content: {
    flex: 1,
    backgroundColor: Colors.lightGray,
  },
});

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topbar}>
        <TopBar />
      </View>
      <View style={styles.content}>
        <RestaurantMap />
      </View>
    </SafeAreaView>
  );
}
