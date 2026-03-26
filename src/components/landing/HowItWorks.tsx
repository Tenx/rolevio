import { Upload, Cpu, Wand2, Rocket, CheckCircle } from 'lucide-react'

const steps = [
  {
    icon: Upload,
    title: '上传品牌资料',
    description: '上传 Logo、品牌手册、历史内容等资料',
  },
  {
    icon: Cpu,
    title: 'Brand Agent 学习',
    description: 'AI 分析并提取品牌 DNA：调性、风格、语言',
  },
  {
    icon: Wand2,
    title: '配置 Agent 团队',
    description: '选择需要的 Agent，设置工作流程',
  },
  {
    icon: Rocket,
    title: '开始智能营销',
    description: 'Agent 协作生成内容，自动发布，持续优化',
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            4 步开启 <span className="text-gradient">智能营销</span>
          </h2>
          <p className="text-lg text-dark-400 max-w-2xl mx-auto">
            简单配置，快速上手，让 AI 理解你的品牌
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 -translate-y-1/2" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2 w-8 h-8 bg-dark-800 border-2 border-primary-500 rounded-full flex items-center justify-center z-10">
                  <span className="text-primary-500 font-bold text-sm">{index + 1}</span>
                </div>

                <div className="glass-card text-center pt-8 lg:pt-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-primary-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-dark-400 text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Example Workflow */}
        <div className="mt-16 glass-card">
          <h3 className="text-xl font-semibold text-white mb-6 text-center">
            示例：新品上市 Campaign
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            {[
              { agent: 'Strategy', action: '制定方案' },
              { agent: 'Brand', action: '校验一致性' },
              { agent: 'Copywriter', action: '生成文案' },
              { agent: 'Designer', action: '生成设计' },
              { agent: 'Campaign', action: '多渠道发布' },
              { agent: 'Analytics', action: '效果监控' },
            ].map((item, index) => (
              <div key={item.agent} className="flex items-center gap-2">
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5">
                  <span className="text-primary-400 font-medium">{item.agent}</span>
                  <span className="text-dark-400">{item.action}</span>
                </div>
                {index < 5 && (
                  <span className="text-dark-500">→</span>
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-dark-400 mt-4">
            传统方式：2-4 周 → <span className="text-green-400 font-semibold">Rolevio：1 天</span>
          </p>
        </div>
      </div>
    </section>
  )
}
