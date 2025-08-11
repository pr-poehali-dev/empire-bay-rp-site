import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge" 
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export default function Factions() {
  const factions = [
    {
      id: 1,
      name: "Семья Корлеоне",
      description: "Влиятельная итальянская семья, контролирующая торговлю в порту Empire Bay. Известны своими связями в высших кругах и железной дисциплиной.",
      members: 47,
      power: "Высокая",
      business: ["Импорт/экспорт", "Казино", "Рестораны"],
      leader: "Винченцо Корлеоне",
      territory: "Центральный район, Порт",
      image: "/img/edf8e686-c89b-4ea6-892c-891da82f083c.jpg",
      status: "Активна",
      recruitment: "Закрыт"
    },
    {
      id: 2,
      name: "Ирландская банда",
      description: "Агрессивная группировка, занимающаяся незаконной торговлей алкоголем и контрабандой. Известны своей безжалостностью.",
      members: 32,
      power: "Средняя",
      business: ["Контрабанда", "Подпольные бары", "Рэкет"],
      leader: "Шон О'Мэлли",
      territory: "Доки, Промышленный район",
      image: "/img/edf8e686-c89b-4ea6-892c-891da82f083c.jpg",
      status: "Активна",
      recruitment: "Открыт"
    },
    {
      id: 3,
      name: "Полицейское управление",
      description: "Блюстители закона Empire Bay, борющиеся с преступностью. Несмотря на коррупцию, многие офицеры честно служат городу.",
      members: 89,
      power: "Высокая", 
      business: ["Правоохранение", "Лицензирование", "Охранные услуги"],
      leader: "Комиссар Джеймс МакКлири",
      territory: "Весь город",
      image: "/img/edf8e686-c89b-4ea6-892c-891da82f083c.jpg",
      status: "Активна",
      recruitment: "Открыт"
    },
    {
      id: 4,
      name: "Союз докеров",
      description: "Рабочее объединение, контролирующее портовые операции. Имеют большое влияние на экономику города.",
      members: 124,
      power: "Средняя",
      business: ["Грузоперевозки", "Складские услуги", "Рыболовство"],
      leader: "Фрэнк Коллетти",
      territory: "Порт, Рыбацкий район",
      image: "/img/edf8e686-c89b-4ea6-892c-891da82f083c.jpg",
      status: "Активна", 
      recruitment: "Открыт"
    },
    {
      id: 5,
      name: "Китайская триада",
      description: "Таинственная организация, контролирующая азартные игры и торговлю опиумом в Чайнатауне.",
      members: 28,
      power: "Низкая",
      business: ["Подпольные казино", "Наркоторговля", "Рестораны"],
      leader: "Ван Шу Ли",
      territory: "Чайнатаун",
      image: "/img/edf8e686-c89b-4ea6-892c-891da82f083c.jpg",
      status: "Активна",
      recruitment: "Закрыт"
    },
    {
      id: 6,
      name: "Федеральные агенты",
      description: "Элитное подразделение, борющееся с организованной преступностью на федеральном уровне.",
      members: 15,
      power: "Средняя",
      business: ["Расследования", "Спецоперации", "Аналитика"],
      leader: "Агент Роберт Сильверман",
      territory: "Федеральное здание",
      image: "/img/edf8e686-c89b-4ea6-892c-891da82f083c.jpg",
      status: "Активна",
      recruitment: "Закрыт"
    }
  ]

  const powerLevels = {
    "Высокая": { color: "bg-red-500", textColor: "text-red-600" },
    "Средняя": { color: "bg-yellow-500", textColor: "text-yellow-600" },
    "Низкая": { color: "bg-gray-500", textColor: "text-gray-600" }
  }

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
              <a href="/gallery" className="hover:text-accent transition-colors">Галерея</a>
              <a href="/factions" className="text-accent">Фракции</a>
              <a href="/donate" className="hover:text-accent transition-colors">Донат</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-primary/10 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Фракции Empire Bay</h1>
            <p className="text-xl text-muted-foreground">
              Организации, которые управляют криминальным миром города
            </p>
          </div>
        </div>
      </section>

      {/* Factions Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {factions.map((faction) => (
              <Card key={faction.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video relative">
                  <img 
                    src={faction.image} 
                    alt={faction.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex justify-between items-end">
                      <div>
                        <h3 className="text-white text-xl font-bold">{faction.name}</h3>
                        <p className="text-white/90 text-sm">{faction.leader}</p>
                      </div>
                      <div className="flex space-x-2">
                        <Badge 
                          variant={faction.power === "Высокая" ? "default" : "secondary"}
                          className="bg-black/50"
                        >
                          {faction.power} власть
                        </Badge>
                        <Badge 
                          variant={faction.recruitment === "Открыт" ? "default" : "secondary"}
                          className="bg-black/50"
                        >
                          {faction.recruitment}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">{faction.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="flex items-center mb-2">
                        <Icon name="Users" size={16} className="mr-2 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Участники</span>
                      </div>
                      <div className="font-bold">{faction.members}</div>
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        <Icon name="MapPin" size={16} className="mr-2 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Территория</span>
                      </div>
                      <div className="font-semibold text-sm">{faction.territory}</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <Icon name="Briefcase" size={16} className="mr-2 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Сферы деятельности</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {faction.business.map((business, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {business}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${powerLevels[faction.power as keyof typeof powerLevels].color}`}></div>
                      <span className={`text-sm font-medium ${powerLevels[faction.power as keyof typeof powerLevels].textColor}`}>
                        {faction.power} влияние
                      </span>
                    </div>
                    <Button 
                      size="sm"
                      variant={faction.recruitment === "Открыт" ? "default" : "secondary"}
                      disabled={faction.recruitment === "Закрыт"}
                    >
                      {faction.recruitment === "Открыт" ? (
                        <>
                          <Icon name="UserPlus" className="mr-1" size={14} />
                          Вступить
                        </>
                      ) : (
                        <>
                          <Icon name="Lock" className="mr-1" size={14} />
                          Закрыто
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Power Balance */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Баланс сил в Empire Bay</h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center">
                    <Icon name="Crown" className="mr-2 text-red-500" size={24} />
                    Высокое влияние
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-2">2</div>
                  <p className="text-muted-foreground">Семья Корлеоне, Полиция</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center">
                    <Icon name="Shield" className="mr-2 text-yellow-500" size={24} />
                    Среднее влияние
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-2">3</div>
                  <p className="text-muted-foreground">Ирландцы, Докеры, Федералы</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center">
                    <Icon name="Users" className="mr-2 text-gray-500" size={24} />
                    Растущее влияние
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-2">1</div>
                  <p className="text-muted-foreground">Китайская триада</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Выберите свою сторону</h3>
            <p className="text-muted-foreground mb-8">
              Каждая фракция предлагает уникальный игровой опыт и возможности для развития
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              <Icon name="Play" className="mr-2" size={20} />
              Начать игру
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}