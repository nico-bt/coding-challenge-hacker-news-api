import { useEffect } from "react"
import { getTopStories } from "../services/hacker-news-getData"
import useSWR from "swr"
import Story from "../components/Story"

function TopStoriesPage() {
  // useEffect(() => {
  //   getTopStories({ page: 1, limit: 10 }).then((topStoriesIds) => console.log(topStoriesIds))
  // }, [])

  const { data, error, isLoading } = useSWR("topStories", () =>
    getTopStories({ page: 1, limit: 10 })
  )

  // useEffect(() => {
  //   console.log(data)
  // }, [data])

  if (error) return <div>failed to load</div>

  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      <h1>Top Stories</h1>

      {data?.map((id, index) => (
        <Story key={id} id={id} index={index} />
      ))}
    </div>
  )
}

export default TopStoriesPage
