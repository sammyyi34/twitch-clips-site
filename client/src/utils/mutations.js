import { gql } from '@apollo/client';

export const ADD_CLIPS = gql`
mutation mutateClips($streamerName: String!, $title: String, $date: String, $views: Int, $thumbnail: String, $clipUrl: String) {
  addClip(streamerName: $streamerName, title: $title, date: $date, views: $views, thumbnail: $thumbnail, clipUrl: $clipUrl) {
    clipUrl
    date
    streamerName
    thumbnail
    title
    views
    _id
  }
}
`;


