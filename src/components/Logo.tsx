export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-center gap-2">
        <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary text-primary-foreground text-lg font-bold">
          А
        </span>
        <span className="text-xl font-semibold tracking-tight">Анна Дизайн</span>
      </div>
    </div>
  )
}