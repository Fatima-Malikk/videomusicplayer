import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface FolderItemProps {
  name: string;
  count: number;
}

const FolderCard: React.FC<FolderItemProps> = ({name, count}) => (
  <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
    <Icon name="folder" size={24} color="#808080" />
    <View style={{marginLeft: 10}}>
      <Text style={{color: '#fff', fontSize: 16}}>{name}</Text>
      <Text style={{color: '#808080', fontSize: 12}}>{count} Videos</Text>
    </View>
  </View>
);

export default FolderCard;
