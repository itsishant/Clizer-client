type ButtonProps = {
  label: string
  variant?: 'primary' | 'secondary' | 'ghost'
}

type button =  }
  label 

const baseClass =
  'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-bold tracking-tight transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'

const variantClass: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-gradient-to-r from-orange-500 to-rose-500 text-white shadow-[0_12px_28px_rgba(244,99,68,0.38)] hover:from-orange-600 hover:to-rose-500 focus-visible:ring-orange-400 focus-visible:ring-offset-slate-950',
  secondary:
    'bg-white/15 text-white backdrop-blur hover:bg-white/25 focus-visible:ring-white/70 focus-visible:ring-offset-slate-950',
  ghost:
    'bg-white/15 px-4 py-2.5 text-white backdrop-blur hover:bg-white/25 focus-visible:ring-white/70 focus-visible:ring-offset-slate-950',
}

export function Button({ label, variant = 'primary' }: ButtonProps) {
  return (
    <button className={`${baseClass} ${variantClass[variant]}`} type="button">
      {label}
    </button>
  )
}
