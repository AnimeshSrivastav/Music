import { ActionTypes, CHANGE_ID, CHANGE_NAME, ADD_FAVOURITS, ADD_PLAYLIST } from "./actions";
import { Peoples } from "./types";
import { createStore } from 'redux'


//Redux Implementation  

function reducers(state: Peoples = {
  name: "Animesh",
  id: 1,
  artists: ['Taylor Swift', 'Dino James', 'shreya ghoshal'],
  favourites: [],
  playlists: [],
}, action: ActionTypes) {
  switch (action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        name: action.payload
      }

    case CHANGE_ID:
      return {
        ...state,
        id: state.id + 1
      }
    case ADD_FAVOURITS:
      return {
        ...state,
        favourites: [...state.favourites, action.payload]
      }
   
    default:
      return state
  }
}


const store = createStore(reducers)


export default store