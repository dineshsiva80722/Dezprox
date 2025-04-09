// "use client";
// import React from "react";
// import { Button } from "@/Components/ui/button";
// import { motion } from "framer-motion";
// import Image from "next/image";

// import { Code2, Cpu, Database, Globe, Layout, Shield } from 'lucide-react';

// const cards = [
//     {
//         icon: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744011280/adobe-illustrator_jzxmvi.svg",
//         title: "Global Network",
//         description: "Connect worldwide instantly"
//     },
//     {
//         icon: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744011280/AWS_udx4rw.svg",
//         title: "Security First",
//         description: "Enterprise-grade protection"
//     },
//     {
//         icon: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744011280/Adobe-after-effects_lc3ezv.svg",
//         title: "Clean Code",
//         description: "Modern development practices"
//     },
//     {
//         icon: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744011280/adobe-xd_lx9l1e.svg",
//         title: "Cloud Storage",
//         description: "Unlimited secure storage"
//     },
//     {
//         icon: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744011279/wordpress_g32vap.svg",
//         title: "Smart Layout",
//         description: "Responsive design system"
//     },
//     {
//         icon: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744011272/Shopify_vy5lqd.svg",
//         title: "AI Powered",
//         description: "Intelligent automation"
//     },
//     {
//         icon: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744011274/wix_pvwjb6.svg",
//         title: "Cloud Storage",
//         description: "Unlimited secure storage"
//     },
//     {
//         icon: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744011273/squarespace_jqrlsv.svg",
//         title: "Smart Layout",
//         description: "Responsive design system"
//     },
//     {
//         icon: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744011273/Sketch_wmthx5.svg",
//         title: "AI Powered",
//         description: "Intelligent automation"
//     },
//     {
//         icon: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744011273/webflow_x24kwq.svg",
//         title: "Cloud Storage",
//         description: "Unlimited secure storage"
//     },
//     {
//         icon: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744011273/webflow_x24kwq.svg",
//         title: "Smart Layout",
//         description: "Responsive design system"
//     },
//     {
//         icon: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744011272/Semrush_yoqult.svg",
//         title: "AI Powered",
//         description: "Intelligent automation"
//     },
//     {
//         icon: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744011272/react_native_btzdpy.svg",
//         title: "Cloud Storage",
//         description: "Unlimited secure storage"
//     },
//     {
//         icon: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744011270/mongodb_srjo3f.svg",
//         title: "Smart Layout",
//         description: "Responsive design system"
//     },
//     {
//         icon: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744011270/mailchimp-freddie_yltn4h.svg",
//         title: "AI Powered",
//         description: "Intelligent automation"
//     },
//     {
//         icon: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744011271/nodejs_zllbuz.svg",
//         title: "Cloud Storage",
//         description: "Unlimited secure storage"
//     },
//     {
//         icon: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744011270/javascript_flckrz.svg",
//         title: "Smart Layout",
//         description: "Responsive design system"
//     },
//     {
//         icon: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744011270/javascript_flckrz.svg",
//         title: "AI Powered",
//         description: "Intelligent automation"
//     },
//     {
//         icon: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744011270/magento_ddvdhh.svg",
//         title: "Cloud Storage",
//         description: "Unlimited secure storage"
//     },
//     {
//         icon: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744011270/kotlin_fyikfe.svg",
//         title: "Smart Layout",
//         description: "Responsive design system"
//     },
//     {
//         icon: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744011269/java_cp9mza.svg",
//         title: "AI Powered",
//         description: "Intelligent automation"
//     },
//     {
//         icon: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744011268/Jasper-ai_vnymcv.svg",
//         title: "Cloud Storage",
//         description: "Unlimited secure storage"
//     },
//     {
//         icon: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744011268/Jasper-ai_vnymcv.svg",
//         title: "Smart Layout",
//         description: "Responsive design system"
//     },
//     {
//         icon: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744011268/google-analytics_ov37nj.svg",
//         title: "AI Powered",
//         description: "Intelligent automation"
//     },
// ];

// const FavouriteTools = () => {
//     const rows = Array(10).fill(null);

//     return (
//         <section className="bg-gray-50 w-full min-h-screen">
//             <div className="w-10/12 h-full mx-auto flex justify-start items-center gap-5">
//                 <div className="w-1/2 min-h-[40rem] flex flex-col justify-center items-center">
//                     <div className="spcae-y-3">
//                         <h3 className="text-green-600 font-medium">Integrations</h3>
//                         <h2 className="text-5xl font-bold mt-4 mb-4">
//                             Powerful Tools for <br /> Digital Excellence
//                         </h2>
//                         <p className="text-gray-600 mb-8">
//                             Enhance productivity, streamline processes, and keep<br />
//                             everything connected without disrupting.
//                         </p>
//                         <Button className="bg-gradient-to-b from-gray-800 to-gray-900 hover:bg-slate-800 text-white rounded-full px-6 py-2">
//                             Explore Integrations
//                         </Button>
//                     </div>
//                 </div>
//                 <div className="w-1/2 min-h-[40rem] flex flex-col justify-center items-center ">
//                     <div className="flex flex-row gap-8 place-content-center relative w-full max-w-7xl h-[600px] overflow-hidden">
//                         <div className="flex gap-1 h-full">
//                             <div>
//                                 {[...Array(1)].map((_, colIndex) => (
//                                     <div key={colIndex} className="flex-1 overflow-hidden">
//                                         <motion.div
//                                             className="flex flex-col gap-4"
//                                             animate={{
//                                                 y: colIndex % 2 === 0 ? [0, '-50%'] : ['-50%', 0]
//                                             }}
//                                             transition={{
//                                                 duration: 20,
//                                                 repeat: Infinity,
//                                                 ease: "linear",
//                                                 repeatType: "loop"
//                                             }}
//                                         >
//                                             {/* First set of cards */}
//                                             <div className="flex flex-col gap-4">
//                                                 {rows.map((_, rowIndex) => {
//                                                     const card = cards[rowIndex % cards.length];
//                                                     return (
//                                                         <div
//                                                             key={`col-${colIndex}-row-${rowIndex}`}
//                                                             className="w-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-lg hover:shadow-white/5"
//                                                         >
//                                                             <div className="p-2 bg-gradient-to-br border-2 from-white/10 to-white/5 rounded-lg w-fit mb-2">
//                                                                 <Image src={card.icon} width={30} height={30} alt={card.title} />
//                                                             </div>
//                                                         </div>
//                                                     );
//                                                 })}
//                                             </div>
//                                         </motion.div>
//                                     </div>
//                                 ))}
//                             </div>
//                             <div>
//                                 {[...Array(1)].map((_, colIndex) => (
//                                     <div key={colIndex} className="flex-1 overflow-hidden">
//                                         <motion.div
//                                             className="flex flex-col gap-4"
//                                             animate={{
//                                                 y: colIndex % 2 === 0 ? [0, '100%'] : ['100%', 0]
//                                             }}
//                                             transition={{
//                                                 duration: 20,
//                                                 repeat: Infinity,
//                                                 ease: "linear",
//                                                 repeatType: "loop"
//                                             }}
//                                         >
//                                             {/* First set of cards */}
//                                             <div className="flex flex-col gap-4">
//                                                 {rows.map((_, rowIndex) => {
//                                                     const card = cards[rowIndex % cards.length];
//                                                     return (
//                                                         <div
//                                                             key={`col-${colIndex}-row-${rowIndex}`}
//                                                             className="w-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-lg hover:shadow-white/5"
//                                                         >
//                                                             <div className="p-2 bg-gradient-to-br border-2 from-white/10 to-white/5 rounded-lg w-fit mb-2">
//                                                                 <Image src={card.icon} width={30} height={30} alt={card.title} />
//                                                             </div>
//                                                         </div>
//                                                     );
//                                                 })}
//                                             </div>
//                                         </motion.div>
//                                     </div>
//                                 ))}
//                             </div>
//                             <div>
//                                 {[...Array(1)].map((_, colIndex) => (
//                                     <div key={colIndex} className="flex-1 overflow-hidden">
//                                         <motion.div
//                                             className="flex flex-col gap-4"
//                                             animate={{
//                                                 y: colIndex % 2 === 0 ? [0, '-50%'] : ['-50%', 0]
//                                             }}
//                                             transition={{
//                                                 duration: 20,
//                                                 repeat: Infinity,
//                                                 ease: "linear",
//                                                 repeatType: "loop"
//                                             }}
//                                         >
//                                             {/* First set of cards */}
//                                             <div className="flex flex-col gap-4">
//                                                 {rows.map((_, rowIndex) => {
//                                                     const card = cards[rowIndex % cards.length];
//                                                     return (
//                                                         <div
//                                                             key={`col-${colIndex}-row-${rowIndex}`}
//                                                             className="w-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-lg hover:shadow-white/5"
//                                                         >
//                                                             <div className="p-2 bg-gradient-to-br border-2 from-white/10 to-white/5 rounded-lg w-fit mb-2">
//                                                                 <Image src={card.icon} width={30} height={30} alt={card.title} />
//                                                             </div>
//                                                         </div>
//                                                     );
//                                                 })}
//                                             </div>
//                                         </motion.div>
//                                     </div>
//                                 ))}
//                             </div>
//                             <div>
//                                 {[...Array(1)].map((_, colIndex) => (
//                                     <div key={colIndex} className="flex-1 overflow-hidden">
//                                         <motion.div
//                                             className="flex flex-col gap-4"
//                                             animate={{
//                                                 y: colIndex % 2 === 0 ? [0, '100%'] : ['100%', 0]
//                                             }}
//                                             transition={{
//                                                 duration: 20,
//                                                 repeat: Infinity,
//                                                 ease: "linear",
//                                                 repeatType: "loop"
//                                             }}
//                                         >
//                                             <div className="flex flex-col gap-4">
//                                                 {rows.map((_, rowIndex) => {
//                                                     const card = cards[rowIndex % cards.length];
//                                                     return (
//                                                         <div
//                                                             key={`col-${colIndex}-row-${rowIndex}`}
//                                                             className="w-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-lg hover:shadow-white/5"
//                                                         >
//                                                             <div className="p-2 bg-gradient-to-br border-2 from-white/10 to-white/5 rounded-lg w-fit mb-2">
//                                                                 <Image src={card.icon} width={30} height={30} alt={card.title} />
//                                                             </div>
//                                                         </div>
//                                                     );
//                                                 })}
//                                             </div>
//                                         </motion.div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default FavouriteTools;


"use client";
import React from "react";
import { Button } from "@/Components/ui/button";
import Image from "next/image";
import Title from "@/Components/ui/title";
import { TextGenerateEffect } from "@/Components/ui/text-generate-effect";



const cards = [
    {
        icon: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744011280/adobe-illustrator_jzxmvi.svg",
        title: "Global Network",
        description: "Connect worldwide instantly"
    },
    {
        icon: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744011280/AWS_udx4rw.svg",
        title: "Security First",
        description: "Enterprise-grade protection"
    },
    {
        icon: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744011280/Adobe-after-effects_lc3ezv.svg",
        title: "Clean Code",
        description: "Modern development practices"
    },
    {
        icon: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744011280/adobe-xd_lx9l1e.svg",
        title: "Cloud Storage",
        description: "Unlimited secure storage"
    },
    {
        icon: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744011279/wordpress_g32vap.svg",
        title: "Smart Layout",
        description: "Responsive design system"
    },
    {
        icon: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744011272/Shopify_vy5lqd.svg",
        title: "AI Powered",
        description: "Intelligent automation"
    },
    {
        icon: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744011274/wix_pvwjb6.svg",
        title: "Cloud Storage",
        description: "Unlimited secure storage"
    },
    {
        icon: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744011273/squarespace_jqrlsv.svg",
        title: "Smart Layout",
        description: "Responsive design system"
    },
    {
        icon: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744011273/Sketch_wmthx5.svg",
        title: "AI Powered",
        description: "Intelligent automation"
    },
    {
        icon: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744011273/webflow_x24kwq.svg",
        title: "Cloud Storage",
        description: "Unlimited secure storage"
    },
    {
        icon: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744011273/webflow_x24kwq.svg",
        title: "Smart Layout",
        description: "Responsive design system"
    },
    {
        icon: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744011272/Semrush_yoqult.svg",
        title: "AI Powered",
        description: "Intelligent automation"
    },
    {
        icon: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744011272/react_native_btzdpy.svg",
        title: "Cloud Storage",
        description: "Unlimited secure storage"
    },
    {
        icon: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744011270/mongodb_srjo3f.svg",
        title: "Smart Layout",
        description: "Responsive design system"
    },
    {
        icon: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744011270/mailchimp-freddie_yltn4h.svg",
        title: "AI Powered",
        description: "Intelligent automation"
    },
    {
        icon: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744011271/nodejs_zllbuz.svg",
        title: "Cloud Storage",
        description: "Unlimited secure storage"
    },
    {
        icon: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744011270/javascript_flckrz.svg",
        title: "Smart Layout",
        description: "Responsive design system"
    },
    {
        icon: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744011270/javascript_flckrz.svg",
        title: "AI Powered",
        description: "Intelligent automation"
    },
    {
        icon: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744011270/magento_ddvdhh.svg",
        title: "Cloud Storage",
        description: "Unlimited secure storage"
    },
    {
        icon: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744011270/kotlin_fyikfe.svg",
        title: "Smart Layout",
        description: "Responsive design system"
    },
    {
        icon: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744011269/java_cp9mza.svg",
        title: "AI Powered",
        description: "Intelligent automation"
    },
    {
        icon: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744011268/Jasper-ai_vnymcv.svg",
        title: "Cloud Storage",
        description: "Unlimited secure storage"
    },
    {
        icon: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744011268/Jasper-ai_vnymcv.svg",
        title: "Smart Layout",
        description: "Responsive design system"
    },
    {
        icon: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744011268/google-analytics_ov37nj.svg",
        title: "AI Powered",
        description: "Intelligent automation"
    },
    {
        icon: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744011268/Hootsuite-icon_mw6xox.svg",
        title: "AI Powered",
        description: "Intelligent automation"
    },
    {
        icon: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744011268/html-5_lcmtsd.svg",
        title: "AI Powered",
        description: "Intelligent automation"
    },
    {
        icon: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744011268/grammarly_kqg1ft.svg",
        title: "AI Powered",
        description: "Intelligent automation"
    },
    {
        icon: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744011268/firebase_analytics_cvrbdh.svg",
        title: "AI Powered",
        description: "Intelligent automation"
    },
    {
        icon: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744011267/css3_jfcybg.svg",
        title: "AI Powered",
        description: "Intelligent automation"
    },
    {
        icon: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744011267/Canva_vgugvh.svg",
        title: "AI Powered",
        description: "Intelligent automation"
    },
    {
        icon: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744011267/Framer_yyh2ax.svg",
        title: "AI Powered",
        description: "Intelligent automation"
    },
    {
        icon: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744011267/Buffer_l7vw3g.svg",
        title: "AI Powered",
        description: "Intelligent automation"
    },
    {
        icon: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744011266/flutter_ayrefm.svg",
        title: "AI Powered",
        description: "Intelligent automation"
    },
    {
        icon: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744011266/bootstrap_e0xcw5.svg",
        title: "AI Powered",
        description: "Intelligent automation"
    },
];

const FavouriteTools = () => {
    const rows = Array(10).fill(null);

    return (
        <section className="bg-gray-50 w-full min-h-screen">
            <style jsx>{`
                @keyframes scrollDown {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(0); }
                }

                @keyframes scrollUp {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-100%); }
                }

                .scroll-down {
                    animation: scrollDown 25s linear infinite;
                }

                .scroll-up {
                    animation: scrollUp 25s linear infinite;
                }

                .hover-card {
                    transition: all 0.3s ease;
                }

                .hover-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
                }
            `}</style>
            <div className="w-10/12 h-full mx-auto flex justify-start items-center gap-5">
                <div className="w-1/2 min-h-[40rem] flex flex-col justify-center items-center">
                    <div className="space-y-3">
                        <Title text="Integrations" />
                        <TextGenerateEffect words="Powerful Tools for Digital Excellence" className="text-5xl font-bold w-[30rem] mt-4 mb-4" />
                        <p className="text-gray-600 mb-8">
                            Enhance productivity, streamline processes, and keep<br />
                            everything connected without disrupting.
                        </p>
                        <Button className="bg-gradient-to-b from-gray-800 to-gray-900 hover:bg-slate-800 text-white rounded-full px-6 py-2">
                            Explore Integrations
                        </Button>
                    </div>
                </div>
                <div className="w-1/2 min-h-[40rem] flex flex-col justify-end items-end">
                    <div className="relative min-w-96 max-w-7xl h-[600px] overflow-hidden">
                        <div className="absolute  flex gap-4">
                            {[0, 1, 2, 3].map((colIndex) => (
                                <div key={colIndex} className="flex-1 overflow-hidden">
                                    <div className={`flex flex-col gap-2 ${colIndex % 2 === 0 ? 'scroll-down' : 'scroll-up'}`}>
                                        {rows.map((_, rowIndex) => {
                                            const cardIndex = (rowIndex + colIndex * rows.length) % cards.length;
                                            const card = cards[cardIndex];
                                            return (
                                                <div
                                                    key={`col-${colIndex}-row-${rowIndex}`}
                                                    className="w-20  rounded-xl p-4 hover-card"
                                                >
                                                    <div className="p-2 border  border-gray-300  bg-white rounded-lg w-fit mb-2">
                                                        <Image
                                                            src={card.icon}
                                                            width={30}
                                                            height={30}
                                                            alt={card.title}
                                                            className="object-contain"
                                                        />
                                                    </div>
                                                </div>
                                            );
                                        })}
                                        {rows.map((_, rowIndex) => {
                                            const cardIndex = (rowIndex + colIndex * rows.length) % cards.length;
                                            const card = cards[cardIndex];
                                            return (
                                                <div
                                                    key={`col-${colIndex}-row-${rowIndex}-duplicate`}
                                                    className="w-20  rounded-xl p-4  hover-card"
                                                >
                                                    <div className="p-2 border border-gray-300 bg-white rounded-lg w-fit mb-2">
                                                        <Image
                                                            src={card.icon}
                                                            width={30}
                                                            height={30}
                                                            alt={card.title}
                                                            className="object-contain"
                                                        />
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FavouriteTools;