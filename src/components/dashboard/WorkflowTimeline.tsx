'use client'

import { Workflow, WorkflowStep } from '@/lib/workforce'
import { CheckCircle2, Circle, Loader2, Pause, AlertCircle, ArrowRight } from 'lucide-react'

interface WorkflowTimelineProps {
  workflow: Workflow
  onApprove?: (stepId: string) => void
  onReject?: (stepId: string) => void
}

export function WorkflowTimeline({ workflow, onApprove, onReject }: WorkflowTimelineProps) {
  const getStepIcon = (status: WorkflowStep['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="w-5 h-5 text-green-400" />
      case 'running':
        return <Loader2 className="w-5 h-5 text-blue-400 animate-spin" />
      case 'paused':
        return <Pause className="w-5 h-5 text-yellow-400" />
      case 'requires_approval':
        return <AlertCircle className="w-5 h-5 text-orange-400 animate-pulse" />
      default:
        return <Circle className="w-5 h-5 text-slate-600" />
    }
  }

  const getStepBg = (status: WorkflowStep['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/10 border-green-500/30'
      case 'running':
        return 'bg-blue-500/10 border-blue-500/30'
      case 'paused':
        return 'bg-yellow-500/10 border-yellow-500/30'
      case 'requires_approval':
        return 'bg-orange-500/10 border-orange-500/30'
      default:
        return 'bg-slate-800/30 border-slate-700/30'
    }
  }

  return (
    <div className="space-y-4">
      {/* Workflow Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white mb-1">{workflow.name}</h3>
          <div className="flex items-center gap-4 text-sm text-slate-400">
            <span>触发：{workflow.trigger}</span>
            <span>•</span>
            <span>周期：{workflow.metrics.cycleTime}</span>
            <span>•</span>
            <span className="text-green-400">成功率 {workflow.metrics.successRate}%</span>
          </div>
        </div>
        <div className={`px-3 py-1.5 rounded-full text-sm font-medium ${
          workflow.status === 'active'
            ? 'bg-green-500/10 text-green-400'
            : 'bg-slate-500/10 text-slate-400'
        }`}>
          {workflow.status === 'active' ? '运行中' : '已暂停'}
        </div>
      </div>

      {/* Timeline Steps */}
      <div className="space-y-3">
        {workflow.steps.map((step, index) => (
          <div key={step.id}>
            <div className={`border rounded-xl p-4 ${getStepBg(step.status)}`}>
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 mt-1">
                  {getStepIcon(step.status)}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono text-slate-500">
                      {new Date(step.timestamp).toLocaleString('zh-CN', {
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </span>
                    <ArrowRight className="w-3 h-3 text-slate-600" />
                    <span className="text-sm font-semibold text-white">
                      {step.agent.charAt(0).toUpperCase() + step.agent.slice(1)} Agent
                    </span>
                  </div>

                  <p className="text-slate-300 mb-2">{step.action}</p>

                  {/* Output */}
                  {step.output && (
                    <div className="text-xs bg-slate-900/50 rounded px-3 py-2 font-mono text-slate-400">
                      {typeof step.output === 'object' ? (
                        <div className="space-y-1">
                          {Object.entries(step.output).map(([key, value]) => (
                            <div key={key}>
                              <span className="text-slate-500">{key}:</span>{' '}
                              <span className="text-slate-300">{JSON.stringify(value)}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        step.output
                      )}
                    </div>
                  )}

                  {/* Requires Human Decision */}
                  {step.requiresHumanDecision && (
                    <div className="mt-3 p-3 bg-orange-500/10 border border-orange-500/30 rounded-lg">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-orange-300 mb-1">
                            需要人工决策
                          </div>
                          <div className="text-sm text-orange-200/80 mb-3">
                            {step.output?.reason || '此步骤需要人工审批后继续'}
                          </div>
                          <div className="flex gap-2">
                            <button
                              onClick={() => onApprove?.(step.id)}
                              className="px-4 py-2 bg-green-600 hover:bg-green-500 text-white text-sm font-medium rounded-lg transition"
                            >
                              批准继续
                            </button>
                            <button
                              onClick={() => onReject?.(step.id)}
                              className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white text-sm font-medium rounded-lg transition"
                            >
                              拒绝
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Connector Line */}
            {index < workflow.steps.length - 1 && (
              <div className="flex justify-center py-2">
                <div className="w-px h-6 bg-slate-700" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
