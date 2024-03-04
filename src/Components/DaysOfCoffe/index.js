import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Container, ContainerWeek, DivDay,
  DivNames, DivSeg, DivSex, EditIcon, EditView, Names, WeekDay
} from './styles';

export default function DaysOfCoffe() {
  return (
    <>
      <Container>
        <EditView>
          <EditIcon name='edit' />
        </EditView>
        <ContainerWeek>
          <DivSeg style={[styles.shadow, {
            borderTopWidth: 2,
            borderTopColor: "#B73625"
          }]}>
            <WeekDay>seg</WeekDay>
            <DivNames>
              <Names style={styles.nameMargin}>Caio</Names>
              <Names> Gabriel</Names>
            </DivNames>
          </DivSeg>
          <DivDay style={styles.shadow}>
            <WeekDay>ter</WeekDay>
            <DivNames>
              <Names style={styles.nameMargin}>Bruna </Names>
              <Names>Leo</Names>
            </DivNames>
          </DivDay>
        </ContainerWeek>
        <ContainerWeek>
          <DivDay style={styles.shadow}>
            <WeekDay>qua</WeekDay>
            <DivNames>
              <Names style={styles.nameMargin}>Osmar</Names>
              <Names>João</Names>
            </DivNames>
          </DivDay>
          <DivDay style={styles.shadow}>
            <WeekDay>qui</WeekDay>
            <DivNames>
              <Names style={styles.nameMargin}>Wasch</Names>
              <Names>Braian</Names>
            </DivNames>
          </DivDay>
        </ContainerWeek>
        <DivSex style={styles.shadow}>
          <WeekDay>sex</WeekDay>
          <DivNames>
            <Names style={styles.nameMargin}>Helegod </Names>
            <Names >Pedro K.</Names>
          </DivNames>
        </DivSex>
      </Container >
    </>

  )
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  nameMargin: {
    marginRight: 20
  }
});

