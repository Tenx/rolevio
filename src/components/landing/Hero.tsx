'use client'

import { ArrowRight, Play } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
            <span className="text-sm text-dark-300">
              Brand Agent 现已上线
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
            <span className="text-white">让营销角色</span>
            <br />
            <span className="text-gradient">进化</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-dark-300 max-w-2xl mx-auto mb-4">
            <span className="text-primary-400 font-semibold">Rolevio</span> = Role + Evolution
          </p>
          <p className="text-lg sm:text-xl text-dark-400 max-w-3xl mx-auto mb-10">
            用 AI Agent 替代营销团队中的各种角色，以 Brand Agent 为核心
            <br className="hidden sm:block" />
            保持品牌风格一致，实现智能营销自动化
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/register"
              className="group flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition"
            >
              免费开始使用
              <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
            </Link>
            <button className="flex items-center gap-2 glass hover:bg-white/10 text-white px-8 py-4 rounded-xl text-lg transition">
              <Play size={20} className="text-primary-400" />
              观看演示
            </button>
          </div>

          {/* Hero Image / Animation */}
          <div className="relative max-w-5xl mx-auto">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-accent-500/20 to-primary-500/20 blur-3xl" />

            {/* Dashboard Preview */}
            <div className="relative glass-card overflow-hidden">
              {/* Mock Dashboard Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg" />
                  <div>
                    <div className="text-white font-semibold">Your Brand</div>
                    <div className="text-sm text-dark-400">Brand Agent 已激活</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full">
                    在线
                  </span>
                </div>
              </div>

              {/* Agent Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                  { name: 'Brand', color: 'from-primary-500 to-primary-600', status: '守护中' },
                  { name: 'Copywriter', color: 'from-accent-500 to-accent-600', status: '待命' },
                  { name: 'Designer', color: 'from-green-500 to-green-600', status: '待命' },
                  { name: 'Strategy', color: 'from-orange-500 to-orange-600', status: '待命' },
                  { name: 'Campaign', color: 'from-pink-500 to-pink-600', status: '待命' },
                ].map((agent) => (
                  <div
                    key={agent.name}
                    className="glass p-4 rounded-xl text-center hover:bg-white/10 transition cursor-pointer"
                  >
                    <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${agent.color} flex items-center justify-center`}>
                      <span className="text-white text-xs font-bold">
                        {agent.name.slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                    <div className="text-white text-sm font-medium">{agent.name}</div>
                    <div className="text-xs text-dark-400">{agent.status}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
            {[
              { value: '10x', label: '效率提升' },
              { value: '70%', label: '成本降低' },
              { value: '100%', label: '品牌一致性' },
              { value: '24/7', label: '全天候工作' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-dark-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
