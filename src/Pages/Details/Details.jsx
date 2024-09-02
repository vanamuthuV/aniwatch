import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Details = () => {
  const { id } = useParams();
  const [animeData, setAnimeData] = useState(null);
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnimeData = async () => {
      try {
        // Fetch anime details
        const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
        const animeDetails = await response.json();
        setAnimeData(animeDetails.data);

        // Fetch anime characters
        const characterResponse = await fetch(
          `https://api.jikan.moe/v4/characters/${id}/anime`
        );
        const characterData = await characterResponse.json();

        // Handle the case where data might be undefined
        if (characterData.data && characterData.data.length > 0) {
          setCharacters(characterData.data.slice(0, 12)); // Limit to 12 characters
        } else {
          console.error("Character data is empty or not available.");
          setCharacters([]);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching anime data:", error);
        setLoading(false);
      }
    };

    fetchAnimeData();
  }, [id]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  if (!animeData)
    return (
      <div className="min-h-screen flex items-center justify-center">
        No data available
      </div>
    );

  const {
    images,
    trailer,
    title,
    title_english,
    title_japanese,
    type,
    source,
    episodes,
    status,
    aired,
    duration,
    rating,
    synopsis,
    background,
    genres = [],
    themes = [],
    demographics = [],
  } = animeData;

  console.log(characters);
  

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row p-4">
      {/* Left Side */}
      <div className="w-full md:w-1/2 p-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-105">
          <img
            src={images.jpg.large_image_url}
            alt={title}
            className="w-full h-80 object-cover transform transition-transform duration-500 hover:scale-105"
          />
          <div className="p-4">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">{title}</h1>
            <h2 className="text-xl text-gray-600 mb-2">{title_english}</h2>
            <p className="text-gray-500 mb-4">{title_japanese}</p>
            <p className="text-gray-600 mb-2">
              Type: <span className="font-medium">{type}</span>
            </p>
            <p className="text-gray-600 mb-2">
              Source: <span className="font-medium">{source}</span>
            </p>
            <p className="text-gray-600 mb-2">
              Episodes: <span className="font-medium">{episodes}</span>
            </p>
            <p className="text-gray-600 mb-2">
              Status: <span className="font-medium">{status}</span>
            </p>
            <p className="text-gray-600 mb-2">
              Aired: <span className="font-medium">{aired.string}</span>
            </p>
            <p className="text-gray-600 mb-2">
              Duration: <span className="font-medium">{duration}</span>
            </p>
            <p className="text-gray-600 mb-2">
              Rating: <span className="font-medium">{rating}</span>
            </p>
            <p className="text-gray-800 mt-4">{synopsis}</p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 p-4 flex flex-col">
        {/* Trailer Embed */}
        <div className="bg-white shadow-lg rounded-lg mb-4 transform transition-transform duration-500 hover:scale-105">
          {trailer?.embed_url ? (
            <iframe
              width="100%"
              height="315"
              src={trailer.embed_url}
              title={title}
              frameBorder="0"
              allowFullScreen
              className="rounded-t-lg"
            ></iframe>
          ) : (
            <p className="my-10 mb-5 text-center">No Trailer Available.</p>
          )}
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Trailer</h2>
          </div>
        </div>

        {/* Background */}
        <div className="bg-white shadow-lg rounded-lg mb-4 p-4 transform transition-transform duration-500 hover:scale-105">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Background</h2>
          <p className="text-gray-700">{background}</p>
        </div>

        {/* Genres */}
        <div className="bg-white shadow-lg rounded-lg mb-4 p-4 transform transition-transform duration-500 hover:scale-105">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Genres</h2>
          <div className="flex flex-wrap">
            {genres.map((genre) => (
              <span
                key={genre.mal_id}
                className="bg-blue-100 text-blue-800 py-1 px-3 rounded-full text-sm mr-2 mb-2 transform transition-transform duration-300 hover:scale-105"
              >
                {genre.name}
              </span>
            ))}
          </div>
        </div>

        {/* Themes */}
        <div className="bg-white shadow-lg rounded-lg mb-4 p-4 transform transition-transform duration-500 hover:scale-105">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Themes</h2>
          <div className="flex flex-wrap">
            {themes.map((theme) => (
              <span
                key={theme.mal_id}
                className="bg-green-100 text-green-800 py-1 px-3 rounded-full text-sm mr-2 mb-2 transform transition-transform duration-300 hover:scale-105"
              >
                {theme.name}
              </span>
            ))}
          </div>
        </div>

        {/* Demographics */}
        <div className="bg-white shadow-lg rounded-lg mb-4 p-4 transform transition-transform duration-500 hover:scale-105">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Demographics</h2>
          <div className="flex flex-wrap">
            {demographics.map((demo) => (
              <span
                key={demo.mal_id}
                className="bg-red-100 text-red-800 py-1 px-3 rounded-full text-sm mr-2 mb-2 transform transition-transform duration-300 hover:scale-105"
              >
                {demo.name}
              </span>
            ))}
          </div>
        </div>

        {/* Characters */}
        <div className="bg-white shadow-lg rounded-lg p-4 transform transition-transform duration-500 hover:scale-105">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Characters</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {characters.map((character) => (
              <div
                key={character.mal_id}
                className="bg-gray-100 p-4 rounded-lg shadow-md transform transition-transform duration-500 hover:scale-105"
              >
                <img
                  src={
                    character.anime?.images?.jpg?.image_url ||
                    "https://via.placeholder.com/150"
                  }
                  alt={character.name}
                  className="w-full h-40 object-cover rounded-lg mb-2"
                />
                <h3 className="text-lg font-semibold">{character?.anime?.title}</h3>
                <p className="text-gray-600">{character.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
