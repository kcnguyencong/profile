import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function Projects() {
  const filters = ['All', 'Fintech', 'E-commerce', 'AI & Data', 'Enterprise'];
  
  const projects = [
    {
      title: 'Nexus Banking Ecosystem',
      role: 'Lead Product Designer',
      year: '2023',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfrpO2WWgMNyOrnRVSamDLFwMrbiLK6ensTuvgBGeQ75xGL0NVo9sdp2Vhn7BHnKbZupoPRfMMI5_zrIJ9WBtWIYNO8OoAVQfHX7i4EF_lWvXHrkTrMpk_ZJY4wvCbwTZGpLveJ0xjKEbpXfwFvda7frX9pu7Qsppux-huS9lyRhlBAqhA2t1qhaQSVT7pCiE0W97t8xxypoE5ZEis7iWHgrKWYm2mQ9cKb6gsmX80a687JXCbsH3TWXHtD1mCqn84hmC6Ok_E4g',
      cols: 'md:col-span-8'
    },
    {
      quote: '"Tập trung vào sự minh bạch trong các giao dịch tài chính phức tạp thông qua ngôn ngữ thiết kế tối giản."',
      cols: 'hidden md:block md:col-span-4 self-center px-12'
    },
    {
      title: 'Aura AI Research',
      role: 'UI/UX Designer',
      year: '2024',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC32uP0KVzcjLT-Q2exWaWylKsgTSFxPRC0WRiDAXQRvrYx34QtTLb3nREjwortZ5rNS0As442A8jWbbpjA3VBsjENRBAD0SbNWZCmfbRUzMJuP-1CQ-LDfEYfEDG5LOH4I1efYvmy016tTPTZwb4urvXl5PGVRGtUnpCmm-jwt87qPbzqq31hL458ZScINNIZeunU0h4Dyhkr4PXwHxkCEX-QFkX64_b_j6oVmeGXcc_pt4hljC2gG6y6vROY9n4An1a2N5lKfFg',
      cols: 'md:col-span-5 pt-0 md:pt-12'
    },
    {
      title: 'Vanguard Commerce',
      role: 'Visual Identity',
      year: '2022',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDakneGz2lhK_Uf4vybsUxbDnTGTVg1LKbYUu70B-h8llQXFxahwyS0NImk_EJRuoSSJd-VpBY5dEOqOOYW8QLzCuXzC7P_JEzCIrkvHKZvX-fstE-N0rdzHSYfJKlnMKAOd25Sr6hWxoIC9Sw2xQT4bwNL3HL9Gjf01WjFnB-RlFX0nH5LQR0wjpzq_WjpyDYTgtB89jlox_2W5_tgwgymdPg6RJLVluhm6CCvIMamgPGW8qHI3lQy9QKWEMl8S8M4n6Z_Qi8sDw',
      cols: 'md:col-span-7'
    },
    {
      title: 'Titan Enterprise Suite',
      role: 'Design Systems Lead',
      year: '2023',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANYynlp2ZreP201v3LxYTam31PwZ9QGzu4ZCcZP8SSLuiV3rtXBsWSFHpCIaMdrZQD7PixiK1aSv4bTDouEazirXDy8rfW2uJzpbN_iFBZKDxi0DNW5u6GtKzrL1c_IY1141DphTPYm-0ykAw0i2q2cg138Gzv6z5fAi7E7MfOLI1gwEW2_nnB702beped6S_4KPLQ0cQuZKokRR54heuZlJ_I5Y2n7QAvxmfUCc2YSQFQ9MICg34bvUfdMltVqB2dR059LaxzmA',
      cols: 'md:col-span-12',
      isFull: true
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-24 editorial-container"
    >
      <header className="mb-20 max-w-4xl">
        <h1 className="font-headline text-5xl md:text-7xl font-black text-on-surface mb-8 leading-tight">
          Lưu trữ các giải pháp kỹ thuật số
        </h1>
        <p className="font-body text-xl text-on-surface-variant leading-relaxed font-light">
          Tuyển tập các dự án được lựa chọn dựa trên khả năng giải quyết vấn đề cốt lõi, từ tư duy hệ thống đến những chi tiết giao diện tinh tế nhất.
        </p>
      </header>

      <div className="flex flex-wrap items-center gap-x-12 gap-y-6 mb-16 border-b border-stone-100 pb-8">
        {filters.map((filter, i) => (
          <button
            key={filter}
            className={`text-xs uppercase tracking-[0.2em] font-bold pb-2 transition-colors ${
              i === 0 ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-24 gap-x-12">
        {projects.map((p, i) => (
          <div key={i} className={`${p.cols} group cursor-pointer`}>
            {p.image ? (
              <>
                <div className={`overflow-hidden bg-surface-container mb-6 relative ${p.isFull ? 'aspect-[21/9]' : p.cols.includes('md:col-span-8') ? 'aspect-[16/9]' : 'aspect-[4/5]'}`}>
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className={`flex justify-between items-start ${p.isFull ? 'grid md:grid-cols-2 gap-8 items-end' : ''}`}>
                  <div>
                    <h3 className={`font-headline font-bold mb-2 ${p.isFull ? 'text-4xl' : 'text-3xl'}`}>{p.title}</h3>
                    <p className="font-body text-sm text-on-surface-variant uppercase tracking-widest">{p.role}</p>
                  </div>
                  <div className="flex justify-between md:justify-end items-center gap-12">
                    <span className="font-headline italic text-2xl text-outline-variant">{p.year}</span>
                    {p.isFull && (
                      <div className="h-12 w-12 border border-stone-200 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all">
                        <ArrowUpRight size={20} />
                      </div>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <p className="text-xs text-on-surface-variant leading-loose italic">
                {p.quote}
              </p>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
