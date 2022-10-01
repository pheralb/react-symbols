import { motion } from "framer-motion";
import type { FC, ReactNode } from "react";

type ShowProps = {
  children: ReactNode;
  delay?: number;
};

const Show: FC<ShowProps> = ({ children, delay }) => (
  <motion.div
    initial={{ y: -4, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{
      duration: 0.4,
      delay: delay,
    }}
  >
    {children}
  </motion.div>
);

export default Show;
