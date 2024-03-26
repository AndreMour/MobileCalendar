import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import {
  Container, ContainerWeek, DivDay,
  DivNames, DivSeg, DivSex, EditIcon, EditView, Names, WeekDay
} from './styles';
import Header from '../../Components/Header';
import { useTheme } from '@react-navigation/native';

export default function DaysOfCoffe() {

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
    }
  });

  return (
    <>
      <Container>
        <SafeAreaView>
          <View>
            <Header title={"Dias do café"} />
          </View>
        </SafeAreaView>
        <EditView>
          <EditIcon name='edit' />
        </EditView>
        <ContainerWeek>
          <DivSeg style={[styles.shadow, {
            borderTopWidth: 2,
            borderTopColor: "#B73625"
          }, styles.background]}>
            <WeekDay style={styles.text}>seg</WeekDay>
            <DivNames>
              <Names style={[styles.nameMargin, styles.text]}>Caio</Names>
              <Names style={styles.text}> Gabriel</Names>
            </DivNames>
          </DivSeg>
          <DivDay style={[styles.shadow, styles.background]}>
            <WeekDay style={styles.text}>ter</WeekDay>
            <DivNames>
              <Names style={[styles.nameMargin, styles.text]}>Bruna </Names>
              <Names style={styles.text}>Leo</Names>
            </DivNames>
          </DivDay>
        </ContainerWeek>
        <ContainerWeek>
          <DivDay style={[styles.shadow, styles.background]}>
            <WeekDay style={styles.text}>qua</WeekDay>
            <DivNames>
              <Names style={[styles.nameMargin, styles.text]}>Osmar</Names>
              <Names style={styles.text}>João</Names>
            </DivNames>
          </DivDay>
          <DivDay style={[styles.shadow, styles.background]}>
            <WeekDay style={styles.text}>qui</WeekDay>
            <DivNames>
              <Names style={[styles.nameMargin, styles.text]}>Wasch</Names>
              <Names style={styles.text}>Braian</Names>
            </DivNames>
          </DivDay>
        </ContainerWeek>
        <DivSex style={[styles.shadow, styles.background]}>
          <WeekDay style={styles.text}>sex</WeekDay>
          <DivNames>
            <Names style={[styles.nameMargin, styles.text]}>Helegod </Names>
            <Names style={styles.text}>Pedro K.</Names>
          </DivNames>
        </DivSex>
      </Container >
    </>

  )
}

