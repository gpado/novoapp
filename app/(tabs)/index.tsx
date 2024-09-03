import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { Link } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { WebView } from 'react-native-webview';

export default function HomeScreen() {
  const youtubeVideoId = "D05umUHt0Zw";
  const youtubeURL = `https://www.youtube.com/embed/${youtubeVideoId}`;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <ThemedText type="title" style={styles.centeredTitle}>MobCidade</ThemedText>
        </View>
        <View style={styles.videoContainer}>
          <WebView
            source={{ uri: youtubeURL }}
            style={{ width: 370, height: 180 }} 
            allowsFullscreenVideo={true}
            javaScriptEnabled={true}
          />
        </View>
      </View>
      <View style={styles.transportTitleContainer}>
        <Text style={styles.transportTitle}>Principais Transportes</Text>
      </View>
      <ScrollView horizontal={true} style={styles.transportCardContainer}>
        <Link href="/onibus" style={styles.card}>
          <Image source={require('../../assets/images/bus.png')} style={styles.cardImage} />
          <Text style={styles.cardTitle}>Ônibus</Text>
        </Link>
        <View style={styles.card}>
          <Image source={require('../../assets/images/metro.png')} style={styles.cardImage} />
          <Text style={styles.cardTitle}>Metrô</Text>
        </View>
        <View style={styles.card}>
          <Image source={require('../../assets/images/taxi.png')} style={styles.cardImage} />
          <Text style={styles.cardTitle}>Uber</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginTop: 20,
  },
  centeredTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  videoContainer: {
    height: 180,
    width: 370,
  },
  container: {
    backgroundColor: '#5DB075',
    padding: 20,
  },
  transportTitleContainer: {
    paddingLeft: 20,
    paddingTop: 20,
  },
  transportTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  transportCardContainer: {
    padding: 10,
    height: 100,
  },
  card: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    backgroundColor: '#FFF',
    borderRadius: 10,
    elevation: 3,
  },
  cardImage: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
