import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, ActivityIndicator, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import { ThemedText } from '@/components/ThemedText';
import { LocationObject } from 'expo-location'; // Ensure that LocationObject is correctly imported

export default function TabTwoScreen() {
  // Explicitly define the type for location and errorMsg
  const [location, setLocation] = useState<LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          setLoading(false);
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      } catch (error) {
        setErrorMsg('Failed to retrieve location');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <ThemedText type="title" style={styles.centeredTitle}>MobCidade</ThemedText>
      </View>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : location ? (
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.mapStyle}
          initialRegion={{
            latitude: -23.5505,  // Latitude de São Paulo
            longitude: -46.6333, // Longitude de São Paulo
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        
          }}
        />
      ) : (
        <Text>{errorMsg || 'Unable to display the map'}</Text> // Using Text instead of ThemedText for simplicity
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 20,
    flex: 1,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginTop: 20
  },
  centeredTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  mapStyle: {
    width: Dimensions.get('window').width - 40,
    flex: 1,
  },
});
