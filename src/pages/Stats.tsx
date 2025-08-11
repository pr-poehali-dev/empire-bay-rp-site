import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

export default function Stats() {
  const serverStats = [
    { label: "Онлайн игроков", value: "247", icon: "Users", trend: "+12", color: "text-green-600" },
    { label: "Общий капитал", value: "$2.4M", icon: "DollarSign", trend: "+8%", color: "text-green-600" },
    { label: "Активных бизнесов", value: "156", icon: "Building", trend: "+5", color: "text-green-600" },
    { label: "Фракций", value: "8", icon: "Shield", trend: "0", color: "text-gray-500" }
  ]

  const economyStats = [
    { name: "Банковские депозиты", value: "$890K", change: "+15%" },
    { name: "Оборот бизнесов", value: "$1.2M", change: "+22%" },
    { name: "Налоговые поступления", value: "$340K", change: "+8%" },
    { name: "Незаконные доходы", value: "$450K", change: "-5%" }
  ]

  const topBusinesses = [
    { name: "Golden Palace Casino", owner: "Винченцо Корлеоне", income: "$45K/день", type: "Казино" },
    { name: "Empire Docks", owner: "Союз докеров", income: "$38K/день", type: "Логистика" },
    { name: "Blue Moon Bar", owner: "Шон О'Мэлли", income: "$32K/день", type: "Бар" },
    { name: "Lucky Motors", owner: "Тони Романо", income: "$28K/день", type: "Автосалон" }
  ]

  const factionPower = [
    { name: "Семья Корлеоне", power: 85, members: 47, color: "bg-red-500" },
    { name: "Полицейское управление", power: 82, members: 89, color: "bg-blue-500" },
    { name: "Союз докеров", power: 68, members: 124, color: "bg-yellow-500" },
    { name: "Ирландская банда", power: 61, members: 32, color: "bg-green-500" }
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
              <a href="/stats" className="text-accent">Статистика</a>
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Статистика сервера</h1>
            <p className="text-xl text-muted-foreground">
              Актуальная информация о состоянии Empire Bay
            </p>
          </div>
        </div>
      </section>

      {/* Server Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-8">Общая статистика</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {serverStats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Icon name={stat.icon as any} size={32} className="text-primary" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground mb-2">{stat.label}</div>
                  <div className={`text-sm font-medium ${stat.color}`}>
                    {stat.trend !== "0" && (
                      <>
                        {stat.trend.startsWith("+") ? "↗" : "↘"} {stat.trend}
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Economy Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="TrendingUp" className="mr-2" size={24} />
                  Экономические показатели
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {economyStats.map((stat, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-muted-foreground">{stat.name}</span>
                      <div className="flex items-center space-x-2">
                        <span className="font-bold">{stat.value}</span>
                        <Badge 
                          variant={stat.change.startsWith("+") ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {stat.change}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Building" className="mr-2" size={24} />
                  Топ бизнесы по доходности
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topBusinesses.map((business, index) => (
                    <div key={index} className="border-l-4 border-primary/20 pl-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold">{business.name}</h4>
                          <p className="text-sm text-muted-foreground">{business.owner}</p>
                          <Badge variant="outline" className="text-xs mt-1">
                            {business.type}
                          </Badge>
                        </div>
                        <span className="font-bold text-primary">{business.income}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Faction Power */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-8 text-center">Влияние фракций</h3>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {factionPower.map((faction, index) => (
                <Card key={index} className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h4 className="font-bold text-lg">{faction.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {faction.members} участников
                      </p>
                    </div>
                    <Badge variant="outline" className="text-lg px-3 py-1">
                      {faction.power}%
                    </Badge>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full ${faction.color} transition-all duration-500`}
                      style={{ width: `${faction.power}%` }}
                    ></div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Live Updates */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Статистика обновляется в реальном времени</h3>
            <p className="text-muted-foreground mb-8">
              Данные актуализируются каждые 5 минут
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Последнее обновление: только что</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}