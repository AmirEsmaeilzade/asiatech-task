export const normalSearchParam = (param: string) => {
  let searchQuery = param.replace('https://duckduckgo.com/', '')
  const startQuery = searchQuery.indexOf("?")

  if(startQuery>0){
    searchQuery= searchQuery.substring(0,startQuery)
  }

  const NormalSearchQuery = searchQuery?.replace(/_/g, ' ')

  return encodeURIComponent(NormalSearchQuery)
}
