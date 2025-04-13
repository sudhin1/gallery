import './index.css';
 


  const ProgressBar = ({progress})=>
  {
        return (
            <div className = 'outer'>
              <div className = 'inner'>
                {progress}%
              </div>
            </div>
        )

  }


  export default function App(){
  return (<div className='App'>
    <h1>progress bar</h1>
    <ProgressBar progress={70}/>

  </div>);
}
