import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ContactSuccessPage() {
  return (
    <main className="mx-auto max-w-md p-6">
      <Card className="bg-background">
        <CardHeader>
          <CardTitle className="text-balance">Message sent</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <p className="text-sm text-muted-foreground">
            Thanks for reaching out. Your message has been delivered. Well get back to you soon.
          </p>
          <div className="flex gap-3">
            <Button asChild>
              <Link href="/">Go to Home</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/contact">Send another message</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
