'use client'

import { useState } from 'react'
import {
  AlertCircle,
  Bot,
  CheckCircle,
  Mail,
  MessageSquare,
  Shield,
  Zap,
  Clock,
  Target,
  TrendingUp
} from 'lucide-react'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mvzgypbe'

export default function Home() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' }
      })

      if (res.ok) {
        form.reset()
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-gray-900">
            Alejandro Fernandez
          </div>
          <a
            href="#contact"
            className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Free Audit
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Same-Day Fixes Available
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Stop Losing Customers.<br />Fix Your Website Today.
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            I help small businesses fix broken websites, recover lost leads,
            and automate customer inquiries using simple AI tools.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#contact"
              className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors text-lg font-medium"
            >
              Get a Free Website Audit
            </a>
            <a
              href="#services"
              className="border-2 border-gray-300 text-gray-900 px-8 py-4 rounded-lg hover:border-primary hover:text-primary transition-colors text-lg font-medium"
            >
              View Services
            </a>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-gray-200">
            <div>
              <div className="text-3xl font-bold text-primary">24hr</div>
              <div className="text-sm text-gray-600">Avg Response</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-gray-600">Transparent Pricing</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">Fast</div>
              <div className="text-sm text-gray-600">Same-Day Fixes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-sm border">
          <div className="flex gap-4">
            <AlertCircle className="w-8 h-8 text-red-500 mt-1" />
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Most websites look fine — but quietly lose leads every day
              </h2>
              <p className="text-gray-600 mb-6">
                Small technical issues can stop customers from reaching you,
                even when they want to.
              </p>
              <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
                <li>• Contact forms not sending</li>
                <li>• Emails going to spam</li>
                <li>• “Not Secure” warnings</li>
                <li>• Mobile issues</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Services</h2>
          <p className="text-xl text-gray-600">
            Practical fixes that directly increase leads and conversions
          </p>
        </div>

        {/* Service Cards unchanged structurally – your existing ones are good */}
        {/* (Left intentionally unchanged to avoid bloat) */}
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-secondary text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Get a Free Website Audit
            </h2>
            <p className="text-xl text-gray-300">
              I’ll show you exactly what’s broken — and how to fix it.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="text" name="name" required placeholder="Your Name" className="w-full px-4 py-3 border rounded-lg" />
              <input type="email" name="email" required placeholder="Email Address" className="w-full px-4 py-3 border rounded-lg" />
              <input type="url" name="website" required placeholder="Your Website URL" className="w-full px-4 py-3 border rounded-lg" />
              <textarea name="message" rows={4} placeholder="Anything I should know?" className="w-full px-4 py-3 border rounded-lg" />

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-primary text-white px-8 py-4 rounded-lg text-lg font-medium"
              >
                {status === 'sending' ? 'Sending…' : 'Request Free Audit'}
              </button>

              {status === 'success' && (
                <div className="flex gap-2 text-green-600 bg-green-50 p-4 rounded-lg">
                  <CheckCircle /> Thanks — I’ll reach out shortly.
                </div>
              )}

              {status === 'error' && (
                <div className="text-red-600 bg-red-50 p-4 rounded-lg">
                  Something went wrong. Please email me directly.
                </div>
              )}
            </form>

            <div className="mt-8 pt-8 border-t text-center text-gray-600">
              <p>Or email me directly: <strong>alejandriosity@gmail.com</strong></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}