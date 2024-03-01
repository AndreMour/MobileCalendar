import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import DaysOfCoffe from '../DaysOfCoffe';
import { ListIcon, Close, ImageView, CloseView } from './styles';
import Calendar from '../Calendar';
import { Image } from 'react-native';

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
        drawerContent={props => <CustomDrawerHeader {...props} />}

        screenOptions={{
          drawerStyle: {
            width: 280
          },
          headerStyle: {
            backgroundColor: "#fff"
          },
          headerTintColor: "#000000",
          headerTintStyle: {
            fontWeight: "bold"
          },
          drawerActiveTintColor: "#313131",
          drawerLabelStyle: {
            color: "#111",
          }
        }}
      >
        <Drawer.Screen
          name='Calendário de Limpeza'
          options={{
            drawerLabel: "Calendário de Limpeza",
            title: "Calendário de Limpeza",
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 16,
              fontFamily: 'Montserrat-SemiBold',
            },
            drawerIcon: () => (
              <ListIcon name="List" size={24} marginLeft={16} color="#fff" />
            )
          }}
          component={Calendar}
        />

        <Drawer.Screen
          name='DaysOfCoffe'
          options={{
            drawerLabel: "Dias do Café",
            title: "Dias do Café",
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 16,
              fontFamily: 'Montserrat-SemiBold',
            },
            drawerIcon: () => (
              <ListIcon name="List" size={24} marginLeft={16} color="#fff" />
            )
          }}
          component={DaysOfCoffe}
        />

      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default SideBar;