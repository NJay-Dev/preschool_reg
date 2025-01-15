'use client'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import RequirementsAndFees from './components/requirements-and-fees'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <motion.div 
      className="space-y-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section>
        <h2 className="text-3xl font-bold mb-4 text-gray-300">Welcome to Stars Preschool</h2>
        <p className="text-lg text-gray-400">We are now accepting applications for 2025. Our preschool caters to children from 18 months to 5 years old.</p>
      </section>

      <RequirementsAndFees />

      <section className="text-center">
        <h3 className="text-2xl font-semibold mb-4 text-gray-300">Ready to Apply?</h3>
        <Link href="/register">
          <Button size="lg" className="bg-gray-600 hover:bg-gray-500 text-gray-200">Register Now</Button>
        </Link>
      </section>

      <section className="text-center mt-4">
        <h3 className="text-2xl font-semibold mb-4 text-gray-300">Indemnity Form</h3>
        <p className="mb-2 text-gray-400">Please fill out our indemnity form as part of the application process.</p>
        <Link href="/indemnity">
          <Button size="lg" className="bg-gray-600 hover:bg-gray-500 text-gray-200">Fill Indemnity Form</Button>
        </Link>
      </section>
    </motion.div>
  )
}

