import { Text, View, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../store/slices/NavSlices';
import { RootStackParamList } from '../types';

interface Idata {
  id: string;
  title: string;
  image: string;
  screen: string;
}

const NavOption = () => {
  const data = [
    { id: '123', title: 'Get a ride', image: 'https://links.papareact.com/3pn', screen: 'MapScreen' },
    { id: '456', title: 'Order food', image: 'https://links.papareact.com/28w', screen: 'EatsScreen' },
  ];

  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item: Idata) => item.id}
      renderItem={({ item }: { item: Idata }) => (
        <TouchableOpacity
          disabled={!origin}
          onPress={() => navigation.navigate(item.screen as any)}
          style={tw`p-2 pl-6 pb-8 pt-4 border border-gray-200 bg-gray-100 rounded-2xl m-2 w-40`}>
          {/* <View style={!origin && styles.opacity}>
            <Image style={{ width: 120, height: 120, resizeMode: 'contain' }} source={{ uri: item.image }} />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4
            `}
              name="arrowright"
              color="white"
              type="antdesign"
              tvParallaxProperties={undefined}
            />
          </View> */}
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOption;

const styles = StyleSheet.create({
  opacity: {
    opacity: 20,
  },
});
function params(screen: string, arg1: { item: Screen }, params: any, undefined: undefined): void {
  throw new Error('Function not implemented.');
}
