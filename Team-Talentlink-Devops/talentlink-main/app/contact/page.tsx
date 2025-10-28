"use client"

import Link from "next/link"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

export default function ContactPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        toast({
          title: "Message sent!",
          description: "We'll get back to you soon.",
        })
        // Redirect to success page
        window.location.href = "/contact/success"
      } else {
        toast({
          title: "Error",
          description: data.message || "Failed to send message. Please try again.",
          variant: "destructive",
        })
        console.error("Web3Forms error:", data)
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Network error. Please check your connection and try again.",
        variant: "destructive",
      })
      console.error("Submit error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="mx-auto max-w-2xl p-6">
      <Card className="bg-background">
        <CardHeader>
          <CardTitle className="text-balance">Contact Us</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid gap-4">
            {/* Web3Forms required fields */}
            <input type="hidden" name="access_key" value="0c41feef-74d7-4ee5-b2a2-4237c3ab5fc1" />
            {/* Optional metadata */}
            <input type="hidden" name="from_name" value="TalentLink Website" />
            <input type="hidden" name="subject" value="New Contact Form Submission from TalentLink" />
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

            <div className="grid gap-2">
              <Label htmlFor="name">Your Name</Label>
              <Input id="name" name="name" placeholder="John Doe" required />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" inputMode="email" placeholder="you@example.com" required />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" rows={6} placeholder="Write your message here..." required />
            </div>

            <div className="flex items-center gap-3 pt-2">
              <Button type="submit" disabled={isSubmitting} className="bg-primary text-primary-foreground">
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
              <span className="text-xs text-muted-foreground">Powered by Web3Forms</span>
            </div>
          </form>

          <p className="mt-6 text-xs text-muted-foreground">
            Having trouble? Email us directly or go back to the <Link href="/" className="underline">home page</Link>.
          </p>
        </CardContent>
      </Card>
    </main>
  )
}
