export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "О профессии", href: "#about" },
  { label: "Обязанности", href: "#responsibilities" },
  { label: "Навыки", href: "#skills" },
  { label: "Карьера", href: "#career" },
  { label: "Преимущества", href: "#benefits" },
];

export const heroStats = [
  { value: "70+", label: "Регионов присутствия" },
  { value: "12 млн", label: "Абонентов" },
  { value: "5 000+", label: "Сотрудников" },
];

export const aboutFeatures = [
  { icon: "fa-wifi", label: "GPON / FTTB" },
  { icon: "fa-microchip", label: "Huawei / ZTE" },
  { icon: "fa-chart-line", label: "Мониторинг сети" },
  { icon: "fa-tools", label: "Диагностика" },
  { icon: "fa-users", label: "Работа в команде" },
  { icon: "fa-graduation-cap", label: "Обучение" },
];

export type Card = { icon: string; title: string; text: string };

export const responsibilities: Card[] = [
  {
    icon: "fa-desktop",
    title: "Мониторинг и диагностика",
    text: "Круглосуточный мониторинг состояния сети, выявление и устранение неисправностей, работа с системами алертинга.",
  },
  {
    icon: "fa-tools",
    title: "Обслуживание оборудования",
    text: "Плановое и внеплановое обслуживание активного оборудования радиодоступа, замена неисправных модулей и компонентов.",
  },
  {
    icon: "fa-chart-bar",
    title: "Анализ качества связи",
    text: "Измерение параметров сети, анализ качества услуг, подготовка отчётов и рекомендаций по улучшению показателей.",
  },
  {
    icon: "fa-cogs",
    title: "Конфигурация сети",
    text: "Настройка и оптимизация параметров оборудования радиодоступа, управление конфигурациями, обновление ПО.",
  },
  {
    icon: "fa-hard-hat",
    title: "Модернизация сети",
    text: "Участие в проектах по расширению и модернизации сети, внедрение нового оборудования и технологий.",
  },
  {
    icon: "fa-file-alt",
    title: "Документирование",
    text: "Ведение технической документации, составление схем, актов выполненных работ и инструкций для смежных подразделений.",
  },
];

export type Skill = { icon: string; title: string; text: string };

export const skills: { key: string; tab: string; items: Skill[] }[] = [
  {
    key: "tech",
    tab: "Технические",
    items: [
      { icon: "fa-network-wired", title: "Сетевые технологии", text: "GPON, FTTB, Ethernet, TCP/IP, VLAN, DNS, DHCP" },
      { icon: "fa-broadcast-tower", title: "Радиооборудование", text: "Huawei, ZTE, Nokia — базовые станции и абонентские устройства" },
      { icon: "fa-terminal", title: "Работа с CLI", text: "Настройка оборудования через командную строку, скриптинг" },
      { icon: "fa-chart-line", title: "Мониторинг", text: "Zabbix, Prometheus, Grafana, системы алертинга" },
      { icon: "fa-draw-polygon", title: "Радиопланирование", text: "Планирование частот, анализ покрытия, оптимизация" },
      { icon: "fa-shield-alt", title: "Безопасность", text: "Основы информационной безопасности, защита сетевой инфраструктуры" },
    ],
  },
  {
    key: "soft",
    tab: "Личные качества",
    items: [
      { icon: "fa-comments", title: "Коммуникабельность", text: "Умение работать с людьми, объяснять технические решения" },
      { icon: "fa-brain", title: "Аналитическое мышление", text: "Способность находить причины и устранять сложные неисправности" },
      { icon: "fa-clock", title: "Тайм-менеджмент", text: "Приоритизация задач, работа в режиме многозадачности" },
      { icon: "fa-users", title: "Командная работа", text: "Эффективное взаимодействие в команде технических специалистов" },
      { icon: "fa-book-open", title: "Обучаемость", text: "Готовность постоянно изучать новые технологии и стандарты" },
      { icon: "fa-heart", title: "Стрессоустойчивость", text: "Спокойствие в нештатных ситуациях, умение быстро принимать решения" },
    ],
  },
  {
    key: "tools",
    tab: "Инструменты",
    items: [
      { icon: "fa-server", title: "Системы мониторинга", text: "Zabbix, Grafana, Prometheus, Centreon" },
      { icon: "fa-sitemap", title: "NMS / OSS системы", text: "U2000, iManager, NetNumen — управление элементами сети" },
      { icon: "fa-laptop-code", title: "Скриптовые языки", text: "Python, Bash — автоматизация рутинных задач" },
      { icon: "fa-database", title: "Базы данных", text: "SQL — работа с БД оборудования и биллинга" },
      { icon: "fa-file-code", title: "Документация", text: "Visio, Draw.io — схемы сети; Confluence — база знаний" },
      { icon: "fa-tachometer-alt", title: "Тестовое оборудование", text: "OTDR, спектроанализаторы, измерители мощности оптического сигнала" },
    ],
  },
];

export type CareerStep = {
  level: string;
  levelClass: string;
  title: string;
  text: string;
};

export const careerSteps: CareerStep[] = [
  {
    level: "Уровень 1",
    levelClass: "junior",
    title: "Стажёр / Инженер 2 категории",
    text: "Погружение в сеть, работа с наставником, выполнение простых задач под контролем опытных коллег. Обучение на реальных кейсах.",
  },
  {
    level: "Уровень 2",
    levelClass: "middle",
    title: "Инженер 1 категории",
    text: "Самостоятельное обслуживание участка сети, участие в проектах модернизации, наставничество над стажёрами.",
  },
  {
    level: "Уровень 3",
    levelClass: "senior",
    title: "Ведущий инженер",
    text: "Управление группой, сложные проекты, внедрение новых технологий и оптимизация существующих процессов.",
  },
  {
    level: "Уровень 4",
    levelClass: "lead",
    title: "Руководитель группы",
    text: "Управление командой инженеров, планирование загрузки, KPI, отчётность, взаимодействие со смежными подразделениями.",
  },
  {
    level: "Уровень 5",
    levelClass: "head",
    title: "Руководитель направления",
    text: "Стратегическое развитие сети, бюджетирование, управление крупными проектами, формирование технической политики.",
  },
];

export const benefits: Card[] = [
  { icon: "fa-hand-holding-usd", title: "Достойная оплата", text: "Конкурентная зарплата с ежегодным пересмотром, премии по результатам работы" },
  { icon: "fa-graduation-cap", title: "Обучение и развитие", text: "Корпоративный университет, курсы, сертификация, конференции за счёт компании" },
  { icon: "fa-medkit", title: "ДМС с первого дня", text: "Полис добровольного медицинского страхования, включая стоматологию" },
  { icon: "fa-phone-alt", title: "Корпоративная связь", text: "Бесплатный тариф с безлимитным интернетом и звонками для сотрудников" },
  { icon: "fa-home", title: "Гибкий график", text: "Возможность удалённой работы, гибкое начало дня, сменный график" },
  { icon: "fa-plane", title: "Отдых", text: "Оплачиваемый отпуск 28 дней, корпоративные мероприятия и тимбилдинги" },
  { icon: "fa-coffee", title: "Комфортный офис", text: "Современные офисы с зонами отдыха, чай/кофе, снеками, парковкой" },
  { icon: "fa-chart-line", title: "Карьерный рост", text: "Прозрачная система повышения, поддержка наставников, карьерные карты" },
];

export type Testimonial = {
  emoji: string;
  text: string;
  name: string;
  role: string;
  initials: string;
  gender: "male" | "female";
  delay: string;
};

export const testimonials: Testimonial[] = [
  {
    emoji: "🕺",
    gender: "male",
    delay: "",
    initials: "АК",
    name: "Алексей К.",
    role: "Инженер 1 категории, 2 года в компании",
    text: "Пришёл стажёром после университета — ничего не знал про радиосети. За полгода с помощью наставника разобрался в оборудовании, теперь сам веду свой участок. Лучшее место для старта в телекоме!",
  },
  {
    emoji: "💃",
    gender: "female",
    delay: "testimonial-card__dancer--delay-1",
    initials: "МВ",
    name: "Мария В.",
    role: "Руководитель группы радиосети, 5 лет",
    text: "Работаю уже 5 лет, прошёл путь от инженера до руководителя группы. Компания даёт реальные возможности для роста — главное желание учиться. Очень ценю атмосферу в коллективе.",
  },
  {
    emoji: "🕺",
    gender: "male",
    delay: "testimonial-card__dancer--delay-2",
    initials: "ДС",
    name: "Дмитрий С.",
    role: "Ведущий инженер, 3 года в компании",
    text: "Интересная работа с современным оборудованием. Каждый день — новый вызов. Компания поддерживает обучение, отправили на сертификацию Huawei. Горжусь, что работаю в ЭР-Телеком.",
  },
];

export const footerSocial = [
  { href: "https://vk.com/start.rabotaertelecom", icon: "fab fa-vk", label: "VK" },
  { href: "https://t.me/erstart", icon: "fab fa-telegram-plane", label: "Telegram" },
];

export const footerCols = [
  {
    title: "О компании",
    links: [
      { label: "О нас", href: "https://ertelecom.ru" },
      { label: "Новости", href: "https://ertelecom.cloud/press" },
      { label: "Карьера", href: "#career" },
      { label: "Контакты", href: "https://ertelecom.ru/contacts" },
    ],
  },
  {
    title: "Вакансии",
    links: [{ label: "Все вакансии", href: "https://job.ertelecom.ru/" }],
  },
  {
    title: "Студентам",
    links: [
      { label: "Стажировка", href: "https://job.ertelecom.ru/internships/internship31" },
      { label: "Практика", href: "https://job.ertelecom.ru/internships/internship21" },
      { label: "Мероприятия", href: "https://start.rabotaertelecom.ru/summerschool/spb" },
      { label: "Советы соискателям", href: "https://job.ertelecom.ru/help" },
    ],
  },
];
