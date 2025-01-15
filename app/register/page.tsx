'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { jsPDF } from 'jspdf'

export default function Register() {
  const [formData, setFormData] = useState({
    childName: '',
    childDob: '',
    parentName: '',
    parentPhone: '',
    parentEmail: '',
    parentId: null as File | null,
    birthCertificate: null as File | null,
    healthCard: null as File | null,
    agreeTerms: false,
  })
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked, files } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files?.[0] || null : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your server
    console.log('Form submitted:', formData)
    // For now, we'll just redirect to a thank you page
    router.push('/thank-you')
  }

  const generatePDF = () => {
    const doc = new jsPDF()
    doc.setFontSize(22)
    doc.setTextColor(200, 200, 200)
    doc.text('Stars Preschool Application', 20, 20)
    doc.setFontSize(12)
    doc.setTextColor(150, 150, 150)
    doc.text(`Child's Name: ${formData.childName}`, 20, 40)
    doc.text(`Child's Date of Birth: ${formData.childDob}`, 20, 50)
    doc.text(`Parent's Name: ${formData.parentName}`, 20, 60)
    doc.text(`Parent's Phone: ${formData.parentPhone}`, 20, 70)
    doc.text(`Parent's Email: ${formData.parentEmail}`, 20, 80)
    doc.save('application.pdf')
  }

  return (
    <div className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-300">Registration Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="childName" className="text-gray-300">Child's Full Name</Label>
          <Input id="childName" name="childName" value={formData.childName} onChange={handleChange} required className="bg-gray-700 text-gray-300 border-gray-600" />
        </div>
        <div>
          <Label htmlFor="childDob" className="text-gray-300">Child's Date of Birth</Label>
          <Input id="childDob" name="childDob" type="date" value={formData.childDob} onChange={handleChange} required className="bg-gray-700 text-gray-300 border-gray-600" />
        </div>
        <div>
          <Label htmlFor="parentName" className="text-gray-300">Parent's Full Name</Label>
          <Input id="parentName" name="parentName" value={formData.parentName} onChange={handleChange} required className="bg-gray-700 text-gray-300 border-gray-600" />
        </div>
        <div>
          <Label htmlFor="parentPhone" className="text-gray-300">Parent's Phone Number</Label>
          <Input id="parentPhone" name="parentPhone" type="tel" value={formData.parentPhone} onChange={handleChange} required className="bg-gray-700 text-gray-300 border-gray-600" />
        </div>
        <div>
          <Label htmlFor="parentEmail" className="text-gray-300">Parent's Email</Label>
          <Input id="parentEmail" name="parentEmail" type="email" value={formData.parentEmail} onChange={handleChange} required className="bg-gray-700 text-gray-300 border-gray-600" />
        </div>
        <div>
          <Label htmlFor="parentId" className="text-gray-300">Parent's ID (PDF)</Label>
          <Input id="parentId" name="parentId" type="file" accept=".pdf" onChange={handleChange} required className="bg-gray-700 text-gray-300 border-gray-600" />
        </div>
        <div>
          <Label htmlFor="birthCertificate" className="text-gray-300">Child's Birth Certificate (PDF)</Label>
          <Input id="birthCertificate" name="birthCertificate" type="file" accept=".pdf" onChange={handleChange} required className="bg-gray-700 text-gray-300 border-gray-600" />
        </div>
        <div>
          <Label htmlFor="healthCard" className="text-gray-300">Road to Health Card (PDF)</Label>
          <Input id="healthCard" name="healthCard" type="file" accept=".pdf" onChange={handleChange} required className="bg-gray-700 text-gray-300 border-gray-600" />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="agreeTerms" name="agreeTerms" checked={formData.agreeTerms} onCheckedChange={(checked) => setFormData(prev => ({ ...prev, agreeTerms: checked as boolean }))} />
          <Label htmlFor="agreeTerms" className="text-gray-300">I agree to the terms and conditions</Label>
        </div>
        <div className="flex space-x-2">
          <Button type="submit" disabled={!formData.agreeTerms} className="bg-gray-600 hover:bg-gray-500 text-gray-200">Submit Registration</Button>
          <Button type="button" onClick={() => window.print()} className="bg-gray-600 hover:bg-gray-500 text-gray-200">Print Form</Button>
          <Button type="button" onClick={generatePDF} className="bg-gray-600 hover:bg-gray-500 text-gray-200">Download PDF</Button>
        </div>
      </form>
    </div>
  )
}

