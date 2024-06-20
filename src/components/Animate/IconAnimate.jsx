export default function IconAnimate({frontSVG}){
  const src = `${frontSVG}Arrow.svg`;
  return (
    <img src={src} alt="icon" 
    className="inline-block h-4 w-4 shrink-0 transition-transform -rotate-45 group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden='true'/>
  );
}