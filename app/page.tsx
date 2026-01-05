'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm, ValidationError } from '@formspree/react'
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


const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

export default function Home() {
  
  const [state, handleSubmit] = useForm("mvzgypbe")

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
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
            Get Started
          </a>
        </div>
      </nav> 

      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="pt-32 pb-20 px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Same-Day Service Available
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
            I fix broken websites that are losing businesses leads
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact forms • SSL warnings • Speed issues • AI automation
          </p> 

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="#contact" 
              className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors text-lg font-medium"
            >
              Free Website Audit
            </a>
            <a 
              href="#services" 
              className="border-2 border-gray-300 text-gray-900 px-8 py-4 rounded-lg hover:border-primary hover:text-primary transition-colors text-lg font-medium"
            >
              View Services
            </a>
          </div> 

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-gray-200">
            <div>
              <div className="text-3xl font-bold text-primary mb-1">24hr</div>
              <div className="text-sm text-gray-600">Average Response</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">100%</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">5+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </motion.section> 

      {/* Problem Statement */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        className="py-20 px-6 bg-gray-50"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-200">
            <div className="flex items-start gap-4 mb-6">
              <AlertCircle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Your website looks fine, but leads aren't coming through
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Most businesses don't realize their website is silently losing customers every day through broken contact forms, email delivery issues, and technical errors.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Forms that don't send properly</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Emails going to spam folders</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">"Not Secure" SSL warnings</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Mobile form problems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section> 

      {/* Services Section */}
      <motion.section 
        id="services" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How I Can Help
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fast, practical solutions that get your website working properly and capturing leads 24/7
            </p>
          </div> 

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Website Lead Recovery
              </h3>
              <p className="text-gray-600 mb-6">
                I identify and fix the issues preventing your website from capturing leads properly.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Fix broken contact forms</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Resolve email delivery issues</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Remove SSL warnings</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Mobile optimization</span>
                </li>
              </ul>
              <div className="border-t border-gray-200 pt-6">
                <div className="text-3xl font-bold text-gray-900 mb-2">$150-300</div>
                <div className="text-sm text-gray-600 mb-4">One-time fix</div>
                <a 
                  href="#contact" 
                  className="block w-full bg-primary text-white text-center px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  Get Started
                </a>
              </div>
            </div> 

            {/* Service 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-primary relative hover:shadow-lg transition-shadow">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Bot className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                AI Chatbot Setup
              </h3>
              <p className="text-gray-600 mb-6">
                Capture leads 24/7 with an AI-powered chatbot that answers questions and qualifies prospects automatically.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Custom AI training</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Lead capture & qualification</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">FAQ automation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Email/CRM integration</span>
                </li>
              </ul>
              <div className="border-t border-gray-200 pt-6">
                <div className="text-3xl font-bold text-gray-900 mb-2">$250</div>
                <div className="text-sm text-gray-600 mb-4">Setup + $50-150/mo</div>
                <a 
                  href="#contact" 
                  className="block w-full bg-primary text-white text-center px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  Get Started
                </a>
              </div>
            </div> 

            {/* Service 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Website Monitoring
              </h3>
              <p className="text-gray-600 mb-6">
                Never lose leads again. I monitor your website and fix issues before they cost you business.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">24/7 uptime monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Contact form testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Monthly performance reports</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Priority support</span>
                </li>
              </ul>
              <div className="border-t border-gray-200 pt-6">
                <div className="text-3xl font-bold text-gray-900 mb-2">$75-200</div>
                <div className="text-sm text-gray-600 mb-4">Per month</div>
                <a 
                  href="#contact" 
                  className="block w-full bg-primary text-white text-center px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.section> 

      {/* Process Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        className="py-20 px-6 bg-gray-50"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple, fast, and transparent process
            </p>
          </div> 

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Free Audit</h3>
              <p className="text-gray-600">
                I check your website and identify exactly what's broken and how much it's costing you
              </p>
            </div> 

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Fix</h3>
              <p className="text-gray-600">
                Most issues are resolved the same day. I explain what I'm doing in plain English
              </p>
            </div> 

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">You're Protected</h3>
              <p className="text-gray-600">
                Optional monitoring keeps your site healthy and leads flowing without interruption
              </p>
            </div>
          </div>
        </div>
      </motion.section> 

      {/* Why Choose Me */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        className="py-20 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Work With Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <Clock className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Turnaround</h3>
                <p className="text-gray-600">
                  Most fixes are completed the same day. I don't make you wait weeks for results.
                </p>
              </div>
            </div> 

            <div className="flex gap-4">
              <Target className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Clear Communication</h3>
                <p className="text-gray-600">
                  I explain technical issues in plain language and show you exactly what was fixed.
                </p>
              </div>
            </div> 

            <div className="flex gap-4">
              <Zap className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">AI-Powered Solutions</h3>
                <p className="text-gray-600">
                  I leverage cutting-edge AI tools to work faster and deliver better results than traditional developers.
                </p>
              </div>
            </div> 

            <div className="flex gap-4">
              <Shield className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No Surprises</h3>
                <p className="text-gray-600">
                  Fixed prices, no hidden fees. You know exactly what you're paying for before I start.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section> 

      {/* Contact Section */}
      <motion.section 
        id="contact" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        className="py-20 px-6 bg-secondary text-white"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Get Your Free Website Audit
            </h2>
            <p className="text-xl text-gray-300">
              I'll check your website and show you exactly what's broken and how to fix it
            </p>
          </div> 

          <div className="bg-white rounded-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900"
                    placeholder="John Smith"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div> 

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900"
                    placeholder="john@company.com"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
              </div> 

              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Website URL
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900"
                  placeholder="https://yourwebsite.com"
                />
                <ValidationError prefix="Website" field="website" errors={state.errors} />
              </div> 

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  What issues are you experiencing? (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900"
                  placeholder="Tell me about any problems you're noticing..."
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div> 

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.submitting ? 'Sending...' : 'Get Free Audit'}
              </button> 

              {state.succeeded && (
                <div className="flex items-center gap-2 text-green-600 bg-green-50 p-4 rounded-lg">
                  <CheckCircle className="w-5 h-5" />
                  <span>Thanks! I'll review your website and get back to you within 24 hours.</span>
                </div>
              )}
            </form> 

            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center text-gray-600">
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>alejandriosity@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  <span>Orlando, FL & Remote</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section> 

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Alejandro Fernandez</h3>
              <p className="text-sm">
                AI-powered web solutions that fix broken websites and capture more leads for your business.
              </p>
            </div> 

            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="hover:text-white transition-colors">Website Lead Recovery</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">AI Chatbot Setup</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Website Monitoring</a></li>
              </ul>
            </div> 

            <div>
              <h4 className="text-white font-semibold mb-4">Get Started</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#contact" className="hover:text-white transition-colors">Free Website Audit</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact Me</a></li>
              </ul>
            </div>
          </div> 

          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Alejandro Fernandez. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

