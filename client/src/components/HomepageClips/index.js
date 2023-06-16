import { useState, useEffect } from "react";

const HomepageClips = () => {
  const [clipsData, setClipsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const headersList = {
        "Client-Id": "iqzxo4pl07z9emlrlns1my4v6gq206",
        Authorization: "Bearer 6b0u5h2l06qzsy2e57h1guikgrhy5p",
      };

      try {
        const response = await fetch(
          "https://api.twitch.tv/helix/clips?game_id=515024",
          {
            method: "GET",
            headers: headersList,
          }
        );

        if (response.ok) {
          const data = await response.json(); // Parse the response as JSON
          setClipsData(data.data); // Extract the data array and update state
        } else {
          console.error("Request failed with status:", response.status);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="container mx-auto">
      <h1>Diablo 4 Clips</h1>
      {clipsData.map((clip) => (
        <div
          key={clip.id}
          class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <a href={clip.url}>
            <img
              class="rounded-t-lg"
              src={clip.thumbnail_url}
              alt=""
            />
          </a>
          <div class="p-5">
            <a href={clip.url}>
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <a
              href={clip.url}
              class="inline-flex items-center text-blue-600 hover:underline"
            >
              Link to twitch clip
              <svg
                class="w-5 h-5 ml-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
              </svg>
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HomepageClips;
