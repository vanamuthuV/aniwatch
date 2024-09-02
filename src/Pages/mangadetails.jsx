import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MangaDetails = () => {
  const { id } = useParams();
  const [manga, setManga] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMangaData = async () => {
      try {
        setLoading(true);
        const [detailsRes, statsRes, recommendationsRes] = await Promise.all([
          fetch(`https://api.jikan.moe/v4/manga/${id}/full`),
          fetch(`https://api.jikan.moe/v4/manga/${id}/statistics`),
          fetch(`https://api.jikan.moe/v4/manga/${id}/recommendations`),
        ]);

        if (!detailsRes.ok || !statsRes.ok || !recommendationsRes.ok) {
          throw new Error("Network response was not ok");
        }

        const [details, stats, recommendations] = await Promise.all([
          detailsRes.json(),
          statsRes.json(),
          recommendationsRes.json(),
        ]);

        setManga({
          ...details.data,
          statistics: stats.data,
          recommendations: recommendations.data,
        });
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMangaData();
  }, [id]);

  if (loading) return <div className="text-center p-6">Loading...</div>;
  if (error)
    return <div className="text-center p-6 text-red-500">Error: {error}</div>;

  return (
    <div className="bg-white text-gray-900 min-h-screen p-6">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Manga Image */}
          <div className="w-full lg:w-1/3 mb-6 lg:mb-0 flex justify-center items-start">
            <img
              src={manga.images.jpg.large_image_url}
              alt={manga.title}
              className="w-3/4 rounded-lg shadow-lg"
            />
          </div>

          {/* Manga Info */}
          <div className="w-full lg:w-2/3 lg:pl-6 flex flex-col space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h1 className="text-3xl font-bold">{manga.title}</h1>
              <h2 className="text-xl font-semibold mt-1">
                {manga.title_english}
              </h2>
              <p className="text-lg italic mt-1">({manga.title_japanese})</p>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <div className="flex flex-col space-y-2">
                <div>
                  <span className="font-semibold">Type:</span> {manga.type}
                </div>
                <div>
                  <span className="font-semibold">Status:</span> {manga.status}
                </div>
                <div>
                  <span className="font-semibold">Published:</span>{" "}
                  {manga.published.string}
                </div>
                <div>
                  <span className="font-semibold">Score:</span> {manga.score} (
                  {manga.scored_by} votes)
                </div>
                <div>
                  <span className="font-semibold">Rank:</span> #{manga.rank}
                </div>
                <div>
                  <span className="font-semibold">Popularity:</span> #
                  {manga.popularity}
                </div>
                <div>
                  <span className="font-semibold">Members:</span>{" "}
                  {manga.members}
                </div>
                <div>
                  <span className="font-semibold">Favorites:</span>{" "}
                  {manga.favorites}
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <div>
                <span className="font-semibold">Synopsis:</span>
                <p className="mt-2">{manga.synopsis}</p>
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <div>
                <span className="font-semibold">Background:</span>
                <p className="mt-2">{manga.background}</p>
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <span className="font-semibold">Authors:</span>
              <div className="mt-2 flex flex-wrap gap-2">
                {manga.authors.map((author) => (
                  <span
                    key={author.mal_id}
                    className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full"
                  >
                    <a
                      href={author.url}
                      className="text-blue-600 hover:underline"
                    >
                      {author.name}
                    </a>
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <span className="font-semibold">Serializations:</span>
              <div className="mt-2 flex flex-wrap gap-2">
                {manga.serializations.map((serialization) => (
                  <span
                    key={serialization.mal_id}
                    className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full"
                  >
                    <a
                      href={serialization.url}
                      className="text-blue-600 hover:underline"
                    >
                      {serialization.name}
                    </a>
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <span className="font-semibold">Genres:</span>
              <div className="mt-2 flex flex-wrap gap-2">
                {manga.genres.map((genre) => (
                  <span
                    key={genre.mal_id}
                    className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full"
                  >
                    <a
                      href={genre.url}
                      className="text-blue-600 hover:underline"
                    >
                      {genre.name}
                    </a>
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <span className="font-semibold">Demographics:</span>
              <div className="mt-2 flex flex-wrap gap-2">
                {manga.demographics.map((demo) => (
                  <span
                    key={demo.mal_id}
                    className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full"
                  >
                    <a
                      href={demo.url}
                      className="text-blue-600 hover:underline"
                    >
                      {demo.name}
                    </a>
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <span className="font-semibold">Relations:</span>
              <div className="mt-2">
                {manga.relations.map((relation, index) => (
                  <div key={index} className="mb-4">
                    <div className="font-semibold">{relation.relation}:</div>
                    <ul className="list-disc ml-6 mt-2">
                      {relation.entry.map((entry) => (
                        <li key={entry.mal_id}>
                          <a
                            href={entry.url}
                            className="text-blue-600 hover:underline"
                          >
                            {entry.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <span className="font-semibold">External Links:</span>
              <div className="mt-2 flex flex-col gap-2">
                {manga.external.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    className="text-blue-600 hover:underline"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <span className="font-semibold">Statistics:</span>
              <div className="mt-2">
                <p>
                  <span className="font-semibold">Reading:</span>{" "}
                  {manga.statistics.reading}
                </p>
                <p>
                  <span className="font-semibold">Completed:</span>{" "}
                  {manga.statistics.completed}
                </p>
                <p>
                  <span className="font-semibold">On Hold:</span>{" "}
                  {manga.statistics.on_hold}
                </p>
                <p>
                  <span className="font-semibold">Dropped:</span>{" "}
                  {manga.statistics.dropped}
                </p>
                <p>
                  <span className="font-semibold">Plan to Read:</span>{" "}
                  {manga.statistics.plan_to_read}
                </p>
                <p>
                  <span className="font-semibold">Total:</span>{" "}
                  {manga.statistics.total}
                </p>
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <span className="font-semibold">Recommendations:</span>
              <div className="mt-2 flex flex-wrap gap-4">
                {manga.recommendations.map((rec) => (
                  <div
                    key={rec.entry.mal_id}
                    className="bg-gray-200 p-4 rounded-lg shadow-md"
                  >
                    <img
                      src={rec.entry.images.jpg.small_image_url}
                      alt={rec.entry.title}
                      className="w-24 h-36 object-cover rounded-lg mb-2"
                    />
                    <a
                      href={rec.entry.url}
                      className="block text-blue-600 hover:underline"
                    >
                      {rec.entry.title}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MangaDetails;
