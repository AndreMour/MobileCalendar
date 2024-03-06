import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Container, Hamburguer, SortIcon, Title } from './styles';

const Header = ({ title, onPress }) => {
  const navigation = useNavigation();

  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Hamburguer name={"menu"} />
      </TouchableOpacity>
      <Title>{title}</Title>
      <TouchableOpacity onPress={onPress}>
        <SortIcon name={"sort-calendar-descending"} />
      </TouchableOpacity>
    </Container>
  )
}

export default Header