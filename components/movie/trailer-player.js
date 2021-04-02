export default function trailerPlayer({videoId=""}){
  // https://developers.google.com/youtube/player_parameters

  if(videoId.length === 0) return <></>

  return (
    <div className="max-w-6xl m-auto">
    <div className="videoWrapper" >
      <iframe 
        id="ytplayer"
        type="text/html"
        width="100%"
        height="auto"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=0&controls=1`}
        frameBorder="0">
      </iframe>

      <style jsx>{`
        .videoWrapper {
          position: relative;
          padding-bottom: 56.25%; /* 16:9 */
          height: 0;
        }
        .videoWrapper iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
    </div>
  )
}
