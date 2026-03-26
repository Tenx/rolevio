import { Check } from 'lucide-react'
import Link from 'next/link'

const plans = [
  {
    name: '成长版',
    price: '3,999',
    period: '/月',
    description: '适合初创品牌和小型企业',
    features: [
      '1 个品牌',
      '3 个 Agent (Brand + 2)',
      '3 个发布渠道',
      '每月 1000 次 AI 生成',
      '基础数据分析',
      '邮件支持',
    ],
    cta: '开始试用',
    popular: false,
  },
  {
    name: '专业版',
    price: '9,999',
    period: '/月',
    description: '适合成长型企业',
    features: [
      '1 个品牌',
      '全部 6 个 Agent',
      '无限发布渠道',
      '每月 5000 次 AI 生成',
      '高级数据分析',
      '自定义工作流',
      '优先支持',
    ],
    cta: '开始试用',
    popular: true,
  },
  {
    name: '企业版',
    price: '29,999',
    period: '起/月',
    description: '适合大型企业和集团',
    features: [
      '多品牌管理',
      '全部 Agent + 定制',
      '无限渠道和生成',
      '私有化部署',
      '专属客户成功经理',
      'API 集成',
      'SLA 保障',
    ],
    cta: '联系销售',
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            选择适合你的 <span className="text-gradient">方案</span>
          </h2>
          <p className="text-lg text-dark-400 max-w-2xl mx-auto">
            灵活定价，按需选择，随时升级
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative glass-card ${
                plan.popular ? 'ring-2 ring-primary-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary-500 rounded-full text-sm font-medium text-white">
                  最受欢迎
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-white">
                    ¥{plan.price}
                  </span>
                  <span className="text-dark-400">{plan.period}</span>
                </div>
                <p className="text-dark-400 text-sm mt-2">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-dark-300">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={plan.name === '企业版' ? '/contact' : '/register'}
                className={`block w-full py-3 rounded-lg text-center font-medium transition ${
                  plan.popular
                    ? 'bg-primary-600 hover:bg-primary-700 text-white'
                    : 'glass hover:bg-white/10 text-white'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* FAQ teaser */}
        <div className="text-center mt-12">
          <p className="text-dark-400">
            有问题？查看{' '}
            <Link href="/faq" className="text-primary-400 hover:underline">
              常见问题
            </Link>{' '}
            或{' '}
            <Link href="/contact" className="text-primary-400 hover:underline">
              联系我们
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
