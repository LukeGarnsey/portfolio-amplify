import ExperienceHeader3 from "./ExperienceHeader3";
import ListChip from "./ListChip";


export default function ExperienceItem({listChips, yearObject, body, headerObject, link}){

  
  return (
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label={yearObject.ariaLabel}>{yearObject.text}</header>
      <div className="z-10 sm:col-span-6">
        <ExperienceHeader3 link={link} headerObject={headerObject}/>
        <p className="mt-2 text-sm leading-normal">{body}</p>
        <ul className="mt-2 flex flex-wrap">
          { listChips.map((chip, index) => (
            <ListChip key={index} text={chip} />
          ))}
        </ul>
      </div>
    </div>
  );
}