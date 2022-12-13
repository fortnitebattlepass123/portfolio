import ParticleBackground from "../components/ParticleBackground";
import Collapsible from 'react-collapsible';
import './Reaper.css';
import PorfolioHeader from "../components/PortfolioHeader";
import Berkshire from "../assets/bh-ex.png";
import MobileLOFI from "../assets/mobileLOFI.png"
import TabletLOFI from "../assets/tabletLOFI.png"
import DesktopLOFI from "../assets/desktopLOFI.png"
import StyleGuide from "../assets/v.png"
import MobileHIFI from "../assets/mobileHIFI.png"
import TabletHIFI from "../assets/tabletHIFI.png"
import DesktopHIFI from "../assets/desktopHIFI.png"
import Preview from "../assets/prev.png"

function Responsive() {
    return (
        <div className='App'>
            <ParticleBackground />
            <div className='z-10 flex flex-col justify-start items-center w-full'>
                <PorfolioHeader name="Responsive Redesign" date="October 2022" />
                <div className='flex flex-col justify-center items-center w-5/6  h-auto pt-8 pb-8 mt-10'>
                    <div class="flex flex-col justify-center items-center">
                        <span class="text-4xl text-zinc-200 font-mono inline-block align-middle mb-2 font-bold ">
                            MISSION LOG
                        </span>
                    </div>
                    <div className='flex flex-row justify-center items-center h-full w-full pl-10 pr-10'>
                        <Collapsible trigger="Task 1: INTRO" className="">
                            <div className="flex flex-col justify-center items-center">
                                <div class="self-center">
                                    <span class="text-3xl text-zinc-200 font-mono inline-block align-middle">
                                        WHAT IS THIS MISSION?
                                    </span>
                                </div>
                                <div class="self-center flex flex-row justify-center w-full flex-wrap mb-8">
                                    <div id="row" class="flex flex-row justify-center pt-8">
                                        <div class=" pl-10 flex flex-row justify-center text-left w-5/6 text-xl text-zinc-200 font-mono">
                                            <ul class="list-disc">
                                                <li class="pb-2">How can we identify usability problems on a website, and what are the steps required to fix these problems?</li>
                                                <li>How can we craft a more responsive, intuitive website that aims to fix the problems found?</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="self-center mt-8">
                                    <span class="text-3xl text-zinc-200 font-mono inline-block align-middle">
                                        THE TARGET
                                    </span>
                                </div>
                                <div class="flex flex-row justify-center pt-6 mb-6">
                                    <span class="text-2xl text-zinc-200 font-sans inline-block align-middle italic">
                                        Berkshire Hathaway, one of the most expensive conglomerates in the world, <br /> has an extremely simple yet surprisingly confusing website.
                                    </span>
                                </div>
                                <div class="flex flex-row justify-center mt-8 mb-8">
                                    <img src={Berkshire} alt="" />
                                </div>


                                <div class="flex flex-row justify-center items-center mt-4 px-4 py-2 bg-emerald-400 border-4 border-white rounded-full hover:bg-emerald-200">
                                    <a class="font-sans text-sm underline text-[#3366CC]" href="https://www.berkshirehathaway.com/" target="_blank" rel="noopener noreferrer">Visit Berkshire Hathaway</a>
                                </div>

                                <div class="flex flex-row justify-center pt-10">
                                    <span class="text-2xl text-zinc-200 font-sans inline-block align-middle italic">
                                        Quick! You need investment information about the company.
                                    </span>
                                </div>
                                <div class="flex flex-row justify-center pt-1">
                                    <span class="text-2xl text-zinc-200 font-sans inline-block align-middle italic">
                                        Let's look at some issues you'll run into.
                                    </span>
                                </div>
                                <div class="w-full flex flex-row justify-evenly items-start">
                                    <div class="w-1/2 flex flex-col justify-center items-center">
                                        <div class="flex flex-row justify-center pt-10">
                                            <span class="text-xl text-zinc-200 font-sans inline-block align-middle">
                                                Usability Problems:
                                            </span>
                                        </div>
                                        <div class="pl-6 flex flex-row justify-start w-2/3 pt-2">
                                            <span class="text-lg text-zinc-200 font-sans inline-block">
                                                <ul class="w-full list-decimal text-left">
                                                    <li class="mb-2">No obvious way to undo clicking a link (no home button)</li>
                                                    <li class="mb-2">No mobile specific layout
                                                    </li>
                                                    <li class="mb-2">Clicking link replaces current page</li>
                                                    <li class="mb-2">Hyperlink base and interaction colors are backwards</li>
                                                </ul>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="w-1/2 flex flex-col justify-center items-center">
                                        <div class="flex flex-row justify-center pt-10">
                                            <span class="text-xl text-zinc-200 font-sans inline-block align-middle">
                                                Learnability Problems:
                                            </span>
                                        </div>
                                        <div class="pl-6 flex flex-row justify-start w-2/3 pt-2">
                                            <span class="text-lg text-zinc-200 font-sans inline-block">
                                                <ul class="w-full list-decimal text-left">
                                                    <li class="mb-2">No pattern/structure to ordering of links</li>
                                                    <li class="mb-2">Small text easy to ignore
                                                    </li>
                                                    <li class="mb-2">No help/documentation. All feedback must be mailed</li>
                                                    <li class="mb-2">Random GEICO AD confusing for new users</li>
                                                    <li class="mb-2">Difficult to learn link structure because links don't open new tab</li>
                                                </ul>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full flex flex-row justify-evenly items-start">
                                    <div class="w-1/2 flex flex-col justify-center items-center">
                                        <div class="flex flex-row justify-center pt-10">
                                            <span class="text-xl text-zinc-200 font-sans inline-block align-middle">
                                                Memorability Problems:
                                            </span>
                                        </div>
                                        <div class="pl-6 flex flex-row justify-start w-2/3 pt-2">
                                            <span class="text-lg text-zinc-200 font-sans inline-block">
                                                <ul class="w-full list-decimal text-left">
                                                    <li class="mb-2">Emphasizes recall over recognition</li>
                                                    <li class="mb-2">No color indicators or categorization to help recognition</li>
                                                </ul>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="w-1/2 flex flex-col justify-center items-center">
                                        <div class="flex flex-row justify-center pt-10">
                                            <span class="text-xl text-zinc-200 font-sans inline-block align-middle">
                                                Accessibility Problems:
                                            </span>
                                        </div>
                                        <div class="pl-6 flex flex-row justify-start w-2/3 pt-2">
                                            <span class="text-lg text-zinc-200 font-sans inline-block">
                                                <ul class="w-full list-decimal text-left">
                                                    <li class="mb-2">Small text</li>
                                                    <li class="mb-2">No heading structure
                                                    </li>
                                                    <li class="mb-2">Website language not identified</li>
                                                    <li class="mb-2">Links point to PDF documents</li>
                                                </ul>
                                            </span>
                                        </div>
                                    </div>
                                </div>


                                <div class="flex flex-row justify-center pt-10 mb-8">
                                    <span class="text-2xl text-zinc-200 font-sans inline-block align-middle italic">
                                        Oops! You took too long to find the information needed for your investment.
                                    </span>
                                </div>
                            </div>
                        </Collapsible>


                    </div>

                    <div className='flex flex-row justify-center items-center h-full w-full pl-10 pr-10'>
                        <Collapsible trigger="Task 2: EARLY PROTOTYPES" className="">
                            <div className="flex flex-col justify-center items-center">
                                <div className="flex flex-col justify-center items-center">
                                    <div class="flex flex-row justify-center pt-10 mb-8">
                                        <span class="text-2xl text-zinc-200 font-sans inline-block align-middle italic">
                                            Let's look at my thought process before designing an alternative UI.
                                        </span>
                                    </div>

                                </div>
                                <div class="flex flex-row justify-center pt-10">
                                    <span class="text-3xl text-zinc-200 font-sans inline-block align-middle">
                                        Thought Process:
                                    </span>
                                </div>
                                <div class="pl-6 flex flex-row justify-start w-2/3 pt-8 mb-16 pl-12">
                                    <span class="text-xl text-zinc-200 font-sans inline-block">
                                        <ul class="list-decimal text-left">
                                            <li class="mb-2">Berkshire Hathaway prides itself in its simplicity.</li>
                                            <li class="mb-2">How can we create a better interface while maintaining their values?</li>
                                            <li class="mb-2">Create a modern interface to show company's commitment to innovation</li>
                                            <li class="mb-2">Remove excessive links from main page.</li>
                                            <li class="mb-2">Frequent and new investors need quick access to information</li>
                                            <li class="mb-2">Create categories to help with recognition</li>
                                        </ul>
                                    </span>
                                </div>

                                <div class="flex flex-row justify-center pt-10">
                                    <span class="text-3xl text-zinc-200 font-sans inline-block align-middle">
                                        Desktop:
                                    </span>
                                </div>

                                <div class="flex flex-row justify-center w-full mt-8 mb-36">
                                    <img src={DesktopLOFI} alt="" />
                                </div>

                                <div class="flex flex-row justify-center pt-10">
                                    <span class="text-3xl text-zinc-200 font-sans inline-block align-middle">
                                        Tablet:
                                    </span>
                                </div>

                                <div class="flex flex-row justify-center w-full mt-8 mb-36">
                                    <img src={TabletLOFI} alt="" />
                                </div>

                                <div class="flex flex-row justify-center pt-10">
                                    <span class="text-3xl text-zinc-200 font-sans inline-block align-middle">
                                        Mobile:
                                    </span>
                                </div>

                                <div class="flex flex-row justify-center w-full mt-8 pb-10">
                                    <img src={MobileLOFI} alt="" />
                                </div>

                                <div class="flex flex-row justify-center pt-10">
                                    <span class="text-3xl text-zinc-200 font-sans inline-block align-middle">
                                        Problems Addressed:
                                    </span>
                                </div>
                                <div class="pl-6 flex flex-row justify-start w-2/3 pt-8 mb-10 ml-16">
                                    <span class="text-xl text-zinc-200 font-sans inline-block">
                                        <ul class="list-decimal text-left">
                                            <li class="mb-2">Added a help button to top of page</li>
                                            <li class="mb-2">Added a home button to allow users to return to home page</li>
                                            <li class="mb-2">Created three categories based on the theme of the links</li>
                                            <li class="mb-2">Added "Recently Viewed" category for quick access for frequent users</li>
                                            <li class="mb-2">Maintained overall simplicity of website</li>
                                            <li class="mb-6">Removed confusing clutter from main page</li>
                                        </ul>
                                    </span>
                                </div>
                            </div>
                        </Collapsible>
                    </div>
                    <div className='flex flex-row justify-center items-center h-full w-full pl-10 pr-10'>
                        <Collapsible trigger="Task 3: HIFI PROTOTYPES" className="">
                            <div className="flex flex-col justify-center items-center w-full">

                                <div class="flex flex-row justify-center pt-10">
                                    <span class="text-3xl text-zinc-200 font-sans inline-block align-middle">
                                        My Thought Process:
                                    </span>
                                </div>
                                <div class="pl-6 flex flex-row justify-center w-2/3 pt-8 mb-20 pl-12">
                                    <span class="text-xl text-zinc-200 font-sans inline-block">
                                        <ul class="list-decimal text-left">
                                            <li class="mb-2">Color scheme matches Berkshire Hathaway palette</li>
                                            <li class="mb-2">Buttons would POP on hover to increase learnability</li>
                                            <li class="mb-2">Use standard fonts to keep readability consistent among operating systems</li>
                                            <li class="mb-2">Keep page mobile and tablet friendly for "on the go" investors</li>
                                        </ul>
                                    </span>
                                </div>

                                <div class="w-full pr-6 pl-6 flex flex-row justify-center pt-8 mb-4 border-t-2 border-dashed">
                                    <span class="text-2xl text-zinc-200 font-sans inline-block align-middle italic">
                                        Let's start looking at the details, starting with a visual style guide!
                                    </span>
                                </div>

                                <div class="flex flex-row justify-center pt-5">
                                    <span class="text-3xl text-zinc-200 font-sans inline-block align-middle">
                                        Visual Style Guide:
                                    </span>
                                </div>

                                <div class="flex flex-row justify-center w-full mt-8 mb-16">
                                    <img src={StyleGuide} alt="" />
                                </div>

                                <div class="w-full pr-6 pl-6 flex flex-row justify-center pt-8 mt-10 border-t-2 border-dashed">
                                    <span class="text-2xl text-zinc-200 font-sans inline-block align-middle italic">
                                        Let's look at some HI-FI designs created using Figma!
                                    </span>
                                </div>

                                <div class="flex flex-row justify-center mt-8 mb-4">
                                    <span class="text-3xl text-zinc-200 font-sans inline-block align-middle">
                                        Desktop:
                                    </span>
                                </div>

                                <div class="flex flex-row justify-center w-11/12 mt-8">
                                    <img src={DesktopHIFI} alt="" />
                                </div>

                                <div class="flex flex-row justify-center pt-12 mt-8 mb-4">
                                    <span class="text-3xl text-zinc-200 font-sans inline-block align-middle">
                                        Tablet:
                                    </span>
                                </div>

                                <div class="flex flex-row justify-center w-1/2 mt-8">
                                    <img src={TabletHIFI} alt="" />
                                </div>

                                <div class="flex flex-row justify-center pt-12 mt-8 mb-4">
                                    <span class="text-3xl text-zinc-200 font-sans inline-block align-middle">
                                        Mobile:
                                    </span>
                                </div>

                                <div class="flex flex-row justify-center w-1/2 mt-8 pb-12">
                                    <img src={MobileHIFI} alt="" />
                                </div>

                                <div class="flex flex-row justify-center pt-12 w-full border-t-2 border-dashed">
                                    <span class="text-3xl text-zinc-200 font-sans inline-block align-middle">
                                        Emphasizing Visual Hierarchy:
                                    </span>
                                </div>
                                <div class="pl-6 flex flex-row justify-center w-4/5 pt-8 mb-10 pl-12">
                                    <span class="text-xl text-zinc-200 font-sans inline-block">
                                        <ul class="list-decimal text-left">
                                            <li class="mb-2">Categories are unique colors</li>
                                            <li class="mb-2">Font scales down as you move from headings to sub-headings</li>
                                            <li class="mb-2">Between the 3 layouts, items in the same categories are always aligned together</li>
                                        </ul>
                                    </span>
                                </div>
                            </div>
                        </Collapsible>
                    </div>
                    <div className='flex flex-row justify-center items-center h-full w-full pl-10 pr-10'>
                        <Collapsible trigger="Task 4: DEMO" className="">
                            <div className="flex flex-col justify-center items-center">
                                <div class="flex flex-row justify-center pt-12 mb-8">
                                    <span class="text-3xl text-zinc-200 font-sans inline-block align-middle">
                                        A Preview:
                                    </span>
                                </div>

                                <div class="flex flex-row justify-center w-full mt-8 pb-10">
                                    <img src={Preview} alt="" />
                                </div>

                                <div class="flex flex-row justify-center mb-2 mt-4 px-4 py-4 bg-emerald-400 border-4 border-white rounded-full hover:bg-emerald-200">
                                    <a class="font-sans text-xl underline text-[#3366CC]" href="https://fortnitebattlepass123.github.io/responsive/" target="_blank" rel="noopener noreferrer">Visit the Improved Website!</a>
                                </div>

                                <div class="w-full pr-6 pl-6 flex flex-row justify-center pt-8 mb-8">
                                    <span class="text-2xl text-zinc-200 font-sans inline-block align-middle italic">
                                        Adjust your browser window size to test the responsiveness of the new website!
                                    </span>
                                </div>
                            </div>
                        </Collapsible>
                    </div>

                    <div className='flex flex-row justify-center items-center h-full w-full pl-10 pr-10'>
                        <Collapsible trigger="Task 5: DEBREIF" className="">
                            <div className="flex flex-col justify-center items-center">
                                <div class="self-center">
                                    <span class="text-2xl text-zinc-200 font-sans inline-block align-middle">
                                        What I Learned
                                    </span>
                                </div>

                                <div class="pl-6 flex flex-row justify-center w-4/5 pt-6 mb-8">
                                    <span class="text-xl text-zinc-200 font-sans inline-block">
                                        <ul class="list-decimal text-left">
                                            <li class="">When assessing usability, it's important to look from the perspectives of new, frequent, and casual users.</li>
                                            <li class="pt-4">Think about what kinds of users will use the website when designing; in this case, I designed for prospective and current investors.
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

export default Responsive;
