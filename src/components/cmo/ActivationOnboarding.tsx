'use client'

import { useState } from 'react'
import { ChevronRight, Rocket, TrendingUp, Trophy, ArrowRight } from 'lucide-react'

const stages = [
  {
    id: 'pre-seed',
    icon: Rocket,
    title: 'Pre-融资',
    description: '快速验证 PMF',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'growth',
    icon: TrendingUp,
    title: '扩张期',
    description: '占领市场份额',
    color: 'from-violet-500 to-purple-500',
  },
  {
    id: 'scale',
    icon: Trophy,
    title: 'Pre-IPO',
    description: '建立领导力',
    color: 'from-orange-500 to-red-500',
  },
]

const budgetOptions = [
  { label: '< $50K', value: 'small', description: '初创团队，快速验证' },
  { label: '$50K - $200K', value: 'medium', description: '成长期，扩大规模' },
  { label: '> $200K', value: 'large', description: '成熟期，领导市场' },
]

const focusAreas = [
  { id: 'users', label: '用户增长', description: '快速获取目标用户' },
  { id: 'brand', label: '品牌价值', description: '建立品牌认知和影响力' },
  { id: 'market', label: '市场份额', description: '占领细分市场' },
  { id: 'roi', label: 'ROI 优化', description: '提升市场投入回报' },
]

export function ActivationOnboarding() {
  const [step, setStep] = useState(1)
  const [selectedStage, setSelectedStage] = useState<string | null>(null)
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null)
  const [selectedFocus, setSelectedFocus] = useState<string[]>([])

  const canProceed = () => {
    if (step === 1) return selectedStage !== null
    if (step === 2) return selectedBudget !== null
    if (step === 3) return selectedFocus.length > 0
    return false
  }

  const handleNext = () => {
    if (canProceed()) {
      if (step < 3) {
        setStep(step + 1)
      } else {
        // Final step - would trigger actual onboarding
        console.log('Onboarding complete', { selectedStage, selectedBudget, selectedFocus })
      }
    }
  }

  const toggleFocus = (id: string) => {
    setSelectedFocus(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    )
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Progress Indicator */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition ${
                i === step
                  ? 'bg-gradient-to-br from-primary-500 to-primary-600 text-white'
                  : i < step
                  ? 'bg-green-500/20 text-green-400'
                  : 'bg-slate-800 text-slate-500'
              }`}>
                {i < step ? '✓' : i}
              </div>
              {i < 3 && (
                <div className={`w-16 h-1 mx-2 rounded transition ${
                  i < step ? 'bg-green-500/50' : 'bg-slate-800'
                }`} />
              )}
            </div>
          ))}
        </div>

        <div className="glass-card">
          {/* Step 1: Stage Selection */}
          {step === 1 && (
            <div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  你的公司现在处于什么阶段？
                </h3>
                <p className="text-slate-400">
                  我们会根据你的阶段推荐最适合的 AI 自动化方案
                </p>
              </div>

              <div className="grid gap-4 mb-8">
                {stages.map((stage) => {
                  const Icon = stage.icon
                  const isSelected = selectedStage === stage.id
                  return (
                    <button
                      key={stage.id}
                      onClick={() => setSelectedStage(stage.id)}
                      className={`p-6 rounded-xl border-2 transition text-left ${
                        isSelected
                          ? 'border-primary-500 bg-primary-500/10'
                          : 'border-slate-700 hover:border-slate-600 bg-slate-800/30'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stage.color} flex items-center justify-center flex-shrink-0`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-white mb-1">
                            {stage.title}
                          </h4>
                          <p className="text-sm text-slate-400">
                            {stage.description}
                          </p>
                        </div>
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition ${
                          isSelected
                            ? 'border-primary-500 bg-primary-500'
                            : 'border-slate-600'
                        }`}>
                          {isSelected && <div className="w-3 h-3 rounded-full bg-white" />}
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* Step 2: Budget Selection */}
          {step === 2 && (
            <div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  你的月度市场预算范围？
                </h3>
                <p className="text-slate-400">
                  AI 会根据预算自动优化投放和内容生产策略
                </p>
              </div>

              <div className="grid gap-4 mb-8">
                {budgetOptions.map((option) => {
                  const isSelected = selectedBudget === option.value
                  return (
                    <button
                      key={option.value}
                      onClick={() => setSelectedBudget(option.value)}
                      className={`p-6 rounded-xl border-2 transition text-left ${
                        isSelected
                          ? 'border-primary-500 bg-primary-500/10'
                          : 'border-slate-700 hover:border-slate-600 bg-slate-800/30'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-white mb-1">
                            {option.label} / 月
                          </h4>
                          <p className="text-sm text-slate-400">
                            {option.description}
                          </p>
                        </div>
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition ${
                          isSelected
                            ? 'border-primary-500 bg-primary-500'
                            : 'border-slate-600'
                        }`}>
                          {isSelected && <div className="w-3 h-3 rounded-full bg-white" />}
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* Step 3: Focus Areas */}
          {step === 3 && (
            <div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  你最关心哪些市场指标？
                </h3>
                <p className="text-slate-400">
                  可多选 · AI 会优先优化这些指标
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {focusAreas.map((area) => {
                  const isSelected = selectedFocus.includes(area.id)
                  return (
                    <button
                      key={area.id}
                      onClick={() => toggleFocus(area.id)}
                      className={`p-6 rounded-xl border-2 transition text-left ${
                        isSelected
                          ? 'border-primary-500 bg-primary-500/10'
                          : 'border-slate-700 hover:border-slate-600 bg-slate-800/30'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition ${
                          isSelected
                            ? 'border-primary-500 bg-primary-500'
                            : 'border-slate-600'
                        }`}>
                          {isSelected && <span className="text-white text-sm">✓</span>}
                        </div>
                        <div>
                          <h4 className="text-base font-semibold text-white mb-1">
                            {area.label}
                          </h4>
                          <p className="text-sm text-slate-400">
                            {area.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between pt-6 border-t border-white/10">
            {step > 1 ? (
              <button
                onClick={() => setStep(step - 1)}
                className="flex items-center gap-2 text-slate-400 hover:text-white transition"
              >
                <ChevronRight className="w-4 h-4 rotate-180" />
                上一步
              </button>
            ) : (
              <div />
            )}

            <button
              onClick={handleNext}
              disabled={!canProceed()}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition ${
                canProceed()
                  ? 'bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white'
                  : 'bg-slate-700 text-slate-500 cursor-not-allowed'
              }`}
            >
              {step < 3 ? '下一步' : '开始 AI 自动化'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Hint */}
        <div className="mt-6 text-center text-sm text-slate-500">
          根据你的选择，AI 会自动配置最优的增长策略
        </div>
      </div>
    </section>
  )
}
