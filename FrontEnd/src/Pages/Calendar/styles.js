import styled from "styled-components/native";
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

export const Body = styled.View`
  width: 100%;
  height: 100%; 
`
export const Months = styled.View` 
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  width: 100%;
`
export const Month = styled.Text`
  font-family: 'Montserrat-SemiBold';
  font-size: 20px;
`
export const ArrowIcon = styled(SimpleLineIcons)`
  font-size: 15px;
  padding: 0 45px 0 45px;
`
export const DaysOfTheWeek = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding: 20px 0 15px 0;
`
export const DayWeek = styled.View`
  padding: 8px;
`
export const WeekDay = styled.Text`
  font-family: 'Montserrat-Medium';
  font-size: 15px;
  color: #626262;
`
export const DaysOfTheMonth = styled.View`
  flex-direction: row;
  width: calc(100% - 20px);
  margin: 0 15px;
  padding-left: 20px;
  justify-content: space-between;
`
export const Day = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 80px; 
  padding: 20px 0 30px 0;
`;
export const DayNumber = styled.Text`
  position: absolute;
  font-size: 16px;
  font-weight: 500;
  padding-bottom: 40px;
`;
export const CircleView = styled.View`
  padding-top: 30px;
`
export const Circle = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  background-color: #B73625;
  border-radius: 50px;
`
export const ModalView = styled.View`
   height: 45%;
   border-top-left-radius: 20px;
   border-top-right-radius: 20px;
`
export const TextView = styled.View`
  height: 100%;
  align-items: center;
  justify-content: center;
  padding-bottom: 70px;
`
export const Message = styled.Text`
  font-family: 'Montserrat-Light';
  font-size: 16px;
`
export const ActualDayView = styled.View`
  padding: 20px 0 0 20px;
`
export const ActualDay = styled.Text`
  font-family: 'Montserrat-SemiBold';
  font-size: 16px;
`
export const CloseView = styled.View`
  position: absolute;
  width: 100%;
  align-items: flex-end;
  padding: 20px 15px 10px 10px;
`
export const Close = styled(AntDesign)`
  font-size: 20px;
`
export const AlignView = styled.View`
  flex-direction: row;
  margin-top: 40px;
`
export const HourView = styled.View`
  margin: auto;
`
export const Hour = styled.Text` 
  font-family: 'Roboto-Regular';
  font-size: 12px;
  color: #A3A3A3;
`
export const HeaderView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 60px;
`
export const TaskView = styled.TouchableOpacity`
  width: 297px;
  height: 60px;
  border-radius: 5px;
  margin: 5px 15px 0 0;
`
export const TitleView = styled.View`
  padding-left: 25px;
  width: 148.5px;
`
export const TitleTask = styled.Text`
  font-family: 'Montserrat-Medium';
  font-size: 18px;
`
export const GroupTimeView = styled.View`
  flex-direction: row;
  margin-right: 25px;
`
export const GroupView = styled.View`
  width: 95px;
  margin-right: -30px;
`
export const Group = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 12px;
  color: #A3A3A3;
`
export const TimeView = styled.View`
  margin-left:30px;
  width: 40px;
`
export const TimeTask = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 12px;
  color: #A3A3A3;
`
export const AlignBottomView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: -20px;
`
export const DotDescriptionView = styled.View`
  flex-direction: row;
`
export const DescriptionView = styled.View`
  padding: 30px 0 0 15px;
`
export const Description = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 12px;
  color: #A3A3A3;
`
export const Dot = styled(Entypo)`
  font-size: 10px;
  margin: 2px 2px 0 0;
`
export const AllDescriptionView = styled.View`
  justify-content: space-around;
  width: 130px;
  height: 142px;
  margin: 30px 20px 0 20px;
`
export const AllDescription = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 11px;
`
