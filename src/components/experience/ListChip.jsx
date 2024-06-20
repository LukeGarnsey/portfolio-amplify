export default function ListChip({text, archiveChip}){
  let listClass = "mr-1.5 mt-2";
  if(archiveChip !== undefined && archiveChip){
    listClass = "my-1 mr-1.5";
  }
  return(
    <li className={listClass}>
      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
        {text}  
      </div>
    </li>
  );
}