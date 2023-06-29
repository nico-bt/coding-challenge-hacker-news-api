import ContentLoader from "react-content-loader"

function SkeletonLoader() {
  return (
    <article>
      <ContentLoader width={315} height={60}>
        <rect x="0" y="17" rx="4" ry="4" width="100%" height="13" />
        <rect x="0" y="40" rx="3" ry="3" width="80%" height="10" />
      </ContentLoader>
    </article>
  )
}

export default SkeletonLoader
