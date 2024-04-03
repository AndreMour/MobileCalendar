import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import {
  Container, ContainerWeek, DivDay,
  DivNames, DivSex, EditIcon, EditView,
  Names, WeekDay, TextInput, AlignView,
  DivTer, DivSeg, CheckIcon
} from './styles';
import Header from '../../Components/Header';
import { useTheme } from '@react-navigation/native';

export default function DaysOfCoffe() {
  const [currentDay, setCurrentDay] = useState(new Date().getDay());
  const [editMode, setEditMode] = useState(false);
  const [nameSeg1, setNameSeg1] = useState('Caio');
  const [nameSeg2, setNameSeg2] = useState('Gabriel');
  const [nameTer1, setNameTer1] = useState('Bruna');
  const [nameTer2, setNameTer2] = useState('Leo');
  const [nameQua1, setNameQua1] = useState('Osmar');
  const [nameQua2, setNameQua2] = useState('João');
  const [nameQui1, setNameQui1] = useState('Wasch');
  const [nameQui2, setNameQui2] = useState('Braian');
  const [nameSex1, setNameSex1] = useState('Helegod');
  const [nameSex2, setNameSex2] = useState('Pedro K.');

  useEffect(() => {
    setCurrentDay(new Date().getDay());
  }, []);

  const handleSaveNames = () => {
    setEditMode(false);
  };

  const { colors } = useTheme();

  const styles = StyleSheet.create({
    text: {
      color: colors.text,
    },
    background: {
      backgroundColor: colors.backgroundWeek,
    },
    shadow: {
      shadowColor: 'black',
      shadowOffset: { width: 0, height: -12 },
      shadowOpacity: 1,
      shadowRadius: 4,
      elevation: 5,
    },
    nameMargin: {
      marginRight: 20
    },
    inputMargin: {
      marginRight: 12
    },
    border: {
      borderTopWidth: 2,
      borderTopColor: "#B73625"
    }
  });

  return (
    <>
      <Container>
        <SafeAreaView>
          <View>
            <Header title={"Dias do café"} showSortIcon={false} />
          </View>
        </SafeAreaView>
        <ContainerWeek>
          <DivSeg style={[styles.shadow, currentDay === 1 && styles.border, styles.background]}>
            <WeekDay style={styles.text}>seg</WeekDay>
            <DivNames>
              {editMode ? (
                <>
                  <TextInput
                    style={[styles.text, styles.inputMargin]}
                    value={nameSeg1}
                    onChangeText={setNameSeg1}
                  />
                  <TextInput
                    style={[styles.text]}
                    value={nameSeg2}
                    onChangeText={setNameSeg2}
                  />
                </>
              ) : (
                <>
                  <Names style={[styles.nameMargin, styles.text]}>{nameSeg1}</Names>
                  <Names style={styles.text}>{nameSeg2}</Names>
                </>
              )}
            </DivNames>
          </DivSeg>
          <AlignView>
            <EditView>
              {!editMode ? <EditIcon name='edit' onPress={() => setEditMode(true)} />
                : <CheckIcon name='check' onPress={() => setEditMode(false)} />}
            </EditView>
            <DivTer style={[styles.shadow, currentDay === 2 && styles.border, styles.background]}>
              <WeekDay style={styles.text}>ter</WeekDay>
              <DivNames>
                {editMode ? (
                  <>
                    <TextInput
                      style={[styles.text, styles.inputMargin]}
                      value={nameTer1}
                      onChangeText={setNameTer1}
                    />
                    <TextInput
                      style={[styles.text]}
                      value={nameTer2}
                      onChangeText={setNameTer2}
                    />
                  </>
                ) : (
                  <>
                    <Names style={[styles.nameMargin, styles.text]}>{nameTer1}</Names>
                    <Names style={styles.text}>{nameTer2}</Names>
                  </>
                )}
              </DivNames>
            </DivTer>
          </AlignView>
        </ContainerWeek>
        <ContainerWeek>
          <DivDay style={[styles.shadow, currentDay === 3 && styles.border, styles.background]}>
            <WeekDay style={styles.text}>qua</WeekDay>
            <DivNames>
              {editMode ? (
                <>
                  <TextInput
                    style={[styles.text, styles.inputMargin]}
                    value={nameQua1}
                    onChangeText={setNameQua1}
                  />
                  <TextInput
                    style={[styles.text]}
                    value={nameQua2}
                    onChangeText={setNameQua2}
                  />
                </>
              ) : (
                <>
                  <Names style={[styles.nameMargin, styles.text]}>{nameQua1}</Names>
                  <Names style={styles.text}>{nameQua2}</Names>
                </>
              )}
            </DivNames>
          </DivDay>
          <DivDay style={[styles.shadow, currentDay === 4 && styles.border, styles.background]}>
            <WeekDay style={styles.text}>qui</WeekDay>
            <DivNames>
              {editMode ? (
                <>
                  <TextInput
                    style={[styles.text, styles.inputMargin]}
                    value={nameQui1}
                    onChangeText={setNameQui1}
                  />
                  <TextInput
                    style={[styles.text]}
                    value={nameQui2}
                    onChangeText={setNameQui2}
                  />
                </>
              ) : (
                <>
                  <Names style={[styles.nameMargin, styles.text]}>{nameQui1}</Names>
                  <Names style={styles.text}>{nameQui2}</Names>
                </>
              )}
            </DivNames>
          </DivDay>
        </ContainerWeek>
        <DivSex style={[styles.shadow, currentDay === 5 && styles.border, styles.background]}>
          <WeekDay style={styles.text}>sex</WeekDay>
          <DivNames>
            {editMode ? (
              <>
                <TextInput
                  style={[styles.text, styles.inputMargin]}
                  value={nameSex1}
                  onChangeText={setNameSex1}
                />
                <TextInput
                  style={[styles.text]}
                  value={nameSex2}
                  onChangeText={setNameSex2}
                />
              </>
            ) : (
              <>
                <Names style={[styles.nameMargin, styles.text]}>{nameSex1}</Names>
                <Names style={styles.text}>{nameSex2}</Names>
              </>
            )}
          </DivNames>
        </DivSex>
      </Container>
    </>

  )
}

