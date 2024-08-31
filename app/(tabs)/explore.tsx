import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, ActivityIndicator, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import { ThemedText } from '@/components/ThemedText';
import { LocationObject } from 'expo-location';

export default function TabTwoScreen() {
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

  const renderContent = () => {
    if (loading) {
      return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (location) {
      return (
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.mapStyle}
          initialRegion={{
            latitude: -23.5505,
            longitude: -46.6333,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      );
    }

    return <Text>{errorMsg || 'Unable to display the map'}</Text>;
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <ThemedText type="title" style={styles.centeredTitle}>MobCidade</ThemedText>
      </View>
      {renderContent()}
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
