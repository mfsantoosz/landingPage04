import { motion } from "motion/react"
import { ArrowRight } from "lucide-react";

interface AnimatedLinkProps {
    className?: string;
}

const AnimatedLink = ({className}: AnimatedLinkProps) => {

    const MotionArrow = motion(ArrowRight)

    return(
         <>
        <motion.div
             className={`flex items-center gap-3 text-green-400 font-semibold cursor-pointer text-xl max-md:text-lg ${className}`}
             whileHover="hover"
             initial="initial"
           >
            <motion.a href="">Start a free trial</motion.a>
            <MotionArrow
              variants={{
                initial: { x: 0 },
                hover: { x: 14 }
              }}
              transition={{type: "spring", stiffness: 500, damping: 20}} 
            />  
              
           </motion.div>
      </>
    )
}

export default AnimatedLink;