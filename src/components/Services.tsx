import { Smartphone, Video, Palette, BrainCircuit } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "SMM и Стратегия",
    description:
      "Разрабатываю SMM-стратегию и контент-план на основе глубокого анализа вашей аудитории. Такой подход позволяет не просто увеличивать охваты, а создавать виральный контент, который привлекает клиентов",
  },
  {
    icon: Video,
    title: "Видеопродакшн",
    description:
      "Провожу съёмки на профессиональную камеру, используя полный комплект света и звукового оборудования. Это гарантирует высокое качество картинки и чистый звук в каждом видео",
  },
  {
    icon: Palette,
    title: "Дизайн и визуал",
    description:
      "Разрабатываю визуальный стиль для вашего бренда. Владею всем пакетом Adobe: монтирую видео в Premiere Pro, анимирую графику в After Effects и воплощаю любые креативные идеи для постов в Photoshop",
  },
  {
    icon: BrainCircuit,
    title: "AI-инструменты",
    description:
      "Использую нейросети как инструмент для анализа рынка и оптимизации рутинных задач. Это позволяет экономить время и находить больше сильных, неочевидных идей для вашего контента",
  },
];

export function Services() {
  return (
    <section id="services" className="px-8 py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-white text-[48px] mb-20" style={{ fontWeight: 700 }}>
          Чем я могу быть полезен
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#2C2C2E] rounded-[16px] p-8 space-y-6 hover:bg-[#3A3A3C] transition-colors text-left"
            >
              <div className="w-20 h-20 rounded-full bg-[#007BFF] flex items-center justify-center">
                <service.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-white text-[22px]" style={{ fontWeight: 700 }}>
                {service.title}
              </h3>
              <p className="text-white text-[16px] leading-relaxed" style={{ fontWeight: 400 }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
