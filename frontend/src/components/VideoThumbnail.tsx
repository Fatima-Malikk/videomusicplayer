import React from 'react';
import {View, Image, Text} from 'react-native';
import {tailwind} from 'tailwind-rn';

interface VideoThumbnailProps {
  thumbnailUri: string;
  title: string;
}

const VideoThumbnail: React.FC<VideoThumbnailProps> = ({
  thumbnailUri,
  title,
}) => {
  return (
    <View
      style={tailwind('w-40 h-24 bg-gray-900 rounded-md overflow-hidden mr-4')}>
      <Image source={{uri: thumbnailUri}} style={tailwind('w-full h-full')} />
      <View
        style={tailwind(
          'absolute bottom-0 left-0 p-2 bg-black bg-opacity-50 w-full',
        )}>
        <Text style={tailwind('text-sm text-white')}>{title}</Text>
      </View>
    </View>
  );
};

export default VideoThumbnail;
