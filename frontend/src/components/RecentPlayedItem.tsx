import React from 'react';
import {View, Text, Image} from 'react-native';

interface RecentPlayedItemProps {
  item: {
    image: any;
    description: string;
  };
}

const RecentPlayedItem: React.FC<RecentPlayedItemProps> = ({item}) => (
  <View style={{marginHorizontal: 10}}>
    <Image
      source={item.image}
      style={{width: 150, height: 100, borderRadius: 8}}
    />
    <Text style={{color: '#fff', textAlign: 'center', marginTop: 5}}>
      {item.description}
    </Text>
  </View>
);

export default RecentPlayedItem;
