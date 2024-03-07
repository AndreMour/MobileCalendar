import styled from "styled-components/native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { ScrollView } from "react-native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 50;
  background-color: #fff;
`
export const Title = styled.Text`
  font-family: 'Montserrat-SemiBold';
  font-size: 16px;
  color: #000;
`
export const Hamburguer = styled(Ionicons)`
  font-size: 24;
  color: #000;
  margin-left: 14;
`
export const SortIcon = styled(MaterialCommunityIcons)`
  font-size: 24;
  color: #000;
  margin-right: 14;
`
export const CloseView = styled.View`
  width: 100%;
  align-items: flex-end;
`
export const Close = styled(AntDesign)`
  font-size: 24px;
  color: black;
`
export const ImageView = styled.View`
  align-items: center;
  justify-content: center;
`
export const Image = styled.Image`
  width: 150px;
  height: 73.54px;
`
export const TitleView = styled.View`
  align-items: center;
  justify-content: center;
`
export const SortTitle = styled.Text`
  font-family: 'Montserrat-SemiBold';
  font-size: 16px;
  color: #000;
  margin-top: 25px;
`
export const InputView = styled.View`
  margin: 0 auto;
  padding-top: 25px;
`
export const Label = styled.Text`
  font-family: 'Montserrat-Medium';
  font-size: 10px;
  color: #0F0F0F;
`
export const ButtonView = styled.View`
  flex-direction: row;
`
export const Input = styled.TextInput`
  width: 174px;
  height: 26px;
  font-family: 'Roboto';
  font-size: 8px;
  padding: 0 10px;
`
export const Button = styled.TouchableOpacity`
  width: 26px;
  height: 26px;
  background-color: #B73625;
  border-radius: 0 2px 2px 0;
  align-items: center;
  justify-content: center;
`
export const AddIcon = styled(AntDesign)`
  font-size: 16px;
  color: #fff;
`
export const ListTitleView = styled.View`
  margin-left: 92px;
  margin-top: 30px;
  
`
export const TitleList = styled.Text`
  font-family: 'Montserrat-Medium';
  font-size: 10px;
  color: #0F0F0F;
`
export const Dot = styled(Entypo)`
  font-size: 10px;
`
export const DeleteName = styled(AntDesign)`
  font-size: 10px;
  color: #000;
`
export const ListView = styled(ScrollView)`
  margin-top: 10px;
  max-height: 325px;
`
export const CloseListView = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 92px 10px 92px;
`
export const DotNameView = styled.View`
  flex-direction: row;
  align-items: center;
`
export const DotView = styled.View`
  padding-right: 5px;
`
export const NamesView = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 10px;
  color: #0F0F0F;
`
export const SortView = styled.View`
  position: absolute;
  align-self: center;
  justify-content: flex-end;
  height: 100%;
`
export const SortButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 109px;
  height: 24px;
  border-radius: 2px; 
  background-color: #B73625;
  margin-bottom: 20px;
`
export const TitleButton = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 12px;
  color: #fff;
`
