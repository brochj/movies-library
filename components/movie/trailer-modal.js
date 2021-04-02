import { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import TrailerPlayer from '../../components/movie/trailer-player'

export default function TrailerModal({ videoId }){
  const [trailerModal, setTrailerModal] = useState(false)

  return (
    <div className="mt-3 flex justify-center items-center">
      <button 
        onClick={() => setTrailerModal(true)}
        className="px-2 py-1 rounded-md border text-lg text-gray-400 font-semibold"
      >
        <PlayCircleFilledIcon style={{color: '#F1F1F1', height: '25px', width: '25px', marginRight: '5px'}} />
        Assistir Trailer
      </button>
    <Modal open={trailerModal} onClose={() => setTrailerModal(false)}>
      <>
        <TrailerPlayer videoId={videoId} />
        <div className="flex flex-col items-end mt-3">
          <button
            onClick={() => setTrailerModal(false)}
            className="px-2 py-2 bg-red-600 rounded-full font-bold text-white"
          >Fechar</button>
        </div>
      </>
    </Modal>
    </div>
  )
}