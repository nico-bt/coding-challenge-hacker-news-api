import useSWR from "swr"
import { getItemInfo } from "../services/hacker-news-getData"
import Comment from "../components/Comment"

function DetailPage({ params }) {
  const { data, isLoading, error } = useSWR(`story/${params.id}`, () => getItemInfo(params.id))

  if (error) return <div>failed to load</div>

  if (isLoading) return <div>loading...</div>

  // console.log(data)

  return (
    <div>
      <h1>{data.title}</h1>
      <h2>By: {data.by}</h2>
      <h3>
        <a href={data.url}>{data.url}</a>
      </h3>

      <h3 style={{ borderBottom: "1px solid gray" }}>({data.descendants}) Comments:</h3>
      <ul>
        {data.kids.map((kid) => (
          <Comment key={kid} kidId={kid} />
        ))}
      </ul>
    </div>
  )
}

export default DetailPage
