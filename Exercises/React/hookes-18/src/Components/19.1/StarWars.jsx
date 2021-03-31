import React,{useState, useEffect} from 'react';
import Movie from './Movie';

export default function StarWars() {
    
    const [movies, setMovies] = useState(null);

    const fetchData = async() => {
        const request = await fetch("https://swapi.dev/api/films/");
        const data = await request.json();
        // console.log(data.results);
        setMovies(data);
        
    }

    // const renderMovies = async(movies) => {
    //     // console.log(movies[0]);
    //     // console.log(movies[0].title);
    //     // console.log(movies[0].director);
    //     return (
    //         <div>
    //             {movies.results.map((movie)=> {
    //                 return (
    //                     <div key={movie.results.title}>
    //                         <h1>{movie.results.title}</h1>
    //                         <div>Director: {movie.results.director}</div>
    //                     </div>
    //                 )
    //             })}
    //         </div>
    //     )
    // }

    //componentDidMount
    useEffect(()=> {
        // console.log("fetching data...");
        fetchData();
    },[]);    
    
    //componentDidUpdate
    
    
    return (
        <div>
           {movies===null? <div>Spinner</div> : movies.results.map(movie=> {
              return (
                <Movie key={movie.title} title={movie.title} director={movie.director}/>
              )
           })} 
        </div>
    )
}
