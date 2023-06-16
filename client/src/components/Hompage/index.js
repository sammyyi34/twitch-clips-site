const fetch = require('node-fetch');

const Homepage = () => {

  let url = 'https://api.twitch.tv/helix/clips?game_id=515024';
  
  let options = {
    method: 'GET',
    headers: {
      'Client-Id': 'iqzxo4pl07z9emlrlns1my4v6gq206',
      Authorization: 'Bearer 6b0u5h2l06qzsy2e57h1guikgrhy5p'
    }
  };
  
  fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));

  return (
    <section className="container mx-auto">
      hi
    </section>
  );
};

export default Homepage;

