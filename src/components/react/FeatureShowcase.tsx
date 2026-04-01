import { motion } from 'motion/react';
import { Cpu, Zap, Activity, Settings, ShieldCheck, Headphones } from 'lucide-react';

// 保留原始图片引用，确保图片不丢失
import warehouseImg from '@assets/photo-1553413077-190dd305871c.jpg';
import truckImg from '@assets/photo-1601584115197-04ecc0da31d7.jpg';
import packageImg from '@assets/photo-1581091226825-a6a2a5aee158.jpg';
import barChart3Img from '@assets/photo-1551288049-bebda4e38f71.jpg';
import shieldImg from '@assets/photo-1563013544-824ae1b704d3.jpg';
import headphonesImg from '@assets/photo-1486312338219-ce68d2c6f44d.jpg';

const features = [
  {
    icon: Cpu, // 换成更符合“驱动/集成”的图标
    title: 'Integrated Drive Solutions',
    description: 'Complete motor-drive-control packages tailored to your machinery, not just standalone components.',
    image: warehouseImg,
  },
  {
    icon: Activity, // 换成象征“运行/动力”的图标
    title: 'Application-Proven Reliability',
    description: 'Our motors are validated in demanding industries like papermaking and mining, built for 24/7 operation.',
    image: truckImg,
  },
  {
    icon: Zap, // 换成象征“能效/电力”的图标
    title: 'Efficiency by Design',
    description: 'Engineered to exceed IE4/IE5 efficiency standards, reducing energy costs and supporting sustainability.',
    image: packageImg,
  },
  {
    icon: Settings, // 换成象征“精密/工业”的图标
    title: 'Precision & Consistency',
    description: 'Advanced manufacturing and testing ensure reliable performance, backed by ISO9001 quality systems.',
    image: barChart3Img,
  },
  {
    icon: ShieldCheck, // 换成更符合“安全/合规”的图标
    title: 'Custom Engineering',
    description: 'Specialized shaft designs and cooling methods for unique paper machinery requirements.',
    image: shieldImg,
  },
  {
    icon: Headphones,
    title: 'Global Technical Support',
    description: '24/7 expert engineering support and rapid spare parts response for your global production lines.',
    image: headphonesImg,
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
                src={feature.image.src}
                alt={feature.title}
                className="w-full h-full object-cover"
                loading="lazy"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
              {/* 遮罩层加深，确保白色文字在复杂背景下图文清晰 */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent opacity-80" />
              
              {/* Icon overlay - 统一用蓝色系 */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg z-20"
              >
                <feature.icon className="w-6 h-6 text-blue-600" />
              </motion.div>

              {/* Content - 放在图片上方，利用遮罩确保对比度 */}
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