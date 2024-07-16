import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface BottomNavItemProps {
  icon: string;
  label: string;
}

const BottomNavItem: React.FC<BottomNavItemProps> = ({icon, label}) => (
  <TouchableOpacity style={{alignItems: 'center'}}>
    <Icon name={icon} size={24} color="#808080" />
    <Text style={{color: '#808080', fontSize: 12}}>{label}</Text>
  </TouchableOpacity>
);

export default BottomNavItem;
