
import { useEffect } from 'react';
import Coverpage from '../components/Coverpage';
import Sidebar from '../components/Sidebar';
import axios from 'axios';


export default function Playlist() {
  useEffect(() => {
    const getSongs = async () => {
      const options = {
        method: 'GET',
        url: 'https://deezerdevs-deezer.p.rapidapi.com/genre/%7Bid%7D',
        headers: {
          'X-RapidAPI-Key': '38a11fab9amshd1f38e75dc1cd09p15459bjsna5966bd4774d',
          'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
      };

      axios.request(options).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });
    }

    getSongs()
  }, [])
  return (
    <div className="playlist flex-content">
      <div>
        <Sidebar />
      </div>
      <div className="playlist__element">
        <div >
          <Coverpage />
        </div>
        playlist Page
      </div>
    </div>
  );
}
