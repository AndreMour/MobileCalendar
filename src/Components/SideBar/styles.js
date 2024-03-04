import styled from 'styled-components/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

export const ImageView = styled.View`
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`
export const CloseView = styled.View`
  width: 100%;
  align-items: flex-end;
  padding: 10px;

`
export const Close = styled(AntDesign)`
  font-size: 24px;
  color: black;
`
export const ListIcon = styled(Feather)`
  font-size: 24;
`
export const CalendarIcon = styled(Feather)`
  font-size: 20;
`
export const CoffeIcon = styled(Feather)`
  font-size: 20;
`
export const SortIcon = styled(AntDesign)`
  font-size: 20;
`