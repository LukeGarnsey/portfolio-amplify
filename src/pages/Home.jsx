import NavJumpItem from "../components/Animate/NavJumpItem";
import SocialList from "../components/SocialList";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Home(){
  
  return (
    <>
        <a href="#content" className="absolute left-0 top-0 block -translate-x-full round-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppdercase tracus-visible:translate-x-0"></a>
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl"><a href="/">Luke Garnsey</a></h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Senior Software Engineer (Fullstack & Games)</h2>
              <p className="mt-4 max-w-xs leading-normal">I create intuitive and innovative digital experiences that surpass user expectations.</p>
              <nav className="nav hidden lg:block" aria-label="In-page jump links">
                <ul className="mt-16 w-max">
                  <li>
                    <NavJumpItem text={"About"} href={"#about"} />
                    <NavJumpItem text={"Experience"} href={"#experience"} />
                    <NavJumpItem text={"Projects"} href={"#projects"} />
                  </li>
                </ul>
              </nav>
            </div>
            <SocialList/>
          </header>
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <About />
            <Experience />
            <Projects />
            <Contact />
            <footer className="max-w-md mt-2 pb-16 text-sm text-slate-500 sm:pb-0">
              <p>
                Serverless website hosted with <a href="https://aws.amazon.com/amplify/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank"
                rel="noreferrer noopener" aria-label="AWS Amplify (opens in a new tab)">Amplify</a>, using AWS (<a href="https://aws.amazon.com/lambda/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank"
                  rel="noreferrer noopener" aria-label="AWS Lambda (opens in a new tab)">Lambda</a>, <a href="https://aws.amazon.com/api-gateway/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank"
                  rel="noreferrer noopener" aria-label="AWS API Gateway (opens in a new tab)">API Gateway</a>, and <a href="https://aws.amazon.com/ses/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank"
                  rel="noreferrer noopener" aria-label="AWS Simple Email Service (opens in a new tab)">SES</a>).
                Site was coded in 
                <a href="https://code.visualstudio.com/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank"
                rel="noreferrer noopener" aria-label="Visual Studio Code (opens in a new tab)"> Visual Studio Code </a> 
                by me. Built with 
                <a href="https://nodejs.org/en" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank"
                rel="noreferrer noopener" aria-label="NodeJS (opens in a new tab)"> NodeJS</a>,<a href="https://react.dev/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank"
                rel="noreferrer noopener" aria-label="React (opens in a new tab)"> React</a>
                , and <a href="https://tailwindcss.com/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank"
                rel="noreferrer noopener" aria-label="Tailwind CSS (opens in a new tab)"> Tailwind CSS.</a>
              </p>
              
            </footer>
          </main>
        </div>
    </>
  );
}