import styled from 'styled-components/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

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
export const CoffeIcon = styled(Fontisto)`
  font-size: 20;
`
export const SortIcon = styled(SimpleLineIcons)`
  font-size: 20;
`