import * as React from 'react';
import Coverpage from '../components/Coverpage';
import Sidebar from '../components/Sidebar';
import { Button, TextField } from '@mui/material';
import { Peoples } from '../store/types';
import { useDispatch, useSelector } from 'react-redux';
import { addFavourites } from '../store/actions'
export interface FavouritesProps {
}

export default function Favourites(props: FavouritesProps) {
  const [text, setText] = React.useState<string>('')
  const favourites = useSelector((state: Peoples) => state.favourites)
  console.log(favourites)
  const dispatch = useDispatch()
  return (
    <div className="favourite flex-content">
      <div>
        <Sidebar />
      </div>
      <div className="favourite__element">
        <div >
          <Coverpage />
        </div>
        <div className='search__elements flex-content'>
        </div>
        {
          favourites.map((favourite) => (favourite.title))
        }

      </div>
    </div>
  );
}
