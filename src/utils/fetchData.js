export const fetchData = async (url) => {
  try {
    const response = await fetch(url)
    const result = response.json();
    return result
    
  }catch {
    console.log('error')
  }
}