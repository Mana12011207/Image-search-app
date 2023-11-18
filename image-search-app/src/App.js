import './App.css';
import ImageGallery from './ImageGallery';
import {useRef, useState} from "react";

function App() {
  const [fetchData, setFetchData] = useState([]);
  const ref = useRef();
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(ref.current.value);

    // URL for API
    const endpointURL =`https://pixabay.com/api/?key=40744009-556e92046e1377f65ada9324a&q=${ref.current.value}&image_type=photo`;
    fetch(endpointURL)
      .then((res) => {
      return res.json();
    })
      .then((data) => {
        console.log(data.hits);
        setFetchData(data.hits);
      });
  };

    return (
  <div className="container">
    <h2>My Pixabay</h2>
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="text" placeholder="Search images here" ref={ref}/>
    </form>
    <ImageGallery fetchData={fetchData}/>
  </div>);
}

export default App;
