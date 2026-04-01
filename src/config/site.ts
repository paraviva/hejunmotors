// HEJUN MOTORS - 全局配置文件

export const SITE = {
  title: 'HEJUN MOTORS',
  description: 'Professional manufacturer of High-Efficiency PMSM and Industrial Synchronous Motors. Specialized in paper machinery and industrial automation solutions.',
  url: 'https://hejunmotors.com',
  author: 'HEJUN MOTORS',
} as const;

export const NAVIGATION = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT US', href: '/about' },
  { name: 'MOTOR', href: '/motor' },
  { name: 'PAPER MACHINE', href: '/paper-machine' },
  { name: 'NEWS', href: '/news' },
  { name: 'CASE', href: '/case' },
  { name: 'FAQ', href: '/faq' },
  { name: 'CONTACT', href: '/contact' },
] as const;

// 补齐这个部分，Vercel 编译就不会报错了
export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/hejun-motors',
  twitter: '', // 如果没有就留空，但变量必须存在
  facebook: '',
  github: '',
} as const;