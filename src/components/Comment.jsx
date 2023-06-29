import useSWR from "swr"
import { getItemInfo } from "../services/hacker-news-getData"
import SkeletonLoader from "../components/SkeletonLoader"

function Comment({ kidId }) {
  const { data, isLoading, error } = useSWR(`item/${kidId}`, () => getItemInfo(kidId))
  console.log(data)

  if (error) return <div>{error.message}</div>

  if (isLoading) return <SkeletonLoader />

  return (
    <li>
      {data?.text}

      {data.kids?.length > 0 && (
        <ul>
          {data.kids.map((kid) => (
            <Comment key={kid} kidId={kid} />
          ))}
        </ul>
      )}
    </li>
  )
}

export default Comment
