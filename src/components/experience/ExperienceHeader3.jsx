import IconAnimate from "../Animate/IconAnimate";

export default function ExperienceHeader3({link, headerObject}){
  const titleAriaLabel = `${headerObject.job} at ${headerObject.company} (opens in new tab)`;
  return(
    <>
      <h3 className="font-medium leading-snug text-slate-200">
        <div>
          <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
          href={link} target="_blank" rel="noreferrer noopener" aria-label={titleAriaLabel}>
            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
            <span>
              {headerObject.job} · 
              <span className="inline-block">&nbsp;{headerObject.company}
              <IconAnimate frontSVG="" />
             </span>
            </span>
          </a>  
        </div>
      </h3>
    </>
  );
}