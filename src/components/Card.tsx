import * as React from 'react';
import { useDispatch } from 'react-redux';
import '../css/card.css'
import { Typography, IconButton } from "@mui/material";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarRateIcon from '@mui/icons-material/StarRate';
import { addFavourites } from '../store/actions'; 
import { songType, playlistType} from '../store/types';
export interface ICardProps {
    id?: string;
    title?: string;
    picture?: string;
    name?: string;
}

const Card: React.FC<ICardProps> = ({ id, title, picture, name }): JSX.Element => {
    const [isFavorite, setFavorite] = React.useState<boolean>(false)
    const dispatch = useDispatch()
    const song = {
        name: title,
        songs:{id,title, picture}
    }
    const handleclick = () => {
        setFavorite(prev => !prev)
    }
    return (
        <div className='card'>
            <img src={picture} alt="cardpage" className='card__img' />
            <div className='card__info flex-content'>
                <Typography className='flex-content'>
                    {title}
                    {name}
                </Typography>
                <IconButton onClick={() => handleclick()}>
                    {
                        isFavorite ? (<StarRateIcon />) : (<StarBorderIcon />)
                    }
                </IconButton>
            </div>
        </div>
    );
}

export default Card