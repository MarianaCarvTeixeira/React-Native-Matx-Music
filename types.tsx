/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  PlayerScreen: undefined;
  AlbumScreen: undefined;
  PlayerWidget: undefined;
};



export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  Home: undefined;
  Library: undefined;
  AlbumScreen: undefined;
  PlayerScreen: undefined;
  PlayerWidget: undefined;
};

export type Album = {
  id: string;
  name: string;
  by: string;
  numberOfLikes: number;
  imageUri: string;
  artistsHeadLine: string;
}

export type TabOneParamList = {
  TabOneScreen: undefined;
  AlbumScreen: undefined;
  PlayerScreen: undefined;
  PlayerWidget: undefined;
};

export type TabTwoParamList = {
  TabOneScreen: undefined;
  PlayerScreen: undefined;
  PlayerWidget: undefined;
};

export type Song = {
  id: string;
  imageUri: string;
  title: string; 
  artist: string; 
}

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;
export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

