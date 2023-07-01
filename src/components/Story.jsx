import { getItemInfo } from "../services/hacker-news-getData"
import useSWR from "swr"
import { storyLink, story, storyFooter, storyHeader, storyTitle, storyComment } from "./Story.css"
import { Link } from "wouter"
import SkeletonLoader from "./SkeletonLoader"

function Story({ id, index }) {
  const { data, isLoading, error } = useSWR(`story/${id}`, () => getItemInfo(id))

  if (error) return <article>failed to load</article>

  if (isLoading) return <SkeletonLoader />

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

        <Link className={storyComment} href={`/article/${id}`}>
          {data.descendants ?? 0} comments
        </Link>
      </footer>
    </article>
  )
}

export default Story
