import SectionHeader from "../components/SectionHeader";
import ArchiveLink from "../components/projects/ArchiveLink";
import ProjectItem from "../components/projects/ProjectItem";

export default function Projects(){

  return (<>
    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
      <SectionHeader text={"Projects"} />
      <div>
        <ul className="group/list">
          <li className="mb-12">
            <ProjectItem text={"Quiz-go-fast is a multiplayer quiz app, where the quizes are built by AI. User can generate quizes that ask any question on any topic, then challenge there friends to see who knows more."} title={"quiz-go-fast"} link={"https://quiz-go-fast.onrender.com/"}
            image={{src:"images/go-fast.png", alt:"Quiz Go Fast app homepage"}}
            listChips={["SocketIO", "NodeJS", "Javascript", "React", "OpenAI", "TailwindCSS"]}/>
          </li>
          {/* <li className="mb-12">
            <ProjectItem text={"thinkFlash is an AI powered flash card learning app app. OpenAI is utilized to build flash card decks based on any given specifications. The user can then quiz themselves using the generated cards."} title={"thinkFlash"} link={"https://thinkflash-0iex.onrender.com/"}
            image={{src:"images/thinkFlash.png", alt:"Think Flash web app homepage"}}/>
          </li> */}
          <li className="mb-12">
            <ProjectItem text={"Digital Handwriting is a literacy-based learning experience that allows players to experience the sensory feel of handwriting through touchscreen controls. The game focuses on teaching the correct motion and order of strokes to create characters, while also preparing the user to distinguish between uppercase and lowercase."} title={"Digital Handwriting"} link={"https://www.filamentgames.com/project/digital-handwriting/"}
            image={{src:"images/dha.png", alt:"Digital Handwriting action page"}}
            listChips={["Typescript", "JavaScript", "Node.js", "React", "Pixi.js", "C#", "Unity3D", "SQL"]} />
          </li>
          
        </ul>
        <div className="mt-12">
          <ArchiveLink />
        </div>
      </div>
    </section>
  </>);
}