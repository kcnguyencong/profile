import { motion } from 'motion/react';
import { Search } from 'lucide-react';

export default function CaseStudy() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32"
    >
      <header className="max-w-[1100px] mx-auto px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-12">
            <h1 className="font-headline text-6xl md:text-8xl font-black leading-tight tracking-tighter mb-12 text-on-surface">
              Nexus: Tài định nghĩa quản lý tài sản
            </h1>
          </div>
          <div className="md:col-span-8">
            <p className="font-headline text-2xl text-on-surface-variant leading-relaxed italic">
              Kiến tạo một hệ sinh thái tài chính minh bạch, nơi dữ liệu phức tạp được chuyển hóa thành những trải nghiệm thị giác trực quan.
            </p>
          </div>
          <div className="md:col-span-12 mt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-stone-100">
              {[
                { label: 'Role', val: 'Lead Product Designer' },
                { label: 'Time', val: '6 Months (2023)' },
                { label: 'Field', val: 'FinTech / SaaS' },
                { label: 'Deliverables', val: 'Web & Mobile App' }
              ].map(item => (
                <div key={item.label}>
                  <span className="font-body text-[10px] uppercase tracking-[0.2em] text-stone-400 block mb-2">{item.label}</span>
                  <span className="font-body text-sm font-bold text-on-surface">{item.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <section className="mb-32">
        <div className="max-w-[1100px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <h2 className="font-headline text-3xl font-bold leading-none sticky top-32">Bối cảnh & <br/>Thách thức</h2>
            </div>
            <div className="md:col-span-8">
              <div className="space-y-8">
                <p className="font-headline text-xl leading-relaxed text-on-surface-variant">
                  Thị trường quản lý tài sản số đang bùng nổ, nhưng hầu hết các công cụ hiện nay đều quá kỹ thuật hoặc quá rời rạc. Nexus ra đời với tham vọng hợp nhất mọi loại hình tài sản — từ truyền thống như chứng khoán đến hiện đại như Crypto và Bất động sản — vào một bảng điều khiển duy nhất.
                </p>
                <p className="font-headline text-xl leading-relaxed text-on-surface-variant">
                  Thách thức lớn nhất là làm sao để duy trì sự chuyên nghiệp của một công cụ tài chính mà vẫn đảm bảo tính thẩm mỹ, dễ tiếp cận cho cả những nhà đầu tư cá nhân mới bắt đầu.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 flex justify-center">
          <div className="w-full max-w-[1400px] bg-stone-50 p-8 md:p-16 flex flex-col md:flex-row gap-12">
            <div className="flex-1 bg-white shadow-2xl p-4 overflow-hidden">
              <img
                className="w-full object-cover aspect-video"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPQeHg5pwgsDhH4au3DTEfDMUlThs79sr4kqZPFO4Lr2DHR1BLO8hq6O0tfMC5VOVOpVEK2LD9xGeEGPnE0dc_4_8yKc6sbMkU_LUrlKKyghrOMbdGT8gZgzbUmD92Gbt5JgsvainzJGrkYuHbPwxEGUwGMJpNe-D0Mx-9d-qIgF6ft4EMIqol7o4cfWi8_fWG2eneZfGDyImWrq_hPkZYxGNiTCX3CPWA0xpOK8HEh9tndAouStKtqRJEgK7FIm_o5YmRUBZDzw"
                referrerPolicy="no-referrer"
              />
              <p className="mt-4 font-body text-[10px] text-stone-400 uppercase tracking-widest text-center">Nexus Interface — Light Mode Concept</p>
            </div>
            <div className="flex-1 bg-stone-900 shadow-2xl p-4 overflow-hidden">
              <img
                className="w-full object-cover aspect-video"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiXROv4ogZ2Ae-BNuRcM5AU2qpMMITaYAbm2hbdOjl0JKY3kASLgG1Oegqz17sg0Dkwrwe4LmGPmBByjMSCDTnol_El24l1Ihob1FdkUX4L-LjbFhZQTX2jjit2jLWSZ5Qe7zGpkeFSPvUliwEy8LAJuMzxK2JklO61LqlBLREFSPI9_bqsqx3zDu03pR91ksS6TWxNRrwyC-EEro77bCQvaXk1gteOrL5KGS_0H3XVlrv6S7I--Ajnht8E949CEbrgk5YF8NOvQ"
                referrerPolicy="no-referrer"
              />
              <p className="mt-4 font-body text-[10px] text-stone-500 uppercase tracking-widest text-center">Nexus Interface — Dark Mode Concept</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-32 bg-stone-50 py-32">
        <div className="max-w-[1100px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-6">
              <h2 className="font-headline text-3xl font-bold mb-8">Thấu hiểu qua dữ liệu</h2>
              <p className="font-headline text-xl leading-relaxed text-on-surface-variant mb-12">
                Chúng tôi đã thực hiện hơn 40 buổi phỏng vấn chuyên sâu với các nhà đầu tư. Kết quả cho thấy 72% cảm thấy "ngợp" trước các biểu đồ nến truyền thống và mong muốn một cách tiếp cận tối giản hơn.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                <div className="border-l-2 border-primary pl-6">
                  <div className="font-headline text-5xl font-black text-primary mb-2">+85%</div>
                  <div className="font-body text-xs uppercase tracking-widest font-bold text-stone-400">Tỉ lệ giữ chân người dùng</div>
                </div>
                <div className="border-l-2 border-primary pl-6">
                  <div className="font-headline text-5xl font-black text-primary mb-2">-30%</div>
                  <div className="font-body text-xs uppercase tracking-widest font-bold text-stone-400">Thời gian thực hiện giao dịch</div>
                </div>
              </div>
            </div>
            <div className="md:col-span-6">
              <div className="aspect-square bg-white p-12 flex items-center justify-center">
                <div className="w-full space-y-6">
                  {[85, 70, 45, 92].map((w, i) => (
                    <div key={i} className="h-2 bg-stone-100 w-full relative">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${w}%` }}
                        className="absolute inset-y-0 left-0 bg-primary"
                      />
                    </div>
                  ))}
                  <p className="font-body text-[10px] text-stone-400 uppercase tracking-widest mt-8 italic text-right">— User satisfaction metrics survey</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-32 max-w-[1100px] mx-auto px-8">
        <div className="text-center mb-24">
          <h2 className="font-headline text-4xl font-bold mb-6">Từ Bản phác thảo đến Kiệt tác số</h2>
          <p className="font-headline text-xl text-on-surface-variant max-w-2xl mx-auto">
            Mọi chi tiết đều được tinh chỉnh qua hàng chục phiên bản để đạt tới sự cân bằng hoàn hảo giữa tính năng và nghệ thuật.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { tag: 'Ideation', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCEOH54Q4EuRp9_MU_xESlKEjosiivG3KY6uy_1kCvhF4L0FmECiF-j7ZDAd9hcqTwb0VUkeb9h5ksXBeO6-IWhDS3TkthqYecYj8CybIpa3SNa1K1dz6W7T5ja1oyeQlMj1GDhBHK8gC2RqMEI0GBx3dksZ75mkNjkSTXKH7EKBApf3wG0Vifx6KT-oEEBXAM_b8YLJOh8PsKmAiIA2m4dJ8a76VXXrlUy5x3oFPTZ3hgP7ySxs1h61t7IL6WG-YyQKx1bZ4DjZw' },
            { tag: 'Prototyping', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-eIPGT2dhHCJSirmCrkeKNiSDkRs2FKhOXe0BZbVodaBTUkULHyTkUmoPyCbrUvuEPAdLSsKBLiDgZyMX2NqcEi0bTSP-DyfA5NRSQj7vbRvo14Am0ijzFbnjB9RECkGDiUf-edp93G8nV0yjeyK4OUG8z1Ok5leSfWhvnPrJJwfarxAebgziqzK-MuSvrecZvlnVuSDmt9qADKhaE-O03Fxmk9_pKPZlDvVhjEgrG9GukJtCtWavpAwY7eSf-42ABTnALESSCw' },
            { tag: 'High-Fidelity', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbvilH-zS-V4FzDDsy-NbdRflKqZ5Pc-wDnTECMI51lP6bZ6dIz4T-3gM_1KwryqjSCIsPIpLrtm505tmOnQuNQ2bK_MiAl5hIkMzWKwp-68S3DTM1Jv2b2-WjjkHDxlys7ypPW5zzSiDxRr4xXkY8qnRyLUi5LJz7-jRkHtM26fxjb8Z-tItlv8GIrAzgGgTnU5qd_TX7QstRSHnfwcXwLon4oD42PKJIJfwfNXvZR3Obyir7yJ9EgSVBSukpHoOdqHuZfCoULA' }
          ].map((item, i) => (
            <div key={i} className="aspect-[3/4] bg-stone-100 overflow-hidden relative group">
              <img src={item.img} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <span className="text-white font-body text-xs uppercase tracking-widest font-bold">Giai đoạn 0{i+1}: {item.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-32 py-24 border-t border-stone-100 max-w-[1100px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-5">
            <h2 className="font-headline text-3xl font-bold mb-8 italic">Nexus Design System</h2>
            <p className="font-headline text-lg leading-relaxed text-on-surface-variant mb-8">
              Để duy trì sự nhất quán trên nhiều nền tảng, chúng tôi đã xây dựng "The Nexus Language" — một hệ thống thiết kế linh hoạt dựa trên lưới tỷ lệ vàng và bảng màu trung tính cao cấp.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary"></div>
                <div className="w-12 h-12 bg-on-surface"></div>
                <div className="w-12 h-12 bg-stone-200"></div>
                <div className="w-12 h-12 bg-stone-50"></div>
              </div>
              <div className="pt-4">
                <span className="font-headline text-xl font-bold italic block">Aa</span>
                <span className="font-body text-xs uppercase tracking-widest text-stone-400">Noto Serif / Manrope</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="bg-stone-50 p-12 space-y-8">
              <div className="h-16 bg-white border border-stone-100 flex items-center px-6 gap-4">
                <Search className="text-stone-300" size={20} />
                <span className="font-body text-sm text-stone-300">Tìm kiếm tài sản...</span>
              </div>
              <div className="flex gap-4">
                <div className="h-12 bg-primary flex-1 flex items-center justify-center text-white font-body text-[10px] uppercase font-bold tracking-widest">Button Primary</div>
                <div className="h-12 border border-stone-200 flex-1 flex items-center justify-center font-body text-[10px] uppercase font-bold tracking-widest">Button Secondary</div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {['account_balance_wallet', 'trending_up', 'pie_chart'].map(icon => (
                  <div key={icon} className="aspect-square bg-white shadow-sm flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">{icon}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
