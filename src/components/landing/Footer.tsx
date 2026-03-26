import Link from 'next/link'
import { Github, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="text-xl font-bold text-white">Rolevio</span>
            </Link>
            <p className="text-dark-400 text-sm mb-4">
              Role + Evolution
              <br />
              让营销角色进化
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/rolevio" className="text-dark-400 hover:text-white transition">
                <Github size={20} />
              </a>
              <a href="https://twitter.com/rolevio" className="text-dark-400 hover:text-white transition">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">产品</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-dark-400 hover:text-white text-sm transition">
                  功能介绍
                </Link>
              </li>
              <li>
                <Link href="#agents" className="text-dark-400 hover:text-white text-sm transition">
                  Agent 团队
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-dark-400 hover:text-white text-sm transition">
                  定价方案
                </Link>
              </li>
              <li>
                <Link href="/changelog" className="text-dark-400 hover:text-white text-sm transition">
                  更新日志
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">资源</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/docs" className="text-dark-400 hover:text-white text-sm transition">
                  文档
                </Link>
              </li>
              <li>
                <Link href="/api" className="text-dark-400 hover:text-white text-sm transition">
                  API
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-dark-400 hover:text-white text-sm transition">
                  博客
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-dark-400 hover:text-white text-sm transition">
                  常见问题
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">公司</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-dark-400 hover:text-white text-sm transition">
                  关于我们
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-dark-400 hover:text-white text-sm transition">
                  联系我们
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-dark-400 hover:text-white text-sm transition">
                  隐私政策
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-dark-400 hover:text-white text-sm transition">
                  服务条款
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-dark-500 text-sm">
            © 2026 Rolevio. All rights reserved.
          </p>
          <p className="text-dark-500 text-sm">
            Made with ❤️ for brands that matter
          </p>
        </div>
      </div>
    </footer>
  )
}
