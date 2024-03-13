import { View, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  CloseView, Close, Container, Hamburguer,
  Image, ImageView, SortIcon, SortTitle,
  TitleView, Title, InputView, Label, Input,
  Button, ButtonView, AddIcon, ListTitleView,
  TitleList, ListView, CloseListView, NamesView,
  Dot, DeleteName, DotView, DotNameView, SortView,
  SortButton, TitleButton, ModalView
} from './styles';

const transparent = 'rgba(0,0,0,0.5)';

const Header = ({ title, onPress }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [participants, setParticipants] = useState([]);
  const [names, setNames] = useState("");
  const navigation = useNavigation();

  const handleChange = (text) => {
    setNames(text);
  };

  const handleAddParticipant = () => {
    setParticipants([...participants, names]);
    setNames("");
  };

  const handleDeleteParticipant = (index) => {
    const DeletePartcipants = participants.filter((partcipant, i) => i !== index);
    setParticipants(DeletePartcipants);
  };

  const generateTeams = (players, numTeams) => {
    const tempArray = [...players];
    const shuffledPlayers = tempArray.sort(() => Math.random() - 0.5);
    const playerPerTeam = Math.floor(tempArray.length / numTeams);
    const results = [];

    while (shuffledPlayers.length > 0) {
      results.push(shuffledPlayers.splice(0, playerPerTeam));
    }

    return results;
  };

  const sortParticipantsIntoTeams = () => {
    const numTeams = Math.ceil(participants.length / 2);
    const teams = generateTeams(participants, numTeams);
    console.log(teams)
    return teams;
  };

  return (
    <>
      <Container>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Hamburguer name={"menu"} />
        </TouchableOpacity>
        <Title>{title}</Title>
        <TouchableOpacity onPress={onPress}>
          <SortIcon name={"sort-calendar-descending"} onPress={() => setModalVisible(true)} />
        </TouchableOpacity>
      </Container>
      <Modal
        visible={isModalVisible}
        animationType='slide'
        transparent={true}
      >
        <View style={{
          flex: 1,
          padding: 3,
          backgroundColor: transparent,
          flexDirection: 'column-reverse'
        }}>
          <ModalView>
            <CloseView>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Close name='close' />
              </TouchableOpacity>
            </CloseView>
            <ImageView>
              <Image source={require('../../assets/Images/LogoSmart.png')} />
            </ImageView>
            <TitleView>
              <SortTitle>Sorteador de duplas</SortTitle>
            </TitleView>
            <InputView>
              <Label>Insira o nome</Label>
              <ButtonView>
                <Input style={styles.PlaceColor}
                  placeholder='Digite um nome'
                  onChangeText={handleChange}
                  onSubmitEditing={handleAddParticipant}
                  value={names} />
                <Button>
                  <AddIcon name='addusergroup' onPress={handleAddParticipant} />
                </Button>
              </ButtonView>
            </InputView>
            <ListTitleView>
              <TitleList>Lista de participantes</TitleList>
            </ListTitleView>
            <ListView>
              {participants.map((participant, index) => (
                <CloseListView key={index}>
                  <DotNameView>
                    <DotView>
                      <Dot name='dot-single' />
                    </DotView>
                    <NamesView>
                      {participant}
                    </NamesView>
                  </DotNameView>
                  <DeleteName name='close' onPress={() => handleDeleteParticipant(index)} />
                </CloseListView>
              ))}
            </ListView>
            <SortView>
              <SortButton onPress={sortParticipantsIntoTeams}>
                <TitleButton>Sortear</TitleButton>
              </SortButton>
            </SortView>
          </ModalView>
        </View>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  PlaceColor: {
    color: '#939393',
  }
})

export default Header