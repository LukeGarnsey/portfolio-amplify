import SocialListItem from "./SocialListItem";

export default function SocialList(){
  
  return (
    <>  
      <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
        <SocialListItem link={"https://github.com/LukeGarnsey"} 
        text={"Github"}/>
        <SocialListItem link={"https://www.linkedin.com/in/luke-garnsey-89380a128/"} 
        text={"LinkedIn"}/>
      </ul>
    </>
  );
}