import React, { useState, useEffect } from 'react';
import './trend.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import TrendCard from '@/component/TrendCard';

const Trend = () => {
    const [slides, setSlides] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const res = await fetch('/data/movieData.json');
                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await res.json();
                setSlides(data);
            } catch (e) {
                setError(e.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    if (isLoading) {
        return <div className="loading">Loading...</div>;
    }

    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    return (
        <section id="trend" className='trend'>
            <div className="container-fluid">
                <div className="row">
                    <h4 className="section-title">Coming Soon</h4>
                </div>
                <div className="row">
                    <Swiper
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            480: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            640: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                            992: {
                                slidesPerView: 6,
                                spaceBetween: 30,
                            },
                        }}
                        spaceBetween={30}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        modules={[Autoplay]}
                        className="trendSwiper"
                    >
                        {slides.length > 0 ? (
                            slides.map(slide => (
                                <SwiperSlide key={slide._id}>
                                    <TrendCard slide={slide} />
                                </SwiperSlide>
                            ))
                        ) : (
                            <div className="no-slides">No movies found</div>
                        )}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default Trend;


// import React, { useState, useEffect } from 'react';
// import './trend.css';


// import {Swiper, SwiperSlide} from 'swiper/react';

// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';

// import { Autoplay, EffectCoverflow } from 'swiper/modules';
// import TrendCard from '@/component/TrendCard';


// const Trend = () => {
//     const [slides, setSlides] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//           try {
//             setIsLoading(true);
//             const res = await fetch('/data/movieData.json'); // Use relative path or env variable
//             const data = await res.json();
//             setSlides(data);
//           } catch (e) {
//             setError(e.message);
//           } finally {
//             setIsLoading(false);
//           }
//         };
//         fetchData();
//       }, []);

//   return (
//     <section id="trend" className='trend'>
//         <div className="container-fluid">
//             <div className="row">
//                 <h4 className="section-title">Coming Soon</h4>
//             </div>
//             <div className="row">
//                 <Swiper
//                     breakpoints={{
//                         320: {
//                             slidesPerView: 1,
//                             spaceBetween: 20,
//                         },
//                         480: {
//                             slidesPerView: 3,
//                             spaceBetween: 30,
//                         },
//                         640: {
//                             slidesPerView: 4,
//                             spaceBetween: 30,
//                         },
//                         992: {
//                             slidesPerView: 6,
//                             spaceBetween: 30,
//                         },
//                     }}
//                     spaceBetween={30}
//                     autoplay={{
//                         delay: 2500,
//                         disableOnInteraction: false,
//                     }}
//                     loop={true}
//                     modules={[Autoplay]}
//                     className="trendSwiper"
                
//                 >
//                     {slides &&
//                       slides.length > 0 &&
//                       slides.map(slide => (
//                         <SwiperSlide key={slide._id}>
//                             <TrendCard slide={slide}/>
//                         </SwiperSlide>
//                       ))  
//                     }
//                 </Swiper>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default Trend
