import { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, ActivityIndicator } from 'react-native';
import Video from 'react-native-video';

const { width } = Dimensions.get('window');

const Task32 = () => {
  const [videoLoading, setVideoLoading] = useState(true);
  const [showPoster, setShowPoster] = useState(true);

  const videoUri = 'https://www.youtube.com/watch?v=mWZ6b_I-Djg';
  const posterUri = 'https://placehold.co/600x400/AED6F1/2E86C1?text=Video+Loading';

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Video Player with Poster</Text>

      <View style={styles.videoContainer}>
        {videoLoading && (
          <ActivityIndicator size="large" color="#0000ff" style={styles.loadingIndicator} />
        )}

        <Video
          source     = {{ uri: videoUri }}
          controls   = {true}
          paused     = {false}
          repeat     = {true}
          resizeMode = "contain"

          onLoadStart={() => {
            setVideoLoading(true);
            setShowPoster(true);
          }}
          onLoad={() => {
            setVideoLoading(false);
          }}
          onReadyForDisplay={() => {
            setShowPoster(false);
          }}
          onError={(error) => {
            console.error('Video playback error:', error);
            setVideoLoading(false);
            setShowPoster(true);
          }}
          style={styles.videoPlayer}
        />

        {showPoster && (
          <Image
            source={{ uri: posterUri }}
            style={styles.posterImage}
          />
        )}
      </View>

      <Text style={styles.footerText}>Video from URL with a poster image.</Text>
    </View>
  );
};

const colors = {
  backgroundDark: '#000',
  backgroundLight: '#f8f8f8',
  textDark: '#333',
  textLight: '#777',
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.backgroundLight,
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    paddingTop: 50,
  },
  footerText: {
    color: colors.textLight,
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
  },
  headerText: {
    color: colors.textDark,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  loadingIndicator: {
    position: 'absolute',
    zIndex: 1,
  },
  posterImage: {
    height: '100%',
    position: 'absolute',
    resizeMode: 'contain',
    width: '100%',
    zIndex: 2,
  },
  videoContainer: {
    alignItems: 'center',
    backgroundColor: colors.backgroundDark,
    borderRadius: 10,
    height: (width * 0.9) * (9 / 16),
    justifyContent: 'center',
    marginBottom: 20,
    overflow: 'hidden',
    width: width * 0.9,
  },
  videoPlayer: {
    height: '100%',
    width: '100%',
  },
  });

export default Task32;
