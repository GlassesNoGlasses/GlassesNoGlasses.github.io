'use client'

import { useEffect, useState } from 'react';
import { MeteorBackground } from "./components/metors/MeteorBackground";
import { Project } from "./components/project-display/Project";
import { FaceRecognition, FingerPainting, SpamClassification, Biscord,
   SnakeAI, Grantors, MangaUpdate, WebpageAnalytics, FortuneCookie, 
   MangaRecommendation,
   JustForFun} from "./constants/projects";
import { ItemsBar } from "./components/items-bar/ItemsBar";
import { BagIcon, BugIcon, CampfireIcon, MeteorsIcon } from "./constants/icons";
import { Messages } from "./constants/messages";
import { Item } from "./components/interfaces/Item";
import { TimelineMilestone } from "./components/timeline/TimelineMilestone";
import { Modal } from "./components/modal/Modal";
import { Inventory } from "./components/inventory/Inventory";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { Bug, Resume } from "./constants/inventoryItems";
import { InventoryItem } from "./components/interfaces/InventoryItem";

export default function Home() {

  const svgWidth: number = 100;
  const svgHeight: number = 100;

  const [initials, setInitials] = useState<string>("N.W.");
  const [titleText, setTitleText] = useState<string>("Professional Screen Addict");
  const [meteors, setMeteors] = useState<Item>(MeteorsIcon);
  const [campfire, setCampfire] = useState<Item>(CampfireIcon);
  const [bag, setBag] = useState<Item>(BagIcon);
  const [inventoryItems, setInventoryItems] = useState<InventoryItem[]>([Resume, Bug]);
  const [numBugs, setNumBugs] = useState<number>(Bug.quantity);

  useEffect(() => {
    AOS.init();
  }, [])

  const handleBagCloseCallback = (items: InventoryItem[]) => {
    setInventoryItems(items);
    setBag(prev => ({...prev, isActive: !prev.isActive, animation: ""}));
  }

  const randomTitleText = (): string => {
    const rndInt = Math.floor(Math.random() * Object.keys(Messages).length - 1) + 1;
    return Messages[rndInt];
  }

  useEffect(() => {
    console.log(numBugs)
    if (numBugs === 2) {
      setBag(prev => ({...prev, isActive: true, animation: "animate-spin"}));
      setTitleText("🐞.🐞");
    } else if (numBugs >= 4) {
      setInitials(randomTitleText());
      setTitleText("🐞🐞🐞🐞");
    }
  }, [numBugs])

  return (
    <main className="flex min-h-screen w-screen flex-col overflow-y-auto">
      {/* Inventory Modal */}
      <Modal showModal={bag.isActive || numBugs >= 17}
      closeModal={() => setBag(prev => ({...prev, isActive: false}))}
      openModal={() => setBag(prev => ({...prev, isActive: true}))}>
        <Inventory inventoryItems={inventoryItems} isActive={bag.isActive}
        callback={(items) => handleBagCloseCallback(items)}
        bugCallback={(numBugs) => setNumBugs(numBugs)}
        bugs={numBugs}/>
      </Modal>

      {/* Top View & Introduction */}
      {numBugs < 3 && <MeteorBackground numMeteors={13} isOn={meteors.isActive}/>}
      <div className={`flex flex-col h-screen w-screen bg-lofi bg-cover align-middle justify-center 
        ${meteors.isActive && !campfire.isActive ? "animate-lightFadeOut" : "animate-lightFadeIn"}
        ${campfire.isActive && "animate-lofiPulse"}`}
        >
          <ItemsBar
          items={numBugs < 3 ? [
            {...meteors, callback: () => setMeteors(prev => ({...prev, isActive: !prev.isActive}))},
            {...campfire, callback: () => setCampfire(prev => ({...prev, isActive: !prev.isActive}))},
            {...bag, callback: () => setBag(prev => ({...prev, isActive: !prev.isActive, animation: numBugs >=2 ? "animate-spin" : ""}))},
          ] 
          : [BugIcon, BugIcon, {...bag, callback: () => setBag(prev => ({...prev, isActive: !prev.isActive, animation: numBugs >=2 ? "animate-spin" : ""}))}]}
            />
        <div className={`flex flex-col h-full w-full align-middle gap-4 justify-center
          ${(meteors.isActive || campfire.isActive) && "animate-lofiPulse"}`}>
          <h1 className="text-9xl text-center font-bold font-sans text-yellow-100" id="initials">{initials}</h1>
          <h2 className="text-4xl text-center font-bold font-sans text-zinc-200" id="title">{titleText}</h2>
          <div className="flex w-full h-fit align-middle justify-center pt-8">
            <div className="flex w-1/2 justify-evenly align-middle" id="socials">
              <a href="https://github.com/GlassesNoGlasses" target="_blank">
                <svg width={svgWidth} height={svgHeight} xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#fff"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/neil-wang-y007/" target="_blank">
                <svg width={svgWidth} height={svgHeight} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    
      {/* Projects */}
      <div className="flex flex-col h-fit w-full bg-gradient-to-b from-[#0e1824] from-35% via-indigo-600/10 via-70% to-[#132438]">
        <div className="flex flex-col h-fit w-full mt-40 gap-20">
          <h1 id="projects-title"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-easing="linear"
          className="flex flex-row px-4 text-7xl text-center font-bold font-sans text-slate-100 overflow-hidden 
          before:mr-8 before:flex-1 before:border-b-2 before:border-solid before:m-auto 
          after:ml-8 after:flex-1 after:border-b-2 after:border-solid after:m-auto">Projects
          </h1>

          <div id="projects"
          className="flex flex-col h-fit w-full px-8 gap-40">
            <div id="machine-learning"
            className="flex flex-col h-fit w-full align-middle gap-8">
              <h2 className="flex text-center text-4xl font-bold font-serif text-slate-200 overflow-hidden 
              after:ml-8 after:flex-1 after:border-b-2 after:border-solid after:m-auto"
              data-aos="fade-left"
              data-aoes-duation="1700"
              data-aos-easing="ease-in-sine">
              AI & Machine Learning
              </h2>
              {/* Timeline */}
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                {/* <!-- Project #1 --> */}
                <TimelineMilestone id={MangaRecommendation.title} compelete={false} backgroundStyle="">
                  <Project {...MangaRecommendation}/>
                </TimelineMilestone>

                {/* <!-- Project #2 --> */}
                <TimelineMilestone id={FaceRecognition.title} compelete={true} backgroundStyle="">
                  <Project {...FaceRecognition} leftAnimate={false}/>
                </TimelineMilestone>
                  
                  {/* <!-- Project #3 --> */}
                <TimelineMilestone id={SpamClassification.title} compelete={true} backgroundStyle="">
                  <Project {...SpamClassification}/>
                </TimelineMilestone>
                
                {/* <!-- Project #4 --> */}
                <TimelineMilestone id={SnakeAI.title} compelete={true} backgroundStyle="">
                  <Project {...SnakeAI} leftAnimate={false}/>
                </TimelineMilestone>
                
                {/* <!-- Project #5 --> */}
                <TimelineMilestone id={FingerPainting.title} compelete={true} backgroundStyle="">
                  <Project {...FingerPainting}/>
                </TimelineMilestone>
              </div>
            </div>

            <div id="web-development"
            className="flex flex-col h-fit w-full align-middle gap-8">
              <h2 className="flex text-center text-4xl font-bold font-serif text-slate-200 overflow-hidden 
              before:mr-8 before:flex-1 before:border-b-2 before:border-solid before:m-auto" 
              data-aos="fade-right"
              data-aoes-duation="1700"
              data-aos-easing="ease-in-sine">
              Web Development
              </h2>
              {/* Timeline */}
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                {/* <!-- Project #1 --> */}
                <TimelineMilestone id={Biscord.title} compelete={false} backgroundStyle="">
                  <Project {...Biscord}/>
                </TimelineMilestone>

                {/* <!-- Project #2 --> */}
                <TimelineMilestone id={JustForFun.title} compelete={true} backgroundStyle="">
                  <Project {...JustForFun}/>
                </TimelineMilestone>

                {/* <!-- Project #3 --> */}
                <TimelineMilestone id={Grantors.title} compelete={true} backgroundStyle="">
                  <Project {...Grantors} leftAnimate={false}/>
                </TimelineMilestone>
                  
                  {/* <!-- Project #4 --> */}
                <TimelineMilestone id={FortuneCookie.title} compelete={true} backgroundStyle="">
                  <Project {...FortuneCookie}/>
                </TimelineMilestone>
                
                {/* <!-- Project #5 --> */}
                <TimelineMilestone id={MangaUpdate.title} compelete={true} backgroundStyle="">
                  <Project {...MangaUpdate} leftAnimate={false}/>
                </TimelineMilestone>
                
                {/* <!-- Project #6 --> */}
                <TimelineMilestone id={WebpageAnalytics.title} compelete={true} backgroundStyle="">
                  <Project {...WebpageAnalytics}/>
                </TimelineMilestone>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
