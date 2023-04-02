import Card from "../Card";
import { useEffect, useState } from "react";
import { songType } from "../../store/types";
import axios from 'axios'


const Songscard = () => {
    const [songs, setSongs] = useState<songType[]>([])

    useEffect(() => {
        const getArtists = async () => {
            const options = {
                method: 'GET',
                url: 'https://shazam-song-recognizer.p.rapidapi.com/top_country_tracks',
                params: { country_code: 'US', limit: '10', start_from: '0' },
                headers: {
                    'X-RapidAPI-Key': '0dc43eb808msh31bdc3a5837dd3dp114530jsn6cadddda9ccf',
                    'X-RapidAPI-Host': 'shazam-song-recognizer.p.rapidapi.com'
                }
            };

            axios.request(options).then(function (response) {
                setSongs(response.data.result.tracks);
            }).catch(function (error) {
                console.error(error);
            });

        }
        getArtists()

    }, [])

    return (
        <div className="flex-content">
            {
                songs.map(song => <Card id={song.artistId} picture={song.images.coverart} title={song.title} />)
            }
        </div>
    );
}

export default Songscard