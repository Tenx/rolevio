'use client'

import { useState } from 'react'
import { mockWorkforce } from '@/lib/workforce'
import { AgentCard } from '@/components/dashboard/AgentCard'
import { WorkflowTimeline } from '@/components/dashboard/WorkflowTimeline'
import { PermissionMatrix } from '@/components/dashboard/PermissionMatrix'
import {
  Sparkles,
  ArrowLeft,
  TrendingUp,
  Clock,
  DollarSign,
  Network,
  Workflow as WorkflowIcon,
  Shield,
  Activity
} from 'lucide-react'
import Link from 'next/link'

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'workflow' | 'permissions' | 'monitoring'>('overview')
  const workforce = mockWorkforce

  const tabs = [
    { id: 'overview', label: '组织架构', icon: Network },
    { id: 'workflow', label: '工作流编排', icon: WorkflowIcon },
    { id: 'permissions', label: '权限矩阵', icon: Shield },
    { id: 'monitoring', label: '实时监控', icon: Activity },
  ] as const

  const handleApprove = (stepId: string) => {
    console.log('Approved step:', stepId)
    // TODO: Implement approval logic
  }

  const handleReject = (stepId: string) => {
    console.log('Rejected step:', stepId)
    // TODO: Implement rejection logic
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition">
                <ArrowLeft className="w-4 h-4" />
                返回首页
              </Link>
              <div className="w-px h-6 bg-slate-700" />
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-bold">数字劳动力中枢系统</h1>
                  <p className="text-xs text-slate-500">Digital Workforce Control Center</p>
                </div>
              </div>
            </div>

            {/* Real-time Metrics */}
            <div className="flex items-center gap-6">
              <div className="text-right">
                <div className="text-xs text-slate-500">本周 ROI</div>
                <div className="text-sm font-bold text-green-400">
                  ${(workforce.realTimeMetrics.weeklyROI.output / 1000).toFixed(0)}K /
                  ${(workforce.realTimeMetrics.weeklyROI.input / 1000).toFixed(0)}K
                  <span className="text-xs text-slate-500 ml-1">
                    (5.1x)
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-500">运行任务</div>
                <div className="text-sm font-bold text-blue-400">
                  {workforce.realTimeMetrics.tasksRunning}
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-500">待审批</div>
                <div className="text-sm font-bold text-orange-400">
                  {workforce.realTimeMetrics.tasksWaitingApproval}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Tab Navigation */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 border-b-2 transition ${
                    activeTab === tab.id
                      ? 'border-primary-500 text-white'
                      : 'border-transparent text-slate-400 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats */}
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <span className="text-sm text-slate-400">本周自动执行</span>
                </div>
                <div className="text-3xl font-bold text-white">
                  {workforce.realTimeMetrics.tasksRunning}
                </div>
                <div className="text-xs text-slate-500 mt-1">个任务</div>
              </div>

              <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-orange-400" />
                  <span className="text-sm text-slate-400">等待人工决策</span>
                </div>
                <div className="text-3xl font-bold text-white">
                  {workforce.realTimeMetrics.tasksWaitingApproval}
                </div>
                <div className="text-xs text-slate-500 mt-1">个任务</div>
              </div>

              <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <DollarSign className="w-5 h-5 text-blue-400" />
                  <span className="text-sm text-slate-400">预算使用</span>
                </div>
                <div className="text-3xl font-bold text-white">
                  ${(workforce.realTimeMetrics.totalBudgetUsed / 1000).toFixed(1)}K
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  / ${(workforce.realTimeMetrics.totalBudgetLimit / 1000).toFixed(0)}K
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary-500/10 to-accent-500/10 border border-primary-500/20 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="w-5 h-5 text-primary-400" />
                  <span className="text-sm text-slate-400">本周 ROI</span>
                </div>
                <div className="text-3xl font-bold text-primary-400">5.1x</div>
                <div className="text-xs text-slate-500 mt-1">
                  ${(workforce.realTimeMetrics.weeklyROI.output / 1000).toFixed(0)}K 收益
                </div>
              </div>
            </div>

            {/* Agents Grid */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-6">数字劳动力组织架构</h2>
              <div className="grid lg:grid-cols-2 gap-6">
                {workforce.agents.map((agent) => (
                  <AgentCard key={agent.id} agent={agent} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Workflow Tab */}
        {activeTab === 'workflow' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">工作流编排</h2>
              <p className="text-slate-400">
                AI 自动化增长循环 · 每周自动迭代优化
              </p>
            </div>

            {workforce.workflows.map((workflow) => (
              <div key={workflow.id} className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                <WorkflowTimeline
                  workflow={workflow}
                  onApprove={handleApprove}
                  onReject={handleReject}
                />
              </div>
            ))}
          </div>
        )}

        {/* Permissions Tab */}
        {activeTab === 'permissions' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">权限矩阵</h2>
              <p className="text-slate-400">
                基于角色的访问控制（RBAC）· 确保每个 Agent 只能执行授权操作
              </p>
            </div>

            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
              <PermissionMatrix agents={workforce.agents} />
            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-blue-300 mb-1">权限设计原则</div>
                  <ul className="text-sm text-blue-200/80 space-y-1">
                    <li>• 最小权限原则：Agent 只能访问完成任务所需的最小数据集</li>
                    <li>• 预算管控：所有涉及花费的操作都有明确的预算上限</li>
                    <li>• 审批流程：高风险操作需要 Brand Guardian 或人工审批</li>
                    <li>• 审计追踪：所有操作都被记录，可随时回溯</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Monitoring Tab */}
        {activeTab === 'monitoring' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">实时监控</h2>
              <p className="text-slate-400">
                数字劳动力实时工作状态 · 24/7 持续优化
              </p>
            </div>

            <div className="space-y-4">
              {workforce.agents.filter(a => a.status === 'running' || a.status === 'waiting').map((agent) => (
                <div key={agent.id} className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${agent.color} flex items-center justify-center text-xl flex-shrink-0`}>
                      {agent.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-white">{agent.name}</h3>
                        <span className={`px-2 py-0.5 rounded-full text-xs ${
                          agent.status === 'running'
                            ? 'bg-green-500/10 text-green-400'
                            : 'bg-yellow-500/10 text-yellow-400'
                        }`}>
                          {agent.status === 'running' ? '运行中' : '等待中'}
                        </span>
                      </div>
                      {agent.currentTask && (
                        <>
                          <p className="text-slate-300 mb-3">{agent.currentTask.description}</p>
                          {agent.currentTask.progress !== undefined && (
                            <div className="flex items-center gap-4">
                              <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                                <div
                                  className={`h-full bg-gradient-to-r ${agent.color} transition-all duration-500`}
                                  style={{ width: `${agent.currentTask.progress}%` }}
                                />
                              </div>
                              <span className="text-sm text-slate-400 font-mono w-12">
                                {agent.currentTask.progress}%
                              </span>
                            </div>
                          )}
                          {agent.currentTask.estimatedCompletion && (
                            <div className="text-xs text-slate-500 mt-2">
                              预计完成：{agent.currentTask.estimatedCompletion}
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
