'use client'

import { Agent } from '@/lib/workforce'
import { Shield, DollarSign, Eye, Edit, CheckCircle2, XCircle } from 'lucide-react'

interface PermissionMatrixProps {
  agents: Agent[]
}

export function PermissionMatrix({ agents }: PermissionMatrixProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-700">
            <th className="px-4 py-3 text-left text-sm font-semibold text-slate-300">Agent</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-slate-300">
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                预算上限
              </div>
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-slate-300">
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                读权限
              </div>
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-slate-300">
              <div className="flex items-center gap-2">
                <Edit className="w-4 h-4" />
                写权限
              </div>
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-slate-300">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                需审批
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {agents.map((agent) => (
            <tr key={agent.id} className="border-b border-slate-800 hover:bg-slate-800/30 transition">
              {/* Agent Name */}
              <td className="px-4 py-4">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${agent.color} flex items-center justify-center text-sm`}>
                    {agent.icon}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">{agent.name}</div>
                    <div className="text-xs text-slate-500">{agent.role}</div>
                  </div>
                </div>
              </td>

              {/* Budget */}
              <td className="px-4 py-4">
                <div className="text-sm font-mono text-slate-300">
                  {agent.permissions.budget === 'unlimited' ? (
                    <span className="text-violet-400">Unlimited</span>
                  ) : agent.permissions.budget === 0 ? (
                    <span className="text-slate-500">$0</span>
                  ) : (
                    <span className="text-green-400">
                      ${(agent.permissions.budget / 1000).toFixed(0)}K
                      {agent.permissions.dailyLimit && <span className="text-slate-500">/天</span>}
                    </span>
                  )}
                </div>
              </td>

              {/* Read Permissions */}
              <td className="px-4 py-4">
                <div className="flex flex-wrap gap-1">
                  {agent.permissions.read.slice(0, 3).map((perm, index) => (
                    <span
                      key={index}
                      className="px-2 py-0.5 bg-blue-500/10 text-blue-400 text-xs rounded"
                    >
                      {perm}
                    </span>
                  ))}
                  {agent.permissions.read.length > 3 && (
                    <span className="px-2 py-0.5 bg-slate-700 text-slate-400 text-xs rounded">
                      +{agent.permissions.read.length - 3}
                    </span>
                  )}
                </div>
              </td>

              {/* Write Permissions */}
              <td className="px-4 py-4">
                <div className="flex flex-wrap gap-1">
                  {agent.permissions.write.slice(0, 2).map((perm, index) => (
                    <span
                      key={index}
                      className="px-2 py-0.5 bg-green-500/10 text-green-400 text-xs rounded"
                    >
                      {perm}
                    </span>
                  ))}
                  {agent.permissions.write.length > 2 && (
                    <span className="px-2 py-0.5 bg-slate-700 text-slate-400 text-xs rounded">
                      +{agent.permissions.write.length - 2}
                    </span>
                  )}
                </div>
              </td>

              {/* Requires Approval */}
              <td className="px-4 py-4">
                {agent.permissions.requiresApproval ? (
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-400" />
                    <span className="text-sm text-orange-400">是</span>
                    {agent.permissions.vetoBy && (
                      <span className="text-xs text-slate-500">
                        by {agent.permissions.vetoBy[0]}
                      </span>
                    )}
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-slate-600" />
                    <span className="text-sm text-slate-500">否</span>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
