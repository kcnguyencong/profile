import { motion } from 'motion/react';

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-24"
    >
      <header className="editorial-container mb-24 md:mb-32">
        <div className="max-w-3xl">
          <h1 className="font-headline text-5xl md:text-7xl font-black text-on-surface tracking-tighter mb-8">
            Kỹ thuật và Tư duy
          </h1>
          <p className="font-headline italic text-xl md:text-2xl text-on-surface-variant leading-relaxed">
            "Simplicity is the ultimate sophistication. It's not just how it looks and feels, it's how it works."
          </p>
        </div>
      </header>

      <div className="editorial-container space-y-24">
        {/* Bento Grid */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-7 bg-surface-container-low p-12 md:p-16 flex flex-col justify-between min-h-[400px]">
            <div>
              <span className="font-body text-xs uppercase tracking-[0.2em] text-primary font-bold mb-4 block">Section 01</span>
              <h2 className="font-headline text-3xl md:text-4xl font-bold mb-8">Design Strategy</h2>
              <p className="text-on-surface-variant text-lg mb-12 max-w-md">Kế hoạch hóa trải nghiệm thông qua nghiên cứu và cấu trúc thông tin chặt chẽ.</p>
            </div>
            <ul className="space-y-6">
              {['UX Research & Analysis', 'User Journey Mapping', 'Information Architecture'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 group cursor-default">
                  <span className="material-symbols-outlined text-primary">{['troubleshoot', 'route', 'account_tree'][i]}</span>
                  <span className="font-medium tracking-tight group-hover:translate-x-1 transition-transform">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-5 bg-surface-container p-12 md:p-16 flex flex-col justify-between min-h-[400px]">
            <div>
              <span className="font-body text-xs uppercase tracking-[0.2em] text-primary font-bold mb-4 block">Section 02</span>
              <h2 className="font-headline text-3xl md:text-4xl font-bold mb-8">Interface Design</h2>
            </div>
            <div className="space-y-10">
              {[
                { title: 'Visual Excellence', desc: 'High-fidelity UI & Interaction' },
                { title: 'Adaptability', desc: 'Responsive Web & Mobile App' },
                { title: 'Scalability', desc: 'Design Systems & Guidelines' }
              ].map((item) => (
                <div key={item.title} className="border-l-2 border-primary/20 pl-6 py-2 hover:border-primary transition-colors">
                  <h4 className="font-bold text-sm uppercase tracking-widest mb-2">{item.title}</h4>
                  <p className="text-on-surface-variant">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section className="py-16">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Workflow Process</h2>
            <p className="text-on-surface-variant font-medium tracking-widest uppercase text-xs">A systematic approach to creation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-outline-variant/20">
            {[
              { num: '01', title: 'Understand', desc: 'Tiếp nhận yêu cầu, nghiên cứu thị trường và thấu hiểu vấn đề của người dùng.' },
              { num: '02', title: 'Analyze', desc: 'Phân tích dữ liệu, xây dựng wireframe và kiểm chứng các giả thuyết thiết kế.' },
              { num: '03', title: 'Execute', desc: 'Thiết kế chi tiết, tạo mẫu prototype và đảm bảo tính nhất quán của hệ thống.' },
              { num: '04', title: 'Optimize', desc: 'Đo lường hiệu quả, thu thập phản hồi và cải thiện trải nghiệm liên tục.' }
            ].map((step) => (
              <div key={step.num} className="bg-white p-8 md:p-12 hover:bg-surface-container-low transition-colors duration-500">
                <span className="text-primary font-black text-4xl mb-8 block opacity-20">{step.num}</span>
                <h3 className="font-bold text-xl mb-4">{step.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tools */}
        <section className="bg-surface-container-highest p-12 md:p-24 relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-headline text-4xl md:text-5xl font-bold mb-8">Tools & Tech</h2>
              <p className="text-on-surface-variant text-lg mb-12">Những công cụ hỗ trợ biến ý tưởng thành hiện thực, từ thiết kế đồ họa đến lập trình giao diện.</p>
              <div className="flex flex-wrap gap-4">
                {['FIGMA', 'ADOBE CC', 'FRAMER', 'REACT', 'TAILWIND', 'GITHUB'].map(tool => (
                  <span key={tool} className="bg-white px-6 py-2 font-bold text-sm border border-outline-variant/30">{tool}</span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-surface-container-low flex items-center justify-center p-8 group">
                <span className="material-symbols-outlined text-6xl text-on-surface-variant group-hover:scale-110 transition-transform">draw</span>
              </div>
              <div className="aspect-square bg-white flex items-center justify-center p-8 group translate-y-8">
                <span className="material-symbols-outlined text-6xl text-primary group-hover:scale-110 transition-transform">code</span>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        </section>
      </div>
    </motion.div>
  );
}
