import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, Modal, TouchableOpacity } from 'react-native';
import {
    Body, DayWeek, DaysOfTheWeek, Months, Month,
    ArrowIcon, DaysOfTheMonth, Day,
    DayNumber, WeekDay, Circle, CircleView, ModalView,
    CloseView, Close, HourView, Hour, TaskView, AlignView,
    TitleTask, Group, GroupView, TitleView, HeaderView, Description,
    DescriptionView, AllDescriptionView, AllDescription, AlignBottomView,
    Dot, DotDescriptionView, TimeView, TimeTask, TopView, ActualDayView,
    ActualDay, TextView, Message, CenterView
} from './styles';
import Header from '../../Components/Header';

function getAllFridays(year, startMonth = 0, endMonth = 11) {
    const fridays = [];

    for (let month = startMonth; month <= endMonth; month++) {
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day);

            if (date.getDay() === 5) {
                fridays.push(date);
            }
        }
    }

    return fridays;
}

export default function Calendar(teams) {
    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalDayVisible, setModalDayVisible] = useState(false);

    const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const DAYS_OF_THE_WEEK = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'];
    const MONTHS = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro',
    ];

    const today = new Date();
    const [selectedDay, setSelectedDay] = useState(null);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [day, setDay] = useState(currentDate.getDate());
    const [month, setMonth] = useState(currentDate.getMonth());
    const [year, setYear] = useState(currentDate.getFullYear());
    const [startDay, setStartDay] = useState(getStartDayOfMonth(currentDate));
    const [allFridays, setAllFridays] = useState([]);

    const days = isLeapYear(year) ? DAYS_LEAP : DAYS;

    function getStartDayOfMonth(date) {
        const startDate = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
        return startDate === 0 ? 7 : startDate;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    useEffect(() => {
        setDay(currentDate.getDate());
        setMonth(currentDate.getMonth());
        setYear(currentDate.getFullYear());
        setStartDay(getStartDayOfMonth(currentDate));
        setAllFridays(getAllFridays(currentDate.getFullYear(), 0, 11));
    }, [currentDate]);

    return (
        <Body>
            <SafeAreaView>
                <View>
                    <Header title={"Calendário de Limpeza"} />
                </View>
            </SafeAreaView>
            <Months>
                <ArrowIcon
                    name="arrow-left"
                    onPress={() => setCurrentDate(new Date(year, month - 1, day))}
                />
                <Month>{MONTHS[month]} </Month>
                <ArrowIcon
                    name="arrow-right"
                    onPress={() => setCurrentDate(new Date(year, month + 1, day))}
                />
            </Months>
            <DaysOfTheWeek>
                {DAYS_OF_THE_WEEK.map((d, index) => (
                    <DayWeek key={index}>
                        <WeekDay>{d}</WeekDay>
                    </DayWeek>
                ))}
            </DaysOfTheWeek>
            {Array(Math.ceil((days[month] + startDay - 1) / 7))
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
                                const d = dayIndex > 0 && dayIndex <= days[month] ? dayIndex : null;
                                const dayOfWeek = (colIndex + startDay - 1) % 7;
                                const isFriday = allFridays.some(friday => {
                                    return friday.getDate() === d && friday.getMonth() === month;
                                });

                                return (
                                    <Day
                                        key={colIndex}
                                        isToday={d === today.getDate()}
                                        isSelected={d === day}
                                        empty={!d}
                                        dayOfWeek={dayOfWeek}
                                        onPress={() => {
                                            setSelectedDay(d);
                                            setModalDayVisible(true);
                                        }}
                                    >
                                        <Modal
                                            visible={isModalDayVisible}
                                            animationType='slide'
                                            transparent={true}
                                        >
                                            <TouchableOpacity onPress={() => setModalDayVisible(false)} style={{
                                                flex: 1,
                                                flexDirection: 'column-reverse'
                                            }}>
                                                <ModalView>
                                                    <TopView>
                                                        <ActualDayView>
                                                            <ActualDay>
                                                                Sexta, {selectedDay} de {MONTHS[month]}
                                                            </ActualDay>
                                                        </ActualDayView>
                                                        <CloseView>
                                                            <Close name='close' onPress={() => setModalDayVisible(false)} />
                                                        </CloseView>
                                                    </TopView>
                                                    <TextView>
                                                        <Message>Nenhuma tarefa agendada</Message>
                                                        <Message>:(</Message>
                                                    </TextView>
                                                </ModalView>
                                            </TouchableOpacity>
                                        </Modal>
                                        <DayNumber>
                                            {d > 0 ? String(d).padStart(2, '0') : ''}
                                        </DayNumber>
                                        {isFriday && (
                                            <CircleView>
                                                <Circle onPress={() => {
                                                    setSelectedDay(d);
                                                    setModalVisible(true);
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
                                                            <ModalView>
                                                                <TopView>
                                                                    <ActualDayView>
                                                                        <ActualDay>
                                                                            Sexta, {selectedDay} de {MONTHS[month]}
                                                                        </ActualDay>
                                                                    </ActualDayView>
                                                                    <CloseView>
                                                                        <Close name='close' onPress={() => setModalVisible(false)} />
                                                                    </CloseView>
                                                                </TopView>
                                                                <AlignView>
                                                                    <HourView>
                                                                        <Hour>
                                                                            11:30
                                                                        </Hour>
                                                                    </HourView>
                                                                    <TaskView>
                                                                        <HeaderView>
                                                                            <TitleView>
                                                                                <TitleTask>
                                                                                    Limpeza
                                                                                </TitleTask>
                                                                            </TitleView>
                                                                            <GroupView>
                                                                                <Group>
                                                                                    Duplas: Caio e Leo
                                                                                </Group>
                                                                            </GroupView>
                                                                            <TimeView>
                                                                                <TimeTask>
                                                                                    11:30 - 12:00
                                                                                </TimeTask>
                                                                            </TimeView>
                                                                        </HeaderView>
                                                                        <AlignBottomView>
                                                                            <DescriptionView>
                                                                                <Description>
                                                                                    Descrição da Tarefa:
                                                                                </Description>
                                                                            </DescriptionView>
                                                                            <AllDescriptionView>
                                                                                <DotDescriptionView>
                                                                                    <Dot name='dot-single' />
                                                                                    <AllDescription>
                                                                                        Realizar a limpeza das salas, varrendo a sala dos computadores, sala de reunião e sala do hardware.
                                                                                    </AllDescription>
                                                                                </DotDescriptionView>
                                                                                <DotDescriptionView>
                                                                                    <Dot name='dot-single' />
                                                                                    <AllDescription>
                                                                                        Fazer a retirada dos lixos da sala dos computadores, sala de reunião, sala do hardware e estoque.
                                                                                    </AllDescription>
                                                                                </DotDescriptionView>
                                                                            </AllDescriptionView>
                                                                        </AlignBottomView>
                                                                    </TaskView>
                                                                </AlignView>
                                                            </ModalView>
                                                        </TouchableOpacity>
                                                    </Modal>
                                                </Circle>
                                            </CircleView>
                                        )}
                                    </Day>
                                );
                            })}
                    </DaysOfTheMonth>
                ))}
        </Body>
    );
}
