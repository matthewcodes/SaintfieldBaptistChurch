import React from 'react';
import './LivePage.css'


const LivePage = (props) => {

  const style = {
    position: 'relative',
    width: '100%',
    height: 0,
    paddingBottom: '56.25%'
  }

  const iFrameStyle = {
    position: 'absolute',
    left: 0,
    top: 0
  }

  const contents = (
    <div style={style}>
      <iframe
        title="Live"
        tabIndex="-1"
        width="100%"
        height="100%"
        src="https://embed.sermonaudio.com/player/l/saintfieldbaptist/"
        style={iFrameStyle}
        allowFullScreen
        frameborder="0"
        scrolling="no">
      </iframe>
    </div>
  );

  // const contents = (
  //   <div>
  //     <br/>
  //     <h3 class="text-center">Tonight&#39;s service will not be broadcast live. We are sorry for any inconvenience caused. Please tune in next Sunday morning at 11.30am</h3>
  //   </div>
  // );

  return (
    <div className="live-page">
      <h1>Watch Live</h1>
      <hr/>
      {contents}
    </div>
  )
}

export default LivePage;
