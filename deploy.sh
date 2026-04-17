#!/bin/bash

# Rolevio CMO 版本部署脚本
# 使用方法：./deploy.sh

set -e  # 遇到错误立即退出

echo "🚀 开始部署 Rolevio CMO 版本到 Vercel..."
echo ""

# 1. 检查是否在正确的目录
if [ ! -f "package.json" ]; then
    echo "❌ 错误：请在 rolevio-webapp 目录下运行此脚本"
    exit 1
fi

echo "✅ 目录检查通过"
echo ""

# 2. 检查是否有未提交的改动
if [ -n "$(git status --porcelain)" ]; then
    echo "📝 发现未提交的改动，准备提交..."

    # 显示改动
    git status --short
    echo ""

    # 添加文件
    git add .

    # 提交
    echo "请输入提交信息（留空使用默认）："
    read commit_message

    if [ -z "$commit_message" ]; then
        commit_message="feat: 更新 CMO 战略视角页面"
    fi

    git commit -m "$commit_message"
    echo "✅ 代码已提交"
    echo ""
else
    echo "✅ 没有未提交的改动"
    echo ""
fi

# 3. 构建测试
echo "🔨 开始本地构建测试..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ 构建成功"
    echo ""
else
    echo "❌ 构建失败，请检查错误信息"
    exit 1
fi

# 4. 推送到远程仓库
echo "📤 推送代码到 Git 仓库..."

# 获取当前分支
current_branch=$(git rev-parse --abbrev-ref HEAD)
echo "当前分支：$current_branch"

git push origin $current_branch

if [ $? -eq 0 ]; then
    echo "✅ 代码推送成功"
    echo ""
else
    echo "❌ 推送失败，请检查网络和权限"
    exit 1
fi

# 5. 等待 Vercel 部署
echo "⏳ Vercel 自动部署已触发..."
echo ""
echo "📊 查看部署状态："
echo "   1. 访问 https://vercel.com/dashboard"
echo "   2. 或运行：vercel inspect"
echo ""

# 6. 完成
echo "✅ 部署流程完成！"
echo ""
echo "🌐 访问你的应用："
echo "   - 原有版本：https://your-domain.vercel.app"
echo "   - CMO 版本：https://your-domain.vercel.app/cmo"
echo ""
echo "🎉 部署成功！请在 Vercel 控制台确认部署状态。"
