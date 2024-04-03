import styled from "styled-components/native";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export const Container = styled.View`
  height: 100%;
`
export const EditView = styled.View`
  align-items: flex-end;
  width: 100%;
`
export const EditIcon = styled(Feather)`
  color: #A3A3A3;
  font-size: 16px;
`
export const CheckIcon = styled(FontAwesome5)`
  color: green;
  font-size: 15px;
`
export const ContainerWeek = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 10px;
`
export const AlignView = styled.View`
  display: grid;
`
export const DivSeg = styled.View`
  width: 163px;
  height: 125px;
  align-items: center;
  margin-top: 32px;
`
export const DivTer = styled.View`
  width: 163px;
  height: 125px;
  align-items: center;
  margin-top: 15px;
`
export const DivDay = styled.View`
  width: 163px;
  height: 125px;
  align-items: center;
  margin-top: 15px;
`
export const DivSex = styled.View`
  width: 163px;
  height: 125px;
  align-items: center;
  margin: 0 auto;
  margin-top: 15px;
`
export const WeekDay = styled.Text`
  font-family: 'Montserrat-Medium';
  font-size: 16px;
  padding-top: 10px;
`
export const TextInput = styled.TextInput`
  font-family: 'Roboto-Regular';
  font-size: 16px;
  padding-top: 17px;
`
export const DivNames = styled.View`
  flex-direction: row;
`
export const Names = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 16px;
  flex-direction:row ;
  padding-top: 20px;
`

