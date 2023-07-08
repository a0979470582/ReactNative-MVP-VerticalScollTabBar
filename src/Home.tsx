import React from 'react';
import {Image, ScrollView, View} from 'react-native';

function UserProfileCard(): JSX.Element {
  return (
    <View style={{flex: 1, alignItems: 'center', margin: 16}}>
      <Image
        source={require('@src/image/scenic1.png')}
        style={{height: 200, aspectRatio: 1.78}}
      />
    </View>
  );
}

function TabBar(): JSX.Element {
  return <></>;
}

export function Home(): JSX.Element {
  return (
    <ScrollView>
      <UserProfileCard />
      <TabBar />
    </ScrollView>
  );
}
