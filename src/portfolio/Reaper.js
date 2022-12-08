import ParticleBackground from "../components/ParticleBackground";
import Collapsible from 'react-collapsible';
import './Reaper.css';
import PorfolioHeader from "../components/PortfolioHeader";
import Video from "../assets/reaper.mp4";
function Reaper() {
    return (
        <div className='App'>
            <ParticleBackground />
            <div className='z-10 flex flex-col justify-start items-center w-full'>
                <PorfolioHeader name="REAPER AIO" date="June 2018" />
                <div className='flex flex-col justify-center items-center backdrop-filter backdrop-blur-sm w-5/6 bg-[#B026FF]/50 h-auto p-18 mt-20'>
                    <div className='flex flex-row justify-center items-center h-full w-full pl-20 pr-20'>
                        <Collapsible trigger="Task 1: INTRO" className="">
                            <div class="flex flex-col justify-center items-center">
                                <span class="text-5xl text-zinc-200 font-mono inline-block align-middle mb-12 italic">
                                    3... 2... 1... Lift Off!
                                </span>
                            </div>
                            <div class="flex flex-col justify-center items-center">
                                <span class="text-4xl text-zinc-200 font-sans inline-block text-left mb-12 pl-12 pr-12 w-4/5">
                                    My computer science journey began with another passion of mine: streetwear.
                                    I was constantly on the lookout for new releases and restocks for sneakers to resell.
                                </span>
                            </div>
                            <div class="flex flex-col justify-center items-center">
                                <span class="text-5xl text-zinc-200 font-mono inline-block align-middle">
                                    Challenges
                                </span>
                            </div>
                            <div class="pl-36 flex flex-row justify-center w-4/5 pt-6 mb-8">
                                <span class="text-4xl text-zinc-200 font-sans inline-block">
                                    <ul class="list-disc text-left">
                                        <li class="">High demand but low supply</li>
                                        <li class="pt-4">Bots that can check out in an instant
                                        </li>
                                        <li class="pt-4">These bots were necessary but expensive</li>
                                    </ul>
                                </span>
                            </div>
                        </Collapsible>


                    </div>

                    <div className='flex flex-row justify-center items-center h-full w-full pl-20 pr-20'>
                        <Collapsible trigger="Task 2: SOLUTION" className="">
                            <div className="flex flex-col justify-center items-center">
                                <div class="flex flex-col justify-center items-center">
                                    <span class="text-4xl text-zinc-200 font-mono inline-block text-left w-4/5 mb-8 italic">
                                        He who would learn to fly one day must first learn to stand and walk and run and climb and dance; one cannot fly into flying.
                                        - Nietzsche
                                    </span>
                                </div>
                                <div class="flex flex-col justify-center items-center">
                                    <span class="text-4xl text-zinc-200 font-sans inline-block text-left mb-12 pl-12 pr-12 w-4/5">
                                        Conveniently, I had just started taking a computer science class. I quickly realized that I could use my knowledge
                                        to create my own bot. Here was my plan:
                                    </span>
                                </div>
                                <div class="flex flex-col justify-center items-center">
                                    <span class="text-5xl text-zinc-200 font-mono inline-block align-middle">
                                        My Solution
                                    </span>
                                </div>
                                <div class="pl-36 flex flex-row justify-center w-4/5 pt-6 mb-12">
                                    <span class="text-4xl text-zinc-200 font-sans inline-block">
                                        <ul class="list-disc text-left">
                                            <li class="">Learn and use Selenium to select and alter web elements</li>
                                            <li class="pt-4">Create a front-end GUI to input information
                                            </li>
                                        </ul>
                                    </span>
                                </div>
                                <div class="flex flex-col justify-center items-center">
                                    <span class="text-4xl text-zinc-200 font-sans inline-block text-left mb-12 pl-12 pr-12 w-4/5">
                                        This was a tall task, considering that I had zero experience with Selenium and web development.
                                        After a challenging Thanksgiving break, I was able to produce a working demo :)
                                    </span>
                                </div>
                            </div>
                        </Collapsible>
                    </div>
                    <div className='flex flex-row justify-center items-center h-full w-full pl-20 pr-20'>
                        <Collapsible trigger="Task 3: DEMO" className="">
                            <div className="flex flex-col justify-center items-center">
                                <video loop autoPlay muted width="2000" height="1500" controls >
                                    <source src={Video} type="video/mp4" />
                                </video>
                            </div>
                        </Collapsible>
                    </div>

                    <div className='flex flex-row justify-center items-center h-full w-full pl-20 pr-20'>
                        <Collapsible trigger="Task 4: DEBRIEF" className="">
                        <div className="flex flex-col justify-center items-center">
                                <div class="self-center">
                                    <span class="text-5xl text-zinc-200 font-sans inline-block align-middle">
                                        What I Learned
                                    </span>
                                </div>

                                <div class="pl-36 flex flex-row justify-center w-4/5 pt-6 mb-8">
                                    <span class="text-4xl text-zinc-200 font-sans inline-block">
                                        <ul class="list-disc text-left">
                                            <li class="">Take small steps when approaching a new subject</li>
                                            <li class="pt-4">CS is a vast field, which allows you to combine your passions with your skills
                                            </li>
                                        </ul>
                                    </span>
                                </div>
                            </div>
                        </Collapsible>
                    </div>


                </div>

            </div>
        </div>
    );
}

export default Reaper;
