import IconAnimate from "../Animate/IconAnimate";

export default function ResumeLink(){

  return(
    <>
      <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base"
      href="/resume.pdf" target="_blank" rel="noreferrer noopener" aria-label="View Full Résumé (opens in new tab)">
        <span>View full <span className="inline-block"></span>Résumé <IconAnimate /></span>
      </a>
    </>
  );
}