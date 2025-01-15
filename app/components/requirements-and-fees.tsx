'use client'

import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100
    }
  }
}

export default function RequirementsAndFees() {
  return (
    <motion.div 
      className="space-y-12 p-6 px-12 bg-gray-800 rounded-lg shadow-lg"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.section variants={itemVariants}>
        <h3 className="text-4xl font-bold mb-4 text-gray-300 text-center">Application Requirements</h3>
        <ul className="list-none space-y-4 text-gray-400 text-xl pl-8">
          {[
            "THREE I.D COPIES (BOTH PARENTS)",
            "THREE BIRTH CERTIFICATE COPIES",
            "THREE ROAD TO HEALTH CARD COPIES",
            "COMPLETED ADMISSION FORM",
            "COMPLETED INDEMNITY FORM",
            "PROOF OF INCOME/AFFIDAVIT"
          ].map((item, index) => (
            <motion.li 
              key={index}
              className="flex items-center space-x-2 transition-colors duration-300 hover:text-gray-200"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-3xl">•</span>
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </motion.section>

      <motion.section variants={itemVariants}>
        <h3 className="text-4xl font-bold mb-4 text-gray-300 text-center">Fees</h3>
        <ul className="list-none space-y-4 text-gray-400 text-xl pl-8">
          {[
            "ONCE OFF REGISTRATION: R150",
            "MONTHLY FEE (18 MONTHS TO 5 YEARS): R250",
            "NAPPIES MONTHLY FEE: R300",
            "GRADUATION FEE (ONCE OFF FULL PACKAGE): R1000",
            "SCHOOL T-SHIRT: R150",
            "SCHOOL TRACKSUIT: R500"
          ].map((item, index) => (
            <motion.li 
              key={index}
              className="flex items-center space-x-2 transition-colors duration-300 hover:text-gray-200"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-3xl">•</span>
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
        <motion.p 
          className="mt-4 font-bold text-2xl text-gray-300 text-center"
          whileHover={{ scale: 1.05 }}
        >
          FEE PAYMENTS DUE ON THE 1ST TO 7TH OF EACH MONTH
        </motion.p>
      </motion.section>

      <motion.section variants={itemVariants}>
        <h3 className="text-4xl font-bold mb-4 text-gray-300 text-center">Additional Requirements</h3>
        <ul className="list-none space-y-4 text-gray-400 text-xl pl-8">
          {[
            "TWO FILES",
            "10 TWINSAVER TOILET PAPERS"
          ].map((item, index) => (
            <motion.li 
              key={index}
              className="flex items-center space-x-2 transition-colors duration-300 hover:text-gray-200"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-3xl">•</span>
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
        <motion.p 
          className="mt-4 italic text-2xl text-gray-400 text-center"
          whileHover={{ scale: 1.05 }}
        >
          N.B. THERE ARE SCHOOL TRIPS PER QUARTER
        </motion.p>
      </motion.section>
    </motion.div>
  )
}

