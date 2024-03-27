import styled from "styled-components/native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { ScrollView } from "react-native";
import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 50px;
`
export const Title = styled.Text`
  font-family: 'Montserrat-SemiBold';
  font-size: 16px;
`
export const Hamburguer = styled(Ionicons)`
  font-size: 24px;
  margin-left: 14px;
`
export const SortIcon = styled(MaterialCommunityIcons)`
  font-size: 24px;
  margin-right: 14px;
`
export const ModalView = styled.View`
   height:85%;
   border-top-left-radius: 20px;
   border-top-right-radius: 20px;
`
export const CloseView = styled.View`
  width: 100%;
  align-items: flex-end;
  padding: 10px;
`
export const Close = styled(AntDesign)`
  font-size: 24px;
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
  margin-top: 25px;
`
export const InputView = styled.View`
  margin: 0 auto;
  padding-top: 25px;
`
export const LabelView = styled.View`
  align-items: self-start;
  width: ${width * .9}px;
  margin-left: 53px;
`
export const Label = styled.Text`
  font-family: 'Montserrat-Medium';
  font-size: 12px;
  margin-bottom: 5px;
`
export const AlignLabel = styled.View`
  width: ${width * .7}px;
  align-items: center;
`
export const ButtonView = styled.View`
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  flex-direction: row;
  width: ${width * .9}px;
  margin-top: 2px;
`
export const SortInput = styled.TextInput`
  width: ${width * .7}px;
  height: 32px;
  font-family: 'Roboto';
  font-size: 8px;
  padding: 0 10px;
  border-radius: 2px 0px 0px 2px;
  background-color: white;
`
export const Button = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
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
  width: ${width * .9}px;
  margin-left: 46px;
  margin-top: 30px;
`
export const TitleList = styled.Text`
  font-family: 'Montserrat-Medium';
  font-size: 12px;
`
export const Dot = styled(Entypo)`
  font-size: 12px;
`
export const DeleteName = styled(AntDesign)`
  font-size: 20px;
`
export const ListView = styled(ScrollView)`
  margin-top: 10px;
  max-height:  ${width * .7}px;
`
export const CloseListView = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 45px 0 45px;
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
  font-size: 12px;
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
  width: ${width * .4}px;
  height: 32px;
  border-radius: 25px; 
  background-color: #B73625;
  margin-bottom: 20px;
`
export const TitleButton = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 12px;
  color: #fff;
`

