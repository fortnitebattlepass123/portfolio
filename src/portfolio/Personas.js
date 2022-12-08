import ParticleBackground from "../components/ParticleBackground";
import Collapsible from 'react-collapsible';
import './Reaper.css';
import PorfolioHeader from "../components/PortfolioHeader";
import Bobby from "../assets/bobby.png";
import Clarice from "../assets/clarice.png";
import Story from "../assets/story.jpg";
function Personas() {
    return (
        <div className='App'>
            <ParticleBackground />
            <div className='z-10 flex flex-col justify-start items-center w-full'>
                <PorfolioHeader name="Personas & Storyboarding" date="October 2022" />
                <div className='flex flex-col justify-center items-center backdrop-filter backdrop-blur-sm w-5/6 bg-[#B026FF]/50 h-auto p-18 mt-20'>
                    <div className='flex flex-row justify-center items-center h-full w-full pl-20 pr-20'>
                        <Collapsible trigger="Task 1: INTRO" className="">
                            <div class="self-center">
                                <span class="text-5xl text-zinc-200 font-mono inline-block align-middle">
                                    WHAT IS THIS MISSION?
                                </span>
                            </div>
                            <div class="self-center flex flex-row justify-center w-full flex-wrap mb-8">
                                <div id="row" class="flex flex-row pt-8">
                                    <div class=" pl-10 text-left w-1/2 text-3xl text-zinc-200 font-mono">
                                        <ul class="list-disc">
                                            <li class="pb-2">How can we collect real user data from a publicly viewable interface?</li>
                                            <li>How can we build a persona using users' expectations, motives, experiences and
                                                challenges?</li>
                                        </ul>
                                    </div>
                                    <div class=" pl-10 text-left w-1/2 text-3xl text-zinc-200 font-mono inline-block">
                                        <ul class="list-disc">
                                            <li class="pb-2">How can we craft insightful, yet objective questions for user research?</li>
                                            <li >How can we use a persona to create an effective storyboard?</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div id="intro" class="h-auto mb-8 mt-6 flex flex-col justify-evenly border-t-2 border-solid">
                                <div class="self-center">
                                    <span class="text-5xl text-zinc-200 mt-6 font-mono inline-block align-middle">
                                        BROWN'S MAIL PROBLEM
                                    </span>
                                </div>
                                <div class="self-center flex flex-row justify-center w-full flex-wrap">
                                    <div id="row" class="flex flex-row justify-center pt-8">
                                        <div class="w-2/3 pl-6 pr-6">
                                            <span class="text-3xl text-zinc-200 font-mono inline-block text-center">
                                                Ever been to the mailroom during rush hour?
                                                Luckily, Brown introduced the mail kiosks. <br />
                                                They should make our lives easier, right? </span>
                                        </div>
                                    </div>
                                    <div class="w-full pr-24 pl-24 pt-10">
                                        <span class="text-3xl text-zinc-200 font-mono inline-block">
                                            In UI/UX, we all hate confusing interfaces. I mean... Imagine if this website had a button that didn't work.
                                        </span>

                                    </div>
                                    <div class="w-full pr-24 pl-24 pt-2">
                                        <span class="text-3xl text-zinc-200 font-mono inline-block flex flex-row justify-center">
                                            That would be so ironic.
                                        </span>

                                    </div>
                                    <div class="w-full col-span-2 mb-8 pr-6 pl-6 pt-8 flex flex-row justify-center">
                                        <button
                                            class="scale-150 px-4 py-2 border-2 cursor-not-allowed border-blackfont-semibold text-sm bg-emerald-500 text-white rounded-full shadow-sm hover:blur-lg hover:bg-rose-800">
                                            A
                                            Working
                                            Button</button>
                                    </div>
                                </div>
                            </div>
                        </Collapsible>


                    </div>

                    <div className='flex flex-row justify-center items-center h-full w-full pl-20 pr-20'>
                        <Collapsible trigger="Task 2: MISSION RECON" className="">
                            <div class="self-center">
                                <span class="text-5xl text-zinc-200 font-mono inline-block align-middle">
                                    OBSERVATIONS AND INTERVIEWS
                                </span>
                            </div>
                            <div class="border-b-2 border-dotted">
                                <div class="flex flex-row justify-center pt-10">
                                    <span class="text-4xl text-zinc-200 font-mono inline-block align-middle">
                                        The Questions:
                                    </span>
                                </div>
                                <div class="w-full pr-6 pl-6 flex flex-row justify-center pt-10">
                                    <span class="text-3xl text-zinc-200 font-mono inline-block align-middle">
                                        An effective persona would capture the interviewees' expectations, motives, experiences and challenges.
                                    </span>
                                </div>
                                <div class="w-full pr-6 pl-6 flex flex-row justify-center pt-8">
                                    <span class="text-3xl text-zinc-200 font-mono inline-block align-middle font-bold">
                                        Expectations:
                                    </span>
                                </div>
                                <div class="w-full pr-6 pl-6 flex flex-row justify-center pt-2">
                                    <span class="text-3xl text-zinc-200 font-mono inline-block">
                                        <ul class="list-disc text-left">
                                            <li class="italic">In 10 words, what are the mail kiosks trying to accomplish?</li>

                                        </ul>
                                    </span>
                                </div>

                                <div class="w-full pr-6 pl-6 flex flex-row justify-center pt-8">
                                    <span class="text-3xl text-zinc-200 font-mono inline-block align-middle font-bold">
                                        Motives:
                                    </span>
                                </div>
                                <div class="w-full pr-6 pl-6 flex flex-row justify-center pt-2">
                                    <span class="text-3xl text-zinc-200 font-mono inline-block">
                                        <ul class="list-disc text-left">
                                            <li class="italic">On a scale of 1-6 how busy are you when you come to the mailroom?</li>
                                            <li class="italic">In less than 10 words, what are you trying to accomplish when using the kiosk?</li>
                                        </ul>
                                    </span>
                                </div>

                                <div class="w-full pr-6 pl-6 flex flex-row justify-center pt-8">
                                    <span class="text-3xl text-zinc-200 font-mono inline-block align-middle font-bold">
                                        Experiences:
                                    </span>
                                </div>
                                <div class="w-full pr-6 pl-6 flex flex-row justify-center pt-2">
                                    <span class="text-3xl text-zinc-200 font-mono inline-block">
                                        <ul class="list-disc text-left">
                                            <li class="italic">Can you outline, step-by-step, how you use the kiosk from start to finish?</li>
                                        </ul>
                                    </span>
                                </div>

                                <div class="w-full pr-6 pl-6 flex flex-row justify-center pt-8">
                                    <span class="text-3xl text-zinc-200 font-mono inline-block align-middle font-bold">
                                        Challenges:
                                    </span>
                                </div>
                                <div class="w-full pr-6 pl-6 flex flex-row justify-center pt-2">
                                    <span class="text-3xl text-zinc-200 font-mono inline-block ">
                                        <ul class="list-disc text-left">
                                            <li class="italic">Name one positive and one negative characteristic about the kiosks.
                                            </li>
                                        </ul>
                                    </span>
                                </div>

                                <div class="w-full pr-6 pl-6 flex flex-row justify-center pt-8">
                                    <span class="text-3xl text-zinc-200 font-mono inline-block align-middle font-bold">
                                        Other:
                                    </span>
                                </div>
                                <div class="w-full pr-6 pl-6 flex flex-row justify-center pt-2 mb-8">
                                    <span class="text-3xl text-zinc-200 font-mono inline-block">
                                        <ul class="list-disc text-left">
                                            <li class="italic">Is there anything else that you would like to add?
                                            </li>
                                        </ul>
                                    </span>
                                </div>
                            </div>
                            <div class="border-b-2 border-dotted">
                                <div class="flex flex-row justify-center pt-12">
                                    <span class="text-4xl text-zinc-200 font-mono inline-block align-middle">
                                        The Interviews:
                                    </span>
                                </div>
                                <div class="w-full pr-6 pl-6 flex flex-row justify-center pt-10">
                                    <span class="text-3xl text-zinc-200 font-mono inline-block align-middle">
                                        The three interviews revealed interesting patterns of confusion among users of the mail kiosks.
                                    </span>
                                </div>
                                <div class="w-full pr-24 pl-24 flex flex-row justify-center pt-2 mb-8">
                                    <span class="text-3xl text-zinc-200 font-mono inline-block">
                                        <ul class="list-disc text-left">
                                            <li class="italic pt-2 mb-2">The interviewees praised the simplicity of the kiosks
                                            </li>
                                            <li class="italic pt-2 mb-2">However, they criticized how long it could take to successfully use the kiosks
                                            </li>
                                            <li class="italic pt-2 mb-2">They tried to plan ahead and make time for the mail room because of how busy it could be
                                            </li>
                                            <li class="italic pt-2 mb-2">One interviewee emphasized how they expected more out of the kiosks
                                            </li>
                                            <li class="italic pt-2 mb-2">The main issue mentioned is the inconsistency of the card readers
                                            </li>
                                        </ul>
                                    </span>
                                </div>
                            </div>

                            <div class="">
                                <div class="flex flex-row justify-center pt-12">
                                    <span class="text-4xl text-zinc-200 font-mono inline-block align-middle">
                                        The Observations:
                                    </span>
                                </div>
                                <div class="w-full pr-6 pl-6 flex flex-row justify-center pt-10">
                                    <span class="text-3xl text-zinc-200 font-mono inline-block align-middle">
                                        I also visually observed users' experiences with the kiosks.
                                    </span>
                                </div>

                                <div class="w-full pr-6 pl-6 flex flex-row justify-center pt-8">
                                    <span class="text-3xl text-zinc-200 font-mono inline-block align-middle font-bold">
                                        Key Observations:
                                    </span>
                                </div>
                                <div class="w-full pr-24 pl-32 flex flex-row justify-center pt-2 mb-8">
                                    <span class="text-3xl text-zinc-200 font-mono inline-block">
                                        <ul class="list-disc text-left">
                                            <li class="italic pt-2 mb-2">Users tend to swipe once, wait for the digital screen to respond, then swipe multiple times again if the screen doesn't respond.
                                            </li>
                                            <li class="italic pt-2 mb-2">Some users waiting in line tend to ignore the left kiosk even if it's open.
                                            </li>
                                            <li class="italic pt-2 mb-2">Most users preemptively swiped their cards multiple times.
                                            </li>
                                            <li class="italic pt-2 mb-2">One user left after the both kiosks refused to read their card.
                                            </li>
                                            <li class="italic pt-2 mb-2">The left kiosk seems to need more swipes to access the user's account than the right kiosk.
                                            </li>
                                            <li class="italic pt-2 mb-2">No user used the digital ID number input method to access their account.
                                            </li>
                                            <li class="italic pt-2 mb-2">Once logged in, users spent minimal time at the kiosk.
                                            </li>
                                        </ul>
                                    </span>
                                </div>
                            </div>
                        </Collapsible>
                    </div>

                    <div className='flex flex-row justify-center items-center h-full w-full pl-20 pr-20'>
                        <Collapsible trigger="Task 3: TARGET ASSESSMENT" className="">
                            <div id="persona" class="h-auto mb-8 flex flex-col justify-evenly  items-center">
                                <div class="self-center">
                                    <span class="text-5xl text-zinc-200 font-mono inline-block align-middle">
                                        Personas
                                    </span>
                                </div>

                                <div class="flex flex-row justify-center pt-12">
                                    <span class="text-4xl text-zinc-200 font-mono inline-block align-middle">
                                        Confused Clarice:
                                    </span>
                                </div>
                                <div class="w-full pr-6 pl-6 flex flex-row justify-center pt-10">
                                    <span class="text-3xl text-zinc-200 font-mono inline-block align-middle">
                                        Accustomed to technology, Clarice has high expectations for even the most advanced interfaces.
                                    </span>
                                </div>
                                <div class="w-full pr-6 pl-6 flex flex-row justify-center pt-10">
                                    <span class="text-4xl text-zinc-200 font-mono inline-block align-middle font-bold">
                                        Empathy Map:
                                    </span>
                                </div>
                                <div class="flex flex-row justify-center w-4/5 inline-block align-middle mb-8 mt-8">
                                    <img src={Clarice} alt="" />
                                </div>

                                <div class="w-full pr-6 pl-6 flex flex-row justify-center pt-10">
                                    <span class="text-4xl text-zinc-200 font-mono inline-block align-middle font-bold">
                                        Problems Faced:
                                    </span>
                                </div>

                                <div class="w-full pr-6 pl-6 flex flex-row justify-center pt-10">
                                    <span class="text-3xl text-zinc-200 font-mono inline-block align-middle">
                                        Clarice is used to technology working seamlessly. She is repeatedly frustrated by the inconsistency of the mail kiosks.
                                    </span>
                                </div>

                                <div class="w-full pr-6 pl-6 flex flex-row justify-center pt-10">
                                    <span class="text-4xl text-zinc-200 font-mono inline-block align-middle font-bold">
                                        Connection to Users:
                                    </span>
                                </div>
                                <div class="w-full pr-6 pl-6 flex flex-row justify-center pt-10">
                                    <span class="text-3xl text-zinc-200 font-mono inline-block align-middle">
                                        Interviewees expressed frustration with the card readers.
                                    </span>
                                </div>

                                <div class="w-full pr-6 pl-6 flex flex-row justify-center pt-4">
                                    <span class="text-3xl text-zinc-200 font-mono inline-block align-middle">
                                        Initially swiping only once, observed users expected the kiosks to work first try.            </span>
                                </div>
                                <div class="w-full pr-6 pl-6 flex flex-row justify-center pt-4">
                                    <span class="text-3xl text-zinc-200 font-mono inline-block align-middle">
                                        Clarice represents the student who has grown up surrounded technology, holding modern interfaces to high standards.
                                    </span>
                                </div>
                                <div class="flex flex-row justify-center pt-12">
                                    <span class="text-4xl text-zinc-200 font-mono inline-block align-middle">
                                        Busy Bobby:
                                    </span>
                                </div>
                                <div class="w-full pr-6 pl-6 flex flex-row justify-center pt-10">
                                    <span class="text-3xl text-zinc-200 font-mono inline-block align-middle italics">
                                        Heavily involved around campus, Bobby has little wiggle room in his schedule.
                                    </span>
                                </div>
                                <div class="w-full pr-6 pl-6 flex flex-row justify-center pt-10">
                                    <span class="text-4xl text-zinc-200 font-mono inline-block align-middle font-bold">
                                        Empathy Map:
                                    </span>
                                </div>

                                <div class="flex flex-row justify-center w-4/5 inline-block align-middle mb-8 mt-8">
                                    <img src={Bobby} alt=""/>
                                </div>
                                <div class="w-full pr-6 pl-6 flex flex-row justify-center pt-10">
                                    <span class="text-4xl text-zinc-200 font-mono inline-block align-middle font-bold">
                                        Problems Faced:
                                    </span>
                                </div>

                                <div class="w-full pr-6 pl-6 flex flex-row justify-center pt-10">
                                    <span class="text-3xl text-zinc-200 font-mono inline-block align-middle">
                                        Bobby cannot afford spend too much time at the mail room. The kiosk inconsistency only increases his wait.
                                    </span>
                                </div>

                                <div class="w-full pr-6 pl-6 flex flex-row justify-center pt-10">
                                    <span class="text-4xl text-zinc-200 font-mono inline-block align-middle font-bold">
                                        Connection to Users:
                                    </span>
                                </div>
                                <div class="w-full pr-6 pl-6 flex flex-row justify-center pt-10">
                                    <span class="text-3xl text-zinc-200 font-mono inline-block align-middle">
                                        Interviewees explained how they were busy and had to allocate time for the mail room.
                                    </span>
                                </div>
                                <div class="w-full pr-6 pl-6 flex flex-row justify-center pt-4">
                                    <span class="text-3xl text-zinc-200 font-mono inline-block align-middle">
                                        Bobby represents the ambitious student with too much to do and not enough time.
                                    </span>
                                </div>

                                <div class="mb-8">

                                </div>

                                <div id="storyboard" class="h-auto mb-8 flex flex-col justify-evenly w-full">
                                    <div class="self-center">
                                        <span class="text-5xl text-zinc-200 font-mono inline-block align-middle">
                                            Storyboard
                                        </span>
                                    </div>

                                    <div class="w-full pr-6 pl-6 flex flex-row justify-center pt-10">
                                        <span class="text-3xl text-zinc-200 font-mono inline-block align-middle">
                                            Now, let's see Busy Bobby in action.
                                        </span>
                                    </div>

                                    <div class="flex flex-row h-full justify-center w-full inline-block align-middle mb-8 mt-16">
                                        <img src={Story} alt="" />
                                    </div>
                                </div>

                            </div>
                        </Collapsible>

                    </div>
                    <div className='flex flex-row justify-center items-center h-full w-full pl-20 pr-20'>
                        <Collapsible trigger="Task 4: DEBRIEF" className="">
                            <div id="conc" class="h-auto mb-8 flex flex-col justify-evenly items-center">
                                <div class="self-center">
                                    <span class="text-5xl text-zinc-200 font-mono inline-block text-left">
                                        Conclusion
                                    </span>
                                </div>

                                <div class="w-2/3 pr-6 pl-6 flex flex-row justify-center pt-10">
                                    <span class="text-3xl text-zinc-200 font-mono inline-block align-middle">
                                        Amidst the chaos of the mail room, observed and interviewed students shared a common opinion towards the mail kiosks:
                                    </span>
                                </div>
                                <div class="w-2/3 pr-6 pl-6 flex flex-row justify-center pt-10">
                                    <span class="text-3xl text-zinc-200 font-mono inline-block">
                                        <ul class="list-disc text-left">
                                            <li class="italic pt-2 mb-2">They appreciate the potential benefits of the kiosks.
                                            </li>
                                            <li class="italic pt-2 mb-2">However, those benefits cannot be reaped until the key components of the kiosks are consistently functional.
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

export default Personas;
