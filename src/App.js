import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
const API_KEY = 'QYLWLk8W03CF0swqmyFFDE9L4iNY8MNL'


function App() {
  let query = 'apple'
  let numberOfItems = 10

  let myHeaders = new Headers();
  myHeaders.append("apikey", API_KEY);

  let requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };

  const [results, setResult] = useState([])

  let url = `https://api.apilayer.com/spoonacular/food/ingredients/search?sortDirection=asc&sort=calories&query=`+query+`&offset=0&number=`+numberOfItems+`&intolerances=`
  fetch(url, requestOptions)
    .then(response => response.json())
    .then(result => setResult(result.results))
    .catch(error => console.log('error', error));
  return (
    <div className="App">
      <p>API:   {API_KEY}</p>
      result: {results.map((result, index) => (
        <p key={index}>{result.name}</p>
      ))}
    </div>
  );
}

export default App;
