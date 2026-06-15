'use client'

import { motion } from 'framer-motion'
import {
  Users,
  AlertTriangle,
  Shield,
  Database,
  Hexagon,
  ArrowRight,
  PlayCircle
} from 'lucide-react'

export default function Home() {

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Hexagon className="w-8 h-8 text-cyan-400" strokeWidth={2} />
            <span className="text-xl font-bold">ROLEVIO</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#" className="text-gray-300 hover:text-white transition">Product</a>
            <a href="#" className="text-gray-300 hover:text-white transition">How It Works</a>
            <a href="#" className="text-gray-300 hover:text-white transition">Best Practices</a>
            <a href="#" className="text-gray-300 hover:text-white transition">Resources</a>
            <a href="#" className="text-gray-300 hover:text-white transition">Pricing</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-sm text-gray-300 hover:text-white transition">
              Sign In
            </button>
            <button className="px-4 py-2 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition">
              Get Early Access
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Column */}
          <div>
            <div className="inline-block px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-semibold mb-6">
              THE FUTURE OF THE FIRM
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Design the Future.<br />
              Build <span className="text-cyan-400">Stronger</span> Firms.
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Rolevio helps you design, structure, and optimize AI agent groups
              using the world's strongest corporate and organizational
              intelligence—so you can build the future of your company.
            </p>

            <div className="flex items-center gap-4">
              <button className="px-6 py-3 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition flex items-center gap-2">
                Get Early Access
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-6 py-3 border border-gray-700 text-white font-semibold rounded-lg hover:border-gray-600 transition flex items-center gap-2">
                <PlayCircle className="w-5 h-5" />
                See How It Works
              </button>
            </div>
          </div>

          {/* Right Column - Demo Video */}
          <div className="relative h-full flex items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-2xl overflow-hidden border border-gray-800 bg-gradient-to-br from-gray-900 to-black shadow-2xl w-full"
            >
              <div className="aspect-video bg-gray-900 flex items-center justify-center">
                <video
                  className="w-full h-full object-cover"
                  controls
                  poster="/video-thumbnail.jpg"
                >
                  <source src="/demo-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Video overlay for when not playing */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 pointer-events-none" />
            </motion.div>
          </div>
        </div>

        {/* Pain Points - Horizontal Section */}
        <div>
          <h3 className="text-purple-400 font-semibold text-sm mb-6 text-center">PAIN POINTS WE SOLVE</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <PainPoint
              icon={<Users className="w-5 h-5" />}
              title="Unclear Structure"
              description="Don't know how to organize agents or define responsibilities."
            />
            <PainPoint
              icon={<AlertTriangle className="w-5 h-5" />}
              title="Wrong Delegation"
              description="Tasks are misassigned, causing overlaps, gaps, and inefficiencies."
            />
            <PainPoint
              icon={<Shield className="w-5 h-5" />}
              title="No Boundaries"
              description="Unclear limits between agents lead to conflicts and inconsistent results."
            />
            <PainPoint
              icon={<Database className="w-5 h-5" />}
              title="Weak Data Foundation"
              description="Lack of reliable corporate and organizational data holds you back."
            />
          </div>
        </div>
      </section>

      {/* Foundation Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-gray-800">
        <div className="text-center mb-12">
          <h3 className="text-cyan-400 font-semibold text-sm mb-4">BUILT ON THE STRONGEST FOUNDATION</h3>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Data. Structure. Intelligence. Best Practices.
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Rolevio combines proprietary corporate structure data, organizational design frameworks,
            and proven best practices to help you build agent groups that actually work.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FoundationCard
            icon={<Database className="w-8 h-8" />}
            title="Corporate Data Backbone"
            description="Access a rich database of corporate structures, roles, and workflows across industries."
          />
          <FoundationCard
            icon={<Users className="w-8 h-8" />}
            title="Organizational Intelligence"
            description="AI analyzes structures and patterns to recommend the optimal agent group for your goals."
          />
          <FoundationCard
            icon={<Shield className="w-8 h-8" />}
            title="Best Practices Library"
            description="Leverage proven frameworks and real-world examples from top performing companies."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-center justify-between bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
            <div className="flex items-center gap-4">
              <Hexagon className="w-12 h-12 text-cyan-400" strokeWidth={2} />
              <div>
                <h3 className="text-xl font-bold mb-1">
                  Build the right agent group. The right way. For the future.
                </h3>
                <p className="text-gray-400">
                  Rolevio is your co-pilot in building the future of your firm.
                </p>
              </div>
            </div>
            <button className="px-6 py-3 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition flex items-center gap-2 whitespace-nowrap">
              Get Early Access
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

function PainPoint({ icon, title, description }: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="p-4 rounded-lg border border-gray-800 bg-gray-900/50 hover:border-gray-700 transition">
      <div className="text-purple-400 mb-2">{icon}</div>
      <h4 className="font-semibold mb-1 text-sm">{title}</h4>
      <p className="text-gray-500 text-xs leading-relaxed">{description}</p>
    </div>
  )
}

function FoundationCard({ icon, title, description }: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="p-6 rounded-xl border border-gray-800 bg-gray-900/50 hover:border-cyan-500/30 transition group">
      <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  )
}
