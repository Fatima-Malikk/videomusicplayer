import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface IconButtonProps {
  icon: string;
  label: string;
}

const IconButton: React.FC<IconButtonProps> = ({icon, label}) => (
  <TouchableOpacity style={{alignItems: 'center'}}>
    <Icon name={icon} size={24} color="#fff" />
    <Text style={{color: '#fff', fontSize: 12}}>{label}</Text>
  </TouchableOpacity>
);

export default IconButton;
