import useSWR from "swr"
import { getItemInfo } from "../services/hacker-news-getData"
import SkeletonLoader from "../components/SkeletonLoader"

function Comment({ kidId }) {
  const { data, isLoading, error } = useSWR(`item/${kidId}`, () => getItemInfo(kidId))

  if (error) return <div>{error.message}</div>

  if (isLoading) return <SkeletonLoader />

  return (
    <details open>
      <summary>
        <span>By: {data.by} </span>
        <span> {data.time} ago</span>
      </summary>

      <p style={{ marginTop: 4, paddingLeft: 16 }}>{data.text}</p>

      {data.kids?.length > 0 && (
        <ul>
          {data.kids.map((kid) => (
            <Comment key={kid} kidId={kid} />
          ))}
        </ul>
      )}
    </details>
  )
}

export default Comment
