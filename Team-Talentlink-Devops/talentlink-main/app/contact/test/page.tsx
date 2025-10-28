"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function TestWeb3FormsPage() {
  const [result, setResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  async function testConnection() {
    setLoading(true)
    setResult(null)

    const formData = new FormData()
    formData.append("access_key", "0c41feef-74d7-4ee5-b2a2-4237c3ab5fc1")
    formData.append("name", "Test User")
    formData.append("email", "test@example.com")
    formData.append("message", "This is a test message from TalentLink")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()
      setResult({
        status: response.status,
        success: data.success,
        message: data.message,
        fullResponse: data,
      })
    } catch (error) {
      setResult({
        error: true,
        message: error instanceof Error ? error.message : "Unknown error",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="mx-auto max-w-2xl p-6">
      <Card>
        <CardHeader>
          <CardTitle>Web3Forms API Test</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="text-sm">
            <p className="mb-2">
              <strong>Access Key:</strong> 0c41feef-74d7-4ee5-b2a2-4237c3ab5fc1
            </p>
            <p className="text-muted-foreground">
              Click the button below to send a test email and verify your Web3Forms configuration.
            </p>
          </div>

          <Button onClick={testConnection} disabled={loading}>
            {loading ? "Testing..." : "Send Test Email"}
          </Button>

          {result && (
            <div className="rounded-md border p-4 bg-muted">
              <h3 className="font-semibold mb-2">Result:</h3>
              <pre className="text-xs overflow-auto">{JSON.stringify(result, null, 2)}</pre>

              {result.success === false && (
                <div className="mt-4 p-3 bg-destructive/10 rounded-md">
                  <p className="font-semibold text-destructive">Common issues:</p>
                  <ul className="text-sm mt-2 space-y-1 list-disc list-inside">
                    <li>Email not verified in Web3Forms dashboard</li>
                    <li>Access key is invalid or expired</li>
                    <li>Domain restrictions enabled (localhost blocked)</li>
                    <li>Account not activated</li>
                  </ul>
                </div>
              )}

              {result.success === true && (
                <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/20 rounded-md">
                  <p className="font-semibold text-green-700 dark:text-green-400">
                    ✓ Email sent successfully!
                  </p>
                  <p className="text-sm mt-1">Check your inbox for the test message.</p>
                </div>
              )}
            </div>
          )}

          <div className="text-xs text-muted-foreground space-y-2">
            <p className="font-semibold">Troubleshooting steps:</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Log in to your Web3Forms dashboard at https://web3forms.com</li>
              <li>Verify your recipient email address</li>
              <li>Check if your access key is active</li>
              <li>Ensure no domain restrictions are blocking localhost</li>
              <li>Check spam/junk folder for emails</li>
            </ol>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
