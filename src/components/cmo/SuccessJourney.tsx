'use client'

import { Rocket, TrendingUp, Trophy, Bot, Repeat, BarChart3 } from 'lucide-react'

const automationCycles = [
  {
    stage: 'Pre-融资阶段',
    icon: Rocket,
    color: 'from-blue-500 to-cyan-500',
    scenario: '8 周验证 PMF',
    investment: '月预算 $30K',
    aiAutomation: [
      {
        phase: 'Week 1-2',
        icon: Bot,
        title: 'AI 自动市场扫描',
        actions: [
          '分析 100+ 竞品动态',
          '识别 3 个高潜力细分市场',
          '自动生成 MVP 营销方案',
        ]
      },
      {
        phase: 'Week 3-5',
        icon: Repeat,
        title: 'AI 自动内容引擎',
        actions: [
          '生成 50+ 内容变体',
          '在 5 个渠道 A/B 测试',
          '实时优化转化率',
        ]
      },
      {
        phase: 'Week 6-8',
        icon: BarChart3,
        title: 'AI 自动分析迭代',
        actions: [
          '追踪 5K+ 用户反馈',
          '识别核心价值主张',
          '输出融资市场数据',
        ]
      },
    ],
    result: {
      highlight: '成功融资 $2M',
      details: '估值 $15M · PMF 验证完成',
    }
  },
  {
    stage: '扩张期',
    icon: TrendingUp,
    color: 'from-violet-500 to-purple-500',
    scenario: '12 周占领市场',
    investment: '月预算 $150K',
    aiAutomation: [
      {
        phase: 'Week 1-4',
        icon: Bot,
        title: 'AI 自动渠道扩张',
        actions: [
          '覆盖 15+ 主流渠道',
          '自动化内容生产体系',
          '实时预算优化分配',
        ]
      },
      {
        phase: 'Week 5-8',
        icon: Repeat,
        title: 'AI 自动增长引擎',
        actions: [
          '每周产出 200+ 内容',
          '自动化投放和优化',
          '实现 10K+ 周活增长',
        ]
      },
      {
        phase: 'Week 9-12',
        icon: BarChart3,
        title: 'AI 自动竞品追踪',
        actions: [
          '监控 20+ 竞品动态',
          '自动调整市场策略',
          '完成 3 个区域进入',
        ]
      },
    ],
    result: {
      highlight: 'B 轮融资 $20M',
      details: '估值 $120M · 市场份额 15%',
    }
  },
  {
    stage: 'Pre-IPO',
    icon: Trophy,
    color: 'from-orange-500 to-red-500',
    scenario: '16 周建立领导力',
    investment: '月预算 $500K',
    aiAutomation: [
      {
        phase: 'Week 1-6',
        icon: Bot,
        title: 'AI 自动全球扩张',
        actions: [
          '进入 20+ 全球市场',
          '自动化多语言内容',
          '建立品牌资产库',
        ]
      },
      {
        phase: 'Week 7-12',
        icon: Repeat,
        title: 'AI 自动品牌建设',
        actions: [
          '产出 1000+ 品牌内容',
          '自动化 PR 和媒体关系',
          '实现百万级触达',
        ]
      },
      {
        phase: 'Week 13-16',
        icon: BarChart3,
        title: 'AI 自动影响力建设',
        actions: [
          '追踪行业全维度数据',
          '自动生成思想领导力内容',
          '完成上市准备',
        ]
      },
    ],
    result: {
      highlight: '成功 IPO',
      details: '市值 $1.5B · 行业领导者',
    }
  },
]

export function SuccessJourney() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            AI 自动化<span className="text-gradient">增长循环</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            从市场验证到 IPO，AI 驱动每周自动迭代优化
          </p>
        </div>

        {/* Automation Cycles */}
        <div className="space-y-12">
          {automationCycles.map((cycle, index) => {
            const Icon = cycle.icon
            return (
              <div
                key={cycle.stage}
                className="glass-card hover:bg-white/10 transition-all duration-300"
              >
                {/* Cycle Header */}
                <div className="flex items-start gap-6 mb-8 pb-8 border-b border-white/10">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${cycle.color} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {cycle.stage}
                    </h3>
                    <p className="text-slate-400 mb-4">
                      {cycle.scenario}
                    </p>
                    <div className="flex items-center gap-6 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-slate-500">投入：</span>
                        <span className="text-primary-400 font-semibold">
                          {cycle.investment}
                        </span>
                      </div>
                      <div className="w-px h-4 bg-slate-600" />
                      <div className="flex items-center gap-2">
                        <Bot className="w-4 h-4 text-green-400" />
                        <span className="text-green-400 font-semibold">
                          AI 全自动运作
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-primary-500/10 to-accent-500/10 border border-primary-500/20 rounded-xl p-6 text-center min-w-[200px]">
                    <div className="text-xs text-slate-400 mb-2 uppercase tracking-wider">
                      最终结果
                    </div>
                    <div className="text-lg font-bold text-white mb-1">
                      {cycle.result.highlight}
                    </div>
                    <div className="text-xs text-slate-400">
                      {cycle.result.details}
                    </div>
                  </div>
                </div>

                {/* AI Automation Phases */}
                <div className="grid lg:grid-cols-3 gap-6">
                  {cycle.aiAutomation.map((phase, phaseIndex) => {
                    const PhaseIcon = phase.icon
                    return (
                      <div
                        key={phaseIndex}
                        className="bg-slate-900/50 rounded-xl p-6"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                            <PhaseIcon className="w-5 h-5 text-primary-400" />
                          </div>
                          <div>
                            <div className="text-xs text-slate-500 font-mono">
                              {phase.phase}
                            </div>
                            <div className="text-sm font-semibold text-white">
                              {phase.title}
                            </div>
                          </div>
                        </div>
                        <ul className="space-y-2">
                          {phase.actions.map((action, actionIndex) => (
                            <li key={actionIndex} className="flex items-start gap-2 text-sm text-slate-300">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 flex-shrink-0" />
                              <span>{action}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  })}
                </div>

                {/* Progress Indicator */}
                {index < automationCycles.length - 1 && (
                  <div className="flex justify-center mt-8">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-slate-600" />
                      <div className="w-2 h-2 rounded-full bg-slate-600" />
                      <div className="w-2 h-2 rounded-full bg-slate-600" />
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 glass px-6 py-4 rounded-xl">
            <Bot className="w-5 h-5 text-green-400" />
            <span className="text-slate-400 text-sm">
              AI 自动运作 · 无需配置 · 每周自动优化
            </span>
            <div className="w-px h-4 bg-slate-600" />
            <span className="text-slate-500 text-xs">
              你只需要关注战略决策
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
