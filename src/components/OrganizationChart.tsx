'use client'

import { motion } from 'framer-motion'
import { Users, Target, Search, TrendingUp, ShoppingCart, UserCheck, Settings } from 'lucide-react'

interface Agent {
  id: string
  name: string
  role: string
  icon: React.ReactNode
  color: string
}

const agents: Agent[] = [
  { id: 'orchestrator', name: 'Strategic Orchestrator', role: 'Strategy & Direction', icon: <Target className="w-5 h-5" />, color: 'purple' },
  { id: 'research', name: 'Research Agent', role: 'Market & Insights', icon: <Search className="w-4 h-4" />, color: 'blue' },
  { id: 'planning', name: 'Planning Agent', role: 'Planning & Roadmap', icon: <Users className="w-4 h-4" />, color: 'purple' },
  { id: 'finance', name: 'Finance Agent', role: 'Financial Analysis', icon: <TrendingUp className="w-4 h-4" />, color: 'cyan' },
  { id: 'marketing', name: 'Marketing Agent', role: 'Campaigns & Growth', icon: <TrendingUp className="w-4 h-4" />, color: 'blue' },
  { id: 'sales', name: 'Sales Agent', role: 'Pipeline & Outreach', icon: <ShoppingCart className="w-4 h-4" />, color: 'cyan' },
  { id: 'customer', name: 'Customer Agent', role: 'Support & Success', icon: <UserCheck className="w-4 h-4" />, color: 'blue' },
  { id: 'ops', name: 'Ops Agent', role: 'Operations & Workflow', icon: <Settings className="w-4 h-4" />, color: 'cyan' },
]

interface OrganizationChartProps {
  onAgentSelect: (agentId: string) => void
}

export default function OrganizationChart({ onAgentSelect }: OrganizationChartProps) {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
          <span className="text-xl font-bold">R</span>
        </div>
        <div>
          <h3 className="font-semibold">AI Organization Designer</h3>
          <p className="text-xs text-gray-500">Sales Organization Template</p>
        </div>
      </div>

      {/* Organization Chart */}
      <div className="space-y-6">
        {/* Top Level - Orchestrator */}
        <div className="flex justify-center">
          <AgentNode
            agent={agents[0]}
            onClick={() => onAgentSelect(agents[0].id)}
          />
        </div>

        {/* Connection Lines */}
        <div className="flex justify-center">
          <svg width="600" height="40" className="overflow-visible">
            <line x1="300" y1="0" x2="300" y2="40" stroke="#374151" strokeWidth="2" />
            <line x1="100" y1="40" x2="500" y2="40" stroke="#374151" strokeWidth="2" />
            <line x1="100" y1="40" x2="100" y2="60" stroke="#374151" strokeWidth="2" />
            <line x1="250" y1="40" x2="250" y2="60" stroke="#374151" strokeWidth="2" />
            <line x1="350" y1="40" x2="350" y2="60" stroke="#374151" strokeWidth="2" />
            <line x1="500" y1="40" x2="500" y2="60" stroke="#374151" strokeWidth="2" />
          </svg>
        </div>

        {/* Second Level - Department Agents */}
        <div className="grid grid-cols-3 gap-4 px-4">
          <AgentNode
            agent={agents[1]}
            size="sm"
            onClick={() => onAgentSelect(agents[1].id)}
          />
          <AgentNode
            agent={agents[2]}
            size="sm"
            onClick={() => onAgentSelect(agents[2].id)}
          />
          <AgentNode
            agent={agents[3]}
            size="sm"
            onClick={() => onAgentSelect(agents[3].id)}
          />
        </div>

        {/* Connection Lines for Bottom Row */}
        <div className="flex justify-center -mt-2">
          <svg width="600" height="40" className="overflow-visible">
            <line x1="150" y1="0" x2="150" y2="40" stroke="#374151" strokeWidth="2" />
            <line x1="150" y1="40" x2="450" y2="40" stroke="#374151" strokeWidth="2" />
            <line x1="225" y1="40" x2="225" y2="60" stroke="#374151" strokeWidth="2" />
            <line x1="300" y1="40" x2="300" y2="60" stroke="#374151" strokeWidth="2" />
            <line x1="375" y1="40" x2="375" y2="60" stroke="#374151" strokeWidth="2" />
            <line x1="450" y1="40" x2="450" y2="60" stroke="#374151" strokeWidth="2" />
          </svg>
        </div>

        {/* Third Level - Execution Agents */}
        <div className="grid grid-cols-4 gap-3 px-2">
          <AgentNode
            agent={agents[4]}
            size="sm"
            onClick={() => onAgentSelect(agents[4].id)}
          />
          <AgentNode
            agent={agents[5]}
            size="sm"
            onClick={() => onAgentSelect(agents[5].id)}
          />
          <AgentNode
            agent={agents[6]}
            size="sm"
            onClick={() => onAgentSelect(agents[6].id)}
          />
          <AgentNode
            agent={agents[7]}
            size="sm"
            onClick={() => onAgentSelect(agents[7].id)}
          />
        </div>
      </div>
    </div>
  )
}

function AgentNode({
  agent,
  size = 'md',
  onClick
}: {
  agent: Agent
  size?: 'sm' | 'md'
  onClick: () => void
}) {
  const colors = {
    purple: 'from-purple-500/20 to-purple-600/20 border-purple-500/50',
    cyan: 'from-cyan-500/20 to-cyan-600/20 border-cyan-500/50',
    blue: 'from-blue-500/20 to-blue-600/20 border-blue-500/50',
  }

  const iconColors = {
    purple: 'text-purple-400',
    cyan: 'text-cyan-400',
    blue: 'text-blue-400',
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`relative bg-gradient-to-br ${colors[agent.color as keyof typeof colors]} border rounded-lg p-3 cursor-pointer transition-all hover:shadow-lg hover:shadow-${agent.color}-500/20 text-left w-full`}
    >
      <div className="flex items-center gap-2 mb-1">
        <div className={`${iconColors[agent.color as keyof typeof iconColors]}`}>
          {agent.icon}
        </div>
        <span className={`font-semibold ${size === 'sm' ? 'text-xs' : 'text-sm'}`}>
          {agent.name}
        </span>
      </div>
      <p className={`text-gray-400 ${size === 'sm' ? 'text-[10px]' : 'text-xs'}`}>
        {agent.role}
      </p>

      {/* Pulse indicator */}
      <div className="absolute -top-1 -right-1 w-3 h-3">
        <span className={`absolute inline-flex h-full w-full rounded-full bg-${agent.color}-400 opacity-75 animate-ping`}></span>
        <span className={`relative inline-flex rounded-full h-3 w-3 bg-${agent.color}-500`}></span>
      </div>
    </motion.button>
  )
}
