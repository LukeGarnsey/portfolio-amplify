import IconAnimateBack from "../components/Animate/IconAnimateBack";
import Spotlight from "../components/Animate/Spotlight";
import ArchiveItem from "../components/archive/ArchiveItem";

export default function Archive(){

    return (
    <>
        <Spotlight />
        <div className="lg:py-24">
            <a className="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300" href="/">
                <IconAnimateBack />
                Luke Garnsey
            </a>
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                All Projects
            </h1>

            <table className="mt-12 w-full border-collapse text-left">
                <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
                    
                    <tr>
                        <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Year</th>
                        <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Project</th>
                        <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Made at</th>
                        <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Built with</th>
                        <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell">Link</th>
                    </tr>
                </thead>
                <tbody>
                <ArchiveItem year={"2024"} project={"quiz-go-fast"} madeAt={""} builtWithChips={["SocketIO", "JavaScript", "NodeJS", "React", "Tailwind", "OpenAI"]} link={"https://quiz-go-fast.onrender.com/"}/>
                <ArchiveItem year={"2024"} project={"chat-chat-chat"} madeAt={""} builtWithChips={["SocketIO", "JavaScript", "NodeJS", "React"]} link={"https://chat-chat-chat.onrender.com/"}/>
                <ArchiveItem year={"2024"} project={"thinkFlash"} madeAt={""} builtWithChips={["OpenAI", "JavaScript", "NodeJS", "React", "MongoDB", "GraphQL"]} link={"https://thinkflash-0iex.onrender.com/"}/>

                <ArchiveItem year={"2023"} project={"Decision Grid (Unity Package)"} madeAt={""} builtWithChips={["C#", "Unity"]} link={"https://github.com/LukeGarnsey/Decision_Grids"}/>
                <ArchiveItem year={"2023"} project={"JSON Database (Unity Package)"} madeAt={""} builtWithChips={["C#", "Unity"]} link={"https://github.com/LukeGarnsey/json-database"}/>

                <ArchiveItem year={"2023"} project={"nest_crud_rest_e2etests"} madeAt={""} builtWithChips={["TypeScript", "JavaScript", "NodeJS", "NestJS", "Prisma", "Docker", "PactumJS"]} link={"https://github.com/LukeGarnsey/nest_crud_rest_e2etests"}/>

                <ArchiveItem year={"2022"} project={"DexcomG7"} madeAt={"Willowtree"} builtWithChips={["TypeScript", "JavaScript", "NodeJS", "C#", "Unity", "FontForge", "MySQL"]} link={"https://www.dexcom.com/en-us"}/>
                <ArchiveItem year={"2021"} project={"Digital Handwriting"} madeAt={"Filament Games"} builtWithChips={["TypeScript", "JavaScript", "NodeJS", "C#", "Unity", "FontForge", "MySQL"]} link={"https://www.filamentgames.com/project/digital-handwriting/"}/>
                <ArchiveItem year={"2020"} project={"Push Pull Puzzles"} madeAt={"Filament Games"} builtWithChips={["TypeScript", "JavaScript", "NodeJS", "C#", "Unity", "React"]} link={"https://www.filamentgames.com/project/twin-cities-pbs/"}/>
                <ArchiveItem year={"2020"} project={"Super Seasons Snapshot"} madeAt={"Filament Games"} builtWithChips={["TypeScript", "JavaScript", "NodeJS", "C#", "Unity", "React"]} link={"https://www.filamentgames.com/project/twin-cities-pbs/"}/>
                <ArchiveItem year={"2020"} project={"Argument Wars"} madeAt={"Filament Games"} builtWithChips={["TypeScript", "JavaScript", "NodeJS", "C#", "Unity", "Jenkins"]} link={"https://www.filamentgames.com/project/icivics/"}/>

                <ArchiveItem year={"2019"} project={"ImmersiveView"} madeAt={"ImmersiveTouch"} builtWithChips={[".Net", "JavaScript", "CouchDB", "C#", "Unity"]} link={"https://www.immersivetouch.com/"}/>
                <ArchiveItem year={"2018"} project={"Scholastic W.O.R.D"} madeAt={"Filament Games"} builtWithChips={["TypeScript", "JavaScript", "NodeJS", "C#", "Unity"]} link={"https://www.filamentgames.com/project/scholastic-word/"}/>

                <ArchiveItem year={"2017"} project={"Batmobile R/C Controller"} madeAt={"YETiCGI"} builtWithChips={["C#", "Unity", "AR", "Objective-C", "Java"]} link={"https://youtu.be/V9wax3-_E0I?t=360"}/>
                <ArchiveItem year={"2016"} project={"National Geographic Dinosaurs"} madeAt={"YETiCGI"} builtWithChips={["C#", "Unity", "AR/VR", "Vuforia", "Objective-C", "Java"]} link={"https://www.youtube.com/watch?v=YqNwTI2GXx8"}/>

                <ArchiveItem year={"2016"} project={"Super Dungeon Tactics"} madeAt={"Underbite Games"} builtWithChips={["C#", "Unity", "Steam"]} link={"https://store.steampowered.com/app/463160/Super_Dungeon_Tactics/"}/>
                <ArchiveItem year={"2016"} project={"Hexlinx"} madeAt={"Underbite Games"} builtWithChips={["C#", "Unity"]} link={"https://rawg.io/games/hexlinx"}/>
                <ArchiveItem year={"2015"} project={"Relic Knights Companion App"} madeAt={"Underbite Games"} builtWithChips={["C#", "Unity"]}/>
                <ArchiveItem year={"2015"} project={"1st & Goal"} madeAt={"Underbite Games"} builtWithChips={["C#", "Unity", "Java", "Objective-C", "Mobile"]} link={"https://apps.apple.com/us/app/1st-goal/id906719319"}/>
                <ArchiveItem year={"2015"} project={"Attraction"} madeAt={"Underbite Games"} builtWithChips={["C#", ".Net", "Unity", "Multiplayer", "Mobile"]}/>
                </tbody>
            </table>
        </div>
    </>);
}