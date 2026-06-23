import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Кофейня «Зерно»",
    category: "Фирменный стиль",
    image: "https://cdn.poehali.dev/projects/5d5855db-2eb1-4cae-af66-708e8b2714b5/files/dd9d9db7-f41a-4373-aa6d-98ae7fabc33d.jpg",
    description:
      "Полный фирменный стиль для городской кофейни: логотип, упаковка, визитки и оформление точки. Тёплый и уютный образ, который запоминается с первого взгляда.",
    url: "#contact",
    tags: ["Логотип", "Брендинг", "Упаковка"],
  },
  {
    title: "Фитнес-студия PULSE",
    category: "Дизайн сайта",
    image: "https://cdn.poehali.dev/projects/5d5855db-2eb1-4cae-af66-708e8b2714b5/files/f679f8a6-3abe-4a6d-93e9-9c94668863fd.jpg",
    description:
      "Дизайн современного лендинга для фитнес-студии с записью на тренировки. Энергичный визуал, удобная структура и адаптация под мобильные.",
    url: "#contact",
    tags: ["Веб-дизайн", "Figma", "Лендинг"],
  },
  {
    title: "IT-стартап Nova",
    category: "Разработка логотипа",
    image: "https://cdn.poehali.dev/projects/5d5855db-2eb1-4cae-af66-708e8b2714b5/files/8b1c3dfd-b388-421e-a02c-08fc6aadccd1.jpg",
    description:
      "Лаконичный геометричный логотип для технологического стартапа. Несколько вариантов начертания и готовый набор файлов для любых носителей.",
    url: "#contact",
    tags: ["Логотип", "Вектор", "Айдентика"],
  },
  {
    title: "Косметика BLOOM",
    category: "Брендбук",
    image: "https://cdn.poehali.dev/projects/5d5855db-2eb1-4cae-af66-708e8b2714b5/files/8e070b66-a885-4dde-b935-c4c293697d4b.jpg",
    description:
      "Полный брендбук для бренда натуральной косметики: палитра, шрифты, паттерны и правила использования. Единый стиль во всех точках контакта.",
    url: "#contact",
    tags: ["Брендбук", "Гайдлайн", "Айдентика"],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Мои работы</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Подборка проектов по дизайну сайтов, фирменному стилю и логотипам. Каждый бренд — это отдельная история и свой визуальный характер.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="gap-2"
                    onClick={() => window.open(project.url, "_blank")}
                  >
                    Открыть проект <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-primary font-semibold mb-2">{project.category}</p>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}