import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen p-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">
          About Our Website
        </h1>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Introduction Card */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">
                Welcome to Our Platform
              </h2>
              <p>
                Our website is dedicated to bringing you the latest and most
                exciting updates in the world of anime and manga. We leverage
                cutting-edge API integrations to deliver comprehensive
                information on new anime releases, trending manga, and much
                more. Our goal is to provide a user-friendly and engaging
                experience for anime and manga enthusiasts.
              </p>
            </div>
          </div>

          {/* Features Card */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
              <ul className="list-disc list-inside">
                <li className="mb-2">
                  <span className="font-semibold">Latest Anime Updates:</span>{" "}
                  Stay updated with real-time information on the newest anime
                  series.
                </li>
                <li className="mb-2">
                  <span className="font-semibold">
                    Detailed Manga Information:
                  </span>{" "}
                  Get in-depth details about your favorite manga, including
                  synopsis, ratings, and more.
                </li>
                <li className="mb-2">
                  <span className="font-semibold">API Integration:</span> Our
                  platform integrates with multiple APIs to fetch and display
                  accurate and up-to-date content.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-3xl font-semibold mb-4">Core Values</h2>
          <div className="flex flex-wrap gap-4">
            <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
              <span>Innovation</span>
            </div>
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full">
              <span>Integrity</span>
            </div>
            <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full">
              <span>Customer Focus</span>
            </div>
            <div className="bg-red-100 text-red-800 px-4 py-2 rounded-full">
              <span>Excellence</span>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-3xl font-semibold mb-4">How We Work</h2>
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">API Integration</h3>
                <p>
                  We utilize various APIs to pull in data from different
                  sources, ensuring that you get the most accurate and
                  up-to-date information on anime and manga.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">User Experience</h3>
                <p>
                  Our platform is designed to be intuitive and easy to use.
                  Whether you’re browsing new anime releases or exploring
                  detailed manga information, we ensure a smooth and engaging
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
