import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Layout, PenTool, Palette, Smartphone, FileImage, Sparkles } from "lucide-react"

const services = [
  {
    icon: Layout,
    title: "Дизайн сайтов",
    description:
      "Проектирую современные сайты и лендинги, которые приятно смотреть и удобно использовать. Прорабатываю каждый экран в Figma — от структуры до анимаций, чтобы ваш сайт продавал.",
  },
  {
    icon: PenTool,
    title: "Разработка логотипа",
    description:
      "Создаю уникальный логотип, который отражает суть вашего бренда. Несколько вариантов на выбор, проработка в векторе и готовые файлы для печати и интернета.",
  },
  {
    icon: Palette,
    title: "Фирменный стиль",
    description:
      "Собираю целостный визуальный образ бренда: цвета, шрифты, паттерны и фирменные элементы. Вы получаете брендбук, который держит весь дизайн в едином стиле.",
  },
  {
    icon: FileImage,
    title: "Гайдлайн и брендбук",
    description:
      "Оформляю правила использования логотипа и фирменного стиля в удобном документе. Ваша команда и подрядчики всегда будут оформлять материалы правильно.",
  },
  {
    icon: Smartphone,
    title: "Дизайн соцсетей",
    description:
      "Разрабатываю шаблоны постов, сторис и обложек в фирменном стиле. Ваши соцсети выглядят профессионально и узнаваемо в каждой публикации.",
  },
  {
    icon: Sparkles,
    title: "Презентации и материалы",
    description:
      "Создаю стильные презентации, визитки и рекламные макеты. Любой материал бренда выглядит дорого и аккуратно — от питч-дека до баннера.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Наша экспертиза
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
В чём я <span className="text-primary">сильна</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          От логотипа до целого фирменного стиля — создаю визуальный образ бренда, который выделяет вас среди конкурентов.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}