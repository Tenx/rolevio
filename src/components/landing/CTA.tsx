import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="glass-card text-center relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-accent-500/10 to-primary-500/10" />

          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              准备好让营销角色<span className="text-gradient">进化</span>了吗？
            </h2>
            <p className="text-lg text-dark-300 mb-8 max-w-2xl mx-auto">
              立即注册，免费体验 Brand Agent 的强大能力
              <br />
              让你的品牌拥有自己的 AI 营销团队
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/register"
                className="group flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition"
              >
                免费开始使用
                <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
              </Link>
              <Link
                href="/demo"
                className="text-dark-300 hover:text-white transition"
              >
                预约演示 →
              </Link>
            </div>

            <p className="text-dark-500 text-sm mt-6">
              无需信用卡 · 14 天免费试用 · 随时取消
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
