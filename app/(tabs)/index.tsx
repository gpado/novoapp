import { StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { WebView } from 'react-native-webview';

export default function HomeScreen() {
  const youtubeVideoId = "D05umUHt0Zw"; // ID do vídeo do YouTube
  const youtubeURL = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&controls=0&loop=1&playlist=${youtubeVideoId}`;

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <ThemedText type="title" style={styles.centeredTitle}>MobCidade</ThemedText>
      </View>
      <View style={styles.videoContainer}>
        <WebView
          source={{ uri: youtubeURL }}
          style={{ flex: 1 }}
          allowsFullscreenVideo={true}
          javaScriptEnabled={true}
        />
      </View>
    </View>



  );
}

const styles = StyleSheet.create({
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
  videoContainer: {
    height: 200,
    width: '100%',
  },
  container:{
    backgroundColor: '#5DB075', // Cor de fundo verde
    padding: 20, // Espaçamento interno
  }
});
