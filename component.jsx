import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Menu, ChevronRight, Building2, Lightbulb, Shield, Trophy, Phone, Mail, MapPin, FileText } from 'lucide-react';

export default function KZProjectGroupPremium() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Здравствуйте! Я AI-помощник KZ Project Group. Чем могу помочь?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const userMessage = { type: 'user', text: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    setTimeout(() => {
      const botResponse = generateBotResponse(inputValue);
      setMessages(prev => [...prev, { type: 'bot', text: botResponse }]);
    }, 800);
  };

  const generateBotResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    if (input.includes('услуг') || input.includes('сервис')) {
      return 'Мы предлагаем полный спектр проектных услуг: архитектурное проектирование, инженерные системы, BIM-моделирование, консалтинг и сопровождение проектов. Имеем лицензии ГСЛ-КР №002187 и ГСЛ№ 23017135. Какая услуга вас интересует?';
    } else if (input.includes('цен') || input.includes('стоимост')) {
      return 'Стоимость зависит от масштаба и сложности проекта. Оставьте заявку, и наши специалисты подготовят индивидуальное коммерческое предложение в течение 24 часов.';
    } else if (input.includes('контакт') || input.includes('связ') || input.includes('телефон') || input.includes('whatsapp')) {
      return 'Контакты:\n📧 Email: kzprojectgroup@mail.ru\n📞 Телефон/WhatsApp: +7-708-888-00-98\n📍 Адрес: Казахстан, Алматинская область, Талгарский район, г. Талгар, ул. Қазанғап, дом 4А, кв. 17, 041600';
    } else if (input.includes('портфол') || input.includes('проект')) {
      return 'За годы работы мы реализовали множество проектов: жилые комплексы, коммерческие центры, промышленные объекты. Хотите посмотреть примеры наших работ?';
    } else if (input.includes('лицензи') || input.includes('документ')) {
      return 'Наши лицензии:\n• ГСЛ-КР №002187 от 08.02.2023\n• ГСЛ№ 23017135 от 31.07.2023\n• БИН: 021240006983\n\nВсе документы оформлены в соответствии с законодательством РК.';
    } else if (input.includes('директор') || input.includes('руководств')) {
      return 'Директор ТОО «Kz Project Group» - Петров М.В.\n\nНаша команда состоит из опытных специалистов в области архитектуры и проектирования.';
    } else if (input.includes('банк') || input.includes('реквизит') || input.includes('иик')) {
      return 'Банковские реквизиты:\nИИК: KZ33601A861012861021\nБИК: HSBKKZKX\nБанк: АО «Народный Банк Казахстан»\nБИН: 021240006983';
    } else {
      return 'Спасибо за ваш вопрос! Наш специалист свяжется с вами для детальной консультации. Могу рассказать подробнее об услугах, ценах, проектах, лицензиях или реквизитах компании.';
    }
  };

  const quickActions = [
    { text: 'Наши услуги', action: 'услуги' },
    { text: 'Контакты', action: 'контакты' },
    { text: 'Лицензии', action: 'лицензии' },
    { text: 'Реквизиты', action: 'реквизиты' }
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white backdrop-blur-sm z-40 border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center font-bold text-xl text-white">
                KZ
              </div>
              <div>
                <div className="font-bold text-xl text-stone-900">KZ Project Group</div>
                <div className="text-xs text-stone-500">Проектная компания</div>
              </div>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-stone-600 hover:text-amber-700 transition font-medium">Главная</a>
              <a href="#services" className="text-stone-600 hover:text-amber-700 transition font-medium">Услуги</a>
              <a href="#about" className="text-stone-600 hover:text-amber-700 transition font-medium">О нас</a>
              <a href="#contact" className="text-stone-600 hover:text-amber-700 transition font-medium">Контакты</a>
            </div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-stone-100 transition"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-stone-200">
            <div className="px-4 py-4 space-y-3">
              <a href="#home" className="block text-stone-600 hover:text-amber-700 transition font-medium">Главная</a>
              <a href="#services" className="block text-stone-600 hover:text-amber-700 transition font-medium">Услуги</a>
              <a href="#about" className="block text-stone-600 hover:text-amber-700 transition font-medium">О нас</a>
              <a href="#contact" className="block text-stone-600 hover:text-amber-700 transition font-medium">Контакты</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-24 px-4 bg-gradient-to-br from-stone-100 via-amber-50 to-stone-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-6">
                Лицензированная проектная компания
              </div>
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight text-stone-900">
                Премиальное
                <span className="block text-amber-700">
                  проектирование
                </span>
              </h1>
              <p className="text-2xl text-stone-600 mb-8 leading-relaxed">
                Инновационные архитектурные и инженерные решения для вашего бизнеса
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => setIsChatOpen(true)}
                  className="bg-amber-700 text-white px-10 py-5 rounded-xl font-semibold hover:bg-amber-800 transition shadow-lg hover:shadow-xl"
                >
                  AI-Консультация
                </button>
                <a 
                  href="#contact"
                  className="bg-white text-stone-900 px-10 py-5 rounded-xl font-semibold hover:bg-stone-50 transition border-2 border-stone-200"
                >
                  Связаться с нами
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-amber-400 rounded-3xl blur-3xl opacity-30"></div>
              <img 
                src="keys/kz-premium-building?prompt=luxury%20modern%20architecture%20building%20premium%20design%20glass%20gold%20accents%20professional%20photography"
                alt="Premium Architecture"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 px-4 bg-white border-y border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-amber-700 mb-2">
                2
              </div>
              <div className="text-stone-600 font-medium">Государственные лицензии</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-amber-700 mb-2">
                500+
              </div>
              <div className="text-stone-600 font-medium">Реализованных проектов</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-amber-700 mb-2">
                24/7
              </div>
              <div className="text-stone-600 font-medium">AI-поддержка клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-amber-700 mb-2">
                100%
              </div>
              <div className="text-stone-600 font-medium">Соответствие стандартам</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-stone-900">Наши услуги</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Комплексный подход к проектированию с использованием передовых технологий
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Building2 className="w-10 h-10" />,
                title: 'Архитектурное проектирование',
                description: 'Разработка концепций и рабочей документации для объектов любой сложности'
              },
              {
                icon: <Lightbulb className="w-10 h-10" />,
                title: 'Инженерные системы',
                description: 'Полный цикл проектирования инженерных коммуникаций и систем жизнеобеспечения'
              },
              {
                icon: <Shield className="w-10 h-10" />,
                title: 'BIM-моделирование',
                description: 'Информационное моделирование зданий для эффективного управления проектами'
              },
              {
                icon: <Trophy className="w-10 h-10" />,
                title: 'Проектный консалтинг',
                description: 'Экспертное сопровождение проектов на всех этапах реализации'
              },
              {
                icon: <FileText className="w-10 h-10" />,
                title: 'Экспертиза проектов',
                description: 'Независимая экспертиза проектной документации и технический аудит'
              },
              {
                icon: <MessageCircle className="w-10 h-10" />,
                title: 'AI-консультации',
                description: 'Мгновенные ответы на вопросы через интеллектуального помощника'
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl border border-stone-200 hover:border-amber-300 hover:shadow-xl transition group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition text-amber-700">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-stone-900">{service.title}</h3>
                <p className="text-stone-600 leading-relaxed text-lg">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <img 
                src="keys/kz-office-interior?prompt=luxury%20modern%20office%20interior%20architecture%20company%20Kazakhstan%20professional%20elegant%20design"
                alt="Our office"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-amber-700 text-white p-8 rounded-2xl shadow-xl">
                <div className="text-4xl font-bold mb-1">М.В. Петров</div>
                <div className="text-amber-100">Директор компании</div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-stone-900">О компании</h2>
              <p className="text-xl text-stone-600 mb-6 leading-relaxed">
                ТОО «Kz Project Group» — лицензированная проектная компания, специализирующаяся на архитектурном и инженерном проектировании объектов различного назначения.
              </p>
              <p className="text-xl text-stone-600 mb-8 leading-relaxed">
                Мы используем передовые технологии BIM-моделирования и AI-системы для создания инновационных проектных решений, соответствующих международным стандартам качества.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-green-700" />
                  </div>
                  <div>
                    <div className="font-bold text-xl mb-1 text-stone-900">Государственные лицензии</div>
                    <div className="text-stone-600">ГСЛ-КР №002187 от 08.02.2023 и ГСЛ№ 23017135 от 31.07.2023</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Trophy className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <div className="font-bold text-xl mb-1 text-stone-900">Опытная команда</div>
                    <div className="text-stone-600">Высококвалифицированные специалисты с международными сертификатами</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-amber-700" />
                  </div>
                  <div>
                    <div className="font-bold text-xl mb-1 text-stone-900">Инновационные технологии</div>
                    <div className="text-stone-600">BIM, AI и современные методы проектирования</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-gradient-to-br from-stone-900 to-stone-800 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-stone-300">
              Мы готовы обсудить ваш проект и предложить оптимальные решения
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-stone-800 bg-opacity-50 p-8 rounded-2xl border border-stone-700">
              <h3 className="text-2xl font-bold mb-6 text-amber-400">Контактная информация</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Телефон / WhatsApp</div>
                    <a href="tel:+77088880098" className="text-stone-300 hover:text-amber-400 transition">
                      +7-708-888-00-98
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href="mailto:kzprojectgroup@mail.ru" className="text-stone-300 hover:text-amber-400 transition">
                      kzprojectgroup@mail.ru
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Адрес</div>
                    <div className="text-stone-300">
                      Казахстан, Алматинская область,<br />
                      Талгарский район, г. Талгар,<br />
                      ул. Қазанғап, дом 4А, кв. 17<br />
                      Индекс: 041600
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-stone-800 bg-opacity-50 p-8 rounded-2xl border border-stone-700">
              <h3 className="text-2xl font-bold mb-6 text-amber-400">Реквизиты компании</h3>
              <div className="space-y-4 text-stone-300">
                <div>
                  <div className="text-sm text-stone-400 mb-1">Полное наименование</div>
                  <div className="font-semibold">ТОО «Kz Project Group»</div>
                </div>
                
                <div>
                  <div className="text-sm text-stone-400 mb-1">БИН</div>
                  <div className="font-mono">021240006983</div>
                </div>
                
                <div>
                  <div className="text-sm text-stone-400 mb-1">ИИК</div>
                  <div className="font-mono">KZ33601A861012861021</div>
                </div>
                
                <div>
                  <div className="text-sm text-stone-400 mb-1">БИК Банка</div>
                  <div className="font-mono">HSBKKZKX</div>
                </div>
                
                <div>
                  <div className="text-sm text-stone-400 mb-1">Банк</div>
                  <div>АО «Народный Банк Казахстан»</div>
                </div>
                
                <div>
                  <div className="text-sm text-stone-400 mb-1">Лицензии</div>
                  <div className="text-sm">
                    ГСЛ-КР №002187 от 08.02.2023<br />
                    ГСЛ№ 23017135 от 31.07.2023
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button 
              onClick={() => setIsChatOpen(true)}
              className="bg-amber-700 text-white px-12 py-5 rounded-xl font-semibold text-lg hover:bg-amber-800 transition shadow-lg hover:shadow-xl inline-flex items-center space-x-3"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Получить консультацию AI</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-400 py-8 px-4 border-t border-stone-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="mb-2">&copy; 2025 ТОО «KZ Project Group». Все права защищены.</p>
          <p className="text-sm">БИН: 021240006983 | Директор: Петров М.В.</p>
        </div>
      </footer>

      {/* AI Chat Button */}
      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full shadow-2xl hover:shadow-amber-500/50 transition transform hover:scale-110 flex items-center justify-center z-50 text-white"
        >
          <MessageCircle className="w-8 h-8" />
        </button>
      )}

      {/* AI Chat Window */}
      {isChatOpen && (
        <div className="fixed bottom-8 right-8 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 border border-stone-200">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-amber-700 to-amber-800 p-6 rounded-t-2xl flex justify-between items-center text-white">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold text-lg">AI-Помощник</div>
                <div className="text-xs opacity-90">KZ Project Group</div>
              </div>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-stone-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-4 rounded-2xl ${
                    message.type === 'user'
                      ? 'bg-amber-700 text-white'
                      : 'bg-white text-stone-900 border border-stone-200 shadow-sm'
                  }`}
                >
                  <div className="text-sm whitespace-pre-line">{message.text}</div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          {messages.length <= 2 && (
            <div className="px-4 pb-3 bg-stone-50">
              <div className="text-xs text-stone-500 mb-2">Популярные вопросы:</div>
              <div className="flex flex-wrap gap-2">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setInputValue(action.action);
                      setTimeout(() => handleSendMessage(), 100);
                    }}
                    className="text-xs bg-white hover:bg-stone-100 border border-stone-200 px-3 py-2 rounded-lg transition"
                  >
                    {action.text}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Chat Input */}
          <div className="p-4 border-t border-stone-200 bg-white rounded-b-2xl">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Введите сообщение..."
                className="flex-1 bg-stone-100 text-stone-900 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 border border-stone-200"
              />
              <button
                onClick={handleSendMessage}
                className="bg-amber-700 text-white p-3 rounded-xl hover:bg-amber-800 transition"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}