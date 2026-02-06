import React, { useState } from 'react';
import './playBtn.css';
import Modal from './Modal';

const PlayBtn = ({ movie }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    if (!movie) return null;

    return (
        <>
            <div className={`trailer d-flex align-items-center justify-content-center ${movie.active ? 'active' : ''}`}>
                <button 
                    className="playBtn" 
                    onClick={toggleModal}
                    aria-label="Play trailer"
                >
                    <ion-icon name="play-outline"></ion-icon>
                </button>
                <p>Watch Trailer</p>
            </div>
            {movie.active && (
                <Modal 
                    movie={movie} 
                    isOpen={isModalOpen} 
                    onClose={toggleModal}
                />
            )}
        </>
    );
};

export default PlayBtn;




// import React, {useState} from 'react';
// import './playBtn.css';
// import Modal from './Modal';

// const PlayBtn = ({ movie }) => {
//     const [modal, setModal] = useState(false)
//     const toogleModal = () => {
//         setModal(!modal);
//     }
//   return (
//     <>
//         <div className={`trailer d-flex align-items-center justify-content-center ${movie.active ? 'active' : undefined}`}>
        
//         <a href="#" className="playBtn" onClick={toogleModal}>
//             <ion-icon name="play-outline"></ion-icon>
//         </a>
//         <p>Watch Trailer</p>
//         </div>
//         {movie.active && <Modal movie={movie} status={modal} toogleModal={toogleModal}/>}
//     </>
// )
// }

// export default PlayBtn
