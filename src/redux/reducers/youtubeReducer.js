import YoutubeActionTypes from "../actionTypes/youtubeActionTypes";

const INITIAL_STATE = {
  playlists: {},
  selectedVideoId: null,
  searchResult: {}
};

const youtubeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case YoutubeActionTypes.FETCH_YOUTUBE_PLAYLISTS:
      return { ...state, playlists: action.payload };
    case YoutubeActionTypes.FETCH_YOUTUBE_PLAYLISTITEMS:
      const { playlistId, items } = action.payload
      return { ...state, playlists: { ...state.playlists, [playlistId]: { ...state.playlists[playlistId], items } } }
    case YoutubeActionTypes.SEARCH_YOUTUBE_CHANNEL:
      return { ...state, searchResult: action.payload }
    case YoutubeActionTypes.START_YOUTUBE_VIDEO:
      return { ...state, selectedVideoId: action.payload }
    case YoutubeActionTypes.STOP_YOUTUBE_VIDEO:
      return { ...state, selectedVideoId: null }
    default:
      return state;
  }
};

export default youtubeReducer;
