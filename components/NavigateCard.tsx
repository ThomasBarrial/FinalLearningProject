import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { setDestination } from '../store/slices/NavSlices';
import { useNavigation } from '@react-navigation/native';
import NavFavourite from './NavFavourite';
import { Icon } from 'react-native-elements';

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good morning, Thomas</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            placeholder="Where From?"
            minLength={2}
            enablePoweredByContainer={false}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details?.geometry.location,
                  description: data.description,
                }),
              );
              navigation.navigate('RideOptionsCard');
            }}
            fetchDetails={true}
            styles={toInputBoxStyles}
            query={{
              key: process.env.GOOGLE_MAPS_APIKEY,
              language: 'fr',
            }}
          />
        </View>
        <NavFavourite />
      </View>
      <View style={tw`flex flex-row bg-white justify-evenly py-8 mt-auto border-t border-gray-100`}>
        <TouchableOpacity onPress={() => navigation.navigate('RideOptionsCard')} style={tw`flex flex-row bg-black w-24 px-4 py-3 rounded-full`}>
          <Icon name="car" type="font-awesome" color="white" size={16} tvParallaxProperties={undefined} />
          <Text style={tw`text-white text-center ml-2`}>Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`flex flex-row w-24 px-4 py-3 rounded-full`}>
          <Icon name="fast-food-outline" type="ionicon" color="black" size={16} tvParallaxProperties={undefined} />
          <Text style={tw`text-center ml-2`}>Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: '#DDDDDF',
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
