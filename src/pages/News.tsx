import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export default function News() {
  const news = [
    {
      id: 1,
      title: "Крупная партия контрабанды конфискована",
      date: "10 августа 2025",
      category: "Криминал",
      image: "/img/edf8e686-c89b-4ea6-892c-891da82f083c.jpg",
      excerpt: "Полиция провела масштабную операцию в районе старых доков...",
      content: "В результате совместной операции полицейского управления Empire Bay и федеральных агентов была перехвачена крупнейшая партия контрабандного алкоголя за последние месяцы. Операция проводилась на рассвете в районе старых доков, где преступники организовали склад для хранения незаконного товара."
    },
    {
      id: 2,
      title: "Новый бизнес-район открывается в центре",
      date: "8 августа 2025",
      category: "Экономика",
      image: "/img/edf8e686-c89b-4ea6-892c-891da82f083c.jpg",
      excerpt: "Мэрия анонсировала развитие коммерческой зоны...",
      content: "Администрация Empire Bay официально объявила о планах строительства нового делового квартала в центральной части города. Проект включает в себя современные офисные здания, торговые центры и рестораны высокого класса."
    },
    {
      id: 3,
      title: "Конфликт между фракциями обостряется",
      date: "5 августа 2025",
      category: "Происшествия",
      image: "/img/edf8e686-c89b-4ea6-892c-891da82f083c.jpg",
      excerpt: "Напряжение между семьями достигло критической точки...",
      content: "Противостояние между семьей Корлеоне и ирландской бандой вступило в новую фазу после серии инцидентов на прошлой неделе. Источники сообщают о готовящихся переговорах, но ситуация остается напряженной."
    },
    {
      id: 4,
      title: "Открытие нового казино 'Golden Palace'",
      date: "3 августа 2025",
      category: "Развлечения",
      image: "/img/edf8e686-c89b-4ea6-892c-891da82f083c.jpg",
      excerpt: "Роскошное игорное заведение начинает работу...",
      content: "В самом сердце Empire Bay открылось новое казино премиум-класса. 'Golden Palace' предлагает игрокам широкий выбор азартных игр, роскошные номера и ресторан высокой кухни."
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
              <a href="/" className="hover:text-accent transition-colors">Главная</a>
              <a href="/news" className="text-accent">Новости</a>
              <a href="/stats" className="hover:text-accent transition-colors">Статистика</a>
              <a href="/gallery" className="hover:text-accent transition-colors">Галерея</a>
              <a href="/factions" className="hover:text-accent transition-colors">Фракции</a>
              <a href="/donate" className="hover:text-accent transition-colors">Донат</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-primary/10 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Новости Empire Bay</h1>
            <p className="text-xl text-muted-foreground">
              Будьте в курсе всех событий криминального мира
            </p>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {news.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{article.category}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline">{article.date}</Badge>
                  </div>
                  <CardTitle className="text-xl">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{article.content}</p>
                  <Button variant="outline">
                    Читать полностью
                    <Icon name="ArrowRight" size={16} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Подпишитесь на обновления</h3>
            <p className="text-muted-foreground mb-8">
              Получайте последние новости Empire Bay прямо в Discord
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Присоединиться к Discord
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}