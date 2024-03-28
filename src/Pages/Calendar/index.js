import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, Modal, TouchableOpacity, Text, StyleSheet } from 'react-native';
import {
    Body, DayWeek, DaysOfTheWeek, Months, Month,
    ArrowIcon, DaysOfTheMonth, Day,
    DayNumber, WeekDay, Circle, CircleView, ModalView,
    CloseView, Close, HourView, Hour, TaskView, AlignView,
    TitleTask, Group, GroupView, TitleView, HeaderView, Description,
    DescriptionView, AllDescriptionView, AllDescription, AlignBottomView,
    Dot, DotDescriptionView, TimeView, TimeTask, TopView, ActualDayView,
    ActualDay, TextView, Message, GroupTimeView
} from './styles';
import Header from '../../Components/Header';
import { useTheme } from '@react-navigation/native';

export default function Calendar() {
    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalDayVisible, setModalDayVisible] = useState(false);
    const [fridayGroups, setFridayGroups] = useState([]);
    const [isTaskExpanded, setIsTaskExpanded] = useState(false);
    const [selectedDay, setSelectedDay] = useState(null);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [day, setDay] = useState(currentDate.getDate());
    const [month, setMonth] = useState(currentDate.getMonth());
    const [year, setYear] = useState(currentDate.getFullYear());
    const [startDay, setStartDay] = useState(getStartDayOfMonth(currentDate));
    const [allFridays, setAllFridays] = useState([]);
    const [selectedFridayGroups, setSelectedFridayGroups] = useState([]);

    const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const DAYS_WEEK = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']
    const DAYS_OF_THE_WEEK = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'];
    const MONTHS = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
    ];

    const today = new Date();

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
    }

    function getStartDayOfMonth(date) {
        const startDate = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
        return startDate === 0 ? 7 : startDate;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    const description = () => {
        return (
            <AlignBottomView>
                <DescriptionView>
                    <Description>
                        Descrição da Tarefa:
                    </Description>
                </DescriptionView>
                <AllDescriptionView>
                    <DotDescriptionView>
                        <Dot name='dot-single' style={styles.text} />
                        <AllDescription style={styles.text}>
                            Realizar a limpeza das salas, varrendo a sala dos computadores, sala de reunião e sala do hardware.
                        </AllDescription>
                    </DotDescriptionView>
                    <DotDescriptionView>
                        <Dot name='dot-single' style={styles.text} />
                        <AllDescription style={styles.text}>
                            Fazer a retirada dos lixos da sala dos computadores, sala de reunião, sala do hardware e estoque.
                        </AllDescription>
                    </DotDescriptionView>
                </AllDescriptionView>
            </AlignBottomView>
        )
    }

    const modalNoTask = () => {

        const { colors } = useTheme();

        const styles = StyleSheet.create({
            text: {
                color: colors.text,
            },
            backgroundModal: {
                backgroundColor: colors.backgroundModalTask,
            },
        });

        return (
            <Modal
                visible={isModalDayVisible}
                animationType='slide'
                transparent={true}
            >
                <TouchableOpacity onPress={() => setModalDayVisible(false)} style={{
                    flex: 1,
                    flexDirection: 'column-reverse'
                }}>
                    <ModalView style={styles.backgroundModal}
                        onStartShouldSetResponder={() => true}
                        onResponderReject={(evt) => {
                            evt.stopPropagation();
                        }}>
                        <ActualDayView>
                            <ActualDay style={styles.text}>
                                {DAYS_WEEK[new Date(year, month, selectedDay - 1).getDay()]}, {selectedDay} de {MONTHS[month]}
                            </ActualDay>
                        </ActualDayView>
                        <CloseView>
                            <Close name='close' onPress={() => setModalDayVisible(false)} style={styles.text} />
                        </CloseView>
                        <TextView>
                            <Message style={styles.text}>Nenhuma tarefa agendada</Message>
                            <Message style={styles.text}>:(</Message>
                        </TextView>
                    </ModalView>
                </TouchableOpacity>
            </Modal>
        )
    }

    const modalCircle = (d, currentGroups) => {

        const { colors } = useTheme();

        const styles = StyleSheet.create({
            text: {
                color: colors.text,
            },
            background: {
                backgroundColor: colors.backgroundModalTask,
            },
            backgroundTask: {
                backgroundColor: colors.backgroundTask,
            }
        });

        return (
            <CircleView>
                <Circle onPress={() => {
                    setSelectedDay(d);
                    setModalVisible(true)
                    setSelectedFridayGroups(currentGroups);
                }}>
                    <Modal
                        visible={isModalVisible}
                        animationType='slide'
                        transparent={true}
                    >
                        <TouchableOpacity onPress={() => setModalVisible(false)} style={{
                            flex: 1,
                            flexDirection: 'column-reverse'
                        }}>
                            <ModalView style={styles.background}
                                onStartShouldSetResponder={() => true}
                                onResponderReject={(evt) => {
                                    evt.stopPropagation();
                                }}>
                                <ActualDayView>
                                    <ActualDay style={styles.text}>
                                        {DAYS_WEEK[new Date(year, month, selectedDay).getDay() - 1]}, {selectedDay} de {MONTHS[month]}
                                    </ActualDay>
                                </ActualDayView>
                                <CloseView>
                                    <Close name='close' onPress={() => setModalVisible(false)} style={styles.text} />
                                </CloseView>
                                <AlignView>
                                    <HourView>
                                        <Hour>
                                            11:30
                                        </Hour>
                                    </HourView>
                                    <TaskView
                                        onPress={() => setIsTaskExpanded(!isTaskExpanded)}
                                        style={[isTaskExpanded ? { height: 235 } : {}, styles.backgroundTask]}>
                                        <HeaderView>
                                            <TitleView>
                                                <TitleTask style={styles.text}>
                                                    Limpeza
                                                </TitleTask>
                                            </TitleView>
                                            <GroupTimeView>
                                                <GroupView>
                                                    {displayGroups(selectedFridayGroups)}
                                                </GroupView>
                                                <TimeView>
                                                    <TimeTask>
                                                        11:30 - 12:00
                                                    </TimeTask>
                                                </TimeView>
                                            </GroupTimeView>
                                        </HeaderView>
                                        {isTaskExpanded && description()}
                                    </TaskView>
                                </AlignView>
                            </ModalView>
                        </TouchableOpacity>
                    </Modal>
                </Circle>
            </CircleView>
        )
    }

    const displayGroups = (currentGroups) => {

        return (
            <View>
                {
                    currentGroups && (
                        <Group>
                            Duplas: {currentGroups.map((participant, idx) => (
                                <React.Fragment key={idx}>
                                    {idx > 0 && idx < currentGroups.length && <Text> e </Text>}
                                    <Text>{participant}</Text>
                                </React.Fragment>
                            ))}
                        </Group>
                    )
                }
            </View>
        )
    }

    const displayFridays = (d, month) => {
        const isFriday = allFridays.some(friday => friday.getDate() === d && friday.getMonth() === month);
        const fridayIndex = allFridays.findIndex(friday => friday.getDate() === d && friday.getMonth() === month);

        if (isFriday && fridayIndex >= 0) {
            const currentGroups = fridayGroups[fridayIndex];

            if (currentGroups) {
                return modalCircle(d, currentGroups);
            }
        }

        return null;
    };


    useEffect(() => {
        setDay(currentDate.getDate());
        setMonth(currentDate.getMonth());
        setYear(currentDate.getFullYear());
        setStartDay(getStartDayOfMonth(currentDate));
        setAllFridays(getAllFridays(currentDate.getFullYear(), 0, 11));
    }, [currentDate]);


    const { colors } = useTheme();

    const styles = StyleSheet.create({
        text: {
            color: colors.text,
        },
    });

    return (
        <Body>
            <SafeAreaView>
                <View>
                    <Header title={"Calendário de Limpeza"} setFridayGroups={setFridayGroups} />
                </View>
            </SafeAreaView>
            <Months>
                <ArrowIcon
                    name="arrow-left"
                    onPress={() => setCurrentDate(new Date(year, month - 1, day))}
                    style={styles.text}
                />
                <Month style={styles.text}>{MONTHS[month]} </Month>
                <ArrowIcon
                    name="arrow-right"
                    onPress={() => setCurrentDate(new Date(year, month + 1, day))}
                    style={styles.text}
                />
            </Months>
            <DaysOfTheWeek>
                {DAYS_OF_THE_WEEK.map((d, index) => (
                    <DayWeek key={index}>
                        <WeekDay>{d}</WeekDay>
                    </DayWeek>
                ))}
            </DaysOfTheWeek>
            {Array(Math.ceil((DAYS[month] + startDay - 1) / 7))
                .fill(null)
                .map((_, rowIndex) => (
                    <DaysOfTheMonth
                        key={rowIndex}
                        style={{
                            borderTopWidth: 1,
                            borderTopColor: "#313131"
                        }}
                    >
                        {Array(7)
                            .fill(null)
                            .map((_, colIndex) => {
                                const dayIndex = rowIndex * 7 + colIndex + 1 - startDay;
                                const d = dayIndex > 0 && dayIndex <= DAYS[month] ? dayIndex : null;
                                const dayOfWeek = (colIndex + startDay - 1) % 7;
                                const isFriday = allFridays.some(friday => friday.getDate() === d && friday.getMonth() === month);

                                return (
                                    <Day
                                        key={colIndex}
                                        isToday={d === today.getDate()}
                                        isSelected={d === day}
                                        empty={!d}
                                        dayOfWeek={dayOfWeek}
                                        onPress={() => {
                                            if (!isFriday && allFridays) {
                                                setSelectedDay(d);
                                                setModalDayVisible(true);
                                            } else if (allFridays && !modalCircle) {
                                                setSelectedDay(d);
                                                setModalDayVisible(true);
                                            }
                                        }
                                        }
                                    >
                                        {modalNoTask()}
                                        <DayNumber style={styles.text}>
                                            {d > 0 ? String(d).padStart(2, '0') : ''}
                                        </DayNumber>
                                        {displayFridays(d, month)}
                                    </Day>
                                );
                            })}
                    </DaysOfTheMonth>
                ))}
        </Body>
    );
}

