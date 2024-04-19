import { TouchableOpacity, Modal, StyleSheet, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from '@react-navigation/native';
import {
  CloseView, Close, Container, Hamburguer,
  Image, ImageView, SortIcon, SortTitle,
  TitleView, Title, InputView, Label,
  Button, ButtonView, AddIcon, ListTitleView,
  TitleList, ListView, CloseListView, NamesView,
  Dot, DeleteName, DotView, DotNameView, SortView,
  SortButton, TitleButton, ModalView, SortInput, LabelView,
  LabelInputView
} from './styles';
import axios from "axios";
import Toast, { BaseToast } from 'react-native-toast-message';

const transparent = 'rgba(0,0,0,0.5)';

const Header = ({ setIsLoading, title, onPress, setFridayGroups, showSortIcon = true }) => {
  const date = new Date();
  const today = new Date();
  const [isModalVisible, setModalVisible] = useState(false);
  const [users, setUsers] = useState([]);
  const [names, setNames] = useState("");
  const [currentDate, setCurrentDate] = useState(date);
  const [allFridays, setAllFridays] = useState([]);
  const [showToastOutsideModal, setShowToastOutsideModal] = useState(false);
  const navigation = useNavigation();

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

  function getAllFridays(year, startMonth = 0, endMonth = 11) {
    const fridays = [];
    const currentMonth = today.getMonth();
    const currentDay = today.getDate();

    for (let month = startMonth; month <= endMonth; month++) {
      const daysInMonth = new Date(year, month + 1, 0).getDate();

      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);

        if (date.getDay() === 5) {
          if (month < currentMonth || (month === currentMonth && day < currentDay)) {
            continue;
          }
          fridays.push(date);
        }
      }
    }
    return fridays;
  };

  const toastConfig = {
    error: ({ text1, text2 }) => (
      <BaseToast
        {...{ text1, text2 }}
        style={{ backgroundColor: colors.backgroundModalSort, borderLeftColor: 'red' }}
        text1Style={{ color: colors.text }}
        text2Style={{ color: '#909090' }}
      />
    ),
    success: ({ text1, text2 }) => (
      <BaseToast
        {...{ text1, text2 }}
        style={{ backgroundColor: colors.backgroundModalSort, borderLeftColor: 'green' }}
        text1Style={{ color: colors.text }}
        text2Style={{ color: '#909090' }}
      />
    ),
  };

  const showToastAdd = () => {
    Toast.show({
      type: "success",
      text1: "Adicionado!",
      text2: "Funcionário salvo com sucesso!",
      autoHide: true,
      visibilityTime: 2500,
    })
  }

  const showToastDelete = () => {
    Toast.show({
      type: "success",
      text1: "Deletado!",
      text2: "Funcionário deletado com sucesso!",
      autoHide: true,
      visibilityTime: 2500,
    })
  }

  const showToastSave = () => {
    Toast.show({
      type: "success",
      text1: "Salvo!",
      text2: "Duplas salvas com sucesso!",
      autoHide: true,
      visibilityTime: 2500,
    })
  }

  const showToastVazio = () => {
    Toast.show({
      type: "error",
      text1: "Insira o nome do Funcionário.",
      text2: "Campo não pode ser vazio!",
      autoHide: true,
      visibilityTime: 2500,
    })
  }

  const handleChange = (text) => {
    setNames(text);
  };

  const getUsers = async () => {
    try {
      const res = await axios.get("http://192.168.18.133:8080");
      setUsers(res.data)
    } catch (error) {
      console.log('erro: ', error);
    }
  };

  const handleAddParticipant = async (name) => {
    if (!name.trim()) {
      showToastVazio()
      return;
    } else {
      try {
        const res = await axios.post("http://192.168.18.133:8080/add", { name });
        setUsers([...users, res.data]);
        showToastAdd();
        setNames('');
      } catch (error) {
        console.log('erro: ', error);
      }
    }
  };

  const handleDelete = async (id) => {
    await axios
      .delete("http://192.168.18.133:8080/" + id)
      .then(({ data }) => {
        const newArray = users.filter((user) => user.id !== id);
        showToastDelete()
        setUsers(newArray);
      })
      .catch(({ data }) => console.log('erro: ', error));

    setOnEdit(null);
  };

  const handleSaveTeams = async (teams) => {
    const teamsWithDate = teams.map((team, index) => {
      const date = allFridays[index];
      return [...team, date];
    });

    try {
      const res = await axios.post("http://192.168.18.133:8080/saveTeams", { teams: teamsWithDate });
      setShowToastOutsideModal(true);
      showToastSave()
    } catch (error) {
      console.log('erro: ', error);
    }
  };

  const sortParticipantsIntoTeams = async () => {
    const shuffledParticipants = [...users].sort(() => Math.random() - 0.5);
    const teams = [];

    while (shuffledParticipants.length > 0) {
      if (shuffledParticipants.length > 1) {
        teams.push([shuffledParticipants.pop(), shuffledParticipants.pop()].map(user => user.nome));
      } else {
        teams.push([shuffledParticipants.pop().nome]);
      }
    }

    await handleSaveTeams(teams);
    getFridayGroups();

    return teams;
  };

  const getFridayGroups = async () => {
    try {
      const res = await axios.get("http://192.168.18.133:8080/getTeams");
      const data = res.data.reduce((acc, item, index) => {
        const dayIndex = Math.floor(index / 1);
        if (!acc[dayIndex]) {
          acc[dayIndex] = [];
        }
        acc[dayIndex].push({
          funcionario1: item.funcionario1,
          funcionario2: item.funcionario2
        });
        return acc;
      }, []);
      setFridayGroups(data);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    setAllFridays(getAllFridays(currentDate.getFullYear(), 0, 11));
  }, [currentDate]);

  useEffect(() => {
    getUsers();
  }, [setUsers, users]);

  useEffect(() => {
    getFridayGroups();
  }, []);

  return (
    <>
      {showToastOutsideModal && (
        <View style={{ zIndex: 9999 }}>
          <Toast config={toastConfig} />
        </View>
      )}
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
          <View style={{
            position: 'absolute',
            top: 0,
            width: '100%',
            height: '15%',
            zIndex: 9999,
          }}>
            <Toast config={toastConfig} />
          </View>
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
            <LabelInputView>
              <LabelView>
                <Label style={styles.text}>Insira o nome</Label>
              </LabelView>
              <InputView>
                <ButtonView>
                  <SortInput
                    placeholder='Digite um nome'
                    placeholderTextColor={'#939393'}
                    onChangeText={handleChange}
                    onSubmitEditing={() => handleAddParticipant(names)}
                    value={names}
                    style={styles.textInput}
                  />
                  <Button onPress={() => handleAddParticipant(names)}>
                    <AddIcon name='addusergroup' />
                  </Button>
                </ButtonView>
              </InputView>
            </LabelInputView>
            <ListTitleView>
              <TitleList style={styles.text}>Lista de participantes</TitleList>
            </ListTitleView>
            <ListView
              data={users}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                item.nome && (
                  <CloseListView key={item.id}>
                    <DotNameView>
                      <DotView>
                        <Dot name='dot-single' style={styles.text} />
                      </DotView>
                      <NamesView style={styles.text}>
                        {item.nome}
                      </NamesView>
                    </DotNameView>
                    <DeleteName name='close' onPress={() => handleDelete(item.id)} style={styles.text} />
                  </CloseListView>
                )
              )}
            />
            <SortView>
              <SortButton onPress={() => { setFridayGroups(sortParticipantsIntoTeams()), setModalVisible(false) }}>
                <TitleButton>Sortear</TitleButton>
              </SortButton>
            </SortView>
          </ModalView>
        </TouchableOpacity>
      </Modal >
    </>
  )
}

export default Header;