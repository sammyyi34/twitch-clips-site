import { VIEW_CLIP } from '../../utils/queries';
import { useQuery } from '@apollo/client';

const Clips = () => {
  const { loading, data } = useQuery(VIEW_CLIP);
  const clips = data?.viewClip || [];
  console.log(data)
  return (
    <div>
      {/* ternary operator(if statement) */}
      {loading ?
      <div> Clips have not been fetched yet! </div>
      : <div>
          {clips.map((clip, i) => {
            return (
              <div key={i}>
                {clip.streamerName}
              </div>
            )
          })}
        </div>
      }
    </div>
  )
}

export default Clips;