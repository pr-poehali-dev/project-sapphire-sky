import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, PaletteIcon, Rocket, ArrowRight } from "lucide-react"
import { Fragment } from "react"

const steps = [
  {
    icon: Lightbulb,
    title: "Бриф и идея",
    description:
      "Обсуждаем ваш бренд, задачи и пожелания. Изучаю нишу и конкурентов, чтобы найти образ, который выделит вас и попадёт точно в вашу аудиторию.",
    number: "01",
  },
  {
    icon: PaletteIcon,
    title: "Концепция и дизайн",
    description:
      "Создаю варианты дизайна и согласовываю направление. Прорабатываю детали — цвета, шрифты, композицию — до финального результата, который вам нравится.",
    number: "02",
  },
  {
    icon: Rocket,
    title: "Финал и передача файлов",
    description:
      "Готовлю все файлы в нужных форматах и собираю гайдлайн по использованию. Вы получаете готовый дизайн и исходники, которыми удобно пользоваться.",
    number: "03",
  },
]

export function ProcessSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            Наш процесс
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            От <span className="text-primary">идеи</span> к <span className="text-primary">результату</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
В три простых шага превращаю вашу идею в цельный визуальный образ бренда.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <Fragment key={index}>
              <Card
                className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-background"
              >
                <div className="absolute top-0 right-0 text-[120px] font-bold bg-gradient-to-br from-primary/10 to-primary/5 bg-clip-text text-transparent leading-none p-4">
                  {step.number}
                </div>
                <CardHeader>
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 w-fit group-hover:scale-110 group-hover:rotate-6">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <div
                  className="hidden md:flex items-center justify-center absolute top-1/2 -translate-y-1/2"
                  style={{ left: `${(index + 1) * 33.33 - 4}%` }}
                >
                  <ArrowRight className="h-8 w-8 text-primary animate-pulse" />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}