import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

export default function Gallery() {
  const categories = ["Все", "Город", "Персонажи", "События", "Автомобили", "Интерьеры"]
  
  const gallery = [
    {
      id: 1,
      title: "Центральная площадь Empire Bay",
      category: "Город",
      image: "/img/edf8e686-c89b-4ea6-892c-891da82f083c.jpg",
      likes: 124,
      description: "Сердце города в золотые часы заката"
    },
    {
      id: 2,
      title: "Винченцо Корлеоне",
      category: "Персонажи", 
      image: "/img/edf8e686-c89b-4ea6-892c-891da82f083c.jpg",
      likes: 89,
      description: "Глава могущественной семьи"
    },
    {
      id: 3,
      title: "Рейд на склад контрабанды",
      category: "События",
      image: "/img/edf8e686-c89b-4ea6-892c-891da82f083c.jpg", 
      likes: 156,
      description: "Полицейская операция в доках"
    },
    {
      id: 4,
      title: "Cadillac Series 62",
      category: "Автомобили",
      image: "/img/edf8e686-c89b-4ea6-892c-891da82f083c.jpg",
      likes: 203,
      description: "Роскошный автомобиль главы семьи"
    },
    {
      id: 5,
      title: "Golden Palace Casino",
      category: "Интерьеры",
      image: "/img/edf8e686-c89b-4ea6-892c-891da82f083c.jpg",
      likes: 178,
      description: "Игровой зал премиум-класса"
    },
    {
      id: 6,
      title: "Порт Empire Bay",
      category: "Город",
      image: "/img/edf8e686-c89b-4ea6-892c-891da82f083c.jpg",
      likes: 145,
      description: "Центр морской торговли города"
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
              <a href="/news" className="hover:text-accent transition-colors">Новости</a>
              <a href="/stats" className="hover:text-accent transition-colors">Статистика</a>
              <a href="/gallery" className="text-accent">Галерея</a>
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Галерея Empire Bay</h1>
            <p className="text-xl text-muted-foreground">
              Лучшие моменты из жизни криминальной столицы
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "Все" ? "default" : "outline"}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gallery.map((item) => (
              <Card key={item.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-black/50 text-white">
                      {item.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 flex items-center space-x-1 text-white">
                    <Icon name="Heart" size={16} />
                    <span className="text-sm">{item.likes}</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" className="bg-white/90 text-black hover:bg-white">
                      <Icon name="Expand" className="mr-1" size={16} />
                      Открыть
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Поделитесь своими скриншотами</h3>
            <p className="text-muted-foreground mb-8">
              Покажите лучшие моменты вашей игры в Empire Bay
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                <Icon name="Upload" className="mr-2" size={20} />
                Загрузить скриншот
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Camera" className="mr-2" size={20} />
                Правила размещения
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">2,456</div>
              <div className="text-muted-foreground">Всего фото</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">187</div>
              <div className="text-muted-foreground">Авторов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">18,924</div>
              <div className="text-muted-foreground">Лайков</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">156</div>
              <div className="text-muted-foreground">Новых за месяц</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}