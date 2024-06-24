import IconAnimateBack from "../components/Animate/IconAnimateBack";

export default function PageNotFound(){

  return (<>
  <div className="lg:py-24">
  <a className="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300" href="/">
        <IconAnimateBack frontSVG="../"/>
        Home
    </a>
    <h1>
      This is not the page you are looking for.
    </h1>
    
  </div>
  </>);
}