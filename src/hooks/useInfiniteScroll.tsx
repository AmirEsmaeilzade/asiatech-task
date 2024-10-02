import { useState, useEffect, useCallback } from 'react'

type SearchResult = {
  Text: string
  FirstURL: string
}

export const useInfiniteScroll = (
  fetchData: (page: number, itemsPerPage: number) => Promise<SearchResult[]>,
  itemsPerPage: number = 8,
  query: string
) => {
  const [page, setPage] = useState(1)
  const [items, setItems] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState(false)

  const loadItems = async () => {
    if (!query) return

    setLoading(true)
    const newItems = await fetchData(page, itemsPerPage)
    setItems((prevItems) => [...prevItems, ...newItems])
    setLoading(false)
  }

  useEffect(() => {
    setPage(1)
    setItems([])
  }, [query])

  useEffect(() => {
    loadItems()
  }, [page, query])

  const handleScroll = useCallback(() => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight && !loading) {
      setPage((prevPage) => prevPage + 1)
    }
  }, [loading])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return { items, loading }
}
