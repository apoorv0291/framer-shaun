import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const LoaderVariants = {
    animationOne: {
        x: [-100, 100, 0],
        y: [100, -100, 0],
        transition: {
            x: {
                yoyo: Infinity,
                duration: 2,
            },
            y: {
                yoyo: Infinity,
                duration: 2,
                ease: 'easeOut',
            },
        },
    },
};

export default function Loader() {
    return (
        <div>
            <motion.div
                className="loader"
                variants={LoaderVariants}
                animate="animationOne"
            ></motion.div>
        </div>
    );
}
