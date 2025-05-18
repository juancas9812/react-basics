import { useState, useEffect } from "react"


const FetchDataEffect = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      setApiData(data);
    }

    fetchData();
  }, [])


  return (
    <div>
      <h1>Fetch Data Effect</h1>
      {apiData.length > 0 ? <h2>{apiData[0].title}</h2> : <p>Loading...</p>}
    </div>
    
  )
}

export default FetchDataEffect;