import { useState, useEffect } from 'react';

const HomepageClips = () => {
  const [clipsData, setClipsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const headersList = {
        'Client-Id': 'iqzxo4pl07z9emlrlns1my4v6gq206',
        'Authorization': 'Bearer 6b0u5h2l06qzsy2e57h1guikgrhy5p'
      };

      try {
        const response = await fetch('https://api.twitch.tv/helix/clips?game_id=515024', {
          method: 'GET',
          headers: headersList
        });

        if (response.ok) {
          const data = await response.json(); // Parse the response as JSON
          setClipsData(data.data); // Extract the data array and update state
        } else {
          console.error('Request failed with status:', response.status);
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="container mx-auto">
      <h1>Diablo 4 Clips</h1>
      <ul>
        {clipsData.map((clip) => (
          <div key={clip.id}>{clip.broadcaster_name}</div>
        ))}
      </ul>
    </section>
  );
};

export default HomepageClips;

