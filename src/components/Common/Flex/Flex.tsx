import style from './Flex.module.scss'
export interface FlexProps {
  children: React.ReactNode
  flexDirection?: 'row' | 'column'
  justifyContent?:
    | 'space-between'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-around'
    | 'space-evenly'
    | 'normal'
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch'
}
export function Flex({
  children,
  flexDirection = 'row',
  justifyContent = 'normal',
  alignItems = 'flex-start',
}: FlexProps) {
  return (
    <div
      className={[
        style.flex,
        style[`flex-jc-${justifyContent}`],
        style[`flex-fd-${flexDirection}`],
        style[`flex-ai-${alignItems}`],
      ].join(' ')}
    >
      {children}
    </div>
  )
}
export interface FlexItemProps {
  flexGrow?: number | 'initial'
  children: React.ReactNode
}
export function FlexItem({ flexGrow = 'initial', children }: FlexItemProps) {
  return <div style={{ flexGrow: flexGrow }}>{children}</div>
}
