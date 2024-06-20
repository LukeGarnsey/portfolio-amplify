import IconAnimateStay from "../Animate/IconAnimateStay";

export default function ArchiveLink(){

  return(
    <>
      <a className="inline-flex items-center font-medium leading-tight font-semibold text-slate-200 group"
      href="/archive" aria-label="View Full Project Archive">
      <span>
        <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
          View Full Project Archive 
        </span>
      </span><IconAnimateStay />
      </a>
    </>
  );
}