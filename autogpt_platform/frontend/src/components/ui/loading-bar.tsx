import "./loading-bar.css"
const LoadingBar = ({isRunning}:{isRunning: boolean}) => {
  return (
    isRunning ? <div id="loading-bar-during-run-time"></div> : null
  )
}

export default LoadingBar