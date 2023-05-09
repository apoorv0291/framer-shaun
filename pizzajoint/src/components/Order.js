import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: {
        x: '100vw',
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            // delay: 1,
            duration: 1,
            mass: 0.9,
            damping: 8,
            stiffness: 0.9,
            when: 'beforeChildren',
            staggerChildren: 2,
        },
    },
    exit: {
        x: '-100vw',
        y: '100vh',
        transition: { ease: 'easeInOut' },
    },
};

const childVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        color: 'red',
    },
};

const Order = ({ pizza, setModal }) => {
    useEffect(() => {
        setTimeout(() => {
            setModal(true);
        }, 4000);
    }, []);
    return (
        <motion.div
            className="container order"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <h2>Thank you for your order :)</h2>
            <motion.p variants={childVariants}>
                You ordered a {pizza.base} pizza with:
            </motion.p>
            <motion.div variants={childVariants}>
                {pizza.toppings.map((topping) => (
                    <div key={topping}>{topping}</div>
                ))}
            </motion.div>
            <motion.div variants={childVariants}>Apoorv</motion.div>
            <motion.div variants={childVariants}>Apoorv</motion.div>
            <motion.div variants={childVariants}>Apoorv</motion.div>
        </motion.div>
    );
};

export default Order;
