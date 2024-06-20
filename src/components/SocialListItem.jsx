
export default function SocialListItem({link, text}){
  const src = `${text}.svg`;
  const label = `${text} (opens in a new tab)`;
  return (
    <>
      <li className="mr-5 text-xs shrink-0">
        <a className="block hover:text-slate-200" href={link} target="_blank"
        rel="noreferrer noopener" aria-label={label} title={text}>
          <span className="sr-only">{text}</span>
          <img src={src} className="h-6 w-6" alt="icon" />
        </a>
      </li>
    </>
  );
}