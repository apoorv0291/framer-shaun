import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const backdropVariant = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
};

const modalVariant = {
    hidden: {
        y: '-100vh',
        opacity: 0,
    },
    visible: {
        y: 200,
        opacity: 1,
        transtion: { delay: 0.5, duration: 3 },
    },
};

export default function Modal({ showModal, setModal }) {
    return (
        <AnimatePresence exitBeforeEnter>
            {showModal && (
                <motion.div
                    className="backdrop"
                    variants={backdropVariant}
                    animate="visible"
                    initial="hidden"
                    exit="hidden"
                >
                    <motion.div
                        className="modal"
                        variants={modalVariant}
                        // initial="hidden"
                    >
                        <p>Want to amke another pizza</p>
                        <Link to="/">
                            <button onClick={() => setModal(false)}>
                                Start again
                            </button>
                        </Link>
                        <div> This is modal</div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

// export default Modal
