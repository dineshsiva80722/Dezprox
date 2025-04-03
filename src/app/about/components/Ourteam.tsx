import React from 'react';
import Image from 'next/image';

interface TeamMemberProps {
    name: string;
    title: string;
    bgColor: string;
}

const TeamMember = ({ name, title, bgColor }: TeamMemberProps) => {
    return (
        <div className={`rounded-3xl p-6 ${bgColor} flex flex-col items-center`}>
            <div className="rounded-full w-24 h-24 mb-6 flex items-center justify-center overflow-hidden">
                <Image
                    src={"/placeholder-image.png"}
                    alt={name}
                    width={96}
                    height={96}
                    className="rounded-full"
                />
            </div>
            <h3 className="text-2xl font-bold mb-1">{name}</h3>
            <p className="text-gray-600 mb-4">{title}</p>
            <div className="flex space-x-4">
                <a href="#" className="hover:opacity-80">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                </a>
                <a href="#" className="hover:opacity-80">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                </a>
            </div>
        </div>
    );
};

const Ourteam = () => {
    const teamMembers = [
        { name: 'Lilly Woods', title: 'CEO & Founder', bgColor: 'bg-[#FFF5F0]', image: '' },
        { name: 'John Carter', title: 'CTO & Co-founder', bgColor: 'bg-[#F5F2FF]', image: '' },
        { name: 'Sophie Moore', title: 'Senior Designer', bgColor: 'bg-[#FFFCF0]', image: '' },
        { name: 'Matt Cannon', title: 'VP of Marketing', bgColor: 'bg-[#FFF5F0]', image: '' },
        { name: 'Kathie Corl', title: 'Product Designer', bgColor: 'bg-[#F5F2FF]', image: '' },
        { name: 'Patrick Meyer', title: 'UI/UX Designer', bgColor: 'bg-[#FFFCF0]', image: '' },
        { name: 'Sandy Houston', title: 'Front-end Developer', bgColor: 'bg-[#FFF5F0]', image: '' },
        { name: 'Andy Smith', title: 'Brand Designer', bgColor: 'bg-[#F5F2FF]', image: '' }
    ];

    return (
        <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <div className="inline-flex items-center px-4 py-2 rounded-lg bg-yellow-100 text-yellow-600 font-medium shadow-md hover:bg-yellow-200 transition-all mb-6">
                    <span className="text-white mr-2 bg-yellow-300 p-2 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                    </span>
                    <span className='font-semibold'>Our team</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Meet the amazing team
                    <br />
                    behind our agency
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-6">
                {teamMembers.map((member, index) => (
                    <TeamMember
                        key={index}
                        name={member.name}
                        title={member.title}
                        bgColor={member.bgColor}
                    />
                ))}
            </div>
        </div>
    );
};

export default Ourteam;
