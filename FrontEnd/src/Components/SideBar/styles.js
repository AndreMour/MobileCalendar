import styled from 'styled-components/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

export const TopView = styled.View`
  flex-direction: row;
  align-items: center;
  margin: -10px 0 15px 0;
`
export const ButtonView = styled.View`
  width: 50%;
  margin: 20px 0 0 20px;
`
export const CloseView = styled.View`
  width: 50%;
  align-items: flex-end;
  padding: 20px 30px 0 0;
`
export const ImageView = styled.View`
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`
export const Close = styled(AntDesign)`
  font-size: 24px;
`
export const CalendarIcon = styled(Feather)`
  font-size: 20px;
`
export const CoffeIcon = styled(Feather)`
  font-size: 20px;
`

