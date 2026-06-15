'use client'

import { motion } from 'framer-motion'
import { X, Users, TrendingUp, ShoppingCart } from 'lucide-react'

const agentDetails: Record<string, {
  name: string
  role: string
  icon: React.ReactNode
  responsibilities: string[]
  boundaries: string[]
  kpis: string[]
}> = {
  'sales': {
    name: 'Sales Agent',
    role: 'Pipeline & Outreach',
    icon: <ShoppingCart className="w-5 h-5" />,
    responsibilities: [
      'Lead qualification',
      'Outreach & follow-up',
      'Deal tracking'
    ],
    boundaries: [
      'Owns outbound pipeline',
      'Hands off to Customer Agent after close'
    ],
    kpis: [
      'Pipeline Generated',
      'Conversion Rate',
      'Deal Velocity'
    ]
  },
  'orchestrator': {
    name: 'Strategic Orchestrator',
    role: 'Strategy & Direction',
    icon: <Users className="w-5 h-5" />,
    responsibilities: [
      'Define organizational goals',
      'Coordinate between departments',
      'Monitor overall performance'
    ],
    boundaries: [
      'Sets strategic direction',
      'Does not execute tactical work',
      'Delegates to specialized agents'
    ],
    kpis: [
      'Goal Achievement Rate',
      'Cross-department Efficiency',
      'Strategic Initiative Success'
    ]
  },
  'research': {
    name: 'Research Agent',
    role: 'Market & Insights',
    icon: <TrendingUp className="w-5 h-5" />,
    responsibilities: [
      'Market analysis',
      'Competitor research',
      'Trend identification'
    ],
    boundaries: [
      'Provides data and insights',
      'Does not make strategic decisions',
      'Supports planning and strategy'
    ],
    kpis: [
      'Research Accuracy',
      'Insight Quality Score',
      'Time to Insight'
    ]
  }
}

interface AgentDetailsPanelProps {
  agentId: string
  onClose: () => void
}

export default function AgentDetailsPanel({ agentId, onClose }: AgentDetailsPanelProps) {
  const agent = agentDetails[agentId] || agentDetails['sales']

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="absolute top-0 right-0 w-80 bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-2xl"
    >
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
            {agent.icon}
          </div>
          <div>
            <h3 className="font-semibold">{agent.name}</h3>
            <p className="text-xs text-gray-400">{agent.role}</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white transition"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-semibold mb-3">Responsibilities</h4>
          <ul className="space-y-2">
            {agent.responsibilities.map((item, i) => (
              <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3">Boundaries</h4>
          <ul className="space-y-2">
            {agent.boundaries.map((item, i) => (
              <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                <span className="text-purple-400 mt-1">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3">KPIs</h4>
          <ul className="space-y-2">
            {agent.kpis.map((item, i) => (
              <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}
