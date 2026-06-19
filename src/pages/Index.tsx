import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const IMG = {
  bath: 'https://cdn.poehali.dev/projects/d0a5b1ea-ac76-439f-8a91-79050f32c235/files/4ac4f932-5ea5-4075-8b5c-b179f6856868.jpg',
  scrub: 'https://cdn.poehali.dev/projects/d0a5b1ea-ac76-439f-8a91-79050f32c235/files/eb2554a5-d87d-4a79-a610-1541f3a57d2b.jpg',
  candle: 'https://cdn.poehali.dev/projects/d0a5b1ea-ac76-439f-8a91-79050f32c235/files/36af09b4-2716-4f4d-968d-0cb9eed1bdc4.jpg',
  logo: 'https://cdn.poehali.dev/projects/d0a5b1ea-ac76-439f-8a91-79050f32c235/bucket/50920d05-9247-4557-a42b-5375c9948fdc.png',
};

const NAV = [
  { id: 'about', label: 'О бренде' },
  { id: 'catalog', label: 'Каталог' },
  { id: 'benefits', label: 'Преимущества' },
  { id: 'reviews', label: 'Отзывы' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contacts', label: 'Контакты' },
];

const PRODUCTS = [
  { img: IMG.bath, tag: 'Бомбочки', title: 'Бомбочки для ванны', desc: 'Шипучие, с эфирными маслами и лепестками', price: '390 ₽', color: 'owl-pink' },
  { img: IMG.scrub, tag: 'Скрабы', title: 'Сахарные скрабы', desc: 'Нежно очищают и питают кожу', price: '590 ₽', color: 'owl-lime' },
  { img: IMG.candle, tag: 'Свечи', title: 'Аромасвечи', desc: 'Соевый воск и натуральные ароматы', price: '690 ₽', color: 'owl-blue' },
];

const BENEFITS = [
  { icon: 'Leaf', title: '100% натурально', desc: 'Только природные ингредиенты без вредной химии' },
  { icon: 'Heart', title: 'Ручная работа', desc: 'Каждый продукт мы делаем с любовью вручную' },
  { icon: 'Sparkles', title: 'Без тестов на животных', desc: 'Мы против жестокости — cruelty free' },
  { icon: 'Truck', title: 'Быстрая доставка', desc: 'Отправляем по всей России за 1-3 дня' },
];

const REVIEWS = [
  { name: 'Анна К.', text: 'Бомбочки — это космос! Ванна превращается в волшебство, а кожа мягкая весь день.', rating: 5 },
  { name: 'Мария Д.', text: 'Свечи горят ровно и пахнут божественно. Беру уже третий раз, всем рекомендую!', rating: 5 },
  { name: 'Ольга В.', text: 'Скраб просто супер — кожа сияет. Упаковка милейшая, дарила подруге.', rating: 5 },
];

const FAQ = [
  { q: 'Из чего сделаны ваши продукты?', a: 'Мы используем только натуральные масла, соду, лимонную кислоту, соевый воск и эфирные масла. Никакой агрессивной химии.' },
  { q: 'Подходят ли средства для чувствительной кожи?', a: 'Да, наши рецептуры мягкие и гипоаллергенные. Но при склонности к аллергии советуем проверить состав на этикетке.' },
  { q: 'Как быстро вы доставляете?', a: 'Отправляем заказы в течение суток. Доставка по России занимает от 1 до 3 дней.' },
  { q: 'Можно ли заказать подарочный набор?', a: 'Конечно! У нас есть готовые наборы, а также можно собрать свой — напишите нам.' },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FFFBFD] font-sans text-slate-800 overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-white/70 border-b border-owl-pink/20">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <button onClick={() => scrollTo('hero')} className="flex items-center">
            <img src={IMG.logo} alt="Family Wick & Чокнутая СОВА" className="h-11 w-auto" />
          </button>
          <nav className="hidden md:flex items-center gap-7">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="text-sm font-medium hover:text-owl-pink transition-colors">
                {n.label}
              </button>
            ))}
          </nav>
          <Button onClick={() => scrollTo('catalog')} className="hidden md:inline-flex bg-owl-pink hover:bg-owl-pink/90 text-white rounded-full">
            В каталог
          </Button>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? 'X' : 'Menu'} size={26} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-owl-pink/20 px-4 py-3 flex flex-col gap-3 animate-fade-in">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="text-left py-1 font-medium">
                {n.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="hero" className="relative pt-28 pb-20 md:pt-40 md:pb-28">
        <div className="absolute top-24 -left-20 w-72 h-72 bg-owl-lime/40 animate-blob animate-float" />
        <div className="absolute bottom-0 -right-16 w-80 h-80 bg-owl-blue/50 animate-blob" style={{ animationDelay: '2s' }} />
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center relative">
          <div className="animate-fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full bg-owl-lime text-slate-800 text-sm font-semibold mb-5">
              Натуральная косметика ручной работы
            </span>
            <h1 className="font-display text-4xl md:text-6xl text-owl-pink leading-tight mb-5">
              Превращай ванну<br />в маленькое чудо
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-md">
              Бомбочки, скрабы и аромасвечи из натуральных ингредиентов. Сделано с любовью и капелькой безумия.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button onClick={() => scrollTo('catalog')} size="lg" className="bg-owl-pink hover:bg-owl-pink/90 text-white rounded-full px-8">
                Смотреть каталог
              </Button>
              <Button onClick={() => scrollTo('about')} size="lg" variant="outline" className="rounded-full px-8 border-owl-pink text-owl-pink hover:bg-owl-pink/10">
                О бренде
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 bg-owl-blue/40 rounded-[2.5rem] rotate-6" />
            <img src={IMG.bath} alt="Косметика для ванны" className="relative rounded-[2.5rem] shadow-2xl w-full object-cover aspect-square" />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <img src={IMG.candle} alt="Аромасвечи" className="rounded-[2rem] shadow-xl w-full object-cover aspect-[4/3]" />
            <div className="absolute -bottom-6 -right-6 bg-owl-lime rounded-2xl px-6 py-4 shadow-lg hidden sm:block">
              <p className="font-display text-2xl text-slate-800">5 лет</p>
              <p className="text-xs font-medium">радуем клиентов</p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <span className="font-display text-owl-pink text-xl">О бренде</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-5">Немного сумасшедшие, очень заботливые</h2>
            <p className="text-slate-600 mb-4">
              «Чокнутая СОВА» родилась из любви к уютным вечерам и заботе о себе. Мы варим бомбочки, мешаем скрабы и заливаем свечи вручную — небольшими партиями, чтобы каждый продукт был идеальным.
            </p>
            <p className="text-slate-600">
              Только натуральные масла, никакой агрессивной химии и тестов на животных. Мы верим, что забота о себе должна быть честной и приносить радость.
            </p>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="font-display text-owl-pink text-xl">Каталог</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Наши творения</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((p) => (
              <div key={p.title} className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="relative overflow-hidden aspect-square">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-${p.color} text-slate-800`}>
                    {p.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{p.title}</h3>
                  <p className="text-sm text-slate-500 mb-4">{p.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-extrabold text-owl-pink">{p.price}</span>
                    <Button size="sm" className="bg-owl-pink hover:bg-owl-pink/90 text-white rounded-full">
                      <Icon name="ShoppingBag" size={16} className="mr-1" /> В корзину
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-20 bg-owl-blue/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="font-display text-owl-pink text-xl">Преимущества</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Почему нас любят</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map((b) => (
              <div key={b.title} className="bg-white rounded-3xl p-7 text-center shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-owl-lime flex items-center justify-center">
                  <Icon name={b.icon} size={30} className="text-slate-800" />
                </div>
                <h3 className="font-bold text-lg mb-2">{b.title}</h3>
                <p className="text-sm text-slate-500">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="font-display text-owl-pink text-xl">Отзывы</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Что говорят клиенты</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {REVIEWS.map((r) => (
              <div key={r.name} className="bg-white rounded-3xl p-7 shadow-md border border-owl-pink/10">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Icon key={i} name="Star" size={18} className="text-owl-pink fill-owl-pink" />
                  ))}
                </div>
                <p className="text-slate-600 mb-5 italic">«{r.text}»</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-owl-lime flex items-center justify-center font-bold text-slate-800">
                    {r.name[0]}
                  </div>
                  <span className="font-semibold">{r.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <span className="font-display text-owl-pink text-xl">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Частые вопросы</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {FAQ.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-[#FFFBFD] rounded-2xl border border-owl-pink/15 px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline hover:text-owl-pink">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-20 bg-owl-pink/10">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="font-display text-owl-pink text-xl">Контакты</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-6">Свяжитесь с нами</h2>
            <div className="space-y-4">
              {[
                { icon: 'Phone', label: '+7 (900) 123-45-67' },
                { icon: 'Mail', label: 'hello@chok-sova.ru' },
                { icon: 'MapPin', label: 'Москва, ул. Уютная, 7' },
                { icon: 'Send', label: '@chok_sova' },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-owl-lime flex items-center justify-center">
                    <Icon name={c.icon} size={22} className="text-slate-800" />
                  </div>
                  <span className="font-medium">{c.label}</span>
                </div>
              ))}
            </div>
          </div>
          <form className="bg-white rounded-3xl p-8 shadow-lg space-y-4" onSubmit={(e) => e.preventDefault()}>
            <h3 className="text-xl font-bold mb-2">Напишите нам</h3>
            <input type="text" placeholder="Ваше имя" className="w-full rounded-xl border border-owl-pink/20 px-4 py-3 focus:outline-none focus:border-owl-pink" />
            <input type="tel" placeholder="Телефон" className="w-full rounded-xl border border-owl-pink/20 px-4 py-3 focus:outline-none focus:border-owl-pink" />
            <textarea placeholder="Сообщение" rows={4} className="w-full rounded-xl border border-owl-pink/20 px-4 py-3 focus:outline-none focus:border-owl-pink resize-none" />
            <Button type="submit" className="w-full bg-owl-pink hover:bg-owl-pink/90 text-white rounded-full py-6 text-base">
              Отправить
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="bg-white rounded-2xl px-4 py-2">
            <img src={IMG.logo} alt="Family Wick & Чокнутая СОВА" className="h-10 w-auto" />
          </div>
          <p className="text-sm text-slate-400">© 2026 Чокнутая СОВА. Сделано с любовью 💛</p>
          <div className="flex gap-3">
            {['Instagram', 'Send', 'Youtube'].map((s) => (
              <a key={s} href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-owl-pink transition-colors">
                <Icon name={s} size={18} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;