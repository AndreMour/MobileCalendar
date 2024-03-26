import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Switch } from 'react-native-switch';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import {
  Close, ImageView, CloseView,
  CalendarIcon, CoffeIcon, ButtonView, TopView
} from './styles';
import Calendar from '../../Pages/Calendar/index';
import DaysOfCoffe from '../../Pages/DaysOfCoffe';
import { lightTheme, darkTheme } from '../Themes/themes';
import { COLORS } from '../Colors/colors';
import { useTheme } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const CustomDrawerHeader = ({ navigation, themeToggler }) => {
  const [value, setValue] = useState();

  const { colors } = useTheme();

  const styles = StyleSheet.create({
    text: {
      color: colors.text,
    },
    shadow: {
      width: 18.67,
      height: 20,
      borderRadius: 50,
      shadowColor: 'black',
      shadowOffset: { width: 0, height: -12 },
      shadowOpacity: 1,
      shadowRadius: 4,
      elevation: 5,
    }
  })

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
          <View style={styles.shadow}>
            <Switch
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
          </View>
        </ButtonView>
        <CloseView>
          <Close name="close" onPress={handleCloseDrawer} style={styles.text} />
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
        })}
      >
        <Drawer.Screen
          name='Cleaning Calendar'
          component={() => <Calendar />}
          options={() => {
            const { colors } = useTheme();
            const styles = StyleSheet.create({
              text: {
                color: colors.text,
              },
            });

            return {
              drawerLabel: "Calendário de limpeza",
              drawerIcon: () => (
                <CalendarIcon name="calendar" style={styles.text} />
              ),
              drawerLabelStyle: {
                fontFamily: 'Montserrat-SemiBold',
                fontSize: 12,
                marginLeft: -10,
                color: colors.text,
              }
            }
          }}
        />
        <Drawer.Screen
          name='DaysOfCoffe'
          component={DaysOfCoffe}
          options={() => {
            const { colors } = useTheme();
            const styles = StyleSheet.create({
              text: {
                color: colors.text,
              },
            });

            return {
              drawerLabel: "Dias do Café",
              drawerIcon: () => (
                <CoffeIcon name="coffee" style={styles.text} />
              ),
              drawerLabelStyle: {
                fontFamily: 'Montserrat-SemiBold',
                fontSize: 12,
                marginLeft: -10,
                color: colors.text,
              }
            }
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer >
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    marginTop: -300,
  },
})

export default SideBar;
