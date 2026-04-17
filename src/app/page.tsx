'use client'

import { Sparkles, ArrowRight, Shield, Bot, Zap } from 'lucide-react'
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
              <div className="text-xs text-slate-500">AI Growth Automation</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="#automation" className="text-sm text-slate-400 hover:text-white transition">
              AI 自动化
            </a>
            <a href="#journey" className="text-sm text-slate-400 hover:text-white transition">
              成功案例
            </a>
            <button className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition">
              开始免费试用
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <CMOHero />

      {/* Market Dashboard */}
      <div id="automation">
        <MarketDashboard />
      </div>

      {/* Success Journey */}
      <div id="journey">
        <SuccessJourney />
      </div>

      {/* How It Works - AI Automation */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              AI 自动化引擎：从决策到执行
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              无需配置复杂的工具，AI 自动运作整个市场增长循环
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                AI 自动识别机会
              </h3>
              <p className="text-sm text-slate-400">
                分析市场数据、竞品动态、用户反馈，自动发现增长机会
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                AI 自动执行优化
              </h3>
              <p className="text-sm text-slate-400">
                生成内容、投放广告、A/B 测试、实时优化，全程自动化
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                品牌 DNA 守护
              </h3>
              <p className="text-sm text-slate-400">
                AI 学习品牌基因，确保所有输出保持风格和价值观一致
              </p>
            </div>
          </div>

          <div className="mt-12 glass-card max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  为什么选择 AI 自动化？
                </h3>
                <ul className="space-y-3">
                  {[
                    '0 配置：AI 自动运作，无需复杂设置',
                    '24/7：持续监控优化，永不休息',
                    '10x 速度：从决策到执行只需几小时',
                    '指数增长：每周自动迭代优化',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-300">
                      <span className="w-6 h-6 rounded-lg bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary-400 text-sm font-bold">{index + 1}</span>
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-900/50 rounded-xl p-6">
                <div className="text-xs text-slate-500 font-mono mb-3">AI 自动化示例</div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                    <div>
                      <div className="text-slate-400 mb-1">Week 1 Mon 09:00</div>
                      <div className="text-white">AI 识别 Reddit 新兴社区</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                    <div>
                      <div className="text-slate-400 mb-1">Week 1 Mon 14:30</div>
                      <div className="text-white">AI 生成 20 个内容变体</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-violet-400 mt-2 flex-shrink-0" />
                    <div>
                      <div className="text-slate-400 mb-1">Week 1 Tue 10:00</div>
                      <div className="text-white">AI 启动 A/B 测试</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                    <div>
                      <div className="text-slate-400 mb-1">Week 1 Fri 16:00</div>
                      <div className="text-white">AI 优化：CTR ↑ 3.2x</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              准备好让 AI <span className="text-gradient">自动驱动</span>你的市场增长了吗？
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              和我们聊聊，看看 Rolevio 如何帮助你在 6 个月内建立市场领导力
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="group flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition">
                开始 15 天免费试用
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </button>
              <button className="flex items-center gap-2 glass hover:bg-white/10 text-white px-8 py-4 rounded-xl text-lg transition">
                预约产品演示
              </button>
            </div>
            <p className="text-xs text-slate-500 mt-6">
              已服务 12+ 创业公司 · 平均 6 个月完成市场建立 · 无需信用卡
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
                AI 驱动的市场增长自动化
                <br />
                From Idea to Market Leadership
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-3">产品</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition">AI 自动化</a></li>
                <li><a href="#" className="hover:text-white transition">定价方案</a></li>
                <li><a href="#" className="hover:text-white transition">客户案例</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-3">资源</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition">使用文档</a></li>
                <li><a href="/demo" className="hover:text-white transition">技术演示</a></li>
                <li><a href="#" className="hover:text-white transition">博客</a></li>
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
            © 2026 Rolevio. AI Growth Automation Platform.
          </div>
        </div>
      </footer>
    </main>
  )
}
