import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Loader from './Loader';

const buttonVariants = {
    // animate: {
    //     // x: -100,
    //     x: [0, -20, 20, 0],
    //     color: 'red',
    //     transition: { delay: 1, duration: 3 },
    // },
    // initial: {
    //     x: '-100vw',
    // },
    hover: {
        scale: 2,
        textShadow: '0px 0px 8px rgb(255,255,255)',
        boxShadow: '0px 0px 8px rgb(255,255,255)',
        transition: {
            yoyo: Infinity,
            duration: 0.3,
        },
    },
};

const containerVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: { delay: 1.5, duration: 1.5, when: 'beforeChildren' },
    },
    exit: {
        x: '-100vw',
        y: '100vh',
        transition: { ease: 'easeInOut' },
    },
};

const Home = () => {
    return (
        <motion.div
            className="home container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            // initial={{ opacity: 0 }}
            // animate={{ marginTop: 200, opacity: 0.2, rotateZ: 180 }}
            // animate={{ marginTop: 200, opacity: 1 }}
            // transition={{ delay: 1.5, duration: 1.5, when: 'beforeChildren' }}
        >
            <motion.h2 animate={{ fontSize: 50, color: 'red', x: 150, y: -50 }}>
                Welcome to Pizza Joint
            </motion.h2>
            <Link to="/base">
                <motion.button
                    variants={buttonVariants}
                    whileHover={'hover'}
                    animate="animate"
                    initial="initial"
                >
                    Create Your Pizza
                </motion.button>
            </Link>
            <Loader />
        </motion.div>
    );
};

export default Home;
