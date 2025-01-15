'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { jsPDF } from 'jspdf'

export default function Indemnity() {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    date: '',
    signature: '',
    agreeTerms: false,
  })
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your server
    console.log('Indemnity form submitted:', formData)
    // For now, we'll just redirect to a thank you page
    router.push('/thank-you')
  }

  const generatePDF = () => {
    const doc = new jsPDF()
    doc.setFontSize(22)
    doc.setTextColor(200, 200, 200)
    doc.text('Stars Preschool Indemnity Form', 20, 20)
    doc.setFontSize(12)
    doc.setTextColor(150, 150, 150)
    doc.text(`Parent's Name: ${formData.parentName}`, 20, 40)
    doc.text(`Child's Name: ${formData.childName}`, 20, 50)
    doc.text(`Date: ${formData.date}`, 20, 60)
    doc.text(`Signature: ${formData.signature}`, 20, 70)
    doc.save('indemnity_form.pdf')
  }

  return (
    <div className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-300">Indemnity Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="parentName" className="text-gray-300">Parent's Full Name</Label>
          <Input id="parentName" name="parentName" value={formData.parentName} onChange={handleChange} required className="bg-gray-700 text-gray-300 border-gray-600" />
        </div>
        <div>
          <Label htmlFor="childName" className="text-gray-300">Child's Full Name</Label>
          <Input id="childName" name="childName" value={formData.childName} onChange={handleChange} required className="bg-gray-700 text-gray-300 border-gray-600" />
        </div>
        <div>
          <Label htmlFor="date" className="text-gray-300">Date</Label>
          <Input id="date" name="date" type="date" value={formData.date} onChange={handleChange} required className="bg-gray-700 text-gray-300 border-gray-600" />
        </div>
        <div>
          <Label htmlFor="signature" className="text-gray-300">Digital Signature</Label>
          <Textarea id="signature" name="signature" value={formData.signature} onChange={handleChange} required className="bg-gray-700 text-gray-300 border-gray-600" />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="agreeTerms" name="agreeTerms" checked={formData.agreeTerms} onCheckedChange={(checked) => setFormData(prev => ({ ...prev, agreeTerms: checked as boolean }))} />
          <Label htmlFor="agreeTerms" className="text-gray-300">I agree to indemnify Stars Preschool against any claims</Label>
        </div>
        <div className="flex space-x-2">
          <Button type="submit" disabled={!formData.agreeTerms} className="bg-gray-600 hover:bg-gray-500 text-gray-200">Submit Indemnity Form</Button>
          <Button type="button" onClick={() => window.print()} className="bg-gray-600 hover:bg-gray-500 text-gray-200">Print Form</Button>
          <Button type="button" onClick={generatePDF} className="bg-gray-600 hover:bg-gray-500 text-gray-200">Download PDF</Button>
        </div>
      </form>
    </div>
  )
}

