import styled, { css } from "styled-components/native";
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export const Body = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
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
  color: #0F0F0F;
`
export const ArrowIcon = styled(SimpleLineIcons)`
  color: #0F0F0F;
  font-size: 15px;
  padding: 0 45px 0 45px;
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
export const AlignBody = styled.View`
  display: flex;
`

export const DaysOfTheMonth = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: calc(100% - 20px);
  margin: 0 10px;
  padding-left: 25px;
  justify-content: space-between;
 
`;

export const Day = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  width: 20px;
  height: 80px; 
  padding-bottom: 35px;
`;

export const DayNumber = styled.Text`
  display: flex;
  flex-direction: row;
  color: white;
  font-size: 16px;
  font-weight: 500;
  color: #0F0F0F;
`;


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
  color: ${(props) => props.theme.text};
`
