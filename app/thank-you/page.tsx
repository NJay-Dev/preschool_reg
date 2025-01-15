import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function ThankYou() {
  return (
    <div className="text-center space-y-4">
      <h2 className="text-3xl font-bold">Thank You for Registering!</h2>
      <p className="text-lg">We have received your application and will be in touch soon.</p>
      <Link href="/">
        <Button>Return to Home</Button>
      </Link>
    </div>
  )
}

