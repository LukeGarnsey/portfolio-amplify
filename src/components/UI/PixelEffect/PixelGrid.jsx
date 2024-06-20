import './css/PixelStyle.css';
export default function PixelGrid(){

  return(
    <div className="pixel-grid">
      {
        
        getDivs()
      }
    </div>
  );
}

function getDivs(){
  const elements = [];
  const width = 15;
  const height = 12;
  for(let y = 0; y<20;y++){
    for(let x = 0;x<25;x++){
      elements.push(<div key={x + "-" + y} className='pixel'
        style={{left: width * x, top:height*y,
        animation: `shift ${Math.floor(4 + Math.random() * 5)}s linear infinite`,
        borderRadius:`${Math.floor(5 + Math.random() * 25)}%`}}/>);
    }
    
  }
  return elements;
}