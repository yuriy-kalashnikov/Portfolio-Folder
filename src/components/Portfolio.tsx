import { useState } from "react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Youtube, Send, Image as ImageIcon, Film, Link as LinkIcon } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    title: "Кейс: 20+ млн просмотров на Reels",
    description:
      "Разработал вирусную механику на основе популярного тренда, усилив его уникальной концовкой. Это позволило не только получить миллионные охваты, но и привлечь на канал десятки тысяч новых подписчиков.",
    image: "/images/views.jpg",
    tags: ["SMM", "Видео"],
    linkIcon: Film,
    linkText: "Смотреть на YouTube",
    linkUrl: "https://youtube.com/shorts/kHJSAhm6aC0?feature=share"
  },
  {
    id: 2,
    title: "Разработка Telegram-воронки для бизнеса",
    description:
      "Разработал архитектуру и сценарий для чат-бота на Python, превратив неактивный Telegram-канал в бизнес-инструмент и увеличив аудиторию с 600 до 2000 подписчиков. Бот автоматически выдавал лид-магнит за подписку, а затем квалифицировал пользователя и предлагал оставить заявку для менеджера.",
    image: "/images/tgbot.jpg",
    tags: ["SMM"],
    linkIcon: Send,
    linkText: "Перейти в канал",
    linkUrl: "https://t.me/progressdesignBot"
  },
  {
    id: 3,
    title: "Маскот, как уникальный голос бренда",
    description:
      "Разработал и внедрил в контент-стратегию уникального бренд-персонажа — Мастера Барсукова. Еженедельно в постах он объяснял сложные технические детали и представлял новые проекты. Это позволило повысить узнаваемость бренда, что подтвердила прямая обратная связь от клиентов в шоуруме.",
    image: "/images/barsuk.jpg",
    tags: ["SMM"],
    linkIcon: ImageIcon,
    linkText: "Смотреть пример публикации",
    linkUrl: "https://t.me/progress_design_official/1414"
  },
  {
    id: 4,
    title: "Разработка визуального стиля",
    description:
      "Привел в порядок визуальное оформление всех соцсетей компании, решив проблему устаревшего и хаотичного дизайна. Обновил логотип до минималистичного вида, создал единые шаблоны для постов и разработал простые правила оформления, чтобы бренд выглядел солидно, современно и узнаваемо.",
    image: "/images/design.jpg",
    tags: ["Motion-дизайн"],
  },
  {
    id: 5,
    title: "Глубокий анализ ЦА для создания точного контента",
    description:
      "Взял за основу существующий общий портрет ЦА и провел его глубокую сегментацию. Для каждого из 19 сегментов я детализировал не только 'боли' и 'желания', но и их глубинные страхи, мечты и возражения. Это позволило создавать таргетированный контент, который 'бьет' точно в цель и вызывает у аудитории отклик 'это про меня'.",
    image: "/images/audience.jpg",
    tags: ["SMM"],
  },
  {
    id: 6,
    title: "Разработал стратегию доверительного контента",
    description:
      "Мой подход — создавать полезные длинные видео, которые решают реальные проблемы зрителя, вызывают доверие и благодарность. Это подтверждается высокой досматриваемостью и осмысленными комментариями, что делает бренд настоящим экспертом в глазах аудитории.",
    image: "/images/useful.jpg",
    tags: ["Видео"],
    linkIcon: Film,
    linkText: "Смотреть пример видео",
    linkUrl: "https://youtu.be/6lwSd7tMTmc"
  },
  {
    id: 7,
    title: "Создание нишевого YouTube-канала с нуля",
    description:
      "Развивал канал о трейлраннинге, выпуская по два динамичных репортажа в неделю с живыми интервью и POV-съёмкой трассы. Главным результатом стала не только лояльная аудитория, но и личный рост: я отточил навыки монтажа и научился легко заводить разговор с кем угодно для создания интересного контента.",
    image: "/images/shport.jpg",
    tags: ["Видео"],
    linkIcon: Film,
    linkText: "Перейти на канал",
    linkUrl: "https://youtu.be/zgFpiivkWpQ?si=QKoTqglHkOzvJtW3"
  },
  {
    id: 8,
    title: "Брендирование видеоконтента в After Effects",
    description:
      "Создал полный пакет анимированной графики (логотип, заставки, титры), чтобы придать видео профессиональный и единый вид. Отдельно разработал анимированного 2D-персонажа для видео-эксплейнеров, используя технику риггинга и липсинка.",
    image: "/images/vfx.jpg" ,
    tags: ["Motion-дизайн"],
  },
  {
    id: 9,
    title: "Шоурил по After Effects",
    description:
      "30-секундная демонстрация моих ключевых навыков в After Effects. В рамках концепции AR-опыта я показываю владение 3D-трекингом, VFX, UI-анимацией и саунд-дизайном, упаковав полгода интенсивного обучения в один динамичный ролик.",
    image: "/images/showreel.jpg",
    tags: ["Motion-дизайн"],
    linkIcon: Film,
    linkText: "Смотреть шоурил",
    linkUrl: "https://vimeo.com/1007236336?fl=ip&fe=ec"
  },
  {
    id: 10,
    title: "Taplink: от визитки до эффективного мини-сайта",
    description:
      "Превратил Taplink в полноценный мини-сайт, продумав его структуру и дизайн для максимальной эффективности. Страница логично выстроена, чтобы ответить на все ключевые вопросы клиента и направить его к следующему шагу — визиту в шоурум или контакту с менеджером.",
    image: "/images/taplink.jpg",
    tags: ["SMM"],
    linkIcon: LinkIcon,
    linkText: "Посмотреть страницу",
    linkUrl: "https://taplink.cc/progress_design_official"
  },
];

const categories = ["Все", "SMM", "Видео", "Motion-дизайн"];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Все");

  const filteredItems =
    activeCategory === "Все"
      ? portfolioItems
      : portfolioItems.filter((item) => item.tags.includes(activeCategory));

  return (
    <section className="px-8 py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-white text-[48px] mb-16" style={{ fontWeight: 700 }}>
          Мои работы
        </h2>

        {/* Фильтры */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <Button
              key={category}
              className={
                activeCategory === category
                  ? "bg-[#007BFF] hover:bg-[#0062CC] text-white px-8 py-6 transition-all"
                  : "bg-[#2C2C2E] text-white hover:bg-[#3A3A3C] px-8 py-6 transition-all"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Сетка работ с выравниванием высоты */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden hover:transform hover:scale-105 transition-transform flex flex-col"
            >
              {/* Верхняя часть - изображение с соотношением 4:3 */}
              <div className="aspect-[4/3] relative rounded-t-[16px] overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Нижняя часть - текст с фиксированной высотой */}
              <div className="bg-[#2C2C2E] hover:bg-[#3A3A3C] transition-colors p-6 space-y-4 rounded-b-[16px] flex flex-col h-[400px]">
                <h3 className="text-white text-[20px]" style={{ fontWeight: 700 }}>
                  {item.title}
                </h3>
                <p className="text-white leading-relaxed text-[16px] flex-1 overflow-auto" style={{ fontWeight: 400 }}>
                  {item.description}
                </p>
                {item.linkUrl && item.linkIcon && (
                  <a
                    href={item.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#007BFF] cursor-pointer hover:text-[#0062CC]"
                  >
                    <item.linkIcon className="w-5 h-5" />
                    <span className="text-[16px]">{item.linkText}</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}