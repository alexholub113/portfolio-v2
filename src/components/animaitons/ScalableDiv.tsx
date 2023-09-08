import { motion, Target } from 'framer-motion';
import { PropsWithChildren } from 'react';

type ScalableDivProps = {
    className?: string;
    initial?: Target;
    animate?: Target;
} & PropsWithChildren;

const ScalableDiv = ({ children, initial, animate, className = '' }: ScalableDivProps) => {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, scale: 0, ...initial }}
            animate={{ opacity: 1, scale: 1, ...animate }}
            transition={{
                type: "tween",
                duration: 0.125,
            }}>
            {children}
        </motion.div>
    );
};

export default ScalableDiv;
