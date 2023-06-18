import React from "react";

const Clips = ({ clipsData }) => {
  
  const formatClipDate = (dateString) => {
    const options = { month: "long", day: "numeric", year: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <section className="container mx-auto">
      <h2></h2>
      {clipsData.map((clip) => (
        <div
          key={clip.id}
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <a href={clip.url} target="_blank" rel="noopener noreferrer">
            <img className="rounded-t-lg" src={clip.thumbnail_url} alt="" />
          </a>
          <div className="p-5">
            <a href={clip.url} target="_blank" rel="noopener noreferrer">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {clip.broadcaster_name}
              </h5>
            </a>
            <ul className="mb-3 font-normal text-gray-700 dark:text-white">
              <li>"{clip.title}"</li>
              <li>{clip.view_count} views</li>
              <li>{formatClipDate(clip.created_at)}</li>
            </ul>
            <a
              href={clip.url}
              className="inline-flex items-center text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link to twitch clip
              <svg
                className="w-5 h-5 ml-2"
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

export default Clips;