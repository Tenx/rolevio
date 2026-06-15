'use client'

import { motion } from 'framer-motion'
import { TrendingUp, ArrowUp } from 'lucide-react'

const metrics = [
  { label: 'Efficiency', value: '92%', trend: '+5%' },
  { label: 'Coverage', value: '87%', trend: '+3%' },
  { label: 'Collaboration', value: '78%', trend: '+12%' },
  { label: 'Workload Balance', value: '91%', trend: '+8%' },
]

export default function PerformanceMetrics() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="mt-6 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-sm">Organization Performance (Simulated)</h3>
        <TrendingUp className="w-4 h-4 text-green-400" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        {metrics.map((metric, i) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + i * 0.1 }}
            className="p-3 rounded-lg bg-gray-800/50 border border-gray-700"
          >
            <p className="text-xs text-gray-400 mb-1">{metric.label}</p>
            <div className="flex items-end justify-between">
              <span className="text-2xl font-bold">{metric.value}</span>
              <div className="flex items-center gap-1 text-green-400 text-xs">
                <ArrowUp className="w-3 h-3" />
                {metric.trend}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
