import React from "react";
import { Text, View, Image } from "react-native";
import { TvShow } from "../interfaces/TVShowInterface";

const TVShowPoster = ({ tvShow }: Props) => {

  const uri = "https://image.tmdb.org/t/p/original" + tvShow.backdrop_path;
  return (
    <View style={{
      width: 300,
      height: 200
    }}>
      {/*<Text>{tvShow.original_title}</Text>*/}
      <View style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 10,
          shadowOpacity: 0.50,
          shadowRadius: 3.84,
          elevation: 10
        },
        borderRadius: 20,

        flex: 1
      }}>
        <Image
          source={{ uri }}
          style={{
            borderRadius: 20,
            flex: 1,
            resizeMode: "contain"

          }}
        />
      </View>
    </View>
  );
};

interface Props {
  tvShow: TvShow;

}

export default TVShowPoster;
