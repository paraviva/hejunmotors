import { motion } from 'motion/react';
import { Cpu, Zap, Activity, Settings, ShieldCheck, Headphones } from 'lucide-react';

// 1. 导入你刚放进去的新 WebP 图片
import imgIntegrated from '@assets/Integrated-Drive-Solutions.webp';
import imgReliability from '@assets/Application-Proven-Reliability.webp';
import imgEfficiency from '@assets/Efficiency-by-Design.webp';
import imgPrecision from '@assets/Precision-Consistency.webp';
import imgCustomized from '@assets/Customized-Engineering.webp';
import imgSupport from '@assets/Global-Technical-Support.webp';

const features = [
  {
    icon: Cpu,
    title: 'Integrated Drive Solutions',
    description: 'Complete motor-drive-control packages tailored to your machinery, not just standalone components.',
    image: imgIntegrated,
  },
  {
    icon: Activity,
    title: 'Application-Proven Reliability',
    description: 'Our motors are validated in demanding industries like papermaking and mining, built for 24/7 operation.',
    image: imgReliability,
  },
  {
    icon: Zap,
    title: 'Efficiency by Design',
    description: 'Engineered to exceed IE4/IE5 efficiency standards, reducing energy costs and supporting sustainability.',
    image: imgEfficiency,
  },
  {
    icon: Settings,
    title: 'Precision & Consistency',
    description: 'Advanced manufacturing and testing ensure reliable performance, backed by ISO9001 quality systems.',
    image: imgPrecision,
  },
  {
    icon: ShieldCheck,
    title: 'Customized Engineering',
    description: 'Specialized shaft designs and cooling methods for unique paper machinery and motor requirements.',
    image: imgCustomized,
  },
  {
    icon: Headphones,
    title: 'Global Technical Support',
    description: '24/7 expert engineering support and rapid spare parts response for your global production lines.',
    image: imgSupport,
  },
];

export default function FeatureShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group cursor-pointer"
        >
          <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-slate-900">
            {/* Image Container */}
            <div className="relative h-72 overflow-hidden">
              <motion.img
                src={feature.image.src} // 注意这里要用 .src
                alt={feature.title}
                className="w-full h-full object-cover"
                loading="lazy"
                whileHover={{ scale: 1.05 }} // 稍微调小一点缩放，更稳重
                transition={{ duration: 0.6 }}
              />
              
              {/* 遮罩层 */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent opacity-80" />
              
              {/* Icon Overlay */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg z-20"
              >
                <feature.icon className="w-6 h-6 text-blue-600" />
              </motion.div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-200 leading-relaxed opacity-90">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}