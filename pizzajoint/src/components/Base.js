import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: {
        x: '100vw',
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: { type: 'spring', delay: 1, duration: 3 },
    },
    exit: {
        x: '-100vw',
        y: '100vh',
        transition: { ease: 'easeInOut' },
    },
};

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

const nextVariants = {
    hidden: {
        x: '-100vw',
    },
    visible: {
        x: 0,
        transition: { type: 'spring', delay: 1, duration: 3, stiffness: 500 },
    },
};

const Base = ({ addBase, pizza }) => {
    const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

    return (
        <motion.div
            className="base container"
            variants={containerVariants}
            initial={'hidden'}
            animate={'visible'}
            exit="exit"
            // transition={{ type: 'spring', delay: 1, duration: 2 }}
        >
            <h3>Step 1: Choose Your Base</h3>
            <ul>
                {bases.map((base) => {
                    let spanClass = pizza.base === base ? 'active' : '';
                    return (
                        <motion.li
                            whileHover={{
                                scale: 1.3,
                                color: 'yellow',
                                originX: 0,
                            }}
                            transition={{ type: 'spring', stiffness: 500 }}
                            key={base}
                            onClick={() => addBase(base)}
                        >
                            <span className={spanClass}>{base}</span>
                        </motion.li>
                    );
                })}
            </ul>

            {pizza.base && (
                <motion.div
                    className="next"
                    variants={nextVariants}
                    initial="hidden"
                    animate="visible"
                    // transition={{ type: 'spring', stiffness: 500 }}
                >
                    <Link to="/toppings">
                        <motion.button
                            variants={buttonVariants}
                            whileHover={'hover'}
                        >
                            Next
                        </motion.button>
                    </Link>
                </motion.div>
            )}
        </motion.div>
    );
};

export default Base;
