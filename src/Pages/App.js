import React from 'react'
import { Container, DivHeader, Header, Title, DivTitle, CalendarGrid } from '../Pages/Styles';
import Feather from 'react-native-vector-icons/Feather';
import Calendar from '../Components/Calendar';

export default function App() {
  return (
    <Container>
      <Header>
        <DivHeader>
          <Feather name='menu' style={{ color: 'white', fontSize: 24 }} />
        </DivHeader>
        <DivTitle>
          <Title>
            Calendário de Limpeza
          </Title>
        </DivTitle>
      </Header>
      <CalendarGrid>
        <Calendar />
      </CalendarGrid>
    </Container>
  )
}

