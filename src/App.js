import React, { useState } from 'react'
import './App.css'
import ReactHlsPlayer from 'react-hls-player'
import ReactPlayer from 'react-player'
import { Nav, Navbar, Container } from 'react-bootstrap'
import TheHeader from './components/TheHeader'

function App() {
  const [urlHLS, setHLS] = useState(
    'https://tom.imgix.video/s3toixjs.mp4?fm=hls',
  ) //First url that is an HLS file
  const [urlOther, setOtherUrl] = useState('https://tom.imgix.net/s3toixjs.mp4') //Second url that is a non HLS file
  const playerRef = React.useRef() //Gets a ref of the HLS video and plays it.
  const [mp4PlayValue, setMp4PlayValue] = useState({ playing: false })

  function playVideo() {
    playerRef.current.play() //Grabs ref to HLS video and plays it.
    setMp4PlayValue({ playing: true }) //Sets MP4 playing value to true.
  }

  function PlayBothVideos() {
    playVideo()
  }

  function StopBothVideos() {
    playerRef.current.pause()
    setMp4PlayValue({ playing: false })
  }

  return (
    <>
      <TheHeader />

      <div className="App">
        <h3>HLS vs MP4 imgix demo app</h3>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Nav className="me-auto">
              <form>
                <label>
                  Enter HLS url:
                  <input
                    type="text"
                    value={urlHLS}
                    onChange={(e) => setHLS(e.target.value)}
                  />
                </label>
              </form>
              <form>
                <label>
                  Enter mp4 url:
                  <input
                    type="text"
                    value={urlOther}
                    onChange={(e) => setOtherUrl(e.target.value)}
                  />
                </label>
              </form>
              <button onClick={() => PlayBothVideos()}>Play Both Videos</button>
              <button onClick={() => StopBothVideos()}>Stop Both Videos</button>
            </Nav>
          </Container>
        </Navbar>

        <header className="App-header">
          <p class="regular-text">
            This app is used to showcase the user experience of playing an mp4
            vs an HLS video with imgix. To test this, right-click on the browser
            and select "inspect", click the Network tab, change the speed to
            Fast 3G, and make sure the "disable cache" button next to it is
            selected.
          </p>

          <p className="regular-text-other">Example HLS links:</p>
          <p className="link-text">
            https://tom.imgix.video/s3toixjs.mp4?fm=hls
          </p>

          <p className="regular-text-other">Example MP4 links:</p>
          <p className="link-text">https://tom.imgix.net/s3toixjs.mp4</p>

          {urlHLS.length > 0 && (
            <ReactHlsPlayer
              playerRef={playerRef}
              src={urlHLS}
              autoPlay={false}
              controls={true}
              width="40%"
              height="40%"
            />
          )}

          <ReactPlayer
            url={urlOther}
            width="40%"
            height="40%"
            controls={true}
            playing={mp4PlayValue.playing}
          />
        </header>
      </div>
    </>
  )
}

export default App

/*
HLS urls:   https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8
npm:  https://www.npmjs.com/package/react-hls-player


MP4 urls:  http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4
More urls:  https://gist.github.com/jsturgis/3b19447b304616f18657
npm:  https://www.npmjs.com/package/react-player#supported-media

Example urls:
https://jdawson.imgix.video/mixkit-stars-in-space-1610.mp4?fm=hls


Resource to add play functionality to mp4 video:  https://www.youtube.com/watch?v=Y-OLcnr8eNo


*/
