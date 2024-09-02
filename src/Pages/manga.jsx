import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const MangaList = () => {
  const [mangas, setMangas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchMangas = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.jikan.moe/v4/manga?page=${page}&limit=25`
        );
        const data = await response.json();
        console.log(data);

        setMangas((prev) => [...prev, ...data.data]);
        setHasMore(data.pagination.has_next);
      } catch (error) {
        console.error("Error fetching manga data:", error);
      }
      setLoading(false);
    };

    fetchMangas();
  }, [page]);

  const loadMore = () => {
    if (hasMore) {
      setPage((prev) => prev + 1);
    }
  };

  if (loading && page === 1)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  if (mangas.length === 0)
    return (
      <div className="min-h-screen flex items-center justify-center">
        No manga data available
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Manga List
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mangas.map((manga) => (
          <div
            key={manga.mal_id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={
                manga.images?.jpg?.image_url ||
                "https://via.placeholder.com/150"
              }
              alt={manga.title}
              className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-110"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {manga.title}
              </h2>
              <p className="text-gray-600 mb-2">Type: {manga.type}</p>
              <p className="text-gray-600 mb-2">Chapters: {manga.chapters}</p>
              <p className="text-gray-600 mb-2">Status: {manga.status}</p>
              <p className="text-gray-600 mb-2">
                Published: {manga.published?.string}
              </p>
              <Link to={`/manga/${manga.mal_id}`}>
                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md transition-transform duration-300 hover:scale-105">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {hasMore && (
        <div className="text-center mt-6">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
            onClick={loadMore}
            disabled={loading}
          >
            {loading ? "Loading more..." : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
};
