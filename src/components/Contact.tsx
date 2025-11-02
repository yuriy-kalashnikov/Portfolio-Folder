import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Phone, Send as TelegramIcon, MessageCircle } from "lucide-react";
import { Send as SendPlaneIcon } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="px-8 py-24">
      <div className="max-w-2xl mx-auto">
        {/* Текстовые элементы */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-white text-[48px]" style={{ fontWeight: 700 }}>
            Давайте работать вместе
          </h2>
          <p className="text-white text-[20px]" style={{ fontWeight: 400 }}>
            Готов обсудить ваш проект. Свяжитесь со мной удобным способом.
          </p>
        </div>

        {/* --- НАЧАЛО ФОРМЫ --- */}
        <form name="contact" method="POST" data-netlify="true" className="space-y-6 mb-16">
          {/* Эта строка обязательна для Netlify! */}
          <input type="hidden" name="form-name" value="contact" />

          <div>
            <label className="block text-white text-[16px] mb-2" style={{ fontWeight: 400 }}>
              Ваше имя
            </label>
            <Input
              type="text"
              name="name" // ОБЯЗАТЕЛЬНО
              required
              className="bg-[#2C2C2E] border-[#2C2C2E] text-white placeholder:text-gray-500 h-14 text-[16px] rounded-[12px]"
            />
          </div>

          <div>
            <label className="block text-white text-[16px] mb-2" style={{ fontWeight: 400 }}>
              Email
            </label>
            <Input
              type="email"
              name="email" // ОБЯЗАТЕЛЬНО
              required
              className="bg-[#2C2C2E] border-[#2C2C2E] text-white placeholder:text-gray-500 h-14 text-[16px] rounded-[12px]"
            />
          </div>

          <div>
            <label className="block text-white text-[16px] mb-2" style={{ fontWeight: 400 }}>
              Сообщение
            </label>
            <Textarea
              name="message" // ОБЯЗАТЕЛЬНО
              required
              rows={6}
              className="bg-[#2C2C2E] border-[#2C2C2E] text-white placeholder:text-gray-500 resize-none text-[16px] rounded-[12px]"
            />
          </div>

          {/* Кнопка Отправить с иконкой */}
          <Button
            type="submit"
            className="w-full bg-[#007BFF] hover:bg-[#0062CC] text-white h-16 text-[18px] rounded-[12px] flex items-center justify-center gap-3 transition-all"
          >
            <SendPlaneIcon className="w-5 h-5" />
            Отправить
          </Button>
        </form>
        {/* --- КОНЕЦ ФОРМЫ --- */}

        {/* Иконки для связи */}
        <div className="flex justify-center gap-6">
          <a
            href="tel:+79254049311" // НЕ ЗАБУДЬТЕ ВСТАВИТЬ НОМЕР
            className="w-16 h-16 rounded-full bg-[#2C2C2E] flex items-center justify-center hover:bg-[#3A3A3C] transition-colors group"
            aria-label="Телефон"
          >
            <Phone className="w-7 h-7 text-white" />
          </a>
          <a
            href="https://t.me/KalashnikovYuriy" // НЕ ЗАБУДЬТЕ ВСТАВИТЬ НИКНЕЙМ
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 rounded-full bg-[#2C2C2E] flex items-center justify-center hover:bg-[#3A3A3C] transition-colors group"
            aria-label="Telegram"
          >
            <TelegramIcon className="w-7 h-7 text-white" />
          </a>
          <a
            href="https://wa.me/+79254049311" // НЕ ЗАБУДЬТЕ ВСТАВИТЬ НОМЕР
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 rounded-full bg-[#2C2C2E] flex items-center justify-center hover:bg-[#3A3A3C] transition-colors group"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-7 h-7 text-white" />
          </a>
        </div>
      </div>
    </section>
  );
}