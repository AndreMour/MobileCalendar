import React from 'react';
import { Image, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { ListIcon, Close, ImageView, CloseView, CalendarIcon, CoffeIcon, SortIcon } from './styles';
import Calendar from '../Calendar';
import DaysOfCoffe from '../DaysOfCoffe';
import SortGroups from '../SortGroups';

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
          style={{ width: 150, height: 73.54, }}
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
            <DrawerContentScrollView {...props}>
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
          // headerShown: false,
          headerTintStyle: {

            fontWeight: "bold"
          },
          drawerActiveTintColor: "#313131",
          drawerLabelStyle: {
            color: "#111",
            fontSize: 14,
            marginLeft: -10
          }
        }}
      >
        <Drawer.Screen
          name='Cleaning Calendar'
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
              <CalendarIcon name="calendar" size={16} marginLeft={16} color="#000" />
            )
          }}
          component={Calendar}
        />

        <Drawer.Screen
          name='SortGroups'
          options={{
            drawerLabel: "Sorteador de duplas",
            title: "Sorteador de duplas",
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 12,
              fontFamily: 'Montserrat-SemiBold',
            },
            drawerIcon: () => (
              <SortIcon name="drawer" size={24} marginLeft={16} color="#000" />
            )
          }}
          component={SortGroups}
        />

        <Drawer.Screen
          name='DaysOfCoffe'
          options={{
            drawerLabel: "Dias do café",
            title: "Dias do Café",
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 12,
              fontFamily: 'Montserrat-SemiBold',
            },
            drawerIcon: () => (
              <CoffeIcon name="coffeescript" size={24} marginLeft={16} color="#000" />
            )
          }}
          component={DaysOfCoffe}
        />

      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default SideBar;