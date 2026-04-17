'use client'

import { BarChart3, TrendingUp, Users, Target, Clock, Zap } from 'lucide-react'
import { useState, useEffect } from 'react'

export function MarketDashboard() {
  const [activeMetric, setActiveMetric] = useState(0)
  const [animatedValue, setAnimatedValue] = useState(0)

  const metrics = [
    {
      icon: Users,
      label: '市场触达',
      value: 850000,
      unit: '用户',
      growth: '+340%',
      color: 'from-blue-500 to-cyan-500',
      description: '6 个月内覆盖目标用户数',
    },
    {
      icon: TrendingUp,
      label: '品牌价值',
      value: 15,
      unit: 'M',
      growth: '+1200%',
      color: 'from-violet-500 to-purple-500',
      description: '品牌资产估值增长',
    },
    {
      icon: Target,
      label: '市场份额',
      value: 23,
      unit: '%',
      growth: '+23%',
      color: 'from-green-500 to-emerald-500',
      description: '在细分市场的占有率',
    },
    {
      icon: Zap,
      label: '响应速度',
      value: 24,
      unit: 'hrs',
      growth: '10x faster',
      color: 'from-orange-500 to-red-500',
      description: '从决策到市场执行',
    },
  ]

  // Animate value changes
  useEffect(() => {
    const target = metrics[activeMetric].value
    const duration = 1000
    const steps = 60
    const stepValue = target / steps
    let current = 0

    const interval = setInterval(() => {
      current += stepValue
      if (current >= target) {
        current = target
        clearInterval(interval)
      }
      setAnimatedValue(Math.floor(current))
    }, duration / steps)

    return () => clearInterval(interval)
  }, [activeMetric])

  const currentMetric = metrics[activeMetric]
  const Icon = currentMetric.icon

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
            <BarChart3 className="w-4 h-4 text-primary-400" />
            <span className="text-sm text-slate-300">实时市场成果看板</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            这才是 CMO 该看的
            <span className="text-gradient"> 数据</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            不是 Agent 配置细节，而是市场成果和商业价值
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-8">
          {/* Main Visualization */}
          <div className="glass-card">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {currentMetric.label}
                </h3>
                <p className="text-sm text-slate-400">
                  {currentMetric.description}
                </p>
              </div>
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${currentMetric.color} flex items-center justify-center`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Big Number */}
            <div className="text-center py-12">
              <div className="text-7xl font-bold text-white mb-4">
                {animatedValue.toLocaleString()}
                <span className="text-4xl text-slate-400 ml-2">
                  {currentMetric.unit}
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-green-400 font-semibold">
                  {currentMetric.growth}
                </span>
                <span className="text-slate-400 text-sm">vs 传统方式</span>
              </div>
            </div>

            {/* Simple Chart Visualization */}
            <div className="space-y-3">
              {[
                { month: '第 1 月', progress: 15 },
                { month: '第 2 月', progress: 35 },
                { month: '第 3 月', progress: 58 },
                { month: '第 4 月', progress: 75 },
                { month: '第 5 月', progress: 88 },
                { month: '第 6 月', progress: 100 },
              ].map((data) => (
                <div key={data.month} className="flex items-center gap-4">
                  <span className="text-sm text-slate-400 w-16">
                    {data.month}
                  </span>
                  <div className="flex-1 h-3 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${currentMetric.color} rounded-full transition-all duration-1000`}
                      style={{ width: `${data.progress}%` }}
                    />
                  </div>
                  <span className="text-sm text-slate-300 w-12 text-right">
                    {data.progress}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Metric Selector */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
              选择查看指标
            </h4>
            {metrics.map((metric, index) => {
              const MetricIcon = metric.icon
              const isActive = activeMetric === index
              return (
                <button
                  key={index}
                  onClick={() => setActiveMetric(index)}
                  className={`w-full glass p-4 rounded-xl text-left transition-all ${
                    isActive
                      ? 'ring-2 ring-primary-500 bg-white/10'
                      : 'hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${metric.color} flex items-center justify-center flex-shrink-0`}>
                      <MetricIcon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white font-semibold mb-1">
                        {metric.label}
                      </div>
                      <div className="text-xs text-slate-400">
                        {metric.description}
                      </div>
                    </div>
                    {isActive && (
                      <div className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
                    )}
                  </div>
                </button>
              )
            })}

            {/* Additional Info */}
            <div className="glass p-4 rounded-xl">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-white mb-1">
                    实时更新
                  </div>
                  <div className="text-xs text-slate-400">
                    数据每 15 分钟同步一次，确保你始终掌握最新市场动态
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 glass px-6 py-3 rounded-xl">
            <span className="text-slate-400 text-sm">
              这些是 <span className="text-white font-semibold">市场成果</span>
            </span>
            <div className="w-px h-4 bg-slate-600" />
            <span className="text-slate-500 text-xs">
              背后的 AI Agent 自动运作，你不需要关心
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
