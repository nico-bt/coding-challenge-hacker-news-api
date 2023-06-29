export const getTopStories = async ({ page, limit }) => {
  const response = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
  const json = await response.json()

  // page starts with 1
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  const ids = json.slice(startIndex, endIndex)

  return ids

  // junior dev tip: use Promise.all to fetch multiple items in parallel
  // return await Promise.all(ids.map((id: number) => getItemInfo(id)))
}

export const getItemInfo = async (id) => {
  const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
  return await response.json()
}
