'use client'

import { TrendingUp, Target, Zap, ArrowRight } from 'lucide-react'
import { useState } from 'react'

export function CMOHero() {
  const [budget, setBudget] = useState(100)
  const projectedGrowth = budget * 8.5
  const timeToMarket = Math.max(2, 12 - Math.floor(budget / 20))

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Status Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
            <span className="text-sm text-slate-300">
              已帮助 12+ 团队在 6 个月内完成市场建立
            </span>
          </div>
        </div>

        {/* Main Value Prop */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">从 0 到</span>
            <br />
            <span className="text-gradient">IPO 级市场能力</span>
            <br />
            <span className="text-white">只需 6 个月</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto mb-4">
            不是替换你的团队，而是让你的团队能力 <span className="text-primary-400 font-semibold">10x 进化</span>
          </p>
          <p className="text-base text-slate-500 max-w-2xl mx-auto">
            Rolevio = Role + Evolution · 你负责战略决策，AI 负责执行到上市
          </p>
        </div>

        {/* Interactive ROI Calculator */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="glass-card">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                💰 市场投入回报计算器
              </h3>
              <p className="text-sm text-slate-400">
                调整预算，实时预测市场成果
              </p>
            </div>

            {/* Budget Slider */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm text-slate-400">月度营销预算</label>
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
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-primary-500/10 to-primary-600/5 border border-primary-500/20 rounded-xl p-5 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-primary-400" />
                  <span className="text-sm text-slate-400">市场覆盖</span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  {projectedGrowth.toFixed(0)}K
                </div>
                <div className="text-xs text-primary-300">目标用户触达</div>
              </div>

              <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20 rounded-xl p-5 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-green-400" />
                  <span className="text-sm text-slate-400">启动速度</span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  {timeToMarket} 周
                </div>
                <div className="text-xs text-green-300">完整市场体系</div>
              </div>

              <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20 rounded-xl p-5 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-orange-400" />
                  <span className="text-sm text-slate-400">ROI 倍数</span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  8.5x
                </div>
                <div className="text-xs text-orange-300">传统方式的效率</div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 text-center">
              <button className="group inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition">
                看看我的团队能进化成什么样
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </button>
              <p className="text-xs text-slate-500 mt-3">
                无需信用卡 · 15 分钟内部署 · 支持私有化
              </p>
            </div>
          </div>
        </div>

        {/* Social Proof Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { value: '6 个月', label: '平均上市周期', highlight: true },
            { value: '70%', label: '市场成本节省', highlight: false },
            { value: '10x', label: '团队效能提升', highlight: false },
            { value: '24/7', label: '市场响应速度', highlight: false },
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
