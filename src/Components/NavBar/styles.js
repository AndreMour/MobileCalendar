import styled from "styled-components/native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 50;
  background-color: #fff;
`
export const Title = styled.Text`
  font-family: 'Montserrat-SemiBold';
  font-size: 16px;
  font-weight: 600;
  color: #000;
`
export const Hamburguer = styled(Ionicons)`
  font-size: 26;
  color: #000;
  margin-left: 14;
`
export const SortIcon = styled(MaterialCommunityIcons)`
  font-size: 24;
  color: #000;
  margin-right: 14;
`