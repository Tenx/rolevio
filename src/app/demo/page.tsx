'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  Shield, PenTool, Palette, Target, Megaphone, LineChart,
  ArrowRight, Sparkles, ChevronRight, Zap, Settings
} from 'lucide-react'

// 预设的营销任务示例
const exampleTasks = [
  '为新品发布创建一个小红书营销活动',
  '设计双11促销的全渠道推广方案',
  '制作品牌周年庆的社媒内容',
]

// Agent 定义
const agents = [
  { id: 'brand', name: 'Brand Agent', role: '品牌守护', icon: Shield, color: 'bg-violet-500' },
  { id: 'strategy', name: 'Strategy Agent', role: '策略规划', icon: Target, color: 'bg-orange-500' },
  { id: 'copywriter', name: 'Copywriter Agent', role: '文案创作', icon: PenTool, color: 'bg-blue-500' },
  { id: 'designer', name: 'Designer Agent', role: '视觉设计', icon: Palette, color: 'bg-green-500' },
  { id: 'campaign', name: 'Campaign Agent', role: '渠道投放', icon: Megaphone, color: 'bg-pink-500' },
  { id: 'analytics', name: 'Analytics Agent', role: '效果分析', icon: LineChart, color: 'bg-cyan-500' },
]

// 模拟任务分解结果
const getTaskBreakdown = (task: string) => {
  return {
    task,
    agents: [
      {
        agent: agents[0],
        responsibility: '校验品牌调性，确保内容符合品牌DNA',
        output: '品牌指南 & 风格约束',
        isCore: true,
      },
      {
        agent: agents[1],
        responsibility: '分析目标受众，制定营销策略',
        output: '营销方案 & 预算分配',
      },
      {
        agent: agents[2],
        responsibility: '撰写各平台文案内容',
        output: '文案素材库',
      },
      {
        agent: agents[3],
        responsibility: '设计配套视觉素材',
        output: '图片/视频素材',
      },
      {
        agent: agents[4],
        responsibility: '一键多渠道发布内容',
        output: '发布排期 & 执行',
      },
      {
        agent: agents[5],
        responsibility: '追踪效果并优化建议',
        output: '效果报告 & 优化方案',
      },
    ],
  }
}

export default function DemoPage() {
  const router = useRouter()
  const [inputTask, setInputTask] = useState('')
  const [activeTask, setActiveTask] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [breakdown, setBreakdown] = useState<ReturnType<typeof getTaskBreakdown> | null>(null)
  const [activeAgentIndex, setActiveAgentIndex] = useState(-1)

  const handleSubmit = async () => {
    const task = inputTask.trim() || exampleTasks[0]
    setActiveTask(task)
    setIsProcessing(true)
    setBreakdown(null)
    setActiveAgentIndex(-1)

    await new Promise(r => setTimeout(r, 800))

    const result = getTaskBreakdown(task)
    setBreakdown(result)
    setIsProcessing(false)

    for (let i = 0; i < result.agents.length; i++) {
      await new Promise(r => setTimeout(r, 400))
      setActiveAgentIndex(i)
    }
  }

  const handleExampleClick = (example: string) => {
    setInputTask(example)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">Rolevio</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="/" className="text-sm text-slate-400 hover:text-white transition">
              ← 返回主页
            </a>
            <div className="text-sm text-slate-400">
              Agent Demo
            </div>
          </div>
        </div>
      </header>

      <div className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <section className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              把营销工作
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent"> 拆分成 AI Agents</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              输入一个营销任务，看看 Rolevio 如何将它分解给不同的 AI Agent 协作完成
            </p>
          </section>

          <section className="mb-8">
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6">
              <label className="block text-sm text-slate-400 mb-3">输入你的营销任务</label>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={inputTask}
                  onChange={(e) => setInputTask(e.target.value)}
                  placeholder={exampleTasks[0]}
                  className="flex-1 bg-slate-900/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50"
                  onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                />
                <button
                  onClick={handleSubmit}
                  disabled={isProcessing}
                  className="px-6 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 rounded-xl font-medium flex items-center gap-2 transition disabled:opacity-50"
                >
                  {isProcessing ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Zap className="w-5 h-5" />
                      拆分任务
                    </>
                  )}
                </button>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs text-slate-500">示例：</span>
                {exampleTasks.map((example) => (
                  <button
                    key={example}
                    onClick={() => handleExampleClick(example)}
                    className="text-xs px-3 py-1.5 bg-slate-700/50 hover:bg-slate-600/50 rounded-full text-slate-300 transition"
                  >
                    {example}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {(breakdown || isProcessing) && (
            <section className="space-y-6">
              {activeTask && (
                <div className="bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 border border-violet-500/20 rounded-xl p-4">
                  <div className="text-sm text-violet-300 mb-1">任务目标</div>
                  <div className="text-lg font-medium">{activeTask}</div>
                </div>
              )}

              {breakdown && (
                <div className="space-y-3">
                  <h3 className="text-sm text-slate-400 flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Agent 职责分配
                  </h3>

                  {breakdown.agents.map((item, index) => (
                    <div
                      key={item.agent.id}
                      className={`
                        bg-slate-800/30 border rounded-xl p-4 transition-all duration-500
                        ${index <= activeAgentIndex
                          ? 'border-slate-600/50 opacity-100 translate-x-0'
                          : 'border-transparent opacity-30 translate-x-4'}
                        ${item.isCore ? 'ring-1 ring-violet-500/30' : ''}
                      `}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 ${item.agent.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <item.agent.icon className="w-6 h-6 text-white" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold">{item.agent.name}</span>
                            <span className="text-xs px-2 py-0.5 bg-slate-700/50 rounded-full text-slate-400">
                              {item.agent.role}
                            </span>
                            {item.isCore && (
                              <span className="text-xs px-2 py-0.5 bg-violet-500/20 text-violet-300 rounded-full">
                                核心
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-slate-400 mb-2">{item.responsibility}</p>
                          <div className="flex items-center gap-2 text-xs">
                            <ChevronRight className="w-3 h-3 text-slate-500" />
                            <span className="text-slate-500">输出：</span>
                            <span className="text-green-400">{item.output}</span>
                          </div>
                        </div>

                        {index <= activeAgentIndex && (
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => router.push(`/configure/${item.agent.id}`)}
                              className="flex items-center gap-1.5 text-xs px-3 py-1.5 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg text-slate-300 transition"
                            >
                              <Settings className="w-3.5 h-3.5" />
                              配置
                            </button>
                            <div className="flex items-center gap-1.5 text-xs text-green-400">
                              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                              就绪
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {breakdown && activeAgentIndex >= breakdown.agents.length - 1 && (
                <div className="mt-8 bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                  <h3 className="text-sm text-slate-400 mb-4">协作流程</h3>
                  <div className="flex items-center justify-center flex-wrap gap-2">
                    {breakdown.agents.map((item, index) => (
                      <div key={item.agent.id} className="flex items-center">
                        <div className={`w-10 h-10 ${item.agent.color} rounded-lg flex items-center justify-center`}>
                          <item.agent.icon className="w-5 h-5 text-white" />
                        </div>
                        {index < breakdown.agents.length - 1 && (
                          <ArrowRight className="w-5 h-5 text-slate-600 mx-1" />
                        )}
                      </div>
                    ))}
                  </div>
                  <p className="text-center text-xs text-slate-500 mt-4">
                    Brand Agent 贯穿始终，确保每个环节都符合品牌调性
                  </p>
                </div>
              )}
            </section>
          )}

          {!breakdown && !isProcessing && (
            <section className="mt-12">
              <h3 className="text-center text-sm text-slate-500 mb-6">点击配置你的 AI Agents</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                {agents.map((agent) => (
                  <button
                    key={agent.id}
                    onClick={() => router.push(`/configure/${agent.id}`)}
                    className="bg-slate-800/30 border border-slate-700/30 rounded-xl p-4 text-center hover:border-violet-500/50 hover:bg-slate-800/50 transition group"
                  >
                    <div className={`w-12 h-12 ${agent.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition`}>
                      <agent.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-sm font-medium">{agent.name.replace(' Agent', '')}</div>
                    <div className="text-xs text-slate-500 mb-2">{agent.role}</div>
                    <div className="text-xs text-violet-400 opacity-0 group-hover:opacity-100 transition">
                      点击配置 →
                    </div>
                  </button>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      <footer className="border-t border-slate-800 py-6 px-6">
        <div className="max-w-4xl mx-auto text-center text-sm text-slate-500">
          Rolevio - AI Brand Agent Platform | Role + Evolution
        </div>
      </footer>
    </main>
  )
}
