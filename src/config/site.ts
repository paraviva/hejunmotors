export const NAVIGATION = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT US', href: '/about' },
  { name: 'MOTOR', href: '/motor' },
  { name: 'PAPER MACHINE', href: '/paper-machine' },
  { name: 'NEWS', href: '/news' },
  { name: 'CASE', href: '/case' },
  { name: 'FAQ', href: '/faq' },
  { name: 'CONTACT', href: '/contact' },
  // 别把 RFQ 放进数组，我们要确保它在 Navbar.astro 里被渲染成那个漂亮的独立按钮
] as const;

// 如果你的配置文件里有单独定义按钮的地方，确保它的 href 指向 '/rfq'