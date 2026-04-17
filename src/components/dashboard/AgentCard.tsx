'use client'

import { Agent } from '@/lib/workforce'
import { Clock, CheckCircle2, AlertCircle, Pause } from 'lucide-react'

interface AgentCardProps {
  agent: Agent
  onClick?: () => void
}

export function AgentCard({ agent, onClick }: AgentCardProps) {
  const statusConfig = {
    running: { icon: CheckCircle2, color: 'text-green-400', bg: 'bg-green-500/10', label: '运行中' },
    waiting: { icon: Clock, color: 'text-yellow-400', bg: 'bg-yellow-500/10', label: '等待中' },
    paused: { icon: Pause, color: 'text-slate-400', bg: 'bg-slate-500/10', label: '暂停' },
    error: { icon: AlertCircle, color: 'text-red-400', bg: 'bg-red-500/10', label: '错误' }
  }

  const status = statusConfig[agent.status]
  const StatusIcon = status.icon

  return (
    <div
      onClick={onClick}
      className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/50 transition cursor-pointer"
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${agent.color} flex items-center justify-center flex-shrink-0 text-2xl`}>
          {agent.icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-white">{agent.name}</h3>
            <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded-full ${status.bg}`}>
              <StatusIcon className={`w-3 h-3 ${status.color}`} />
              <span className={`text-xs font-medium ${status.color}`}>{status.label}</span>
            </div>
          </div>
          <p className="text-sm text-slate-400">{agent.description}</p>
        </div>
      </div>

      {/* Current Task */}
      {agent.currentTask && (
        <div className="mb-4 p-3 bg-slate-900/50 rounded-lg">
          <div className="text-xs text-slate-500 mb-2">当前任务</div>
          <div className="text-sm text-slate-300 mb-2">{agent.currentTask.description}</div>
          {agent.currentTask.progress !== undefined && (
            <div className="flex items-center gap-3">
              <div className="flex-1 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${agent.color} transition-all duration-500`}
                  style={{ width: `${agent.currentTask.progress}%` }}
                />
              </div>
              <span className="text-xs text-slate-400 font-mono">
                {agent.currentTask.progress}%
              </span>
            </div>
          )}
          {agent.currentTask.estimatedCompletion && (
            <div className="text-xs text-slate-500 mt-1">
              预计完成：{agent.currentTask.estimatedCompletion}
            </div>
          )}
        </div>
      )}

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-4">
        <div>
          <div className="text-xs text-slate-500 mb-1">本周任务</div>
          <div className="text-lg font-bold text-white">{agent.metrics.tasksThisWeek}</div>
        </div>
        <div>
          <div className="text-xs text-slate-500 mb-1">总完成</div>
          <div className="text-lg font-bold text-white">{agent.metrics.tasksCompleted}</div>
        </div>
        <div>
          <div className="text-xs text-slate-500 mb-1">效率</div>
          <div className="text-lg font-bold text-green-400">{agent.metrics.efficiency}%</div>
        </div>
      </div>

      {/* Permissions Badge */}
      <div className="mt-4 pt-4 border-t border-slate-700/50">
        <div className="flex items-center gap-2 text-xs">
          <span className="text-slate-500">预算：</span>
          <span className="text-slate-300 font-mono">
            {agent.permissions.budget === 'unlimited'
              ? '∞'
              : agent.permissions.budget === 0
              ? '只读'
              : `$${(agent.permissions.budget / 1000).toFixed(0)}K/天`}
          </span>
          {agent.permissions.requiresApproval && (
            <span className="ml-auto px-2 py-0.5 bg-orange-500/10 text-orange-400 rounded-full">
              需审批
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
