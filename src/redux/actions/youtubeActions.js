import youtube from "../../apis/youtube";
import YoutubeActionTypes from "../actionTypes/youtubeActionTypes";
import _ from "lodash"

export const fetchYoutubePlaylists = (term) => async dispatch => {
  const options = {
    channelId: `${process.env.REACT_APP_YOUTUBE_CHANNEL_ID}`
  };
  const { data } = await youtube.get("/playlists", {
    params: options
  })

  const playlists = _.map(data.items, (playlist) => {
    const { id, snippet: { title, description, thumbnails, publishedAt } } = playlist;
    return { playlistId: id, title, description, thumbnails, publishedAt }
  });

  dispatch({
    type: YoutubeActionTypes.FETCH_YOUTUBE_PLAYLISTS,
    payload: _.mapKeys(playlists, "playlistId"),
  })
}

export const fetchYoutubePlaylistItems = (playlistId) => async dispatch => {
  const options = {
    channelId: `${process.env.REACT_APP_YOUTUBE_CHANNEL_ID}`,
    playlistId
  };

  const { data } = await youtube.get("/playlistItems", {
    params: options
  })

  const playlistItems = _.map(data.items, (item) => {
    const { snippet: { title, description, thumbnails, publishedAt, resourceId: { videoId } } } = item;
    return { videoId, title, description, thumbnails, publishedAt }
  })

  dispatch({
    type: YoutubeActionTypes.FETCH_YOUTUBE_PLAYLISTITEMS,
    payload: { playlistId, items: { ..._.mapKeys(playlistItems, "videoId") } },
  })
}

export const startYoutubeVideo = (videoId) => dispatch => {
  dispatch({ type: YoutubeActionTypes.START_YOUTUBE_VIDEO, payload: videoId })
}

export const stopYoutubeVideo = () => dispatch => {
  dispatch({ type: YoutubeActionTypes.STOP_YOUTUBE_VIDEO })
}

export const searchYoutube = (term) => async dispatch => {
  const options = {
    channelId: `${process.env.REACT_APP_YOUTUBE_CHANNEL_ID}`,
    q: term
  };

  const { data } = await youtube.get("/search", {
    params: options
  })

  const searchItems = _.map(data.items, (item) => {
    const { snippet: { title, description, thumbnails, publishedAt }, id: { videoId } } = item;
    return { videoId, title, description, thumbnails, publishedAt }
  })

  dispatch({
    type: YoutubeActionTypes.SEARCH_YOUTUBE_CHANNEL,
    payload: { ..._.mapKeys(searchItems, "videoId") }
  })
}
