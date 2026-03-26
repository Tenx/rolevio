'use client'

import { useState } from 'react'
import { Shield, PenTool, Palette, Target, Megaphone, LineChart } from 'lucide-react'

const agents = [
  {
    id: 'brand',
    name: 'Brand Agent',
    title: '品牌守护者',
    icon: Shield,
    color: 'from-primary-500 to-primary-600',
    description: '核心 Agent，学习并守护品牌 DNA，确保所有输出保持风格一致',
    capabilities: [
      '品牌 DNA 提取与建模',
      '风格一致性校验',
      '指导其他 Agent 工作',
      '持续学习品牌反馈',
    ],
  },
  {
    id: 'copywriter',
    name: 'Copywriter Agent',
    title: 'AI 文案',
    icon: PenTool,
    color: 'from-accent-500 to-accent-600',
    description: '生成符合品牌调性的各类文案，支持多种风格和场景',
    capabilities: [
      '广告语、Slogan 生成',
      '社交媒体文案',
      '产品描述、推文',
      '多语言内容创作',
    ],
  },
  {
    id: 'designer',
    name: 'Designer Agent',
    title: 'AI 设计师',
    icon: Palette,
    color: 'from-green-500 to-green-600',
    description: '自动生成品牌视觉内容，保持视觉识别系统一致',
    capabilities: [
      '海报、Banner 设计',
      '社交媒体图片',
      '多尺寸自动适配',
      '品牌视觉元素应用',
    ],
  },
  {
    id: 'strategy',
    name: 'Strategy Agent',
    title: 'AI 策略师',
    icon: Target,
    color: 'from-orange-500 to-orange-600',
    description: '分析市场趋势，制定营销策略，智能预算分配',
    capabilities: [
      '市场趋势分析',
      'Campaign 方案制定',
      '预算分配建议',
      '竞品监控分析',
    ],
  },
  {
    id: 'campaign',
    name: 'Campaign Agent',
    title: 'AI 投放',
    icon: Megaphone,
    color: 'from-pink-500 to-pink-600',
    description: '多渠道内容发布，智能排期，自动适配各平台规范',
    capabilities: [
      '多渠道一键发布',
      '智能排期优化',
      '平台格式适配',
      '发布效果追踪',
    ],
  },
  {
    id: 'analytics',
    name: 'Analytics Agent',
    title: 'AI 分析师',
    icon: LineChart,
    color: 'from-cyan-500 to-cyan-600',
    description: '实时监控营销效果，自动生成分析报告和优化建议',
    capabilities: [
      '实时效果 Dashboard',
      'AI 归因分析',
      '自动分析报告',
      '优化建议生成',
    ],
  },
]

export function Agents() {
  const [activeAgent, setActiveAgent] = useState(agents[0])

  return (
    <section id="agents" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            你的 <span className="text-gradient">AI 营销团队</span>
          </h2>
          <p className="text-lg text-dark-400 max-w-2xl mx-auto">
            每个角色都有专属 Agent，由 Brand Agent 统一协调，保持品牌一致性
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Agent List */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {agents.map((agent) => (
              <button
                key={agent.id}
                onClick={() => setActiveAgent(agent)}
                className={`glass p-4 rounded-xl text-left transition ${
                  activeAgent.id === agent.id
                    ? 'ring-2 ring-primary-500 bg-white/10'
                    : 'hover:bg-white/5'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${agent.color} flex items-center justify-center mb-3`}>
                  <agent.icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-white font-medium text-sm">{agent.name}</div>
                <div className="text-xs text-dark-400">{agent.title}</div>
              </button>
            ))}
          </div>

          {/* Agent Detail */}
          <div className="glass-card">
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${activeAgent.color} flex items-center justify-center`}>
                <activeAgent.icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{activeAgent.name}</h3>
                <p className="text-dark-400">{activeAgent.title}</p>
              </div>
            </div>

            <p className="text-dark-300 mb-6">{activeAgent.description}</p>

            <div>
              <h4 className="text-white font-semibold mb-3">核心能力</h4>
              <ul className="space-y-2">
                {activeAgent.capabilities.map((cap, index) => (
                  <li key={index} className="flex items-center gap-2 text-dark-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                    {cap}
                  </li>
                ))}
              </ul>
            </div>

            {activeAgent.id === 'brand' && (
              <div className="mt-6 p-4 bg-primary-500/10 rounded-lg border border-primary-500/20">
                <p className="text-sm text-primary-300">
                  <strong>核心提示：</strong>Brand Agent 是所有 Agent 的灵魂。
                  它确保无论哪个 Agent 产出的内容，都带有统一的品牌印记。
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
