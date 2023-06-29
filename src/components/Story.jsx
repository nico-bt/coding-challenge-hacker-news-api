import { getItemInfo } from "../services/hacker-news-getData"
import useSWR from "swr"
import { useEffect } from "react"
import { storyLink, story, storyFooter, storyHeader, storyTitle } from "./Story.css"
import { Link } from "wouter"

function Story({ id, index }) {
  const { data, isLoading, error } = useSWR(`story/${id}`, () => getItemInfo(id))

  //   useEffect(() => {
  //     console.log(data)
  //   }, [data])

  if (error) return <div>failed to load</div>

  if (isLoading) return <div>loading...</div>

  return (
    <article className={story}>
      <header className={storyHeader}>
        <small>{index + 1}.</small>
        <a className={storyTitle} href={data.url} target="_blank" rel="noopener noreferrer">
          {data.title}
        </a>
      </header>

      <footer className={storyFooter}>
        <span>{data.score} points</span>

        <Link className={storyLink} href={`/article/${id}`}>
          by {data.by}
        </Link>

        {/* <Link className={storyLink} href={`/article/${id}`}>
          <time dateTime={new Date(time * 1000).toISOString()}>{relativeTime}</time>
        </Link> */}

        <Link className={storyLink} href={`/article/${id}`}>
          {data.kids?.length ?? 0} comments
        </Link>
      </footer>
    </article>
  )
}

export default Story
