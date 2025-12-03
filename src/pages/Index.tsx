import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Separator } from '@/components/ui/separator';

interface Property {
  id: number;
  title: string;
  price: number;
  area: number;
  rooms: number;
  location: string;
  type: string;
  image: string;
}

const properties: Property[] = [
  {
    id: 1,
    title: 'Апартаменты с панорамным видом',
    price: 45000000,
    area: 120,
    rooms: 3,
    location: 'Центральный район',
    type: 'Квартира',
    image: 'https://cdn.poehali.dev/projects/71e820ac-bc0b-4b60-a915-d368f6ceb751/files/f7538c25-1f30-4c20-b275-123a65ea0c07.jpg'
  },
  {
    id: 2,
    title: 'Историческое здание у Невского',
    price: 85000000,
    area: 200,
    rooms: 4,
    location: 'Центральный район',
    type: 'Квартира',
    image: 'https://cdn.poehali.dev/projects/71e820ac-bc0b-4b60-a915-d368f6ceb751/files/0417bfe6-5869-42eb-9bd6-8d52f76c0208.jpg'
  },
  {
    id: 3,
    title: 'Современный пентхаус',
    price: 120000000,
    area: 250,
    rooms: 5,
    location: 'Петроградский район',
    type: 'Пентхаус',
    image: 'https://cdn.poehali.dev/projects/71e820ac-bc0b-4b60-a915-d368f6ceb751/files/f7538c25-1f30-4c20-b275-123a65ea0c07.jpg'
  },
  {
    id: 4,
    title: 'Элитная квартира на набережной',
    price: 65000000,
    area: 150,
    rooms: 3,
    location: 'Адмиралтейский район',
    type: 'Квартира',
    image: 'https://cdn.poehali.dev/projects/71e820ac-bc0b-4b60-a915-d368f6ceb751/files/0417bfe6-5869-42eb-9bd6-8d52f76c0208.jpg'
  }
];

const Index = () => {
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const [areaFrom, setAreaFrom] = useState('');
  const [areaTo, setAreaTo] = useState('');
  const [propertyType, setPropertyType] = useState('all');
  const [location, setLocation] = useState('all');
  const [filteredProperties, setFilteredProperties] = useState(properties);

  const applyFilters = () => {
    let filtered = properties;

    if (priceFrom) {
      filtered = filtered.filter(p => p.price >= parseInt(priceFrom) * 1000000);
    }
    if (priceTo) {
      filtered = filtered.filter(p => p.price <= parseInt(priceTo) * 1000000);
    }
    if (areaFrom) {
      filtered = filtered.filter(p => p.area >= parseInt(areaFrom));
    }
    if (areaTo) {
      filtered = filtered.filter(p => p.area <= parseInt(areaTo));
    }
    if (propertyType !== 'all') {
      filtered = filtered.filter(p => p.type === propertyType);
    }
    if (location !== 'all') {
      filtered = filtered.filter(p => p.location === location);
    }

    setFilteredProperties(filtered);
  };

  const resetFilters = () => {
    setPriceFrom('');
    setPriceTo('');
    setAreaFrom('');
    setAreaTo('');
    setPropertyType('all');
    setLocation('all');
    setFilteredProperties(properties);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-4 sticky top-0 z-50 shadow-md">
        <nav className="container mx-auto px-4 flex items-center justify-between">
          <h1 className="text-2xl font-serif font-bold">Элитная Недвижимость СПб</h1>
          <div className="hidden md:flex gap-6">
            <a href="#catalog" className="hover:text-accent transition-colors">Каталог</a>
            <a href="#services" className="hover:text-accent transition-colors">Услуги</a>
            <a href="#reviews" className="hover:text-accent transition-colors">Отзывы</a>
            <a href="#about" className="hover:text-accent transition-colors">О риелторе</a>
            <a href="#articles" className="hover:text-accent transition-colors">Статьи</a>
            <a href="#contacts" className="hover:text-accent transition-colors">Контакты</a>
          </div>
          <Button variant="outline" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Icon name="Phone" size={18} className="mr-2" />
            Связаться
          </Button>
        </nav>
      </header>

      <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
        <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/projects/71e820ac-bc0b-4b60-a915-d368f6ceb751/files/0417bfe6-5869-42eb-9bd6-8d52f76c0208.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            Элитная недвижимость<br />Санкт-Петербурга
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Эксклюзивные предложения премиального жилья в историческом центре и престижных районах города
          </p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6">
            Смотреть каталог
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      <section id="catalog" className="py-16 container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center mb-12 text-foreground">Каталог объектов</h2>
        
        <Card className="mb-8 shadow-lg">
          <CardContent className="p-6">
            <h3 className="text-xl font-serif font-semibold mb-4 flex items-center">
              <Icon name="SlidersHorizontal" size={24} className="mr-2 text-accent" />
              Расширенный поиск
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Цена, млн ₽</label>
                <div className="flex gap-2">
                  <Input
                    type="number"
                    placeholder="От"
                    value={priceFrom}
                    onChange={(e) => setPriceFrom(e.target.value)}
                    className="w-1/2"
                  />
                  <Input
                    type="number"
                    placeholder="До"
                    value={priceTo}
                    onChange={(e) => setPriceTo(e.target.value)}
                    className="w-1/2"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Площадь, м²</label>
                <div className="flex gap-2">
                  <Input
                    type="number"
                    placeholder="От"
                    value={areaFrom}
                    onChange={(e) => setAreaFrom(e.target.value)}
                    className="w-1/2"
                  />
                  <Input
                    type="number"
                    placeholder="До"
                    value={areaTo}
                    onChange={(e) => setAreaTo(e.target.value)}
                    className="w-1/2"
                  />
                </div>
              </div>

              <div className="lg:col-span-1">
                <label className="text-sm font-medium mb-2 block">Тип жилья</label>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                >
                  <option value="all">Все типы</option>
                  <option value="Квартира">Квартира</option>
                  <option value="Пентхаус">Пентхаус</option>
                  <option value="Таунхаус">Таунхаус</option>
                </select>
              </div>

              <div className="lg:col-span-1">
                <label className="text-sm font-medium mb-2 block">Локация</label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                >
                  <option value="all">Все районы</option>
                  <option value="Центральный район">Центральный район</option>
                  <option value="Петроградский район">Петроградский район</option>
                  <option value="Адмиралтейский район">Адмиралтейский район</option>
                </select>
              </div>
            </div>

            <div className="flex gap-3 justify-end">
              <Button variant="outline" onClick={resetFilters}>
                <Icon name="RotateCcw" size={18} className="mr-2" />
                Сбросить
              </Button>
              <Button onClick={applyFilters} className="bg-accent hover:bg-accent/90">
                <Icon name="Search" size={18} className="mr-2" />
                Применить фильтры
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <Card key={property.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-scale-in">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                  {property.type}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-2">{property.title}</h3>
                <div className="flex items-center text-muted-foreground mb-3">
                  <Icon name="MapPin" size={16} className="mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>
                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="flex items-center">
                    <Icon name="Maximize" size={16} className="mr-1" />
                    <span>{property.area} м²</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Home" size={16} className="mr-1" />
                    <span>{property.rooms} комнаты</span>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-accent">
                    {(property.price / 1000000).toFixed(1)} млн ₽
                  </span>
                  <Button size="sm" variant="outline">
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="services" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">Услуги риелтора</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Search" size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">Подбор недвижимости</h3>
              <p className="text-muted-foreground">
                Индивидуальный подбор объектов по вашим критериям с учётом всех пожеланий
              </p>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="FileText" size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">Юридическое сопровождение</h3>
              <p className="text-muted-foreground">
                Полное сопровождение сделки от проверки документов до регистрации права собственности
              </p>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="TrendingUp" size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">Инвестиционный анализ</h3>
              <p className="text-muted-foreground">
                Оценка инвестиционной привлекательности объектов и прогноз доходности
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16 container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center mb-12">Отзывы клиентов</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="p-6">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
              ))}
            </div>
            <p className="text-muted-foreground mb-4">
              "Профессиональный подход и внимание к деталям. Помогли найти идеальную квартиру в историческом центре. Весь процесс сделки прошёл гладко."
            </p>
            <p className="font-semibold">Анна Петрова</p>
          </Card>
          
          <Card className="p-6">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
              ))}
            </div>
            <p className="text-muted-foreground mb-4">
              "Отличный специалист по элитной недвижимости. Учли все наши требования и нашли объект даже лучше, чем мы ожидали."
            </p>
            <p className="font-semibold">Михаил Соколов</p>
          </Card>
        </div>
      </section>

      <section id="about" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://cdn.poehali.dev/projects/71e820ac-bc0b-4b60-a915-d368f6ceb751/files/06c01d83-a34a-4994-90dc-ec0f52c4e5af.jpg"
                  alt="Риелтор"
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
              <div>
                <h2 className="text-4xl font-serif font-bold mb-6">О риелторе</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Елена Волкова — эксперт по элитной недвижимости Санкт-Петербурга с 12-летним опытом работы.
                </p>
                <p className="text-muted-foreground mb-4">
                  Специализируется на сделках с объектами премиум-класса в исторических районах города. За годы работы успешно провела более 200 сделок.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Icon name="Award" size={20} className="text-accent mr-3" />
                    <span>Сертифицированный риелтор</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Users" size={20} className="text-accent mr-3" />
                    <span>200+ довольных клиентов</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Clock" size={20} className="text-accent mr-3" />
                    <span>12 лет на рынке недвижимости</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="articles" className="py-16 container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center mb-12">Статьи о рынке недвижимости</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gradient-to-br from-accent/20 to-accent/5"></div>
            <CardContent className="p-6">
              <Badge className="mb-3">Аналитика</Badge>
              <h3 className="text-xl font-serif font-semibold mb-2">
                Тенденции рынка элитной недвижимости 2024
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Обзор ключевых изменений и прогнозы на следующий год
              </p>
              <Button variant="link" className="p-0 text-accent">
                Читать далее
                <Icon name="ArrowRight" size={16} className="ml-1" />
              </Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5"></div>
            <CardContent className="p-6">
              <Badge className="mb-3">Советы</Badge>
              <h3 className="text-xl font-serif font-semibold mb-2">
                Как выбрать квартиру в историческом центре
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Важные критерии при покупке недвижимости в центре СПб
              </p>
              <Button variant="link" className="p-0 text-accent">
                Читать далее
                <Icon name="ArrowRight" size={16} className="ml-1" />
              </Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gradient-to-br from-muted to-muted/30"></div>
            <CardContent className="p-6">
              <Badge className="mb-3">Инвестиции</Badge>
              <h3 className="text-xl font-serif font-semibold mb-2">
                Инвестиции в петербургскую недвижимость
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Анализ доходности и перспективных районов для инвестиций
              </p>
              <Button variant="link" className="p-0 text-accent">
                Читать далее
                <Icon name="ArrowRight" size={16} className="ml-1" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">Свяжитесь с нами</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Готовы найти недвижимость вашей мечты? Свяжитесь с нами для консультации
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center">
              <Icon name="Phone" size={24} className="mr-3 text-accent" />
              <span className="text-lg">+7 (812) 123-45-67</span>
            </div>
            <div className="flex items-center">
              <Icon name="Mail" size={24} className="mr-3 text-accent" />
              <span className="text-lg">info@elite-spb.ru</span>
            </div>
          </div>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Icon name="MessageCircle" size={20} className="mr-2" />
            Записаться на консультацию
          </Button>
        </div>
      </section>

      <footer className="bg-primary/95 text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-primary-foreground/80">
            © 2024 Элитная Недвижимость СПб. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;