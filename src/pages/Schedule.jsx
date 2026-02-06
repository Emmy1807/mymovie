import React, {useState, useEffect} from 'react';
import './schedule.css';
import Card from '@/component/Card';
// import { tree } from 'next/dist/build/templates/app-page';

const Schedule = () => {
    const filterList = [
      {
        _id: 1,
        name: "All",
        active: true,
      },
      {
        _id: 2,
        name: "Romance",
        active: false,
      },
      {
        _id: 3,
        name: "Action",
        active: false,
      },
      {
        _id: 4,
        name: "Thriller",
        active: false,
      },
      {
        _id: 5,
        name: "Horror",
        active: false,
      },
      {
        _id: 6,
        name: "Adventure",
        active: false,
      },
    ]

    const [data, setData] = useState([]);
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [filters, setFilters] = useState(filterList);

    useEffect(() => {
        const fetchData = async () => {
          try {
            setIsLoading(true);
            const res = await fetch('/data/movieData.json'); // Use relative path or env variable
            const data = await res.json();
            setData(data);
          } catch (e) {
            setError(e.message);
          } finally {
            setIsLoading(false);
          }
        };
        fetchData();
      }, []);

      useEffect(() => {
        setMovies(data);
      }, [data])

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleFilterMovies = category => {
    setFilters(
      filters.map(filter => {
        filter.active = false;
        if(filter.name === category){
          filter.active = true
        }
        return filter;
    })
    )


    if(category === "All") {
      setMovies(data)
      return data;
    }
    setMovies(data.filter(movie => movie.category === category));
  }

  return (
    <section id="schedule" className="schedule">
        <div className="container-fluid">
            <div className="row">
                <h4 className="section-title">Opening this week</h4>
            </div>
            <div className="row">
                <ul className="filters">
                  {
                    filters.map(filter=>(
                      <li key={filter._id} 
                      className={`${filter.active ? 'active' : undefined}`}
                      onClick={() => {
                        handleFilterMovies (filter.name)}}
                      >
                        {filter.name}</li>
                    ))
                  }
                </ul>
            </div>
            <div className="row mt-5">
              {movies && movies.length > 0 ? (
                movies.map(movie => (
                  <Card key={movie._id} movie={movie} />
                ))
              ) : (
                <p>No movies available</p>
              )}
            </div>
        </div>
    </section>
  )
}

export default Schedule




// import React, {useState, useEffect} from 'react';
// import './schedule.css';

// const Schedule = () => {
//     const [data, setData] = useState([]);
//     const [movies, setMovies] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//           try {
//             setIsLoading(true);
//             const res = await fetch('/data/movieData.json'); // Use relative path or env variable
//             const data = await res.json();
//             setData(data);
//           } catch (e) {
//             setError(e.message);
//           } finally {
//             setIsLoading(false);
//           }
//         };
//         fetchData();
//       }, []);

//       useEffect (() => {
//         setMovies(data)
//       })

//   return (
//     <section id="schedule" className="schedule">
//         <div className="container-fluid">
//             <div className="row">
//                 <h4 className="section-title">Opening this week</h4>
//             </div>
//             <div className="row">
//                 <div className="filters">
//                   <p>Filters</p>
//                 </div>
//             </div>
//             <div className="row mt-5">
//               {movies && movies.length > 0 ? movies.map(movie=>(
//                 <h1 key={movie._id}>{movie.title}</h1>
//               ))}
//             </div>
//         </div>
//     </section>
//   )
// }

// export default Schedule
