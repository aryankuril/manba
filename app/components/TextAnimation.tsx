"use client";

import { motion } from "framer-motion";
import { ReactElement, useMemo } from "react";

interface TextAnimationProps {
  children: ReactElement<{ children: string }>;
}

const TextAnimation = ({ children }: TextAnimationProps) => {
  const text = children.props.children;

  const words = useMemo(() => text.split(" "), [text]);

  // ❗ SAME animation configs (UNCHANGED)
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const Tag = children.type;

  return (
<motion.div
  variants={container}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.6 }}
>


      <Tag {...children.props}>
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={child}
            className="inline-block mr-2"
          >
            {word}
          </motion.span>
        ))}
      </Tag>
    </motion.div>
  );
};

export default TextAnimation;
