import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconButton from './../components/IconButton';
import RecentPlayedItem from './../components/RecentPlayedItem';
import FolderItem from './../components/FolderCard';
import BottomNavItem from './../components/BottomNavItem';

const Home = () => {
  const folders = [
    {name: 'Snapchat', count: 1325},
    {name: 'Camera', count: 137},
    {name: 'WhatsApp Video', count: 1041},
    {name: 'inshot', count: 19},
    {name: 'WhatsApp', count: 6},
  ];

  const recentPlayed = [
    {
      id: '1',
      image: require('../../assets/bbq.jpg'),
      description: 'BBQ again ❤️',
    },
    {id: '2', image: require('../../assets/bbq.jpg'), description: ''},
  ];

  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
          }}>
          <Text style={{color: '#fff', fontSize: 16}}>11:10 PM</Text>
          <Icon name="notifications" size={24} color="#fff" />
          <Icon name="signal-cellular-alt" size={24} color="#fff" />
          <Icon name="battery-full" size={24} color="#fff" />
        </View>
        <Text
          style={{
            color: '#fff',
            fontSize: 24,
            textAlign: 'center',
            marginVertical: 10,
          }}>
          ZMPlayer
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingVertical: 10,
          }}>
          <IconButton icon="cloud-download" label="Downloader" />
          <IconButton icon="playlist-play" label="Playlist" />
          <IconButton icon="save-alt" label="Status Saver" />
        </View>
        <Text style={{color: '#fff', fontSize: 18, padding: 10}}>
          Recent Played
        </Text>
        <FlatList
          horizontal
          data={recentPlayed}
          renderItem={({item}) => <RecentPlayedItem item={item} />}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
        />
        <Text style={{color: '#00FF00', fontSize: 18, padding: 10}}>
          Folders
        </Text>
        {folders.map(folder => (
          <FolderItem
            key={folder.name}
            name={folder.name}
            count={folder.count}
          />
        ))}
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          backgroundColor: '#1a1a1a',
          paddingVertical: 10,
        }}>
        <BottomNavItem icon="home" label="Home" />
        <BottomNavItem icon="music-note" label="Music" />
        <BottomNavItem icon="videocam" label="Shorts" />
        <BottomNavItem icon="lock" label="Private" />
        <BottomNavItem icon="more-horiz" label="More" />
      </View>
    </View>
  );
};

export default Home;
