import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export default function Donate() {
  const packages = [
    {
      id: 1,
      name: "Новичок",
      price: "₽199",
      popular: false,
      features: [
        "$50,000 стартовый капитал",
        "Базовый автомобиль",
        "Аренда квартиры на месяц", 
        "Набор одежды",
        "Поддержка в Discord"
      ],
      color: "border-gray-300"
    },
    {
      id: 2,
      name: "Бизнесмен",
      price: "₽499",
      popular: true,
      features: [
        "$200,000 стартовый капитал",
        "Премиум автомобиль",
        "Собственная квартира",
        "Эксклюзивная одежда",
        "Приоритетная поддержка",
        "VIP статус на месяц",
        "Доступ к особым событиям"
      ],
      color: "border-accent ring-2 ring-accent"
    },
    {
      id: 3,
      name: "Босс",
      price: "₽999",
      popular: false,
      features: [
        "$500,000 стартовый капитал",
        "Коллекция автомобилей",
        "Роскошный дом",
        "Уникальная одежда",
        "Персональный менеджер",
        "VIP статус на 3 месяца",
        "Особые привилегии",
        "Эксклюзивные предметы"
      ],
      color: "border-yellow-400"
    }
  ]

  const perks = [
    {
      icon: "DollarSign",
      title: "Стартовый капитал",
      description: "Получите деньги для быстрого старта в Empire Bay"
    },
    {
      icon: "Car",
      title: "Транспорт",
      description: "Эксклюзивные автомобили эпохи 1940-50х годов"
    },
    {
      icon: "Home",
      title: "Недвижимость",
      description: "От скромных квартир до роскошных особняков"
    },
    {
      icon: "Shirt",
      title: "Стиль",
      description: "Уникальная одежда в стиле винтажной Америки"
    },
    {
      icon: "Crown",
      title: "VIP статус",
      description: "Особые привилегии и доступ к закрытым мероприятиям"
    },
    {
      icon: "Headphones",
      title: "Поддержка",
      description: "Приоритетная помощь от команды администрации"
    }
  ]

  const paymentMethods = [
    { name: "Банковская карта", icon: "CreditCard" },
    { name: "СБП", icon: "Smartphone" },
    { name: "PayPal", icon: "Globe" },
    { name: "Криптовалюта", icon: "Bitcoin" }
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
              <a href="/gallery" className="hover:text-accent transition-colors">Галерея</a>
              <a href="/factions" className="hover:text-accent transition-colors">Фракции</a>
              <a href="/donate" className="text-accent">Донат</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-primary/10 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Поддержите сервер</h1>
            <p className="text-xl text-muted-foreground">
              Получите преимущества и помогите развитию Empire Bay RP
            </p>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg) => (
              <Card 
                key={pkg.id} 
                className={`relative ${pkg.color} ${pkg.popular ? 'scale-105' : ''} hover:shadow-xl transition-all duration-300`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-accent px-4 py-2">
                      Популярный выбор
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
                  <div className="text-4xl font-bold text-primary">{pkg.price}</div>
                  <p className="text-muted-foreground">одноразовая покупка</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Icon name="Check" className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${pkg.popular ? 'bg-accent hover:bg-accent/90' : ''}`}
                    variant={pkg.popular ? 'default' : 'outline'}
                    size="lg"
                  >
                    Купить пакет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Что вы получаете</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {perks.map((perk, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="bg-accent/10 p-3 rounded-full">
                      <Icon name={perk.icon as any} size={32} className="text-accent" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold mb-3">{perk.title}</h4>
                  <p className="text-muted-foreground">{perk.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Способы оплаты</h3>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl">
              {paymentMethods.map((method, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow p-6">
                  <div className="flex justify-center mb-3">
                    <Icon name={method.icon as any} size={32} className="text-primary" />
                  </div>
                  <p className="text-sm font-medium">{method.name}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Часто задаваемые вопросы</h3>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Как получить покупки в игре?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  После успешной оплаты все предметы автоматически поступят на ваш игровой аккаунт в течение 5 минут. 
                  Деньги будут зачислены на банковский счет персонажа.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Можно ли вернуть покупку?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Возврат возможен в течение 24 часов с момента покупки, если вы не использовали полученные предметы. 
                  Обратитесь в поддержку для уточнения деталей.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Что происходит с VIP статусом?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  VIP статус дает доступ к эксклюзивным событиям, приоритетную поддержку и особые привилегии на сервере. 
                  Действует указанный в пакете период.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Нужна помощь?</h3>
            <p className="text-muted-foreground mb-8">
              Наша команда поддержки готова помочь с любыми вопросами о донатах
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline">
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Discord поддержка
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Mail" className="mr-2" size={20} />
                Написать админу
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}