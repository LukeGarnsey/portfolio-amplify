import SectionHeader from "../components/SectionHeader";
import ExperienceItem from "../components/experience/ExperienceItem";
import ResumeLink from "../components/experience/ResumeLink";

export default function Experience(){

  return (
    <>
    <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Experience">
        <SectionHeader text={"Experience"} />
        <div>
          <ol className="group/list">
            <li className="mb-12">
              <ExperienceItem listChips={["Kotlin",  "Android Studio", "Java","Bash", "Objective-C", "X-Code", "SQL"]} yearObject={{ariaLabel:"2021 to 2023", text:"2021 - 2023"}} 
              headerObject={{job:"Platform Engineer", company:"Willowtree"}} body={
                "I was deeply involved in the development and upkeep of expansive applications tailored for high-profile customers, prioritizing meticulous attention to detail and optimal functionality. Engaging closely with multifaceted teams spanning developers, designers, and product managers, I championed the adoption of cutting-edge coding methodologies to drive superior outcomes. Fostering a culture of collaboration and innovation, I actively contributed to debugging efforts, knowledge dissemination, and the crafting of exceptional codebases that powered dynamic live applications."
              } link={"https://www.willowtreeapps.com/"} />
            </li>
            <li className="mb-12">
              <ExperienceItem listChips={["Typescript", "JavaScript", "Node.js", "React", "Pixi.js", "C#", "Unity3D", "SQL"]} yearObject={{ariaLabel:"2019 to 2021", text:"2019 - 2021"}} 
              headerObject={{job:"Lead Engineer", company:"Filament Games"}} body={
                "Orchestrated the development and deployment of high quality web applications running on desktop and mobile for a diverse array of projects for clients including Scholastic, PBS, Zaner Bloser, iCivics, and more. Provide leadership within engineering department though close collaboration, knowledge shares, and spearheading the development of internal tools."
              } link={"https://www.filamentgames.com/"}/>
            </li>
            <li className="mb-12">
              <ExperienceItem listChips={["JavaScript",".Net", "C#", "Unity3D", "CouchDB"]} yearObject={{ariaLabel:"2018 to 2019", text:"2018 - 2019"}} 
              headerObject={{job:"VR Engineer", company:"Immersive Touch"}} body={
                "I was instrumental in the creation of surgery preparation software that seamlessly integrated with virtual reality (VR) environments, aiming to elevate user immersion, especially within surgical simulation settings. Through innovative design and implementation, the software enables physicians to meticulously plan surgical procedures, thereby optimizing patient outcomes by minimizing anesthesia duration and enhancing procedural efficiency. This transformative technology empowers medical professionals with comprehensive surgical planning tools, ensuring precise execution and maximizing patient safety and recovery."
              } link={"https://www.immersivetouch.com/"}/>
            </li>
            <li className="mb-12">
              <ExperienceItem listChips={[ "Android Studio", "Java", "Objective-C", "X-Code", "JavaScript",".net", "C#", "Unity3D", "Vuforia", "ARKit", "Firebase"]} yearObject={{ariaLabel:"2016 to 2018", text:"2016 - 2018"}} 
              headerObject={{job:"Software Engineer", company:"YETi CGI"}} body={
                "I spearheaded the development and deployment of augmented reality (AR) applications, crafting software specifically tailored for custom hardware systems. This involved conceptualizing and executing AR experiences, along with engineering software solutions fine-tuned for seamless integration with diverse hardware setups that clients were constructing for end-user use. Additionally, I fostered close collaboration with cross-functional teams to guarantee the smooth alignment of software and hardware elements, thereby enhancing the overall project outcomes."
              } link={"https://yeticgi.com/"}/>
            </li>
            <li className="mb-12">
              <ExperienceItem listChips={[ "C#", "Unity3D", ".Net", "Android Studio", "Java", "X-Code", "JavaScript", "SQL" ]} yearObject={{ariaLabel:"2013 to 2016", text:"2013 - 2016"}} 
              headerObject={{job:"Lead Engineer", company:"Underbite Games"}} body={
                "Lead the development and deployment of desktop, web, and mobile applications across various projects for clients such as R&R Games and Ninja Division. Collaborated closely with engineering teams, facilitated knowledge sharing, and spearheaded the creation of internal tools. Engaged with cross-functional teams and clients to transform design concepts into rich, immersive digital solutions."
              } link={"https://store.steampowered.com/search/?publisher=Underbite%20Games"}/>
            </li>
          </ol>
          <div className="mt-12">
            <ResumeLink />
          </div>
        </div>
      </section>
    </>
  );
}