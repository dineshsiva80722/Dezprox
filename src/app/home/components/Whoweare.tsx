"use client";
import React, { useState } from "react";
import { TextGenerateEffect } from "@/Components/ui/text-generate-effect";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarIcon as CalendarIconType } from 'lucide-react';
import Title from "@/Components/ui/title";



const featureData = [
  {
    title: "Meaningful calendar",
    heading: "Stay organized and on track",
    description: "Effortlessly manage your time and tasks with our intuitive scheduling calendar. Create, modify, and share events with ease.",
    date: { month: "NOV", day: "22" },
    eventTitle: "Meeting with the team",
    eventTime: "6:00 PM - 7:00 PM",
    eventStatus: "Live event",
    meetingNotes: "Marketing materials are finalized and will be shared with the team for feedback by Friday.",
  },
  {
    title: "Task Management",
    heading: "Track your progress",
    description: "Stay on top of your to-do list with an easy-to-use task manager. Set deadlines, prioritize, and get things done efficiently.",
    date: { month: "DEC", day: "10" },
    eventTitle: "Product Launch Planning",
    eventTime: "3:00 PM - 4:00 PM",
    eventStatus: "Task Due",
    meetingNotes: "Finalize the launch checklist and ensure all assets are ready before the announcement.",
  },
  {
    title: "Seamless Meetings",
    heading: "Connect with your team",
    description: "Schedule and join meetings effortlessly. Collaborate with your team using integrated video and audio conferencing tools.",
    date: { month: "JAN", day: "05" },
    eventTitle: "Sprint Review Meeting",
    eventTime: "1:00 PM - 2:30 PM",
    eventStatus: "Ongoing Meeting",
    meetingNotes: "Discuss the sprint progress and address any blockers before the next iteration begins.",
  },
  {
    title: "Reminders & Alerts",
    heading: "Never miss a deadline",
    description: "Set reminders for important deadlines, birthdays, and events. Get notified in advance so you stay ahead of your schedule.",
    date: { month: "FEB", day: "14" },
    eventTitle: "Client Follow-up Call",
    eventTime: "10:00 AM - 10:30 AM",
    eventStatus: "Upcoming Reminder",
    meetingNotes: "Follow up with the client regarding the proposal and address any additional queries.",
  },
  {
    title: "Task Management",
    heading: "Track your progress",
    description: "Stay on top of your to-do list with an easy-to-use task manager. Set deadlines, prioritize, and get things done efficiently.",
    date: { month: "DEC", day: "10" },
    eventTitle: "Product Launch Planning",
    eventTime: "3:00 PM - 4:00 PM",
    eventStatus: "Task Due",
    meetingNotes: "Finalize the launch checklist and ensure all assets are ready before the announcement.",
  },
  {
    title: "Meaningful calendar",
    heading: "Stay organized and on track",
    description: "Effortlessly manage your time and tasks with our intuitive scheduling calendar. Create, modify, and share events with ease.",
    date: { month: "NOV", day: "22" },
    eventTitle: "Meeting with the team",
    eventTime: "6:00 PM - 7:00 PM",
    eventStatus: "Live event",
    meetingNotes: "Marketing materials are finalized and will be shared with the team for feedback by Friday.",
  }
];
const Whoweare: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  // Icon items 
  const iconItems = [
    "Innovative",
    "Authentic",
    "Disruptive",
    "Visionary",
    "Strategic",
    "Fearless"
  ];

  // Calendar icon component inline
  // const CalendarIcon = () => (
  //   <svg
  //     xmlns="http://www.w3.org/2000/svg"
  //     width="20"
  //     height="20"
  //     viewBox="0 0 24 24"
  //     strokeWidth="2"
  //     stroke="currentColor"
  //     fill="none"
  //     strokeLinecap="round"
  //     strokeLinejoin="round"
  //   >
  //     <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  //     <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
  //     <path d="M16 3v4" />
  //     <path d="M8 3v4" />
  //     <path d="M4 11h16" />
  //     <path d="M11 15h1" />
  //     <path d="M12 15v3" />
  //   </svg>
  // );

  // Arrow right icon component inline


  const ArrowRightIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 12l14 0" />
      <path d="M13 18l6 -6" />
      <path d="M13 6l6 6" />
    </svg>
  );

  // Video call icon
  const VideoCallIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z" />
      <path d="M3 6m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
    </svg>
  );

  return (
    <main className="bg-white min-h-screen font-['Inter',sans-serif]">
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <div className="max-w-[1200px] mx-auto px-5 py-[60px] space-y-4">
        {/* Header */}
        <header className="text-center space-y-4">
          <Title text="Who we are" />
          <TextGenerateEffect words="Driven to Conquer Challenges" as="h1" className="text-[42px] font-semibold text-black mb-4 mt-2" />
          <div className="text-gray-500 text-lg py-2">
            We tackle challenges head on, delivering innovative and impactful digital solutions.
          </div>
        </header>

        <div className="flex flex-wrap items-center justify-center border border-gray-300 bg-gray-100 md:justify-between w-full max-w-[1240px] mx-auto px-2 py-2 md:rounded-full rounded-lg ">
          {iconItems.map((text, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`flex items-center gap-3 px-10 py-2 rounded-full cursor-pointer transition-all ${activeIndex === index ? "bg-[#f6fff7] text-[#3fa740] border border-gray-300" : "bg-transparent"
                }`}
            >
              <div className="px-1 rounded-full flex items-center justify-center">
                <CalendarIconType
                  size={16}
                  className="text-black"
                  aria-label="Calendar icon"
                />
              </div>
              <div className={`${activeIndex === index ? "text-[#3fa740]" : "text-black"} text-sm font-medium`}>{text}</div>
            </div>
          ))}
        </div>

        <section className="flex flex-col md:flex-row  place-content-center justify-center md:mt-10  items-center">
          {/* Feature Content */}
          <div className="w-1/2">

            <AnimatePresence mode="wait">
              {featureData[activeIndex] && (
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="flex-1 w-[30rem] place-self-end  pt-5"
                >
                  <div className="text-[#3fa740] text-2xl font-semibold mb-3">
                    {featureData[activeIndex].title}
                  </div>
                  <h2 className="text-[32px] font-semibold text-gray-900 mb-4 mt-0">
                    {featureData[activeIndex].heading}
                  </h2>
                  <div className="text-gray-500 mb-6 leading-6">
                    {featureData[activeIndex].description}
                  </div>
                  <a
                    href={`https://wa.me/9342977856?text=Hi%20Team%2C%20I%20would%20like%20to%20discuss%20about%20${featureData[activeIndex].title}%20meeting.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center w-40 gap-2 text-gray-900 font-medium cursor-pointer bg-transparent border rounded-full px-4 py-2.5 shadow-md -ml-4 hover:bg-gray-50"
                  >
                    <span>Know More</span>
                    <ArrowRightIcon />
                  </a>
                </motion.div>
              )}
          </AnimatePresence>

      </div>

      {/* Calendar Card */}
      <div className="w-1/2 flex justify-center items-center">
        <AnimatePresence mode="wait">
          {featureData[activeIndex] && (
            <motion.div
              key={`image-${activeIndex}`}
              initial={{ opacity: 0, x: -50, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: 50, y: -50 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="shadow-md w-[400px]  max-w-full bg-white p-[26px] mx-auto md:mx-0 rounded-xl border border-gray-100"
            >
              <div className="flex gap-4 mb-6">
                <div className="flex flex-col items-center mt-1">
                  <div className="text-red-500 text-sm font-medium">
                    {featureData[activeIndex].date.month}
                  </div>
                  <div className="text-2xl font-semibold text-gray-900">
                    {featureData[activeIndex].date.day}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 mb-1">
                    {featureData[activeIndex].eventTitle}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {featureData[activeIndex].eventTime}
                  </div>
                </div>
                <div className="flex flex-col justify-between items-end h-[50px]">
                  <div className="flex items-center gap-2 text-gray-900 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>{featureData[activeIndex].eventStatus}</span>
                  </div>
                  <div className="text-gray-900 text-xs bg-gray-100 px-[10px] py-1 rounded-xl font-medium flex items-center gap-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Going
                  </div>
                </div>
              </div>
              <div className="pt-5 border-t border-gray-200">
                <div className="font-semibold text-gray-900 mb-2">Meeting notes</div>
                <div className="text-gray-500 text-sm leading-6 mb-5">
                  {featureData[activeIndex].meetingNotes}
                </div>
                <a
                  href="https://meet.google.com/snd-wzox-afh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-blue-500 bg-gray-100 py-3 rounded-lg border-none font-medium flex items-center justify-center gap-2.5 hover:bg-gray-200 transition-colors"
                >
                  <VideoCallIcon />
                  Join the call
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
      </div >
    </main >
  );
};

export default Whoweare;
