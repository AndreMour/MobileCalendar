import styled from "styled-components/native";
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

export const Body = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.body};
`
export const Months = styled.View` 
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  width: 100%;
`
export const Month = styled.Text`
  font-family: 'Montserrat-SemiBold';
  font-size: 20px;
  font-weight: 600;
  color: white;
`
export const ArrowIcon = styled(SimpleLineIcons)`
  font-size: 15px;
  padding: 0 45px 0 45px;
  color: white;
`
export const DaysOfTheWeek = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  height: 8vh;
  padding: 20px 0 15px 0;
`
export const DayWeek = styled.View`
  display: flex;
  align-items: flex-end;
  padding: 8px;
`
export const WeekDay = styled.Text`
  font-family: 'Montserrat-Medium';
  font-size: 15px;
  font-weight: 500;
  color: #626262;
`
export const DaysOfTheMonth = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: calc(100% - 20px);
  margin: 0 15px;
  padding-left: 20px;
  justify-content: space-between;
`
export const Day = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 80px; 
  padding: 20px 0 30px 0;
`;
export const DayNumber = styled.Text`
  position: absolute;
  display: flex;
  flex-direction: row;
  font-size: 16px;
  font-weight: 500;
  color: white;
  padding-bottom: 40px;
`;
export const ModalView = styled.View`
   height: 350;
   background-color: #131313;
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
  color: #FFFFFF;
`
export const TopView = styled.View`
  flex-direction: row;
`
export const ActualDayView = styled.View`
  padding: 20px 0 0 20px;
`
export const ActualDay = styled.Text`
  font-family: 'Montserrat-SemiBold';
  font-size: 16px;
  color: white;
`
export const CloseView = styled.View`
  position: absolute;
  width: 100%;
  align-items: flex-end;
  padding: 20px 15px 10px 10px;
`
export const Close = styled(AntDesign)`
  font-size: 20px;
  color: white;
`
export const AlignView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
`
export const HourView = styled.View`
  margin: 15px 0 0 20px;
`
export const Hour = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 12px;
  color: #A3A3A3;
`
export const HeaderView = styled.View`
  flex-direction: row;
`
export const TaskView = styled.View`
  width: 297px;
  height: 235px;
  background-color: #2B2B2B;
  border-radius: 5px;
  margin: 5px 15px 0 0;
`
export const TitleView = styled.View`
  padding: 20px 0 0 15px;
  width: 148.5px;
`
export const TitleTask = styled.Text`
  font-family: 'Montserrat-Medium';
  font-size: 16px;
  color: white;
`
export const GroupView = styled.View`
  display: flex;
  flex-direction: row-reverse;
  width: 70px;
  padding-top: 20px;
`
export const Group = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 10px;
  color: #A3A3A3;
`
export const TimeView = styled.View`
  margin: 20px 0 0 20px;
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
`
export const DotDescriptionView = styled.View`
  flex-direction: row;
`
export const DescriptionView = styled.View`
  padding: 30px 0 0 15px;
`
export const Description = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 10px;
  color: #A3A3A3;
`
export const Dot = styled(Entypo)`
  font-size: 10px;
  margin: 2px 2px 0 0;
  color: white;
`
export const AllDescriptionView = styled.View`
  justify-content: space-around;
  width: 130px;
  height: 142px;
  margin: 20px 20px 0 20px;
`
export const AllDescription = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 10px;
  color: white
`

//-----------------------------------------------

export const DayContent = styled.View`
  position: absolute;
  display: flex;
  bottom: -10px;
  margin-left: 10px; 
`
export const ParticipantsContainer = styled.View`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  margin: 0 50px 27px 0;
`

export const Participants = styled.Text`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 16px;
  margin: 10px 35px 10px 0;
  color: ${({ theme }) => theme.text};
`
export const CircleView = styled.View`
  display: flex;
  padding-top: 30px;
`
export const Circle = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  background-color: #B73625;
  border-radius: 50px;
  
`