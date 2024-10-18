import { Button } from 'react-aria-components'
//TODO: Style appropriately once design is available
export function Toast({ message, onClose }: { message: string | null; onClose: () => void }) {
  if (!message) return
  return (
    <div role="alert" style={{ backgroundColor: 'rgba(255,0,0,0.2)', color: 'red' }}>
      {message}
      <Button onPress={onClose}>Close</Button>
    </div>
  )
}
