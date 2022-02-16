import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';

const data = [
  { id: '234', icon: 'home', location: 'Home', destination: 'Code Street, London, Uk' },
  { id: '456', icon: 'briefcase', location: 'Work', destination: 'London Eye, London, Uk' },
];
const NavFavourite = () => {
  return (
    <FlatList
      data={data}
      ItemSeparatorComponent={() => <View style={{ height: 0.5, backgroundColor: 'gray' }} />}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
          <Icon
            name={item.icon}
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            type="ionicon"
            color={'white'}
            size={18}
            tvParallaxProperties={undefined}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{item.location}</Text>
            <Text style={tw`text-gray-500`}>{item.destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourite;

const styles = StyleSheet.create({});
