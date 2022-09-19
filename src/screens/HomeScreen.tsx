import * as React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { useMovies } from "../hooks/useMovies";
import TVShowPoster from "../components/TVShowPoster";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Carousel from 'react-native-snap-carousel';


export const HomeScreen = () => {
  const { popular, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ marginTop: top + 20, flexDirection: "row",justifyContent: 'center', flex:1 }}>
      {isLoading ? <ActivityIndicator color="red" size={60} /> :
        <Carousel
        layout={'stack'}
        layoutCardOffset={18}
        ref={ref => this.carousel = ref}
        data={popular}
        renderItem={({ item }) => <TVShowPoster tvShow={item} />}
        sliderWidth={300}
        itemWidth={300}
      />
      }



    </View>
  );
};
