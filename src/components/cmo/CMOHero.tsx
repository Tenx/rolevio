'use client'

import { TrendingUp, Target, Zap, ArrowRight, Sparkles } from 'lucide-react'
import { useState } from 'react'

export function CMOHero() {
  const [budget, setBudget] = useState(100)
  const [stage, setStage] = useState<'pre-seed' | 'growth' | 'scale'>('growth')

  // 根据阶段和预算计算不同的结果
  const getMetrics = () => {
    const baseMultiplier = stage === 'pre-seed' ? 5 : stage === 'growth' ? 8 : 12
    const reach = budget * baseMultiplier * 1000
    const weeks = stage === 'pre-seed' ? 8 : stage === 'growth' ? 12 : 16
    const roi = stage === 'pre-seed' ? 6 : stage === 'growth' ? 8.5 : 12

    return { reach, weeks, roi }
  }

  const metrics = getMetrics()

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Status Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass">
            <Sparkles className="w-4 h-4 text-green-400 mr-2" />
            <span className="text-sm text-slate-300">
              AI 自动化市场增长循环 · 已帮助 12+ 团队完成市场建立
            </span>
          </div>
        </div>

        {/* Main Value Prop */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">从想法到</span>
            <br />
            <span className="text-gradient">市场领导力</span>
            <br />
            <span className="text-white">只需 6 个月</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto mb-4">
            AI 驱动的市场增长自动化平台 · <span className="text-primary-400 font-semibold">自动识别、执行、优化</span>
          </p>
          <p className="text-base text-slate-500 max-w-2xl mx-auto">
            你负责战略决策，AI 负责从执行到上市的全部市场工作
          </p>
        </div>

        {/* Stage Selector */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex items-center justify-center gap-3 mb-8">
            <button
              onClick={() => setStage('pre-seed')}
              className={`px-6 py-3 rounded-xl font-medium transition ${
                stage === 'pre-seed'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                  : 'bg-slate-800/50 text-slate-400 hover:bg-slate-700/50'
              }`}
            >
              Pre-融资
            </button>
            <button
              onClick={() => setStage('growth')}
              className={`px-6 py-3 rounded-xl font-medium transition ${
                stage === 'growth'
                  ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white'
                  : 'bg-slate-800/50 text-slate-400 hover:bg-slate-700/50'
              }`}
            >
              扩张期
            </button>
            <button
              onClick={() => setStage('scale')}
              className={`px-6 py-3 rounded-xl font-medium transition ${
                stage === 'scale'
                  ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white'
                  : 'bg-slate-800/50 text-slate-400 hover:bg-slate-700/50'
              }`}
            >
              Pre-IPO
            </button>
          </div>
        </div>

        {/* Interactive Calculator */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="glass-card">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                💰 市场投入 → AI 自动化 → 市场成果
              </h3>
              <p className="text-sm text-slate-400">
                调整预算，实时预测 AI 驱动的市场成果
              </p>
            </div>

            {/* Budget Slider */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm text-slate-400">月度市场预算</label>
                <span className="text-2xl font-bold text-white">
                  ${budget}K
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="500"
                step="10"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary-500"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>$20K</span>
                <span>$500K</span>
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-gradient-to-br from-primary-500/10 to-primary-600/5 border border-primary-500/20 rounded-xl p-5 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-primary-400" />
                  <span className="text-sm text-slate-400">AI 自动触达</span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  {(metrics.reach / 1000).toFixed(0)}K
                </div>
                <div className="text-xs text-primary-300">目标用户覆盖</div>
              </div>

              <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20 rounded-xl p-5 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-green-400" />
                  <span className="text-sm text-slate-400">启动速度</span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  {metrics.weeks} 周
                </div>
                <div className="text-xs text-green-300">完整市场体系</div>
              </div>

              <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20 rounded-xl p-5 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-orange-400" />
                  <span className="text-sm text-slate-400">AI 优化 ROI</span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  {metrics.roi}x
                </div>
                <div className="text-xs text-orange-300">传统方式的效率</div>
              </div>
            </div>

            {/* AI Automation Flow */}
            <div className="bg-slate-900/50 rounded-xl p-6 mb-6">
              <h4 className="text-sm font-semibold text-slate-400 mb-4 uppercase tracking-wider">
                AI 自动化增长循环（每周迭代）
              </h4>
              <div className="space-y-3">
                {[
                  { week: 'Week 1', action: 'AI 识别市场机会', result: '发现 3 个高潜力渠道' },
                  { week: 'Week 2', action: 'AI 生成内容矩阵', result: '产出 50+ 内容变体' },
                  { week: 'Week 3', action: 'AI 优化投放策略', result: 'ROI 提升 3.2x' },
                  { week: 'Week 4', action: 'AI 分析竞品动态', result: '调整市场定位' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-20 text-xs font-mono text-slate-500">{item.week}</div>
                    <div className="flex-1 flex items-center gap-2">
                      <div className="h-px flex-1 bg-gradient-to-r from-primary-500/50 to-transparent" />
                      <span className="text-sm text-slate-300">{item.action}</span>
                      <ArrowRight className="w-4 h-4 text-slate-600" />
                      <span className="text-sm text-green-400">{item.result}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <button className="group inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition">
                开始自动化你的市场增长
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </button>
              <p className="text-xs text-slate-500 mt-3">
                无需配置 · AI 自动运作 · 15 分钟启动
              </p>
            </div>
          </div>
        </div>

        {/* Social Proof Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { value: '6 个月', label: '平均市场建立周期', highlight: true },
            { value: '10x', label: 'AI 自动化效率', highlight: false },
            { value: '24/7', label: '持续优化迭代', highlight: false },
            { value: '0 配置', label: 'AI 自动运作', highlight: false },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className={`text-3xl sm:text-4xl font-bold mb-2 ${
                stat.highlight ? 'text-gradient' : 'text-white'
              }`}>
                {stat.value}
              </div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
