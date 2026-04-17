// 数字劳动力组织架构数据结构

export type AgentStatus = 'running' | 'waiting' | 'paused' | 'error'
export type AgentRole = 'research' | 'content' | 'brand' | 'distribution' | 'analytics'

export interface Permission {
  read: string[]
  write: string[]
  budget: number | 'unlimited'
  requiresApproval: boolean
  vetoBy?: string[]
  dailyLimit?: number
}

export interface Agent {
  id: string
  role: AgentRole
  name: string
  status: AgentStatus
  description: string
  icon: string
  color: string
  reportsTo?: string
  permissions: Permission
  currentTask?: {
    description: string
    progress: number
    estimatedCompletion?: string
  }
  metrics: {
    tasksCompleted: number
    tasksThisWeek: number
    efficiency: number
  }
}

export interface WorkflowStep {
  id: string
  agent: AgentRole
  action: string
  dependsOn?: string
  status: 'completed' | 'running' | 'waiting' | 'paused' | 'requires_approval'
  timestamp: Date
  output?: any
  requiresHumanDecision?: boolean
}

export interface Workflow {
  id: string
  name: string
  trigger: string
  status: 'active' | 'paused' | 'completed'
  steps: WorkflowStep[]
  metrics: {
    cycleTime: string
    successRate: number
    costPerCycle: number
  }
}

export interface DigitalWorkforce {
  agents: Agent[]
  workflows: Workflow[]
  realTimeMetrics: {
    tasksRunning: number
    tasksWaitingApproval: number
    weeklyROI: { input: number; output: number }
    totalBudgetUsed: number
    totalBudgetLimit: number
  }
}

// Mock Data
export const mockWorkforce: DigitalWorkforce = {
  agents: [
    {
      id: 'brand-guardian',
      role: 'brand',
      name: 'Brand Guardian',
      status: 'running',
      description: '品牌守护者 · 确保所有输出符合品牌调性',
      icon: '🛡️',
      color: 'from-violet-500 to-purple-500',
      permissions: {
        read: ['all'],
        write: ['brand_guidelines', 'approval_logs'],
        budget: 'unlimited',
        requiresApproval: false,
        vetoBy: []
      },
      currentTask: {
        description: '审核 Content Agent 生成的 23 个内容变体',
        progress: 65,
        estimatedCompletion: '5 分钟'
      },
      metrics: {
        tasksCompleted: 847,
        tasksThisWeek: 23,
        efficiency: 98
      }
    },
    {
      id: 'research-agent',
      role: 'research',
      name: 'Research Agent',
      status: 'running',
      description: '市场研究 · 扫描机会和竞品动态',
      icon: '🔍',
      color: 'from-blue-500 to-cyan-500',
      reportsTo: 'brand-guardian',
      permissions: {
        read: ['market_data', 'competitor_intel', 'social_media'],
        write: ['research_reports'],
        budget: 0,
        requiresApproval: false
      },
      currentTask: {
        description: '分析 Reddit r/startups 过去 24 小时新帖',
        progress: 82,
        estimatedCompletion: '2 分钟'
      },
      metrics: {
        tasksCompleted: 1247,
        tasksThisWeek: 34,
        efficiency: 95
      }
    },
    {
      id: 'content-agent',
      role: 'content',
      name: 'Content Engine',
      status: 'waiting',
      description: '内容生产引擎 · 生成多渠道营销素材',
      icon: '✍️',
      color: 'from-green-500 to-emerald-500',
      reportsTo: 'brand-guardian',
      permissions: {
        read: ['research_reports', 'brand_guidelines', 'customer_segments'],
        write: ['content_drafts'],
        budget: 0,
        requiresApproval: true,
        vetoBy: ['brand-guardian']
      },
      currentTask: {
        description: '等待 Brand Guardian 审批 2 个内容',
        progress: 46,
      },
      metrics: {
        tasksCompleted: 2341,
        tasksThisWeek: 127,
        efficiency: 92
      }
    },
    {
      id: 'distribution-agent',
      role: 'distribution',
      name: 'Distribution Agent',
      status: 'running',
      description: '渠道投放 · 自动化广告和内容分发',
      icon: '📢',
      color: 'from-orange-500 to-red-500',
      reportsTo: 'brand-guardian',
      permissions: {
        read: ['approved_content', 'customer_segments', 'campaign_data'],
        write: ['campaign_logs', 'ad_performance'],
        budget: 50000,
        requiresApproval: false,
        dailyLimit: 50000,
        vetoBy: ['brand-guardian']
      },
      currentTask: {
        description: 'Campaign #127 投放中 · Reddit Ads',
        progress: 15,
        estimatedCompletion: '6 小时'
      },
      metrics: {
        tasksCompleted: 456,
        tasksThisWeek: 12,
        efficiency: 89
      }
    },
    {
      id: 'analytics-agent',
      role: 'analytics',
      name: 'Analytics Agent',
      status: 'running',
      description: '效果分析 · 追踪优化和异常检测',
      icon: '📊',
      color: 'from-pink-500 to-rose-500',
      reportsTo: 'brand-guardian',
      permissions: {
        read: ['all_campaign_data', 'user_behavior', 'financial_metrics'],
        write: ['analytics_reports', 'optimization_recommendations'],
        budget: 0,
        requiresApproval: false
      },
      currentTask: {
        description: '追踪 1,247 个用户行为 · 异常检测中',
        progress: 0,
      },
      metrics: {
        tasksCompleted: 3421,
        tasksThisWeek: 234,
        efficiency: 97
      }
    }
  ],
  workflows: [
    {
      id: 'weekly-growth-cycle',
      name: '每周增长循环',
      trigger: 'every_monday_9am',
      status: 'active',
      steps: [
        {
          id: 'step-1',
          agent: 'research',
          action: '扫描市场机会',
          status: 'completed',
          timestamp: new Date('2026-04-21T09:00:00'),
          output: { opportunities: 3, topChannel: 'Reddit r/startups' }
        },
        {
          id: 'step-2',
          agent: 'content',
          action: '生成 50+ 内容变体',
          dependsOn: 'step-1',
          status: 'running',
          timestamp: new Date('2026-04-21T14:00:00'),
          output: { generated: 23, remaining: 27 }
        },
        {
          id: 'step-3',
          agent: 'brand',
          action: '审核品牌一致性',
          dependsOn: 'step-2',
          status: 'paused',
          timestamp: new Date('2026-04-22T10:00:00'),
          requiresHumanDecision: true,
          output: { flagged: 2, reason: '偏离品牌调性' }
        },
        {
          id: 'step-4',
          agent: 'distribution',
          action: '多渠道投放',
          dependsOn: 'step-3',
          status: 'waiting',
          timestamp: new Date('2026-04-22T15:00:00')
        },
        {
          id: 'step-5',
          agent: 'analytics',
          action: '追踪优化',
          dependsOn: 'step-4',
          status: 'waiting',
          timestamp: new Date('2026-04-23T09:00:00')
        }
      ],
      metrics: {
        cycleTime: '4.5 天',
        successRate: 94,
        costPerCycle: 2300
      }
    }
  ],
  realTimeMetrics: {
    tasksRunning: 127,
    tasksWaitingApproval: 3,
    weeklyROI: { input: 234000, output: 1200000 },
    totalBudgetUsed: 2300,
    totalBudgetLimit: 50000
  }
}
