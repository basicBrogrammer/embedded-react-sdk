export class LRUCache {
  capacity: number
  map: Map<string, () => Record<string, string>>

  constructor(capacity: number) {
    this.capacity = capacity
    this.map = new Map()
  }

  get(key: string): (() => Record<string, string>) | null {
    const value = this.map.get(key)
    if (value === undefined) return null

    // Small hack to re-order keys: we remove the requested key and place it at the end
    this.map.delete(key)
    this.map.set(key, value)

    return value
  }

  put(key: string, value: () => Record<string, string>): void {
    // remove last element to avoid overflow, only if it does not have
    // the inserted key is a new key
    if (this.map.size >= this.capacity && !this.map.has(key)) {
      const firstKey = this.map.keys().next().value as string
      this.map.delete(firstKey)
    }

    // Small hack to re-order keys: we remove the requested key and place it at the end
    this.map.delete(key)
    this.map.set(key, value)
  }
}
