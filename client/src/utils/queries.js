import { gql } from '@apollo/client';

export const VIEW_CLIP = gql`
  query seeAllClips {
    viewClip {
      _id
      clipUrl
      date
      streamerName
      thumbnail
      title
      views
    }
  }
`;