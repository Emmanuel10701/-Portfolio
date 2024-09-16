// pages/500.js
import Link from 'next/link';
import { motion } from 'framer-motion';

const errorVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const InternalServerError = () => {
  return (
    <motion.div
      className="h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800"
      variants={errorVariants}
      initial="hidden"
      animate="visible"
    >
      <h1 className="text-6xl font-bold text-red-600">500</h1>
      <h2 className="text-2xl font-semibold mt-4">Internal Server Error</h2>
      <p className="mt-2 text-lg text-gray-600">Something went wrong on our end. Please try again later.</p>
      <Link href="/">
        <a className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Go Back to Home</a>
      </Link>
    </motion.div>
  );
};

export default InternalServerError;
