import useSWR from "swr"
import { getItemInfo } from "../services/hacker-news-getData"
import Comment from "../components/Comment"

function DetailPage({ params }) {
  const { data, isLoading, error } = useSWR(`story/${params.id}`, () => getItemInfo(params.id))

  // console.log(data)

  if (error) return <div>failed to load</div>

  if (isLoading) return <div>loading...</div>

  return (
    <div>
      <h1>{data.title}</h1>
      <h2>Comments:</h2>
      <ul>
        {data.kids.map((kid) => (
          <Comment key={kid} kidId={kid} />
        ))}
      </ul>
    </div>
  )
}

export default DetailPage
