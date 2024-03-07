import React, { useState, useEffect } from 'react';
import { View, SafeAreaView } from 'react-native';
import {
    Body, DayWeek, DaysOfTheWeek, Months, Month,
    ArrowIcon, DaysOfTheMonth, Day,
    DayNumber, WeekDay, AlignBody,
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

export default function Calendar() {
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
    const [currentDate, setCurrentDate] = useState(today);
    const [day, setDay] = useState(currentDate.getDate());
    const [month, setMonth] = useState(currentDate.getMonth());
    const [year, setYear] = useState(currentDate.getFullYear());
    const [startDay, setStartDay] = useState(getStartDayOfMonth(currentDate));

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
    }, [currentDate]);

    const allFridays = getAllFridays(year, 0, 11);


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
            <AlignBody>
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
                                    return (
                                        <Day
                                            key={colIndex}
                                            isToday={d === today.getDate()}
                                            isSelected={d === day}
                                            empty={!d}
                                            dayOfWeek={dayOfWeek}
                                        >
                                            <DayNumber>
                                                {d > 0 && d <= days[month] ? d : ''}
                                            </DayNumber>
                                        </Day>
                                    );
                                })}
                        </DaysOfTheMonth>
                    ))}
            </AlignBody>
        </Body>
    );
}
