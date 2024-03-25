import styled from "styled-components/native";
import Feather from "react-native-vector-icons/Feather";

export const Container = styled.View`
  height: 100%;
  background-color: ${(props) => props.theme.bodyWeek};
`
export const EditView = styled.View`
  align-items: flex-end;
  width: 100%;
  padding: 10px 20px 0 0;
`
export const EditIcon = styled(Feather)`
  color: #A3A3A3;
  font-size: 16px;
`
export const ContainerWeek = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 10px;
`
export const DivSeg = styled.View`
  width: 163px;
  height: 125px;
  background-color: #fff;
  align-items: center;
  margin-top: 15px;
  background-color: #1F1F1F;
`
export const DivDay = styled.View`
  width: 163px;
  height: 125px;
  background-color: #fff;
  align-items: center;
  margin-top: 15px;
  background-color: #1F1F1F;
`
export const DivSex = styled.View`
  width: 163px;
  height: 125px;
  align-items: center;
  margin: 0 auto;
  margin-top: 15px;
  background-color: #1F1F1F;
`
export const WeekDay = styled.Text`
  font-family: 'Montserrat-Medium';
  font-size: 16px;
  font-weight: 500;
  padding-top: 10px;
  color: #fff;
`
export const DivNames = styled.View`
  flex-direction: row;
`
export const Names = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 16px;
  font-weight: 400;
  flex-direction:row ;
  padding-top: 20px;
  color: #fff;
`

