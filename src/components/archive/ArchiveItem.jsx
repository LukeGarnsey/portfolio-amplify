import IconAnimate from "../Animate/IconAnimate";
import ListChip from "../experience/ListChip";

export default function ArchiveItem({year, project, madeAt, builtWithChips, link}){
    const label = `${project} (opens in new tab)`;
    return (
        <>
        <tr className="border-b border-slate-300/10 last:border-none">
            <td className="py-4 pr-4 align-top text-sm">
                <div className="translate-y-px">
                    {year}
                </div>
            </td>
            <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                <div>
                    <div className="block sm:hidden">
                        <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 hover:text-slate-200 focus-visible:text-teal-300 sm:hidden group/link text-base" href={link} target="_blank" rel="noreferrer noopener" aria-label={label}>
                            {project}
                            <IconAnimate frontSVG='../' />
                        </a>
                    </div>
                    <div className="hidden sm:block">{project}</div>
                </div>
            </td>
            <td className="hidden py-4 pr-4 align-top lg:table-cell">
                <div className="translate-y-px whitespace-nowrap">{madeAt}</div>
            </td>
            <td className="hidden py-4 pr-4 align-top lg:table-cell">
                <ul className="flex -translate-y-1.5 flex-wrap">
                    { builtWithChips.map((chip, index) => (
                        <ListChip key={index} text={chip} archiveChip={true}/>
                    ))}
                </ul>
            </td>
            <td className="hidden py-4 align-top sm:table-cell">
                <ul className="translate-y-1">
                    <li className="mb-1 flex items-center">
                        { link !== undefined && (
                            <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 text-sm text-slate-400 hover:text-slate-200 focus-visible:text-teal-300 group/link text-sm" href={link} target="_blank" rel="noreferrer noopener" aria-label={label}>
                                {link}
                                <IconAnimate frontSVG='../' />
                            </a>
                        )}
                    </li>
                </ul>
            </td>
        </tr>
        </>
    );
}