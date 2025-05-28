import { cn } from '@/lib/utils'

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div className={cn('w-full max-w-[1164px] px-5 md:px-8 m-auto', className)}>
      {children}
    </div>
  )
}
