import { useState, useEffect } from "react";

const HomepageClips = () => {
  const [homeClipsData, setHomeClipsData] = useState([]);

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
          const data = await response.json();
          setHomeClipsData(data.data);
        } else {
          console.error("Request failed with status:", response.status);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchData();
  }, []);

  const formatClipDate = (dateString) => {
    const options = { month: "long", day: "numeric", year: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <section className="container mx-auto mt-10 grid grid-cols-5 gap-4">
      {homeClipsData.map((clip) => (
        <div
          key={clip.id}
          className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-2 flex flex-col"
        >
          <a href={clip.url} target="_blank" rel="noopener noreferrer">
            <img className="rounded-lg" src={clip.thumbnail_url} alt="" />
          </a>
          <div className="p-3">
            <a href={clip.url} target="_blank" rel="noopener noreferrer">
              <h5 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                {clip.broadcaster_name}
              </h5>
            </a>
            <ul className="mb-2 text-base font-normal text-gray-700 dark:text-white">
              <li className="overflow-hidden" style={{ maxHeight: "3rem" }}>
                "{clip.title}"
              </li>
              <li>{clip.view_count} views</li>
              <li>{formatClipDate(clip.created_at)}</li>
            </ul>
            <a
              href={clip.url}
              className="inline-flex items-center text-blue-600 hover:underline text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link to twitch clip
              <svg
                className="w-4 h-4 ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG paths */}
              </svg>
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HomepageClips;