import React from "react";
import { TransferData } from "../Home/Home";
import { ThemeProvider, Typography } from "@mui/material";
import { MyTheme } from "../../CustomColor";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

const GenresList = [];
const GenresAnimeList = {};

export const Genres = () => {
  TransferData.map((anime) => {
    anime.genres.map((gen) => {
      if (!GenresList.includes(gen.name)) {
        GenresList.push(gen.name);
      }
    });
  });
  GenresList.sort();
  console.log(GenresList);

  GenresList.map((genres) => {
    GenresAnimeList[genres] = [];
    TransferData.map((anime) => {
      anime.genres.map((gen) => {
        if (gen.name === genres) {
          if (!GenresAnimeList[genres].includes(anime)) {
            GenresAnimeList[genres].push(anime);
          }
        }
      });
    });
  });

  console.log(GenresAnimeList);

  return (
    <ThemeProvider theme={MyTheme}>
      <p
        variant="h1"
        sx={{ fontSize: "30px", fontFamily: "Fira Code" }}
        className="text-3xl text-center mt-10 mb-10 font-bold"
      >
        Trending Animes
      </p>
      <br></br>
      <Typography
        variant="h3"
        sx={{ fontSize: "25px", fontWeight: "500", fontFamily: "Fira Code" }}
      ></Typography>
     <div className="p-4">
        {Object.entries(GenresAnimeList).map(([genre, animes]) => (
          <div key={genre} className="mb-12">
            {/* Genre title */}
            <h3 className="text-3xl font-bold font-mono mb-6 text-gray-800 border-b-2 border-yellow-400 inline-block">
              {genre}
            </h3>
            {/* Anime cards container */}
            <div className="flex flex-wrap gap-8 justify-center">
              {animes.map((anime) => (
                <div
                  key={anime.title}
                  className="max-w-xs flex-none transform transition duration-500 hover:scale-105 hover:shadow-2xl shadow-lg rounded-xl overflow-hidden bg-white hover:bg-gray-50"
                >
                  {/* Image */}
                  <div className="flex justify-center items-center overflow-hidden">
                    <img
                      src={anime.images.jpg.image_url}
                      alt={anime.title}
                      className="object-cotain transition-transform duration-700 hover:scale-110 w-56 h-56"
                    />
                  </div>
                  {/* Content */}
                  <div className="p-4 bg-gray-50">
                    <h4 className="text-left text-lg font-mono font-semibold text-gray-900 truncate">
                      {anime.title.length > 20
                        ? `${anime.title.substring(0, 20)}...`
                        : anime.title}{" "}
                      {/* Truncated title */}
                    </h4>
                    <p className="text-left font-mono text-gray-600">
                      {anime.synopsis.substring(0, 50)}...{" "}
                      {/* Truncated synopsis */}
                    </p>
                  </div>
                  {/* More Button */}
                  <div className="flex justify-center bg-gray-100 p-2">
                    <Link to={`/genres/${anime.rank}`}>
                      <button className="text-white bg-yellow-600 font-mono px-4 py-1.5 rounded transition duration-300 hover:bg-yellow-500 transform hover:scale-105 shadow-md">
                        More
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        </div>
    </ThemeProvider>
  );
};
