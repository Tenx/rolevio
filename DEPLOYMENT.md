# Rolevio CMO 版本部署指南

## 📦 新版本特性

这次更新将 Rolevio 从"执行层工具"升级为"战略层决策平台"，专为 CMO 和创始人设计。

### 核心改进

✅ **CMO Hero Section** - 首屏展示市场成果而非 Agent 配置
- 互动式 ROI 计算器
- 6 个月上市承诺
- 投入回报实时预测

✅ **Success Journey** - 场景故事化展示
- Pre-融资、扩张期、Pre-IPO 三个典型场景
- 每个场景展示投入、周期、成果、最终结果
- 可视化进化路径

✅ **Market Dashboard** - 市场成果看板
- 用户触达、品牌价值、市场份额、响应速度四个核心指标
- 实时动画展示数据
- 增长趋势可视化

✅ **技术黑盒** - 轻量化技术说明
- 降低 Agent 配置细节的展示优先级
- 强调"自动化"而非"配置"

## 📁 新增文件

```
src/
├── components/
│   └── cmo/
│       ├── CMOHero.tsx          # CMO 首屏（ROI 计算器）
│       ├── SuccessJourney.tsx   # 成功案例场景
│       └── MarketDashboard.tsx  # 市场成果看板
└── app/
    └── cmo/
        └── page.tsx             # 新的 CMO 视角页面
```

## 🚀 部署步骤

### 1. 确认本地测试

在项目目录下运行：

```bash
cd /Users/I742076/claude-workspace/projects/rolevio/rolevio-webapp

# 安装依赖（如果需要）
npm install

# 本地开发模式测试
npm run dev
```

访问：
- 原有版本：http://localhost:3000
- CMO 版本：http://localhost:3000/cmo

### 2. 提交代码到 Git

```bash
# 查看改动
git status

# 添加新文件
git add src/components/cmo/
git add src/app/cmo/
git add src/app/page.tsx

# 提交
git commit -m "feat: 添加 CMO 战略视角页面

- 新增 CMO Hero 组件（ROI 计算器）
- 新增 Success Journey（场景故事化）
- 新增 Market Dashboard（成果看板）
- 更新主页导航，添加 CMO 视角入口"

# 推送到远程
git push origin main
```

### 3. Vercel 自动部署

由于项目已经连接到 Vercel（project ID: prj_UR13f1jGSGO1VLgBK4ntA0OK3F4I），推送代码后会自动触发部署。

#### 查看部署状态

```bash
# 安装 Vercel CLI（如果还没有）
npm install -g vercel

# 查看部署状态
vercel ls

# 查看最新部署详情
vercel inspect
```

### 4. 验证部署

部署完成后，访问：
- 生产环境主页：https://your-domain.vercel.app
- CMO 视角页面：https://your-domain.vercel.app/cmo

## 🎨 页面对比

### 旧版（执行层）
- ❌ 展示 6 个 Agent 卡片
- ❌ 强调"任务拆分"和"配置"
- ❌ 面向营销执行人员
- ❌ 技术细节优先

### 新版（战略层）
- ✅ 展示市场成果看板
- ✅ 强调"6 个月上市"承诺
- ✅ 面向 CMO 和创始人
- ✅ 商业价值优先

## 🔗 路由结构

```
/              # 原有页面（保留，添加了到 CMO 版本的导航）
/cmo           # 新的 CMO 战略视角页面 ⭐
/configure/[agentId]  # Agent 配置页面（保留）
```

## 📊 后续优化建议

### 短期（1-2 周）
1. 添加真实的客户案例数据
2. 优化 ROI 计算器的算法（接入后端）
3. 添加"预约演示"表单功能

### 中期（1 个月）
1. A/B 测试：CMO 版本 vs 旧版本转化率
2. 添加视频演示嵌入
3. 集成 CRM 系统捕获潜在客户

### 长期（3 个月）
1. 考虑完全替换旧版本
2. 添加个性化 Demo 生成功能
3. 建立客户成功案例库

## 🐛 可能的问题

### 问题 1：样式不显示
**解决方案：**
```bash
# 清除 Next.js 缓存
rm -rf .next
npm run build
```

### 问题 2：路由 404
**解决方案：**
确保 Vercel 的 Next.js 版本配置正确：
```json
// vercel.json
{
  "framework": "nextjs"
}
```

### 问题 3：组件导入错误
**解决方案：**
检查 tsconfig.json 中的路径别名：
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## 📝 部署检查清单

- [ ] 本地运行 `npm run dev` 无错误
- [ ] 访问 `/cmo` 页面正常显示
- [ ] ROI 计算器滑块交互正常
- [ ] Market Dashboard 动画正常
- [ ] 响应式设计在移动端正常
- [ ] Git 提交并推送到 main 分支
- [ ] Vercel 部署成功（无红色错误）
- [ ] 生产环境测试通过

## 🎯 下一步

1. **测试部署**：确认所有功能正常
2. **收集反馈**：给目标用户（CMO）看原型
3. **迭代优化**：根据反馈调整内容和设计
4. **数据集成**：连接真实的市场数据源
5. **转化优化**：添加潜在客户捕获机制

---

**部署时间：** 2026-04-17
**版本：** v2.0.0 - CMO Strategic View
**状态：** ✅ 就绪
