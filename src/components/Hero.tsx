import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center px-8 py-20">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Левая колонка - Фотография */}
        <div className="order-2 lg:order-1">
          <div className="rounded-[24px] overflow-hidden aspect-[4/5] bg-[#007BFF]/20">
            <ImageWithFallback
              src="/images/main.jpg"
              alt="Портфолио"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Правая колонка - Текст и кнопки */}
        <div className="order-1 lg:order-2 space-y-10 text-left">
          <div className="space-y-8">
            <h1 
              className="text-white text-[60px]" 
              style={{ fontWeight: 700, lineHeight: '1' }}
            >
              Весь контент в одних руках
            </h1>
            <p className="text-white text-[20px] leading-relaxed" style={{ fontWeight: 400 }}>
              Продумываю концепцию, профессионально снимаю и монтирую видео, а затем публикую его в ваших соцсетях
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {/* Второстепенная кнопка */}
            <Button
              variant="outline"
              className="border-[2px] border-[#007BFF] text-[#007BFF] bg-transparent hover:bg-[#007BFF] hover:text-white rounded-[12px] px-8 py-6 transition-all"
              onClick={() => {
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Мои навыки ↓
            </Button>
            
            {/* Основная кнопка */}
            <Button
              className="bg-[#007BFF] hover:bg-[#0062CC] text-white rounded-[12px] px-8 py-6 transition-all"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Связаться со мной
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}