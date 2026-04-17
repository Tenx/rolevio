# 🚀 快速部署指令

## 方法 1：使用一键部署脚本（推荐）

```bash
cd /Users/I742076/claude-workspace/projects/rolevio/rolevio-webapp
./deploy.sh
```

脚本会自动完成：
1. ✅ 检查文件改动
2. ✅ 提交到 Git
3. ✅ 构建测试
4. ✅ 推送到远程仓库
5. ✅ 触发 Vercel 自动部署

---

## 方法 2：手动部署（逐步执行）

### Step 1: 进入项目目录
```bash
cd /Users/I742076/claude-workspace/projects/rolevio/rolevio-webapp
```

### Step 2: 查看改动
```bash
git status
```

### Step 3: 添加所有新文件
```bash
git add src/components/cmo/
git add src/app/cmo/
git add src/app/page.tsx
git add DEPLOYMENT.md
git add COMPARISON.md
git add deploy.sh
```

### Step 4: 提交改动
```bash
git commit -m "feat: 添加 CMO 战略视角页面

- 新增 CMO Hero 组件（ROI 计算器）
- 新增 Success Journey（场景故事化）
- 新增 Market Dashboard（成果看板）
- 更新主页导航，添加 CMO 视角入口
- 添加部署文档和对比文档"
```

### Step 5: 推送到远程仓库
```bash
git push origin main
```

### Step 6: 等待 Vercel 自动部署
打开 Vercel Dashboard 查看部署状态：
https://vercel.com/dashboard

---

## 📍 部署前检查清单

在执行部署前，请确认：

- [ ] 本地构建成功（`npm run build`）
- [ ] 没有 TypeScript 错误
- [ ] 所有新组件正常显示
- [ ] ROI 计算器交互正常
- [ ] 响应式设计测试通过

### 快速本地测试
```bash
# 构建测试
npm run build

# 本地运行
npm run dev

# 访问测试
# 旧版：http://localhost:3000
# 新版：http://localhost:3000/cmo
```

---

## 🌐 部署后验证

### 1. 查看部署状态
访问 Vercel Dashboard：
```
https://vercel.com/dashboard
```

### 2. 访问生产环境
```
主页（旧版）: https://rolevio-webapp.vercel.app
CMO 版本:    https://rolevio-webapp.vercel.app/cmo
```

### 3. 测试功能
- [ ] 首页"CMO 视角"按钮可点击
- [ ] ROI 计算器滑块正常工作
- [ ] 数据动画正常播放
- [ ] 所有链接正常跳转
- [ ] 移动端显示正常

---

## 🐛 常见问题解决

### 问题 1: 推送失败
```bash
# 可能需要先拉取远程改动
git pull origin main --rebase
git push origin main
```

### 问题 2: Vercel 部署失败
```bash
# 查看详细日志
vercel logs

# 重新触发部署
vercel --prod
```

### 问题 3: 404 错误
检查文件路径是否正确：
```
src/app/cmo/page.tsx  ✅ 正确
src/cmo/page.tsx      ❌ 错误
```

### 问题 4: 样式丢失
```bash
# 清除缓存重新构建
rm -rf .next
npm run build
```

---

## 📊 部署后数据

### 文件新增统计
```
新增组件: 3 个
  - CMOHero.tsx
  - SuccessJourney.tsx
  - MarketDashboard.tsx

新增页面: 1 个
  - /cmo

修改文件: 1 个
  - page.tsx (添加导航)

文档: 3 个
  - DEPLOYMENT.md
  - COMPARISON.md
  - QUICKSTART.md
```

### 代码行数
```
CMOHero.tsx:          ~150 行
SuccessJourney.tsx:   ~180 行
MarketDashboard.tsx:  ~200 行
page.tsx (cmo):       ~250 行
总计新增:             ~780 行
```

---

## 🎉 部署成功后

### 1. 分享链接
```
CMO 版本: https://rolevio-webapp.vercel.app/cmo
```

### 2. 收集反馈
- 给潜在客户（CMO）看
- 记录他们的第一反应
- 收集改进建议

### 3. 迭代优化
- 调整 Slogan
- 优化数据展示
- 添加真实案例

---

## 📞 需要帮助？

如果遇到问题：

1. 查看 Vercel 部署日志
2. 检查控制台错误信息
3. 参考 DEPLOYMENT.md 文档
4. 本地运行 `npm run dev` 调试

---

**准备好了？运行这个命令开始部署：**

```bash
cd /Users/I742076/claude-workspace/projects/rolevio/rolevio-webapp && ./deploy.sh
```

或者手动执行：

```bash
cd /Users/I742076/claude-workspace/projects/rolevio/rolevio-webapp
git add .
git commit -m "feat: 添加 CMO 战略视角页面"
git push origin main
```

🎯 部署完成后，访问: **https://your-domain.vercel.app/cmo**
