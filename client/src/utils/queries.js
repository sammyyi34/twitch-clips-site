import { gql,} from '@apollo/client';

// export const VIEW_CLIP = gql`
//   query seeAllClips {
//     viewClip {
//       _id
//       clipUrl
//       date
//       streamerName
//       thumbnail
//       title
//       views
//     }
//   }
// `;

// export const VIEW_HOMEPAGE_CLIPS = gql`
//   query getHomepageClips {
//     clips @rest(type: "Clips", path: "/") { 
//       total 
//       data @type(name: "Clips) { 
//         id
//         url
//         broadcaster_name
//         title
//         view_count
//         created_at
//         thumbnail_url
//        } 
//     } 
//  }
// `;