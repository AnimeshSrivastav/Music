import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import QueueIcon from '@mui/icons-material/Queue';
export const data = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: '/'
    }, {
        title: "Search",
        icon: <SearchIcon />,
        link: '/search'
    },
    {
        title: "Favourites",
        icon: <StarBorderIcon />,
        link: '/favourite'
    },
    {
        title: "Playlist",
        icon: <QueueIcon />,
        link: '/Playlist'
    }
]