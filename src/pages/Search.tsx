import Coverpage from '../components/Coverpage';
import Sidebar from '../components/Sidebar';
import '../css/search.css'
import { TextField, Button } from '@mui/material'
import axios from "axios"
import { useEffect, useState } from 'react';
import { songType } from '../store/types'
import Card from '../components/Card';

interface artistType {
  id: string;
  name: string;
  picture_big: string
}

interface hintsType {
  title: string;
  artist: artistType;
}

export default function Search() {

  const [text, setText] = useState<string>('')
  const [hints, setHints] = useState<hintsType[]>([])
  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
      params: { q: text },
      headers: {
        'X-RapidAPI-Key': 'key',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response) {
      setHints(response.data.data)
    }).catch(function (error) {
      console.error(error);
    });
  }, [text])

  return (
    <div className="search flex-content">
      <div>
        <Sidebar />
      </div>
      <div className="search__element">
        <div >
          <Coverpage />
        </div>
        <div className='search__elements'>
          <div className='search__field'>
            <TextField sx={{ width: "50vw" }} placeholder="Search Songs, Artist and more" onChange={(e) => setText(e.target.value)} />
            <Button sx={{ ml: 3, backgroundColor: "#fa9cc0", color: 'black', '&:hover': { backgroundColor: '#fa9cc0' } }}>Search</Button>
          </div>
          <div className="search__hints flex-content">
            {
              hints?.map((h) => (<Card title={h.title} picture={h.artist.picture_big} name={h.artist.name} />))
            }
          </div>
        </div>
      </div>
    </div >
  );
}
