'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import {
  Shield, PenTool, Palette, Target, Megaphone, LineChart,
  ArrowLeft, Save, Plus, X, ChevronDown, Sparkles, Check
} from 'lucide-react'

// Agent 配置定义
const agentConfigs: Record<string, {
  id: string
  name: string
  role: string
  icon: typeof Shield
  color: string
  description: string
  configSections: {
    title: string
    fields: {
      id: string
      label: string
      type: 'text' | 'textarea' | 'select' | 'tags' | 'slider' | 'toggle'
      placeholder?: string
      options?: string[]
      defaultValue?: string | string[] | number | boolean
      description?: string
    }[]
  }[]
}> = {
  brand: {
    id: 'brand',
    name: 'Brand Agent',
    role: '品牌守护',
    icon: Shield,
    color: 'bg-violet-500',
    description: '核心 Agent，学习并守护品牌 DNA，确保所有输出保持风格一致',
    configSections: [
      {
        title: '品牌基础信息',
        fields: [
          { id: 'brandName', label: '品牌名称', type: 'text', placeholder: '如：Rolevio' },
          { id: 'brandSlogan', label: '品牌 Slogan', type: 'text', placeholder: '如：让营销角色进化' },
          { id: 'brandDescription', label: '品牌描述', type: 'textarea', placeholder: '描述你的品牌是做什么的，核心价值是什么...' },
        ]
      },
      {
        title: '品牌调性',
        fields: [
          { id: 'toneStyle', label: '语言风格', type: 'select', options: ['专业正式', '亲切友好', '活泼有趣', '简约科技', '高端奢华'], defaultValue: '专业正式' },
          { id: 'keywords', label: '品牌关键词', type: 'tags', placeholder: '添加关键词...', defaultValue: ['创新', 'AI', '效率'] },
          { id: 'avoidWords', label: '禁用词汇', type: 'tags', placeholder: '添加禁用词...', defaultValue: [] },
        ]
      },
      {
        title: '视觉规范',
        fields: [
          { id: 'primaryColor', label: '主色调', type: 'text', placeholder: '#8B5CF6', defaultValue: '#8B5CF6' },
          { id: 'fontStyle', label: '字体偏好', type: 'select', options: ['现代无衬线', '经典衬线', '手写风格', '等宽字体'], defaultValue: '现代无衬线' },
        ]
      }
    ]
  },
  strategy: {
    id: 'strategy',
    name: 'Strategy Agent',
    role: '策略规划',
    icon: Target,
    color: 'bg-orange-500',
    description: '分析市场趋势，制定营销策略，智能预算分配',
    configSections: [
      {
        title: '目标设定',
        fields: [
          { id: 'primaryGoal', label: '主要目标', type: 'select', options: ['品牌曝光', '获取新客', '促进转化', '用户留存', '口碑传播'], defaultValue: '品牌曝光' },
          { id: 'targetAudience', label: '目标受众', type: 'textarea', placeholder: '描述你的目标用户群体...' },
          { id: 'competitors', label: '主要竞品', type: 'tags', placeholder: '添加竞品名称...', defaultValue: [] },
        ]
      },
      {
        title: '预算配置',
        fields: [
          { id: 'monthlyBudget', label: '月度预算（元）', type: 'text', placeholder: '10000' },
          { id: 'budgetFlexibility', label: '预算弹性', type: 'slider', defaultValue: 50, description: '允许 AI 根据效果调整预算的幅度' },
        ]
      }
    ]
  },
  copywriter: {
    id: 'copywriter',
    name: 'Copywriter Agent',
    role: '文案创作',
    icon: PenTool,
    color: 'bg-blue-500',
    description: '生成符合品牌调性的各类文案，支持多种风格和场景',
    configSections: [
      {
        title: '写作风格',
        fields: [
          { id: 'writingTone', label: '文案调性', type: 'select', options: ['专业权威', '轻松幽默', '温暖治愈', '激情热血', '文艺清新'], defaultValue: '专业权威' },
          { id: 'lengthPreference', label: '长度偏好', type: 'select', options: ['精简短小', '适中平衡', '详细丰富'], defaultValue: '适中平衡' },
          { id: 'sampleCopy', label: '参考文案', type: 'textarea', placeholder: '粘贴一些你喜欢的品牌文案作为参考...' },
        ]
      },
      {
        title: '内容偏好',
        fields: [
          { id: 'useEmoji', label: '使用表情符号', type: 'toggle', defaultValue: true },
          { id: 'useHashtag', label: '使用话题标签', type: 'toggle', defaultValue: true },
          { id: 'callToAction', label: '常用 CTA', type: 'tags', placeholder: '添加常用行动号召...', defaultValue: ['立即体验', '了解更多', '免费试用'] },
        ]
      }
    ]
  },
  designer: {
    id: 'designer',
    name: 'Designer Agent',
    role: '视觉设计',
    icon: Palette,
    color: 'bg-green-500',
    description: '自动生成品牌视觉内容，保持视觉识别系统一致',
    configSections: [
      {
        title: '设计风格',
        fields: [
          { id: 'designStyle', label: '设计风格', type: 'select', options: ['极简主义', '扁平设计', '3D立体', '插画风格', '摄影实拍'], defaultValue: '极简主义' },
          { id: 'colorScheme', label: '配色方案', type: 'select', options: ['品牌主色', '渐变色彩', '黑白灰', '撞色对比'], defaultValue: '品牌主色' },
        ]
      },
      {
        title: '输出配置',
        fields: [
          { id: 'outputFormats', label: '输出格式', type: 'tags', defaultValue: ['1:1 方图', '16:9 横图', '9:16 竖图'] },
          { id: 'watermark', label: '添加品牌水印', type: 'toggle', defaultValue: true },
        ]
      }
    ]
  },
  campaign: {
    id: 'campaign',
    name: 'Campaign Agent',
    role: '渠道投放',
    icon: Megaphone,
    color: 'bg-pink-500',
    description: '多渠道内容发布，智能排期，自动适配各平台规范',
    configSections: [
      {
        title: '发布渠道',
        fields: [
          { id: 'channels', label: '启用渠道', type: 'tags', defaultValue: ['微信公众号', '小红书', '抖音', '微博'] },
          { id: 'autoAdapt', label: '自动适配平台规范', type: 'toggle', defaultValue: true },
        ]
      },
      {
        title: '发布策略',
        fields: [
          { id: 'frequency', label: '发布频率', type: 'select', options: ['每天1次', '每天2-3次', '每周3-5次', '每周1-2次'], defaultValue: '每天1次' },
          { id: 'bestTime', label: '智能择时发布', type: 'toggle', defaultValue: true, description: '根据平台数据自动选择最佳发布时间' },
        ]
      }
    ]
  },
  analytics: {
    id: 'analytics',
    name: 'Analytics Agent',
    role: '效果分析',
    icon: LineChart,
    color: 'bg-cyan-500',
    description: '实时监控营销效果，自动生成分析报告和优化建议',
    configSections: [
      {
        title: '监控指标',
        fields: [
          { id: 'keyMetrics', label: '核心指标', type: 'tags', defaultValue: ['曝光量', '互动率', '转化率', 'ROI'] },
          { id: 'reportFrequency', label: '报告频率', type: 'select', options: ['实时', '每日', '每周', '每月'], defaultValue: '每日' },
        ]
      },
      {
        title: '智能优化',
        fields: [
          { id: 'autoSuggest', label: '自动生成优化建议', type: 'toggle', defaultValue: true },
          { id: 'alertThreshold', label: '异常预警阈值', type: 'slider', defaultValue: 30, description: '指标下降超过此比例时发送预警' },
        ]
      }
    ]
  }
}

export default function ConfigureAgentPage() {
  const params = useParams()
  const router = useRouter()
  const agentId = params.agentId as string
  const config = agentConfigs[agentId]

  const [formData, setFormData] = useState<Record<string, string | string[] | number | boolean>>({})
  const [tagInputs, setTagInputs] = useState<Record<string, string>>({})
  const [saved, setSaved] = useState(false)

  if (!config) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Agent 不存在</h1>
          <button onClick={() => router.push('/')} className="text-violet-400 hover:underline">
            返回首页
          </button>
        </div>
      </div>
    )
  }

  const Icon = config.icon

  const getValue = (fieldId: string, defaultValue: string | string[] | number | boolean | undefined) => {
    return formData[fieldId] ?? defaultValue ?? ''
  }

  const handleChange = (fieldId: string, value: string | string[] | number | boolean) => {
    setFormData(prev => ({ ...prev, [fieldId]: value }))
    setSaved(false)
  }

  const handleAddTag = (fieldId: string, currentTags: string[]) => {
    const input = tagInputs[fieldId]?.trim()
    if (input && !currentTags.includes(input)) {
      handleChange(fieldId, [...currentTags, input])
      setTagInputs(prev => ({ ...prev, [fieldId]: '' }))
    }
  }

  const handleRemoveTag = (fieldId: string, currentTags: string[], tagToRemove: string) => {
    handleChange(fieldId, currentTags.filter(t => t !== tagToRemove))
  }

  const handleSave = () => {
    // 模拟保存
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition"
          >
            <ArrowLeft className="w-5 h-5" />
            返回
          </button>
          <button
            onClick={handleSave}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition ${
              saved
                ? 'bg-green-500 text-white'
                : 'bg-violet-600 hover:bg-violet-500 text-white'
            }`}
          >
            {saved ? (
              <>
                <Check className="w-4 h-4" />
                已保存
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                保存配置
              </>
            )}
          </button>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Agent Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className={`w-16 h-16 ${config.color} rounded-2xl flex items-center justify-center`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">{config.name}</h1>
            <p className="text-slate-400">{config.description}</p>
          </div>
        </div>

        {/* Config Sections */}
        <div className="space-y-8">
          {config.configSections.map((section) => (
            <div
              key={section.title}
              className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6"
            >
              <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-violet-400" />
                {section.title}
              </h2>

              <div className="space-y-6">
                {section.fields.map((field) => (
                  <div key={field.id}>
                    <label className="block text-sm text-slate-300 mb-2">
                      {field.label}
                    </label>

                    {/* Text Input */}
                    {field.type === 'text' && (
                      <input
                        type="text"
                        value={getValue(field.id, field.defaultValue) as string}
                        onChange={(e) => handleChange(field.id, e.target.value)}
                        placeholder={field.placeholder}
                        className="w-full bg-slate-900/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50"
                      />
                    )}

                    {/* Textarea */}
                    {field.type === 'textarea' && (
                      <textarea
                        value={getValue(field.id, field.defaultValue) as string}
                        onChange={(e) => handleChange(field.id, e.target.value)}
                        placeholder={field.placeholder}
                        rows={3}
                        className="w-full bg-slate-900/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 resize-none"
                      />
                    )}

                    {/* Select */}
                    {field.type === 'select' && (
                      <div className="relative">
                        <select
                          value={getValue(field.id, field.defaultValue) as string}
                          onChange={(e) => handleChange(field.id, e.target.value)}
                          className="w-full bg-slate-900/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-violet-500/50"
                        >
                          {field.options?.map((option) => (
                            <option key={option} value={option} className="bg-slate-800">
                              {option}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                      </div>
                    )}

                    {/* Tags */}
                    {field.type === 'tags' && (
                      <div>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {(getValue(field.id, field.defaultValue) as string[]).map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center gap-1 px-3 py-1.5 bg-violet-500/20 text-violet-300 rounded-full text-sm"
                            >
                              {tag}
                              <button
                                onClick={() => handleRemoveTag(field.id, getValue(field.id, field.defaultValue) as string[], tag)}
                                className="hover:text-white"
                              >
                                <X className="w-3 h-3" />
                              </button>
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={tagInputs[field.id] || ''}
                            onChange={(e) => setTagInputs(prev => ({ ...prev, [field.id]: e.target.value }))}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') {
                                e.preventDefault()
                                handleAddTag(field.id, getValue(field.id, field.defaultValue) as string[])
                              }
                            }}
                            placeholder={field.placeholder}
                            className="flex-1 bg-slate-900/50 border border-slate-600/50 rounded-xl px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 text-sm"
                          />
                          <button
                            onClick={() => handleAddTag(field.id, getValue(field.id, field.defaultValue) as string[])}
                            className="px-3 py-2 bg-slate-700 hover:bg-slate-600 rounded-xl transition"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Slider */}
                    {field.type === 'slider' && (
                      <div>
                        <div className="flex items-center gap-4">
                          <input
                            type="range"
                            min="0"
                            max="100"
                            value={getValue(field.id, field.defaultValue) as number}
                            onChange={(e) => handleChange(field.id, parseInt(e.target.value))}
                            className="flex-1 h-2 bg-slate-700 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-violet-500 [&::-webkit-slider-thumb]:rounded-full"
                          />
                          <span className="text-sm text-slate-300 w-12 text-right">
                            {getValue(field.id, field.defaultValue)}%
                          </span>
                        </div>
                        {field.description && (
                          <p className="text-xs text-slate-500 mt-2">{field.description}</p>
                        )}
                      </div>
                    )}

                    {/* Toggle */}
                    {field.type === 'toggle' && (
                      <div>
                        <button
                          onClick={() => handleChange(field.id, !getValue(field.id, field.defaultValue))}
                          className={`relative w-12 h-6 rounded-full transition ${
                            getValue(field.id, field.defaultValue)
                              ? 'bg-violet-500'
                              : 'bg-slate-600'
                          }`}
                        >
                          <div
                            className={`absolute top-1 w-4 h-4 bg-white rounded-full transition ${
                              getValue(field.id, field.defaultValue) ? 'left-7' : 'left-1'
                            }`}
                          />
                        </button>
                        {field.description && (
                          <p className="text-xs text-slate-500 mt-2">{field.description}</p>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Action */}
        <div className="mt-8 flex justify-end">
          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 rounded-xl font-medium transition"
          >
            <Save className="w-5 h-5" />
            保存并激活 Agent
          </button>
        </div>
      </div>
    </main>
  )
}
