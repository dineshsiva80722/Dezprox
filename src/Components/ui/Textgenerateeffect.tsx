// "use client";
// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";

// interface TextGenerateEffectProps {
//   words: string;
//   as?: keyof JSX.IntrinsicElements;
//   className?: string;
//   duration?: number;
// }

// export const TextGenerateEffect: React.FC<TextGenerateEffectProps> = ({
//   words,
//   as: Tag = "div",
//   className = "",
//   duration = 0.5,
// }) => {
//   const wordsArray = words.split(" ");
//   const ref = useRef<HTMLElement>(null);
//   const isInView = useInView(ref, { triggerOnce: true, margin: "-50px" });

//   return (
//     <Tag ref={ref} className={`font-bold ${className}`}>
//       {wordsArray.map((word, idx) => (
//         <motion.span
//           key={word + idx}
//           initial={{ opacity: 0, filter: "blur(10px)" }}
//           animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
//           transition={{ duration, delay: idx * 0.1 }}
//           className="dark:text-white text-black"
//         >
//           {word}{" "}
//         </motion.span>
//       ))}
//     </Tag>
//   );
// };


"use client";
import { JSX } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TextGenerateEffectProps {
  words: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  duration?: number;
}

export const TextGenerateEffect: React.FC<TextGenerateEffectProps> = ({
  words,
  as: Tag = "div",
  className = "",
  duration = 0.5,
}) => {
  const wordsArray = words.split(" ");
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { triggerOnce: true, margin: "-50px" });

  return (
    <Tag ref={ref} className={`font-bold ${className}`}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
          transition={{ duration, delay: idx * 0.1 }}
          className="dark:text-white text-black"
        >
          {word}{" "}
        </motion.span>
      ))}
    </Tag>
  );
};