import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Switch } from 'react-native-switch';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import {
  Close, ImageView, CloseView,
  CalendarIcon, CoffeIcon, ButtonView, TopView, SideBarContainer
} from './styles';
import Calendar from '../../Pages/Calendar/index';
import DaysOfCoffe from '../../Pages/DaysOfCoffe';
import { lightTheme, darkTheme } from '../Themes/themes';
import { COLORS } from '../Colors/colors';

const Drawer = createDrawerNavigator();

const CustomDrawerHeader = ({ navigation, themeToggler }) => {
  const [value, setValue] = useState();

  const handleCloseDrawer = () => {
    navigation.closeDrawer();
  };

  const handleToggleSwitch = () => {
    setValue(!value);
    themeToggler();
  }

  return (

    <DrawerContentScrollView>
      <TopView>
        <ButtonView>
          <Switch style={styles.shadow}
            value={value}
            onPress={handleToggleSwitch}
            renderActiveText={false}
            renderInActiveText={false}
            barHeight={20}
            circleSize={18.67}
            backgroundActive='#111111'
            backgroundInactive='#F5F5F5'
            circleActiveColor={COLORS.primaryOrange}
            circleInActiveColor={COLORS.primaryOrange}
            circleBorderWidth={0}
          />
        </ButtonView>
        <CloseView>
          <Close name="close" onPress={() => handleCloseDrawer} />
        </CloseView>
      </TopView>
      <ImageView>
        <Image
          source={require('../../assets/Images/LogoSmart.png')}
          style={{ width: 150, height: 73.54 }}
          resizeMode="cover"
        />
      </ImageView>
    </DrawerContentScrollView>
  );
};

const SideBar = ({ themeToggler, theme }) => {

  return (
    <NavigationContainer theme={theme === 'light' ? lightTheme : darkTheme}>
      <Drawer.Navigator
        drawerContent={props => (

          <>
            <CustomDrawerHeader {...props} themeToggler={themeToggler} />
            <DrawerContentScrollView {...props} style={styles.drawerContent} >
              <DrawerItemList {...props} />
            </DrawerContentScrollView>

          </>
        )}
        screenOptions={() => ({
          drawerStyle: {
            width: 280,
          },
          headerShown: false,
          drawerActiveTintColor: "#313131",
          drawerLabelStyle: {
            fontFamily: 'Montserrat-SemiBold',
            fontSize: 12,
            marginLeft: -10,
          }
        })}
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
            drawerIcon: () => (
              <CalendarIcon name="calendar" />
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
              <CoffeIcon name="coffee" />
            )
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer >
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: -12 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
  },
  drawerContent: {
    marginTop: -300,
  }
});

export default SideBar;
