import { Peoples, songType, playlistType } from "./types";

//Creating Ations
export const CHANGE_NAME = "CHANGE_NAME"
export const CHANGE_ID = "CHANGE_ID"
export const ADD_FAVOURITS = "ADD_FAVOURITS"
export const ADD_PLAYLIST = "ADD_PLAYLIST"

export type ActionTypes =
  | { type: typeof CHANGE_NAME; payload: string }
  | { type: typeof CHANGE_ID; }
  | { type: typeof ADD_FAVOURITS; payload: songType }
  | { type: typeof ADD_PLAYLIST; payload: playlistType }


export const changeName = (name: string): ActionTypes => ({ type: CHANGE_NAME, payload: name })
export const changeID = (): ActionTypes => ({ type: CHANGE_ID })
export const addFavourites = (song: songType): ActionTypes => ({ type: ADD_FAVOURITS, payload: song })

export const addPlaylist = (playlists: playlistType): ActionTypes => ({ type: ADD_PLAYLIST, payload: playlists })