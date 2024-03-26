import { TouchableOpacity, Modal, StyleSheet } from 'react-native'
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
import { useTheme } from '@react-navigation/native';

const transparent = 'rgba(0,0,0,0.5)';

const Header = ({ title, onPress, setFridayGroups }) => {
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
    return teams;
  };

  const { colors } = useTheme();

  const styles = StyleSheet.create({
    text: {
      color: colors.text,
    },
    backgroundModalSort: {
      backgroundColor: colors.backgroundModalSort,
    }
  });

  return (
    <>
      <Container>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Hamburguer name={"menu"} style={styles.text} />
        </TouchableOpacity>
        <Title style={styles.text} >{title}</Title>
        <TouchableOpacity onPress={onPress}>
          <SortIcon name={"sort-calendar-descending"} onPress={() => setModalVisible(true)} style={styles.text} />
        </TouchableOpacity>
      </Container>
      <Modal
        visible={isModalVisible}
        animationType='slide'
        transparent={true}
      >
        <TouchableOpacity onPress={() => setModalVisible(false)} style={{
          flex: 1,
          backgroundColor: transparent,
          flexDirection: 'column-reverse'
        }}>
          <ModalView style={styles.backgroundModalSort}>
            <CloseView>
              <TouchableOpacity onPress={() => setModalVisible(false)} >
                <Close name='close' style={styles.text} />
              </TouchableOpacity>
            </CloseView>
            <ImageView>
              <Image source={require('../../assets/Images/LogoSmart.png')} />
            </ImageView>
            <TitleView>
              <SortTitle style={styles.text}>Sorteador de duplas</SortTitle>
            </TitleView>
            <InputView>
              <Label style={styles.text}>Insira o nome</Label>
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
              <TitleList style={styles.text}>Lista de participantes</TitleList>
            </ListTitleView>
            <ListView>
              {participants.map((participant, index) => (
                <CloseListView key={index}>
                  <DotNameView>
                    <DotView>
                      <Dot name='dot-single' style={styles.text} />
                    </DotView>
                    <NamesView style={styles.text}>
                      {participant}
                    </NamesView>
                  </DotNameView>
                  <DeleteName name='close' onPress={() => handleDeleteParticipant(index)} style={styles.text} />
                </CloseListView>
              ))}
            </ListView>
            <SortView>
              <SortButton onPress={() => setFridayGroups(sortParticipantsIntoTeams())}>
                <TitleButton onPress={() => setModalVisible(false)}>Sortear</TitleButton>
              </SortButton>
            </SortView>
          </ModalView>
        </TouchableOpacity>
      </Modal>
    </>
  )
}

export default Header;