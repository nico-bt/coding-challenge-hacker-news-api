import { useEffect } from "react"
import { getTopStories } from "../services/hacker-news-getData"
import useSWR from "swr"
import useSWRInfinite from "swr/infinite"
import Story from "../components/Story"

function TopStoriesPage() {
  // useEffect(() => {
  //   getTopStories({ page: 1, limit: 10 }).then((topStoriesIds) => console.log(topStoriesIds))
  // }, [])

  // Get only firts ten topStories
  // const { data, error, isLoading } = useSWR("topStories", () =>
  //   getTopStories({ page: 1, limit: 10 })
  // )

  const { data, error, isLoading, setSize } = useSWRInfinite(
    (index) => `stories/${index + 1}`, // la key que usa para cachear los resultados
    (key) => {
      const [_baseKey, page] = key.split("/")
      return getTopStories({ page: page, limit: 10 })
    }
  )

  // El data con useSWRInfinite devuelve un array por cada stories/index. Lo achata pora mapearlo en <Story />
  const stories = data?.flat() || []

  if (error) return <div>failed to load</div>

  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      <h1>Top Stories</h1>

      {/* {data?.map((id, index) => (
        <Story key={id} id={id} index={index} />
      ))} */}

      {stories?.map((id, index) => (
        <Story key={id} id={id} index={index} />
      ))}

      <button
        onClick={() => {
          setSize((prev) => prev + 1)
        }}
      >
        Show 10 more
      </button>
    </div>
  )
}

export default TopStoriesPage
