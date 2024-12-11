import './main.css'
import { useEffect, useState } from 'react'
import fetchData from './utils/fetchData'
import ImageCard from './components/ImageCard';
import CircularProgress from '@mui/material/CircularProgress';


function App() {

  const [url, setUrl] = useState('https://api.nasa.gov/planetary/apod?api_key=eodoK198xVKRlzh1kfw2xRNbanZk91p4vmQ7QGQ3');
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchData(url, setImages, setIsLoading);
  }, [url])


  return (
    <div className='main-cont'>

      {isLoading &&
        <CircularProgress/>
      }

      {!isLoading && 
        <>
        <h1>NASA's Astronomy Image of the Day</h1>
        {images.map((image) => {
          return <ImageCard key={image.date} images={image}/>
        })}
        </>
      }
    </div>
  )
}

export default App
