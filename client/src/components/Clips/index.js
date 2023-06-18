import React from "react";

const Clips = ({ clipsData }) => {
  
  const formatClipDate = (dateString) => {
    const options = { month: "long", day: "numeric", year: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <section className="container mx-auto mt-10 grid grid-cols-5 gap-4">
      {clipsData.map((clip) => (
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

export default Clips;