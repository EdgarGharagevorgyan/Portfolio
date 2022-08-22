import Wallpaper from './img/Wallpaper.mp4'

function App() {
  return (
    <div className='main'>
      <video src={Wallpaper} autoPlay loop muted></video>
      
    </div>
  )
}

export default App;
