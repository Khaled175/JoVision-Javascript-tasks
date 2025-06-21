import { useState, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, ActivityIndicator, Pressable } from 'react-native';
import Video from 'react-native-video';

const { width } = Dimensions.get('window');

const Task33 = () => {
  const videoRef = useRef(null);

  const [videoLoading, setVideoLoading] = useState(true);
  const [showPoster, setShowPoster] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const videoUri = 'https://www.youtube.com/watch?v=mWZ6b_I-Djg';
  const posterUri = 'https://placehold.co/600x400/AED6F1/2E86C1?text=Video+Loading';

  const togglePlayPause = () => {
    if (!videoLoading) {
      setIsPlaying(prev => !prev);
    }
  };

  return (
    <View style = {styles.container}>
      <Text style = {styles.headerText}>Video Player with Custom Controls</Text>

      <Pressable onPress = {togglePlayPause} style = {styles.videoContainer}>
        {videoLoading && (
          <ActivityIndicator size="large" color="#0000ff" style={styles.loadingIndicator} />
        )}

        <Video
          ref           = {videoRef}
          source        = {{ uri: videoUri }}
          controls      = {false}
          paused        = {!isPlaying}
          repeat        = {true}
          resizeMode    = "contain"

          onLoadStart   = {() => {
            setVideoLoading(true);
            setShowPoster(true);
          }}
          onLoad = {() => {
            setVideoLoading(false);
          }}
          onReadyForDisplay = {() => {
            setShowPoster(false);
            setIsPlaying(true);
          }}
          onError = {(error) => {
            console.error('Video playback error:', error);
            setVideoLoading(false);
            setShowPoster(true);
          }}
          style = {styles.videoPlayer}
        />

        {showPoster && (
          <Image
            source={{ uri: posterUri }}
            style={styles.posterImage}
          />
        )}

        {!isPlaying && !videoLoading && !showPoster && (
          <View style={styles.playPauseOverlay}>
            <Text style={styles.playPauseIcon}>▶️</Text>
          </View>
        )}
        {isPlaying && !videoLoading && !showPoster && (
          <View style={styles.playPauseOverlay}>
            <Text style={styles.playPauseIcon}>⏸️</Text>
          </View>
        )}
      </Pressable>

      <Text style={styles.footerText}>Tap video to play/pause. Native controls disabled.</Text>
    </View>
  );
};

const colors = {
  backgroundLight: '#f8f8f8',
  backgroundDark: '#000',
  textDark: '#333',
  textLight: '#777',
  overlayBackground: 'rgba(0,0,0,0.4)',
  iconColor: '#fff',
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
  playPauseIcon: {
    color: colors.iconColor,
    fontSize: 60,
  },
  playPauseOverlay: {
    alignItems: 'center',
    backgroundColor: colors.overlayBackground,
    height: '100%',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
    zIndex: 3,
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

export default Task33;
