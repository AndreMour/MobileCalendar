import { TouchableOpacity, Modal, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  CloseView, Close, Container, Hamburguer,
  Image, ImageView, SortIcon, SortTitle,
  TitleView, Title, InputView, Label,
  Button, ButtonView, AddIcon, ListTitleView,
  TitleList, ListView, CloseListView, NamesView,
  Dot, DeleteName, DotView, DotNameView, SortView,
  SortButton, TitleButton, ModalView, SortInput, LabelView
} from './styles';
import { useTheme } from '@react-navigation/native';

const transparent = 'rgba(0,0,0,0.5)';

const Header = ({ title, onPress, setFridayGroups, showSortIcon = true }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [participants, setParticipants] = useState([]);
  const [names, setNames] = useState("");
  const navigation = useNavigation();

  const handleChange = (text) => {
    setNames(text);
  };

  const handleAddParticipant = () => {
    if (names.trim() !== '') {
      setParticipants([...participants, names]);
      setNames("");
    }
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
    const shuffledParticipants = [...participants].sort(() => Math.random() - 0.5);
    const teams = [];

    while (shuffledParticipants.length > 0) {
      if (shuffledParticipants.length > 1) {
        teams.push([shuffledParticipants.pop(), shuffledParticipants.pop()]);
      } else {
        teams.push([shuffledParticipants.pop()]);
      }
    }

    return teams;
  };

  const { colors } = useTheme();

  const styles = StyleSheet.create({
    text: {
      color: colors.text,
    },
    backgroundModalSort: {
      backgroundColor: colors.backgroundModalSort,
    },
    textInput: {
      color: 'black',
      backgroundColor: colors.backgroundInput,
    },
  });

  return (
    <>
      <Container>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Hamburguer name={"menu"} style={styles.text} />
        </TouchableOpacity>
        <Title style={styles.text}>{title}</Title>
        {showSortIcon ? (
          <TouchableOpacity onPress={onPress}>
            <SortIcon name={"sort-calendar-descending"} onPress={() => setModalVisible(true)} style={styles.text} />
          </TouchableOpacity>
        ) : (
          <View style={{ width: 24, height: 24 }} />
        )}
      </Container>
      <Modal
        visible={isModalVisible}
        animationType='slide'
        transparent={true}
      >
        <TouchableOpacity style={{
          flex: 1,
          backgroundColor: transparent,
          flexDirection: 'column-reverse'
        }}
          onPress={() => setModalVisible(false)}>
          <ModalView style={styles.backgroundModalSort}
            onStartShouldSetResponder={() => true}
            onResponderReject={(evt) => {
              evt.stopPropagation();
            }}>
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
            <LabelView>
              <Label style={styles.text}>Insira o nome</Label>
            </LabelView>
            <InputView>
              <ButtonView>
                <SortInput
                  placeholder='Digite um nome'
                  placeholderTextColor={'#939393'}
                  onChangeText={handleChange}
                  onSubmitEditing={handleAddParticipant}
                  value={names}
                  style={styles.textInput}
                />
                <Button onPress={handleAddParticipant}>
                  <AddIcon name='addusergroup' />
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
              <SortButton onPress={() => { setFridayGroups(sortParticipantsIntoTeams()), setModalVisible(false) }}>
                <TitleButton>Sortear</TitleButton>
              </SortButton>
            </SortView>
          </ModalView>
        </TouchableOpacity>
      </Modal>
    </>
  )
}

export default Header;