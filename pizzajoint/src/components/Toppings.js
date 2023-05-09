import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

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

const Toppings = ({ addTopping, pizza }) => {
    let toppings = [
        'mushrooms',
        'peppers',
        'onions',
        'olives',
        'extra cheese',
        'tomatoes',
    ];
    const [remove, setRemove] = useState(false);
    setTimeout(() => {
        setRemove(true);
    }, 4000);
    return (
        <motion.div
            className="toppings container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <h3>Step 2: Choose Toppings</h3>
            <AnimatePresence>
                {!remove && (
                    <motion.h2 exit={{ y: -1000, x: 1000, duration: 13 }}>
                        This is gonna be removed
                    </motion.h2>
                )}
            </AnimatePresence>
            <ul>
                {toppings.map((topping) => {
                    let spanClass = pizza.toppings.includes(topping)
                        ? 'active'
                        : '';
                    return (
                        <motion.li
                            whileHover={{
                                scale: 1.3,
                                color: 'yellow',
                                originX: 0,
                            }}
                            transition={{ type: 'spring', stiffness: 500 }}
                            key={topping}
                            onClick={() => addTopping(topping)}
                        >
                            <span className={spanClass}>{topping}</span>
                        </motion.li>
                    );
                })}
            </ul>

            <Link to="/order">
                <motion.button variants={buttonVariants} whileHover={'hover'}>
                    Order
                </motion.button>
            </Link>
        </motion.div>
    );
};

export default Toppings;
