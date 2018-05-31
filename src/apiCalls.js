export const fetchData = () => {
  const url= `http://localhost:3001/api/v1/houses`;
  const method = {
    method: 'GET'
  }
  const houses = fetch(url, method)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      return data;
    })
    .catch(error => console.log(error))
  const wow = houses.resolve();
  console.log(wow, 'woooooo')
  return houses
}

export const fetchHouses = async () => {
  const url = `http://localhost:3001/api/v1/houses`;
  const method = {
    method: 'GET'
  } 
  const response = await fetch(url, method);
  const houses = await response.json();
  return houses;
}

