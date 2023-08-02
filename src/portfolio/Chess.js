import ParticleBackground from "../components/ParticleBackground";
import Collapsible from 'react-collapsible';
import PorfolioHeader from "../components/PortfolioHeader";
function Chess() {
    return (
        <div className='App'>
            <ParticleBackground />
            <div className='z-10 flex flex-col justify-start items-center w-full'>
                <PorfolioHeader name="Chess" date="May 2021" />
                <div className='flex flex-col justify-center items-center w-5/6  h-auto pt-8 pb-8 mt-10'>
                    <div class="flex flex-col justify-center items-center">
                        <span class="text-4xl text-zinc-200 font-mono inline-block align-middle mb-2 font-bold ">
                            MISSION LOG
                        </span>
                    </div>
                    <div className='flex flex-row justify-center items-center h-full w-full pl-10 pr-10'>
                        <Collapsible trigger="Task 1: INTRO" className="">
                            <div class="flex flex-col justify-center items-center">
                                <span class="text-3xl text-zinc-200 font-mono inline-block align-middle mb-6 italic">
                                    Road to chess mastery begins now...
                                </span>
                            </div>
                            <div class="flex flex-col justify-center items-center">
                                <span class="text-xl text-zinc-200 font-sans inline-block text-left mb-6 pl-6 pr-6 w-4/5">
                                    My Rapid Programming course consisted on multiple fast-paced projects, where I had to learn multiple languages/frameworks within a few weeks at a time. 
                                    For our final project, my partner and I decided to rebuild one of our favorite passtime websites: Chess.com. Our professor urged us to use a chess framework for the 
                                    piece logic; however, we decided to build our own from scratch and build a deeper understanding of the game.
                                </span>
                            </div>
                        </Collapsible>


                    </div>

                    <div className='flex flex-row justify-center items-center h-full w-full pl-10 pr-10'>
                        <Collapsible trigger="Task 2: MISSION STRATEGY" className="">
                            <div className="flex flex-col justify-center items-center">

                                <div class="flex flex-col justify-center items-center">
                                    <span class="text-3xl text-zinc-200 font-mono inline-block align-middle mb-8 ">
                                        An ambitious goal...
                                    </span>
                                </div>
                                <div className="flex flex-col justify-center content-center items-center">
                                            <div className="ml-12">
                                                <div class="flex items-center mb-4">
                                                    <input id="default-checkbox" type="checkbox" value="" class="mr-4 w-6 h-6 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                    <label for="default-checkbox" class="ml-2 text-xl text-left  font-medium text-gray-900 dark:text-gray-300">Secure account management</label>
                                                </div>
                                                <div class="flex items-center mb-4">
                                                    <input id="default-checkbox" type="checkbox" value="" class="mr-4 w-6 h-6 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                    <label for="default-checkbox" class="ml-2 text-xl text-left  font-medium text-gray-900 dark:text-gray-300">User profiles with game history</label>
                                                </div>
                                                <div class="flex items-center mb-4">
                                                    <input id="default-checkbox" type="checkbox" value="" class="mr-4 w-6 h-6 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                    <label for="default-checkbox" class="ml-2 text-xl text-left  font-medium text-gray-900 dark:text-gray-300">Live updating matches</label>
                                                </div>
                                                <div class="flex items-center mb-4">
                                                    <input id="default-checkbox" type="checkbox" value="" class="mr-4 w-6 h-6 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                    <label for="default-checkbox" class="ml-2 text-xl text-left  font-medium text-gray-900 dark:text-gray-300">Full chess logic (including en passant)</label>
                                                </div>
                                                <div class="flex items-center mb-4">
                                                    <input id="default-checkbox" type="checkbox" value="" class="mr-4 w-6 h-6 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                    <label for="default-checkbox" class="ml-2 text-xl text-left  font-medium text-gray-900 dark:text-gray-300">Player ranking system based on matches</label>
                                                </div>
                                            </div>
                                        </div>
                                <div class="flex flex-col justify-center items-center">
                                    <span class="text-xl text-zinc-200 font-sans inline-block text-left mb-16 pl-12 pr-12">
                                        I was tasked with all of the backend logic, including the multiplayer interaction, user authentication, and database management. I decided to use Node.js for the backend, mySQL for the database and Socket.io for the multiplayer interaction.
                                    </span>
                                </div>

                            </div>
                        </Collapsible>
                    </div><div className='flex flex-row justify-center items-center h-full w-full pl-10 pr-10'>
                        <Collapsible trigger="Task 3: MAJOR OBSTACLES" className="">
                            <div className="flex flex-col justify-center items-center">
                                <div class="flex flex-col justify-center items-center">
                                    <span class="text-3xl text-zinc-200 font-mono inline-block align-middle mb-16 ">
                                        My partner and I had worked in silos for the majority of the project, which led to some major issues.
                                    </span>
                                </div>
                                <div class="flex flex-col justify-center items-center">
                                    <span class="text-2xl text-zinc-200 font-mono inline-block text-left mb-8 pl-12 pr-12">
                                        Challenge 1: Connecting Node/Socket to React
                                    </span>
                                </div>
                                <div className="flex flex-col justify-center items-center mb-12">

                                    <div class="w-3/4 flex flex-col justify-center items-center">
                                        <span class="text-xl text-zinc-200 font-sans inline-block text-left mb-8 pl-12 pr-12">
                                            After I had completed the matchmaking server logic, it was time to connect it to the frontend React app (chess logic). Only the chess portion of 
                                            the frontend was built on React, so I had to figure out how to embed React within the existing HTML/CSS/JS. After some research, I discovered
                                            that I could use ReactDOM to render the React app within a div in the HTML. This allowed me to use React for the chess logic. However, we still
                                            ran into issues with consistently changing the board for both players. I utilized Socket.io to emit events to the server, which would then emit
                                            events to the other player. This allowed us to keep the board in sync for both players.

                                        </span>
                                    </div>
                                </div>

                                <div class="flex flex-col justify-center items-center">
                                    <span class="text-2xl text-zinc-200 font-mono inline-block text-left mb-8 pl-12 pr-12">
                                        Challenge 2: Tracking socket calls
                                    </span>
                                </div>
                                <div className="flex flex-col justify-center items-center mb-12">
                                    <div class="w-3/4 flex flex-col justify-center items-center">
                                        <span class="text-xl text-zinc-200 font-sans inline-block text-left mb-8 pl-12 pr-12">
                                            One major mistake on my end was not keeping track of the socket calls. I had a lot of issues with the server not responding to the correct
                                            socket calls, which led to a lot of debugging. With dozens of on/emit calls, I finally decided to create a diagram to keep track of all the
                                            calls, allowing me to visually understand player interaction with the server and how the server responds as a middleman.
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </Collapsible>
                    </div>

                    <div className='flex flex-row justify-center items-center h-full w-full pl-10 pr-10'>
                        <Collapsible trigger="Task 4: DEMO" className="">
                            <div class="flex flex-row justify-center mb-10 mt-4 px-4 py-4 bg-emerald-400 border-4 border-white rounded-full hover:bg-emerald-200">
                                        <a class=" ml-10 mr-10 font-sans text-xl underline text-[#3366CC]" href="https://gitfront.io/r/user-3779504/9AA2qTKhrmVo/creativeproject-module7-488176-487275/" target="_blank" rel="noopener noreferrer">View GitFront</a>
                            </div>
                        </Collapsible>
                    </div>

                    <div className='flex flex-row justify-center items-center h-full w-full pl-10 pr-10'>
                        <Collapsible trigger="Task 5: DEBRIEF" className="">
                            <div className="flex flex-col justify-center items-center">
                                <div class="self-center">
                                    <span class="text-3xl text-zinc-200 font-sans inline-block align-middle">
                                        What I Learned
                                    </span>
                                </div>

                                <div class="pl-20 flex flex-row justify-center w-4/5 pt-3 mb-4">
                                    <span class="text-xl text-zinc-200 font-sans inline-block">
                                        <ul class="list-disc text-left">
                                            <li class="">Always keep contact with teammates throughout the development lifecycle</li>
                                            <li class="pt-2">Maintain design documentation to keep track of all the moving parts
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

export default Chess;
