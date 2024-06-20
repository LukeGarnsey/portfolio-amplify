import SectionHeader from "../components/SectionHeader";

export default function About(){
  return (
    <>
      <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="About me">
        <SectionHeader text={"About"} />
        <div>
          <p className="mb-4">Back in 2008, I decided to try my hand at Half Life 2 modding and ended up stumbling upon a career in software development. Fast-forward to today, and I have had the privilege of building software for a 
            <a className="font-medium text-citrus-500 hover:text-pink-500 focus-visible:text-flint-700" href="https://www.immersivetouch.com/" target="_blank" rel="noreferrer noopener" aria-label="Start up (opens in a new tab)"> Start-up</a>
          , a 
          <a className="font-medium text-citrus-500 hover:text-pink-500 focus-visible:text-flint-700" href="https://www.dexcom.com/en-us" target="_blank" rel="noreferrer noopener" aria-label="Large Corporation (opens in a new tab)"> Large Corporation</a>
          , and an 
          <a className="font-medium text-citrus-500 hover:text-pink-500 focus-visible:text-flint-700" href="https://www.scholastic.com/home" target="_blank" rel="noreferrer noopener" aria-label="Educational staple (opens in a new tab)"> Educational staple</a>
          .
          </p>
          <p className="mb-4"> I am passionate about solving complex problems with refined solutions. Whether it is designing solid software architecture or tweaking code to make things run smoother, I love the challenge and the satisfaction of finding the right solution.</p>
          <p className="mb-4">When I am not immersed in development, you can find me on the golf course, writing music, making a lasagna from scratch, or spending quality time with my Shih-Tzu.</p>
          <p></p>
        </div>
      </section>
    </>
  );
}
      