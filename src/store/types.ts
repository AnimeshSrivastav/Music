
export interface songType {
  artistId?: string;
  title?: string;
  images: {
    background?: string;
    coverart?: string;
  }
  url?: string;
}

export interface playlistType {
  name?: string;
  songs: songType[];
}

export interface Peoples {
  name: string;
  id: number;
  artists: string[];
  favourites: songType[];
  playlists: playlistType[];
}

