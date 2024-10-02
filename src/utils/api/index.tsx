import axios from './interceptor'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Get = async (url: string): Promise<any> => {
  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

export { Get }
