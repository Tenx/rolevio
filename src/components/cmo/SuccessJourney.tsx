'use client'

import { Rocket, TrendingUp, Trophy, CheckCircle2, ArrowRight } from 'lucide-react'

const journeys = [
  {
    stage: 'Pre-融资',
    icon: Rocket,
    color: 'from-blue-500 to-cyan-500',
    scenario: '种子轮前，需要快速验证市场',
    investment: '月预算 $30K',
    timeline: '8 周',
    outcomes: [
      '建立品牌基础识别系统',
      '3 个渠道完成 MVP 营销',
      '获得 5K+ 早期用户反馈',
      '完成 A/B 测试市场定位',
    ],
    result: '成功融资 $2M，估值 $15M',
  },
  {
    stage: '扩张期',
    icon: TrendingUp,
    color: 'from-violet-500 to-purple-500',
    scenario: 'A 轮后，需要快速占领市场',
    investment: '月预算 $150K',
    timeline: '16 周',
    outcomes: [
      '覆盖 10+ 主流营销渠道',
      '建立自动化内容生产体系',
      '实现 50K+ 月活用户增长',
      '完成 3 个区域市场进入',
    ],
    result: 'B 轮融资 $20M，估值 $120M',
  },
  {
    stage: 'Pre-IPO',
    icon: Trophy,
    color: 'from-orange-500 to-red-500',
    scenario: 'C 轮后，需要建立行业领导力',
    investment: '月预算 $500K',
    timeline: '24 周',
    outcomes: [
      '覆盖全球 20+ 市场',
      '建立完整品牌资产库',
      '实现百万级用户触达',
      '完成行业影响力建设',
    ],
    result: '成功 IPO，市值 $1.5B',
  },
]

export function SuccessJourney() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            <span className="text-gradient">不同阶段</span>，同样的进化速度
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            从早期验证到 IPO，Rolevio 在每个关键节点加速你的市场能力建设
          </p>
        </div>

        {/* Journey Cards */}
        <div className="space-y-8">
          {journeys.map((journey, index) => {
            const Icon = journey.icon
            return (
              <div
                key={journey.stage}
                className="glass-card hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="grid lg:grid-cols-[300px_1fr_250px] gap-8 items-start">
                  {/* Stage Info */}
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${journey.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {journey.stage}
                      </h3>
                      <p className="text-sm text-slate-400 mb-4">
                        {journey.scenario}
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-slate-500">投入：</span>
                          <span className="text-primary-400 font-semibold">
                            {journey.investment}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-slate-500">周期：</span>
                          <span className="text-green-400 font-semibold">
                            {journey.timeline}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Outcomes */}
                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wider">
                      Rolevio 驱动成果
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {journey.outcomes.map((outcome, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 text-sm text-slate-300"
                        >
                          <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          <span>{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Result */}
                  <div className="bg-gradient-to-br from-primary-500/10 to-accent-500/10 border border-primary-500/20 rounded-xl p-6 text-center">
                    <div className="text-xs text-slate-400 mb-2 uppercase tracking-wider">
                      最终结果
                    </div>
                    <div className="text-lg font-bold text-white leading-snug">
                      {journey.result}
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <button className="text-sm text-primary-400 hover:text-primary-300 flex items-center gap-1 mx-auto group/btn transition">
                        查看详细案例
                        <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Progress Indicator */}
                {index < journeys.length - 1 && (
                  <div className="flex justify-center mt-6">
                    <div className="w-1 h-8 bg-gradient-to-b from-slate-600 to-transparent" />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 mb-4">
            你的团队在哪个阶段？
          </p>
          <button className="text-primary-400 hover:text-primary-300 font-semibold flex items-center gap-2 mx-auto group transition">
            获取定制化进化方案
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </button>
        </div>
      </div>
    </section>
  )
}
