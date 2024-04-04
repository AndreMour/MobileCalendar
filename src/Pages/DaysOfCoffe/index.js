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
  const [names, setNames] = useState({
    seg: { name1: 'Caio', name2: 'Gabriel' },
    ter: { name1: 'Bruna', name2: 'Leo' },
    qua: { name1: 'Osmar', name2: 'João' },
    qui: { name1: 'Wasch', name2: 'Braian' },
    sex: { name1: 'Helegod', name2: 'Pedro K.' }
  });

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
                    value={names.seg.name1}
                    onChangeText={(text) => setNames({ ...names, seg: { ...names.seg, name1: text } })}
                  />
                  <TextInput
                    style={[styles.text]}
                    value={names.seg.name2}
                    onChangeText={(text) => setNames({ ...names, seg: { ...names.seg, name2: text } })}
                  />
                </>
              ) : (
                <>
                  <Names style={[styles.nameMargin, styles.text]}>{names.seg.name1}</Names>
                  <Names style={styles.text}>{names.seg.name2}</Names>
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
                      value={names.ter.name1}
                      onChangeText={(text) => setNames({ ...names, ter: { ...names.ter, name1: text } })}
                    />
                    <TextInput
                      style={[styles.text]}
                      value={names.ter.name2}
                      onChangeText={(text) => setNames({ ...names, ter: { ...names.ter, name2: text } })}
                    />
                  </>
                ) : (
                  <>
                    <Names style={[styles.nameMargin, styles.text]}>{names.ter.name1}</Names>
                    <Names style={styles.text}>{names.ter.name2}</Names>
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
                    value={names.qua.name1}
                    onChangeText={(text) => setNames({ ...names, qua: { ...names.qua, name1: text } })}
                  />
                  <TextInput
                    style={[styles.text]}
                    value={names.qua.name2}
                    onChangeText={(text) => setNames({ ...names, qua: { ...names.qua, name2: text } })}
                  />
                </>
              ) : (
                <>
                  <Names style={[styles.nameMargin, styles.text]}>{names.qua.name1}</Names>
                  <Names style={styles.text}>{names.qua.name2}</Names>
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
                    value={names.qui.name1}
                    onChangeText={(text) => setNames({ ...names, qui: { ...names.qui, name1: text } })}
                  />
                  <TextInput
                    style={[styles.text]}
                    value={names.qui.name2}
                    onChangeText={(text) => setNames({ ...names, qui: { ...names.qui, name2: text } })}
                  />
                </>
              ) : (
                <>
                  <Names style={[styles.nameMargin, styles.text]}>{names.qui.name1}</Names>
                  <Names style={styles.text}>{names.qui.name2}</Names>
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
                  value={names.sex.name1}
                  onChangeText={(text) => setNames({ ...names, sex: { ...names.sex, name1: text } })}
                />
                <TextInput
                  style={[styles.text]}
                  value={names.sex.name2}
                  onChangeText={(text) => setNames({ ...names, sex: { ...names.sex, name2: text } })}
                />
              </>
            ) : (
              <>
                <Names style={[styles.nameMargin, styles.text]}>{names.sex.name1}</Names>
                <Names style={styles.text}>{names.sex.name2}</Names>
              </>
            )}
          </DivNames>
        </DivSex>
      </Container>
    </>

  )
}

