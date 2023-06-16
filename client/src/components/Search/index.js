import { useState } from "react";

const Search = () => {
  const [searchInputValue, setSearchInputValue] = useState("");

  const searchBroadcaster = async (searchInputValue) => {
    try {
      const headersList = {
        "Client-Id": "iqzxo4pl07z9emlrlns1my4v6gq206",
        Authorization: "Bearer 6b0u5h2l06qzsy2e57h1guikgrhy5p",
      };

      const response = await fetch(
        `https://api.twitch.tv/helix/users?login=${searchInputValue}`,
        {
          method: "GET",
          headers: headersList,
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        const broadcasterId = data.data[0]?.id;

        const streamerId = await fetch(
          `https://api.twitch.tv/helix/clips?broadcaster_id=${broadcasterId}`,
          {
            method: "GET",
            headers: headersList,
          }
        );

        if (streamerId.ok) {
          const clipsData = await streamerId.json();
          console.log(clipsData);
        } else {
          console.error(
            "Clips request failed to load"
          );
        }
      } else {
        console.error("User request failed with status:", response.status);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleInputChange = (event) => {
    setSearchInputValue(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    searchBroadcaster(searchInputValue);
  };

  return (
    <section className="container mx-auto">
      <form onSubmit={handleSearchSubmit}>
        <div className="flex">
          <div className="relative w-full">
            <input
              type="search"
              id="search"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              placeholder="Search for Twitch streamer"
              name="streamerName"
              value={searchInputValue}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Search;
