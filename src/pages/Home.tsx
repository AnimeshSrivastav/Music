

import Sidebar from "../components/Sidebar";
import Coverpage from "../components/Coverpage";
import '../css/coverpage.css';
import { Typography } from "@mui/material";
import '../css/home.css'
import Songscard from "../components/songs/Songs";
export default function Home() {
  return (
    <div className="home flex-content">
      <div>
        <Sidebar />
      </div>
      <div className="home__element">
        <div >
          <Coverpage />
        </div>
        <div>
          <Typography sx={{ ml: 2, p: 2, fontSize: "20px", fontWeight: "bold" }}>
            Songs
          </Typography>
          <div className="home__songs flex-content">
            <Songscard />
          </div>

        </div>
      </div>
    </div>


  );
}
