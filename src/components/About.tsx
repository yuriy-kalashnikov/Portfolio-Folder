import { ImageWithFallback } from "./figma/ImageWithFallback";

const software = [
  { name: "Adobe Premiere Pro", icon: "🎬" },
  { name: "Adobe After Effects", icon: "✨" },
  { name: "Adobe Photoshop", icon: "🎨" },
];

const equipment = [
  { name: "Камера Panasonic GH-5", icon: "📹" },
  { name: "Беспроводные петлички", icon: "🎤" },
  { name: "Профессиональный свет", icon: "💡" },
];

const aiTools = [
  { name: "Gemini 2.5 Pro", icon: "🤖" },
  { name: "Nano-Banana & Veo 3", icon: "🎥" },
  { name: "n8n", icon: "⚙️" },
];

export function About() {
  return (
    <section className="px-8 py-24 bg-[#1F1F1F]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-white text-[48px] mb-20" style={{ fontWeight: 700 }}>
          Обо мне
        </h2>

        {/* Секция "Обо мне" - Две колонки */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Левая колонка - Фотография */}
          <div className="rounded-[24px] overflow-hidden aspect-[4/5] bg-[#007BFF]/20">
            <ImageWithFallback
              src="/images/work.jpg"
              alt="Обо мне"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Правая колонка - Текст */}
          <div className="space-y-6 text-left">
            <p className="text-white text-[18px] leading-relaxed" style={{ fontWeight: 400 }}>
              Я создаю контент полного цикла — от идеи до готового ролика. В этом мне помогает опыт работы в медиа.
            </p>
            <p className="text-white text-[18px] leading-relaxed" style={{ fontWeight: 400 }}>
              Я был радиоведущим и телекорреспондентом, где научился рассказывать истории, которые цепляют, и находить общий язык с любой аудиторией.
            </p>
            <p className="text-white text-[18px] leading-relaxed" style={{ fontWeight: 400 }}>
              Эти навыки я использую каждый день. Я не просто делаю посты и видео, а решаю бизнес-задачи и вызываю у зрителей эмоции.
            </p>
          </div>
        </div>

        {/* Технический стек - ТРИ КОЛОНКИ */}
        <div className="space-y-12">
          <h3 className="text-white text-[36px] text-center" style={{ fontWeight: 700 }}>
            Мой технический стек
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Программы */}
            <div>
              <h4 className="text-white text-[24px] mb-6 text-center" style={{ fontWeight: 700 }}>
                Программы
              </h4>
              <ul className="space-y-4">
                {software.map((item, index) => (
                  <li key={index}>
                    <div className="bg-[#2C2C2E] hover:bg-[#3A3A3C] transition-colors rounded-[12px] px-4 py-3 flex items-center gap-3 h-14">
                      <span className="text-[#007BFF] text-[20px]">{item.icon}</span>
                      <span className="text-white text-[16px]">{item.name}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Оборудование */}
            <div>
              <h4 className="text-white text-[24px] mb-6 text-center" style={{ fontWeight: 700 }}>
                Оборудование
              </h4>
              <ul className="space-y-4">
                {equipment.map((item, index) => (
                  <li key={index}>
                    <div className="bg-[#2C2C2E] hover:bg-[#3A3A3C] transition-colors rounded-[12px] px-4 py-3 flex items-center gap-3 h-14">
                      <span className="text-[#007BFF] text-[20px]">{item.icon}</span>
                      <span className="text-white text-[16px]">{item.name}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* AI-инструменты */}
            <div>
              <h4 className="text-white text-[24px] mb-6 text-center" style={{ fontWeight: 700 }}>
                AI-инструменты
              </h4>
              <ul className="space-y-4">
                {aiTools.map((item, index) => (
                  <li key={index}>
                    <div className="bg-[#2C2C2E] hover:bg-[#3A3A3C] transition-colors rounded-[12px] px-4 py-3 flex items-center gap-3 h-14">
                      <span className="text-[#007BFF] text-[20px]">{item.icon}</span>
                      <span className="text-white text-[16px]">{item.name}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
