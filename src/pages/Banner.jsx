import React, { useState, useEffect } from 'react';
import './banner.css';
import MovieContent from '@/component/MovieContent';
import MovieDate from '@/component/MovieDate';
import PlayBtn from '@/component/PlayBtn';
import MovieSwiper from '@/component/MovieSwiper';

const Banner = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch('/data/movieData.json'); // Use relative path or env variable
        const data = await res.json();
        setMovies(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSlideChange = (id) => {
    console.log('Clicked movie ID', id)
    setMovies(movies.map(movie => ({
      ...movie,
      active: movie._id === id,
    })));
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="banner">
      {movies.length > 0 && movies.map(movie => (
        <div className="movie" key={movie._id}>
          <img 
            src={movie.bgImg} 
            alt={`${movie.title} background`} 
            className={`bgImg ${movie.active ? 'active' : ''}`} 
          />
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <MovieContent movie={movie} />
              </div>
              <div className="col-lg-6 col-md-12">
                <MovieDate movie={movie} />
                <PlayBtn movie={movie} aria-label={`Play ${movie.title}`} />
              </div>
            </div>
          </div>
        </div>
      ))}
      {movies.length > 0 && (
        <MovieSwiper 
          slides={movies} 
          slideChange={handleSlideChange} 
        />
      )}
    </div>
  );
};

export default Banner;



// "use client"

// import React, { useState, useEffect } from 'react';
// import './banner.css';
// import MovieContent from '@/component/MovieContent';
// import MovieDate from '@/component/MovieDate';
// import PlayBtn from '@/component/PlayBtn';
// import MovieSwiper from '@/component/MovieSwiper';



// const Banner = () => {
//     const [movie, setMovie] = useState([]);

//         const fetchData = () => {
//             fetch('http://localhost:3000/data/movieData.json')
//             .then(res => res.json())
//             .then(data => setMovie(data))
//             .catch(e => console.log(e.message))
//         };

//         useEffect(() => {
//             fetchData();
//         }, [])

//         const handleSlideChange = id => {
//           const newMovies = movie.map(movie => {
//             movie.active = false;
//             if(movie._id === id){
//               movie.active = true;
//             }
//             return movie;
//           });
//           setMovie(newMovies)
//         };
//   return (
//     <div className="banner">
//       {
//         movie && movie.length>0 && movie.map(movie=> (
//           <div className="movie" key={movie._id}>
//             <img src={movie.bgImg} alt="Background" className={`bgImg ${movie.active ? 'active' : undefined}`} />
//             <div className="container-fluid">
//                 <div className="row">
//                     <div className="col-lg-6 col-md-12">
//                       <MovieContent movie={movie}/>
//                     </div>
//                     <div className="col-lg-6 col-md-12">
//                       <MovieDate movie={movie}/>
//                       <PlayBtn movie={movie}/>
//                     </div>
//                 </div>
//             </div>
//           </div>
//         ))
//       }

//       { movie && movie.length > 0 && <MovieSwiper slides={movie} slideChange = {handleSlideChange} />}
//     </div>
//   )
// }

// export default Banner
