const experiences = [
  {
    position: "right",
    title: "SMM-специалист, видеограф",
    period: "Сентябрь 2024 – Наст. время",
    company: "Мебельная компания 'Progress Design'",
    achievements: [
      "Увеличил аудиторию YouTube-канала с 5 000 до 68 000 подписчиков за счет разработки и съёмок вирусных коротких видео (Reels).",
      "Разработал и внедрил воронку в Telegram с чат-ботом (Python) и лид-магнитами, увеличив аудиторию с 600 до 2 000 подписчиков.",
      "Спродюсировал и смонтировал более 200 видеороликов разных форматов: от коротких Reels до 10-минутных экспертных видео для YouTube.",
    ],
  },
  {
    position: "left",
    title: "Автор YouTube-канала, блогер",
    period: "Август 2023 – Январь 2024",
    company: "Собственный YouTube-канал 'Шпорт'",
    achievements: [
      "Создал и развил с нуля YouTube-канал в узкоспециализированной нише (бег), привлек лояльную аудиторию в 650 подписчиков.",
      "Самостоятельно выполнял полный цикл еженедельного видеопродакшена: от съёмок на забегах и записи интервью до монтажа и публикации (2 видео в неделю).",
      "Сформировал активное комьюнити, которое регулярно комментировало и ожидало новые выпуски.",
    ],
  },
  {
    position: "right",
    title: "Специалист бэк-офиса",
    period: "2013 – 2023",
    company: "'Тинькофф Банк'",
    description:
      "Этот 10-летний опыт в одной из ведущих тех-компаний страны научил меня системности, вниманию к деталям и работе с данными. Эти навыки сегодня помогают мне строить SMM-стратегии на основе анализа, а не догадок, и эффективно управлять сложными проектами.",
    isItalic: true,
  },
  {
    position: "left",
    title: "Корреспондент, радиоведущий",
    period: "2010 – 2013",
    company: "'ТРК Евразия' (Русское Радио, Хит FM)",
    achievements: [
      "Вел прямые эфиры и авторские шоу, проводил интервью со звездами.",
      "Работал корреспондентом в новостной службе: от поиска инфоповода и записи интервью до подготовки сюжета к вечернему эфиру.",
      "Приобрел ключевые навыки: работа в кадре и с голосом, умение рассказывать истории и работать в режиме жестких дедлайнов.",
    ],
  },
];

export function Experience() {
  return (
    <section className="px-8 py-24 bg-[#1F1F1F]">
      <div className="max-w-6xl mx-auto">
        <h2 
          className="text-center text-white text-[60px] mb-24" 
          style={{ fontWeight: 700, lineHeight: '1' }}
        >
          Опыт работы
        </h2>

        <div className="relative">
          {/* Вертикальная синяя линия (адаптивная) */}
          <div className="absolute left-1.5 top-0 bottom-0 w-0.5 bg-[#007BFF] transform lg:left-1/2 lg:-translate-x-1/2" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-start ${
                  exp.position === "left"
                    ? "lg:flex-row-reverse"
                    : "lg:flex-row"
                } flex-col lg:items-center`}
              >
                {/* Синий круглый маркер (адаптивный) */}
                <div className="absolute left-0 top-2 w-3 h-3 bg-[#007BFF] rounded-full transform border-4 border-[#1F1F1F] z-10 lg:left-1/2 lg:-translate-x-1/2 lg:top-1/2" />

                {/* Пустое пространство (только для больших экранов) */}
                <div className="w-full lg:w-1/2 hidden lg:block" />

                {/* Карточка опыта (адаптивная) */}
                <div className="w-full lg:w-1/2 pl-8 lg:px-16">
                  <div className="bg-[#2C2C2E] rounded-[16px] p-8 space-y-4 text-left hover:bg-[#3A3A3C] transition-colors">
                    <h3 className="text-white text-[24px]" style={{ fontWeight: 700 }}>
                      {exp.title}
                    </h3>
                    <div className="text-[#007BFF] text-[18px]">{exp.period}</div>
                    <div className="text-[#BDBDBD] text-[16px]">{exp.company}</div>
                    
                    {exp.description ? (
                      <p className={`text-white leading-relaxed text-[16px] ${exp.isItalic ? "italic" : ""}`}>
                        {exp.description}
                      </p>
                    ) : (
                      <ul className="space-y-3">
                        {exp.achievements?.map((achievement, i) => (
                          <li key={i} className="text-white leading-relaxed flex gap-3 text-[16px]">
                            <span className="w-2 h-2 bg-[#007BFF] rounded-full flex-shrink-0 mt-2"></span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}