import { useState } from "react";
import { useEffect } from "react";

export default function NavJumpItem({text, href}){
  const [spanClass, setSpanClass] = useState("nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 motion-reduce:transition-none");
  useEffect(()=>{
    const handleHashChange = () =>{
      const hashValue = window.location.hash;
      if(hashValue === href || hashValue === "" && href === "#about"){
        setSpanClass("nav-indicator mr-4 h-px w-16 transition-all bg-slate-200 motion-reduce:transition-none");
      }else{
        setSpanClass("nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 motion-reduce:transition-none");
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () =>{
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
  
  return (<>
    <a className="group flex items-center py-3" href={href}>
      <span className={spanClass}></span>
      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">{text}</span>
    </a>
  </>);
}