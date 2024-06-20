import { useState } from "react";
import { useEffect } from "react";

export default function NavJumpItem({text, href}){
  const [spanClass, setSpanClass] = useState("nav-indicator mr-4 h-px w-8 bg-juni-500 transition-all group-hover:w-16 group-hover:bg-juni-100 motion-reduce:transition-none");
  useEffect(()=>{
    const handleHashChange = () =>{
      const hashValue = window.location.hash;
      if(hashValue === href || hashValue === "" && href === "#about"){
        setSpanClass("nav-indicator mr-4 h-px w-16 transition-all bg-juni-300 motion-reduce:transition-none");
      }else{
        setSpanClass("nav-indicator mr-4 h-px w-8 bg-juni-500 transition-all group-hover:w-16 group-hover:bg-juni-100 motion-reduce:transition-none");
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () =>{
      window.removeEventListener('hashchange', handleHashChange);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (<>
    <a className="group flex items-center py-3" href={href}>
      <span className={spanClass}></span>
      <span className="nav-text text-xs font-bold uppercase tracking-widest text-juni-400 group-hover:text-juni-500 group-focus-visible:text-juni-100">{text}</span>
    </a>
  </>);
}