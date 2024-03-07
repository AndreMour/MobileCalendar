import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Close, ImageView, CloseView, CalendarIcon, CoffeIcon, SortIcon } from './styles';
import Calendar from '../../Pages/Calendar';
import DaysOfCoffe from '../../Pages/DaysOfCoffe';

const Drawer = createDrawerNavigator();

const CustomDrawerHeader = ({ navigation }) => {
  const handleCloseDrawer = () => {
    navigation.closeDrawer();
  };

  return (
    <DrawerContentScrollView>
      <CloseView>
        <Close name="close" onPress={handleCloseDrawer} />
      </CloseView>
      <ImageView>
        <Image
          source={require('../assets/Images/LogoSmart.png')}
          style={{ width: 150, height: 73.54 }}
          resizeMode="cover"
        />
      </ImageView>
    </DrawerContentScrollView>
  );
};


const SideBar = () => {

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => (
          <>
            <CustomDrawerHeader {...props} />
            <DrawerContentScrollView {...props} style={styles.drawerContent}>
              <DrawerItemList {...props} />
            </DrawerContentScrollView>
          </>
        )}

        screenOptions={{
          drawerStyle: {
            width: 280
          },
          headerStyle: {
            backgroundColor: "#fff"
          },
          headerTintColor: "#000000",
          headerShown: false,
          headerTintStyle: {
            fontWeight: "bold"
          },
          drawerActiveTintColor: "#313131",
          drawerLabelStyle: {
            color: "#0F0F0F",
            fontFamily: 'Montserrat-SemiBold',
            fontSize: 12,
            marginLeft: -10
          }
        }}
      >
        <Drawer.Screen
          name='Cleaning Calendar'
          component={() => <Calendar />}
          options={{
            drawerLabel: "Calendário de limpeza",
            title: "Calendário de Limpeza",
            headerShadowVisible: false,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 16,
              fontFamily: 'Montserrat-SemiBold',
            },
            headerRight: () => (
              <SortIcon name="sort-calendar-descending" onPress={() => setModalVisible(true)} />
            ),
            drawerIcon: () => (
              <CalendarIcon name="calendar" color="#000" />
            )
          }}
        />

        <Drawer.Screen
          name='DaysOfCoffe'
          component={DaysOfCoffe}
          options={{
            drawerLabel: "Dias do café",
            title: "Dias do Café",
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 16,
              fontFamily: 'Montserrat-SemiBold',
            },
            drawerIcon: () => (
              <CoffeIcon name="coffee" color="#000" />
            )
          }}
        />

      </Drawer.Navigator>
    </NavigationContainer >
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    marginTop: -300,
  }
});

export default SideBar;
