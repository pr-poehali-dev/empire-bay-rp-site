import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export default function Index() {
  const stats = [
    { label: "Онлайн игроков", value: "247", icon: "Users" },
    { label: "Общий капитал", value: "$2.4M", icon: "DollarSign" },
    { label: "Активных бизнесов", value: "156", icon: "Building" },
    { label: "Фракций", value: "8", icon: "Shield" }
  ]

  const factions = [
    {
      name: "Семья Корлеоне",
      description: "Влиятельная итальянская семья, контролирующая торговлю в порту",
      members: 47,
      power: "Высокая",
      business: "Импорт/экспорт"
    },
    {
      name: "Ирландская банда",
      description: "Агрессивная группировка, занимающаяся незаконной торговлей алкоголем",
      members: 32,
      power: "Средняя",
      business: "Контрабанда"
    },
    {
      name: "Полицейское управление",
      description: "Блюстители закона Empire Bay, борющиеся с преступностью",
      members: 89,
      power: "Высокая",
      business: "Правоохранение"
    },
    {
      name: "Союз докеров",
      description: "Рабочее объединение, контролирующее портовые операции",
      members: 124,
      power: "Средняя",
      business: "Грузоперевозки"
    }
  ]

  const news = [
    {
      title: "Крупная партия контрабанды конфискована",
      date: "10 августа 2025",
      excerpt: "Полиция провела масштабную операцию в районе старых доков..."
    },
    {
      title: "Новый бизнес-район открывается в центре",
      date: "8 августа 2025", 
      excerpt: "Мэрия анонсировала развитие коммерческой зоны..."
    },
    {
      title: "Конфликт между фракциями обостряется",
      date: "5 августа 2025",
      excerpt: "Напряжение между семьями достигло критической точки..."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Crown" size={32} />
              <h1 className="text-2xl font-bold">EMPIRE BAY RP</h1>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="hover:text-accent transition-colors">Главная</a>
              <a href="#" className="hover:text-accent transition-colors">Новости</a>
              <a href="#" className="hover:text-accent transition-colors">Статистика</a>
              <a href="#" className="hover:text-accent transition-colors">Галерея</a>
              <a href="#" className="hover:text-accent transition-colors">Фракции</a>
              <a href="#" className="hover:text-accent transition-colors">Донат</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/90 to-primary text-primary-foreground">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(/img/edf8e686-c89b-4ea6-892c-891da82f083c.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative container mx-auto px-4 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Добро пожаловать в 
              <span className="block text-accent">Empire Bay</span>
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Окунитесь в атмосферу 1940-50х годов. Стройте криминальную империю, 
              развивайте бизнес и боритесь за власть в городе грехов.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary">
                <Icon name="Play" className="mr-2" size={20} />
                Начать играть
              </Button>
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-primary">
                <Icon name="Download" className="mr-2" size={20} />
                Скачать лаунчер
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Статистика сервера</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Icon name={stat.icon as any} size={32} className="text-primary" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Factions Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Фракции Empire Bay</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {factions.map((faction, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{faction.name}</CardTitle>
                    <Badge variant={faction.power === "Высокая" ? "default" : "secondary"}>
                      {faction.power} власть
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{faction.description}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="flex items-center">
                      <Icon name="Users" size={16} className="mr-1" />
                      {faction.members} участников
                    </span>
                    <span className="flex items-center">
                      <Icon name="Briefcase" size={16} className="mr-1" />
                      {faction.business}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Последние новости</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline">{article.date}</Badge>
                  </div>
                  <CardTitle className="text-lg">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                  <Button variant="outline" size="sm">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Empire Bay RP</h4>
              <p className="opacity-90">
                Лучший RolePlay сервер MTA в атмосфере 1940-50х годов. 
                Создай свою криминальную историю в Empire Bay.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Быстрые ссылки</h4>
              <ul className="space-y-2">
                <li><a href="#" className="opacity-90 hover:text-accent transition-colors">Правила сервера</a></li>
                <li><a href="#" className="opacity-90 hover:text-accent transition-colors">Форум</a></li>
                <li><a href="#" className="opacity-90 hover:text-accent transition-colors">Discord</a></li>
                <li><a href="#" className="opacity-90 hover:text-accent transition-colors">Поддержка</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <a href="#" className="opacity-90 hover:text-accent transition-colors">
                  <Icon name="MessageCircle" size={24} />
                </a>
                <a href="#" className="opacity-90 hover:text-accent transition-colors">
                  <Icon name="Users" size={24} />
                </a>
                <a href="#" className="opacity-90 hover:text-accent transition-colors">
                  <Icon name="Youtube" size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="opacity-75">&copy; 2025 Empire Bay RP. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}