import { useEffect, useId, useRef } from 'react'
import styles from './Alert.module.scss'

export interface AlertProps {
  variant?: 'info' | 'success' | 'warning' | 'error'
  label: string
  children?: React.ReactNode
}

export function Alert({ label, children, variant = 'info' }: AlertProps) {
  const id = useId()
  const alertRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (alertRef.current) alertRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [])
  return (
    <div
      className={styles.alert}
      role="alert"
      aria-labelledby={id}
      data-variant={variant}
      ref={alertRef}
    >
      <h4 id={id}>{label}</h4>
      {children}
    </div>
  )
}
