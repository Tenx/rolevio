'use client'

import { Sparkles, ArrowRight, Shield } from 'lucide-react'
import { CMOHero } from '@/components/cmo/CMOHero'
import { SuccessJourney } from '@/components/cmo/SuccessJourney'
import { MarketDashboard } from '@/components/cmo/MarketDashboard'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold">Rolevio</span>
              <div className="text-xs text-slate-500">Role + Evolution</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="#dashboard" className="text-sm text-slate-400 hover:text-white transition">
              成果展示
            </a>
            <a href="#journey" className="text-sm text-slate-400 hover:text-white transition">
              成功案例
            </a>
            <button className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition">
              预约演示
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <CMOHero />

      {/* Market Dashboard */}
      <div id="dashboard">
        <MarketDashboard />
      </div>

      {/* Success Journey */}
      <div id="journey">
        <SuccessJourney />
      </div>

      {/* How It Works - 轻量化技术说明 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              技术黑盒：AI Agent 自动运作
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              你只需要关注战略决策，剩下的全部自动化执行
            </p>
          </div>

          <div className="glass-card max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  品牌 DNA 守护
                </h3>
                <p className="text-sm text-slate-400">
                  AI 学习你的品牌基因，确保所有市场输出保持一致性
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  多角色协同
                </h3>
                <p className="text-sm text-slate-400">
                  策略、内容、设计、投放、分析等角色 AI Agent 自动协作
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  持续学习优化
                </h3>
                <p className="text-sm text-slate-400">
                  从市场反馈中学习，不断优化执行策略和内容质量
                </p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10 text-center">
              <p className="text-sm text-slate-500">
                想了解技术细节？
                <button className="text-primary-400 hover:text-primary-300 ml-2 transition">
                  查看 Agent 架构 →
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              准备好让你的团队 <span className="text-gradient">10x 进化</span>了吗？
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              和我们的团队聊聊，看看 Rolevio 如何帮助你在 6 个月内建立 IPO 级市场能力
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="group flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition">
                预约 1 对 1 演示
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </button>
              <button className="flex items-center gap-2 glass hover:bg-white/10 text-white px-8 py-4 rounded-xl text-lg transition">
                下载成功案例集
              </button>
            </div>
            <p className="text-xs text-slate-500 mt-6">
              已服务 12+ 创业公司 · 平均 6 个月完成市场建立 · 支持私有化部署
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold">Rolevio</span>
              </div>
              <p className="text-sm text-slate-500">
                让营销角色进化
                <br />
                Role + Evolution
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-3">产品</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition">功能特性</a></li>
                <li><a href="#" className="hover:text-white transition">定价方案</a></li>
                <li><a href="#" className="hover:text-white transition">客户案例</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-3">公司</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition">关于我们</a></li>
                <li><a href="#" className="hover:text-white transition">团队介绍</a></li>
                <li><a href="#" className="hover:text-white transition">加入我们</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-3">联系</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition">联系我们</a></li>
                <li><a href="#" className="hover:text-white transition">预约演示</a></li>
                <li><a href="#" className="hover:text-white transition">技术支持</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
            © 2026 Rolevio. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  )
}
