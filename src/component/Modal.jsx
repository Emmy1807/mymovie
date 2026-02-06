import React from 'react';
import './modal.css';

const Modal = ({ movie, isOpen, onClose }) => {
  if (!movie) return null;

  return (
    <div className={`movieModal ${isOpen ? 'active' : ''}`}>
      <button className="modalClose" onClick={onClose} aria-label="Close modal">
        <ion-icon name="close-outline"></ion-icon>
      </button>
      <iframe 
        width="1280"
        height="720"
        src={movie.video}
        title={`${movie.title} | Official Trailer`}
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
};

export default Modal;




// import React from 'react';
// import './modal.css';

// const Modal = ({ movie, status, toogleModal }) => {
//   return (
//     <div className={`movieModal ${status ? 'active': undefined}`}>
//       <a href="#" className="modelClose" onClick={toogleModal}>
//         <ion-icon name="close-outline"></ion-icon>
//       </a>
//       <iframe 
//       width="1280"
//       height="720"
//       src={movie.video}
//       title={`${movie.title} | Official Trailer`}
//       frameborder="0"
//       allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//       allowFullScreen
//       >
//       </iframe>
//     </div>
//   )
// }

// export default Modal
