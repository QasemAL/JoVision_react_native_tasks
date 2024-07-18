import React, { useRef, useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';

const Task33 = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoSource = require('../resources/Videos/videoplayback.mp4');
  const posterSource = require('../resources/Images/Poster.jpg');

  // Resolve asset source to get the URI
  const videoUri = Image.resolveAssetSource(videoSource).uri;
  const posterUri = Image.resolveAssetSource(posterSource).uri;

  const onBuffer = () => {
    console.log('Video is buffering');
  };

  const onError = (error) => {
    console.error('Video error:', JSON.stringify(error));
  };

  const handlePosterPress = () => {
    setShowVideo(true);
    setIsPlaying(true);
  };

  const handleVideoPress = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <View style={styles.container}>
      {showVideo ? (
        <TouchableOpacity onPress={handleVideoPress}>
          <Video
            source={{ uri: videoUri }}
            onBuffer={onBuffer}
            onError={onError}
            style={styles.backgroundVideo}
            poster={posterUri}
            posterResizeMode="cover"
            repeat
            paused={!isPlaying}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={handlePosterPress}>
          <Image source={{ uri: posterUri }} style={styles.poster} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundVideo: {
    width: 300,
    height: 300,
  },
  poster: {
    width: 300,
    height: 300,
  },
});

export default Task33;