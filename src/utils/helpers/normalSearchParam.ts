export const normalSearchParam = (param: string) => {
  const searchQuery = param.replace('https://duckduckgo.com/', '')
  const startQuery = searchQuery.indexOf("?")
  const justParam = searchQuery.substring(0,startQuery)
  const newParam = startQuery?justParam:searchQuery
  const NormalSearchQuery = newParam?.replace(/_/g, ' ')
  return encodeURIComponent(NormalSearchQuery)
}
