import ParticleBackground from "../components/ParticleBackground";
import Collapsible from 'react-collapsible';
import './Reaper.css';
import PorfolioHeader from "../components/PortfolioHeader";
import Stardew from "../assets/std-valley.png"
import FilterType from "../assets/filter-type.png"
import FilterSort from "../assets/filter-sort.png"
import Preview from "../assets/std-preview.png"

function ReactPortfolio() {
    return (
        <div className='App'>
            <ParticleBackground />
            <div className='z-10 flex flex-col justify-start items-center w-full'>
                <PorfolioHeader name="React: Stardew Valley" date="November 2022" />
                <div className='flex flex-col justify-center items-center w-5/6  h-auto pt-8 pb-8 mt-10'>
                    <div class="flex flex-col justify-center items-center">
                        <span class="text-4xl text-zinc-200 font-mono inline-block align-middle mb-2 font-bold ">
                            MISSION LOG
                        </span>
                    </div>
                    <div className='flex flex-row justify-center items-center h-full w-full pl-20 pr-20'>
                        <Collapsible trigger="Task 1: INTRO" className="">
                            <div class="flex flex-col justify-center items-center">
                                <span class="text-3xl text-zinc-200 font-mono inline-block align-middle mb-8">
                                    WHAT IS THIS MISSION?
                                </span>
                            </div>
                            <div class="self-center">
                                <span class="text-xl text-zinc-200 font-mono inline-block align-middle mb-12">
                                    My goal for this project was to explore the powers of React by creating a list-based interface.
                                </span>
                            </div>
                            <div class="self-center">
                                <span class="text-3xl text-zinc-200 font-mono inline-block align-middle mb-8">
                                    MISSION CHECKLIST
                                </span>
                            </div>

                            <div className="flex flex-col justify-center content-center items-center">
                                <div className="ml-12">
                                    <div class="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="" class="mr-4 w-6 h-6 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="default-checkbox" class="ml-2 text-xl text-left  font-medium text-gray-900 dark:text-gray-300">Dynamic Item Cards</label>
                                    </div>
                                    <div class="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="" class="mr-4 w-6 h-6 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="default-checkbox" class="ml-2 text-xl text-left  font-medium text-gray-900 dark:text-gray-300">Two filtering categories</label>
                                    </div>
                                    <div class="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="" class="mr-4 w-6 h-6 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="default-checkbox" class="ml-2 text-xl text-left  font-medium text-gray-900 dark:text-gray-300">Sorting</label>
                                    </div>
                                    <div class="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="" class="mr-4 w-6 h-6 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="default-checkbox" class="ml-2 text-xl text-left  font-medium text-gray-900 dark:text-gray-300">Filtering/sorting combinations</label>
                                    </div>
                                    <div class="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="" class="mr-4 w-6 h-6 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="default-checkbox" class="ml-2 text-xl text-left  font-medium text-gray-900 dark:text-gray-300">Item aggregation with removal</label>
                                    </div>
                                    <div class="flex items-center mb-8">
                                        <input id="default-checkbox" type="checkbox" value="" class="mr-4 w-6 h-6 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="default-checkbox" class="ml-2 text-xl text-left  font-medium text-gray-900 dark:text-gray-300">Reset filtering/sorting</label>
                                    </div>
                                </div>
                            </div>
                        </Collapsible>


                    </div>

                    <div className='flex flex-row justify-center items-center h-full w-full pl-20 pr-20'>
                        <Collapsible trigger="Task 2: MISSION STRATEGY" className="">
                            <div className="flex flex-col justify-center items-center">

                                <div class="flex flex-col justify-center items-center">
                                    <span class="text-3xl text-zinc-200 font-mono inline-block align-middle mb-8 ">
                                        How can I combine this project with a meaningful theme?
                                    </span>
                                </div>
                                <div class="flex flex-col justify-center items-center">
                                    <span class="text-2xl text-zinc-200 font-mono inline-block align-middle mb-8 italic">
                                        how sad and bad and mad it was - but then, how it was sweet  <br />
                                        - Robert Browning
                                    </span>
                                </div>
                                <div class="flex flex-col justify-center items-center">
                                    <span class="text-xl text-zinc-200 font-sans inline-block text-left mb-16 pl-12 pr-12">
                                        Nostaglia pushed me towards Stardew Valley, a videogame that kept me connected with my friends
                                        during the 2020 lockdown. I especially loved the pixel art style in Stardew Valley. So, I decided
                                        to create a furniture store that would allow players to map out a potential ingame furniture store purchase.
                                    </span>
                                </div>
                                <div className="flex flex-row justify-evenly items-center mb-12">
                                    <div className="w-1/2">
                                        <img src={Stardew} alt="" />
                                    </div>
                                    <div>
                                        <div class="self-center">
                                            <span class="text-3xl text-zinc-200 font-mono inline-block align-middle mb-8">
                                                UPDATED CHECKLIST
                                            </span>
                                        </div>

                                        <div className="flex flex-col justify-center content-center items-center">
                                            <div className="ml-12">
                                                <div class="flex items-center mb-4">
                                                    <input id="default-checkbox" type="checkbox" value="" class="mr-4 w-6 h-6 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                    <label for="default-checkbox" class="ml-2 text-xl text-left  font-medium text-gray-900 dark:text-gray-300">Furniture item cards with prices</label>
                                                </div>
                                                <div class="flex items-center mb-4">
                                                    <input id="default-checkbox" type="checkbox" value="" class="mr-4 w-6 h-6 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                    <label for="default-checkbox" class="ml-2 text-xl text-left  font-medium text-gray-900 dark:text-gray-300">Filter on furniture type and rarity</label>
                                                </div>
                                                <div class="flex items-center mb-4">
                                                    <input id="default-checkbox" type="checkbox" value="" class="mr-4 w-6 h-6 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                    <label for="default-checkbox" class="ml-2 text-xl text-left  font-medium text-gray-900 dark:text-gray-300">Sort on price</label>
                                                </div>
                                                <div class="flex items-center mb-4">
                                                    <input id="default-checkbox" type="checkbox" value="" class="mr-4 w-6 h-6 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                    <label for="default-checkbox" class="ml-2 text-xl text-left  font-medium text-gray-900 dark:text-gray-300">Online store style cart</label>
                                                </div>
                                                <div class="flex items-center mb-4">
                                                    <input id="default-checkbox" type="checkbox" value="" class="mr-4 w-6 h-6 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                    <label for="default-checkbox" class="ml-2 text-xl text-left  font-medium text-gray-900 dark:text-gray-300">Aggregate cart total on price</label>
                                                </div>
                                                <div class="flex items-center mb-8">
                                                    <input id="default-checkbox" type="checkbox" value="" class="mr-4 w-6 h-6 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                    <label for="default-checkbox" class="ml-2 text-xl text-left  font-medium text-gray-900 dark:text-gray-300">Stardew Valley themed UI</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Collapsible>
                    </div>
                    <div className='flex flex-row justify-center items-center h-full w-full pl-20 pr-20'>
                        <Collapsible trigger="Task 3: WAR WITH REACT" className="">
                            <div className="flex flex-col justify-center items-center">
                                <div class="flex flex-col justify-center items-center">
                                    <span class="text-3xl text-zinc-200 font-mono inline-block align-middle mb-16 ">
                                        The development process was a challenging, yet rewarding battle.
                                    </span>
                                </div>
                                <div class="flex flex-col justify-center items-center">
                                    <span class="text-2xl text-zinc-200 font-mono inline-block text-left mb-8 pl-12 pr-12">
                                        Challenge 1: Dynamically displaying the category filter
                                    </span>
                                </div>
                                <div className="flex flex-col justify-center items-center mb-12">

                                    <div class="w-3/4 flex flex-col justify-center items-center">
                                        <span class="text-xl text-zinc-200 font-sans inline-block text-left mb-8 pl-12 pr-12">
                                            I had originally planned on working with a fixed number of furniture categories.
                                            However, my excitement grew exponentially as I saw my vision come to life.
                                            It was unsustainable to manually maintain a long list of categories.
                                            So, I restructured my code to dynamically display the filterable categories
                                            based on the input list.
                                        </span>
                                    </div>
                                    <div className="flex flex-col justify-center items-center">
                                        <img src={FilterType} alt="" />
                                    </div>
                                </div>

                                <div class="flex flex-col justify-center items-center">
                                    <span class="text-2xl text-zinc-200 font-mono inline-block text-left mb-8 pl-12 pr-12">
                                        Challenge 2: Stacking filters and sort
                                    </span>
                                </div>
                                <div className="flex flex-col justify-center items-center mb-12">
                                    <div class="w-3/4 flex flex-col justify-center items-center">
                                        <span class="text-xl text-zinc-200 font-sans inline-block text-left mb-8 pl-12 pr-12">
                                            Now that my sort/filter functionality was implemented...
                                            How would I filter on multiple categories while still allowing sorting?
                                            After struggling with this for a bit, I discovered React's useEffect(),
                                            which allowed me to ensure that my items were filtered/sorted with the correct state.
                                        </span>
                                    </div>
                                    <div className="flex flex-col justify-center items-center">
                                        <img src={FilterSort} alt="" />
                                    </div>

                                </div>

                            </div>
                        </Collapsible>
                    </div>
                    <div className='flex flex-row justify-center items-center h-full w-full pl-20 pr-20'>
                        <Collapsible trigger="Task 4: DEMO" className="">
                            <div className="flex flex-col justify-center items-center">
                                <div className="flex flex-col justify-center items-center">
                                    <div class="flex flex-row justify-center pt-12 mb-4">
                                        <span class="text-3xl text-zinc-200 font-sans inline-block align-middle">
                                            A Preview:
                                        </span>
                                    </div>

                                    <div class="flex flex-row justify-center w-full mt-8 pb-10">
                                        <img src={Preview} alt="" />
                                    </div>

                                    <div class="flex flex-row justify-center mb-10 mt-4 px-4 py-4 bg-emerald-400 border-4 border-white rounded-full hover:bg-emerald-200">
                                        <a class="font-sans text-xl underline text-[#3366CC]" href="https://fortnitebattlepass123.github.io/uiux-development/" target="_blank" rel="noopener noreferrer">Visit the Website!</a>
                                    </div>
                                </div>
                            </div>
                        </Collapsible>
                    </div>
                    <div className='flex flex-row justify-center items-center h-full w-full pl-20 pr-20'>
                        <Collapsible trigger="Task 5: DEBREIF" className="">
                            <div className="flex flex-col justify-center items-center">
                                <div class="self-center">
                                    <span class="text-3xl text-zinc-200 font-sans inline-block align-middle">
                                        What I Learned
                                    </span>
                                </div>

                                <div class="pl-6 flex flex-row justify-center w-6/5 pt-6 mb-8">
                                    <span class="text-2xl text-zinc-200 font-sans inline-block">
                                        <ul class="list-decimal text-left">
                                            <li class="">Take advantage of the reusability of react components!</li>
                                            <li class="pt-4">Hot reloads are a massive time saver
                                            </li>
                                            <li class="pt-4">A declarative approach can intuitively solve many difficult problems </li>
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

export default ReactPortfolio;
