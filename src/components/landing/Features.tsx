import { Zap, Shield, RefreshCw, Layers, Globe, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: '品牌 DNA 守护',
    description: 'Brand Agent 学习并记忆你的品牌调性、视觉风格、语言风格，确保所有内容保持一致',
  },
  {
    icon: Layers,
    title: '多 Agent 协作',
    description: '文案、设计、策略、投放、分析 Agent 协同工作，覆盖营销全流程',
  },
  {
    icon: Zap,
    title: '效率提升 10 倍',
    description: '传统团队需要 2-4 周的 Campaign，Rolevio 只需 1-2 天',
  },
  {
    icon: RefreshCw,
    title: '自动化工作流',
    description: '设置触发条件，Agent 自动执行任务，无需人工干预',
  },
  {
    icon: Globe,
    title: '多渠道发布',
    description: '一键发布至微信、抖音、小红书、微博等平台，内容自动适配',
  },
  {
    icon: BarChart3,
    title: '数据驱动优化',
    description: 'Analytics Agent 实时监控效果，自动生成优化建议',
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            为什么选择 <span className="text-gradient">Rolevio</span>
          </h2>
          <p className="text-lg text-dark-400 max-w-2xl mx-auto">
            不是通用 AI 工具，而是深度理解品牌的智能营销团队
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-card hover:bg-white/10 transition group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-dark-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
