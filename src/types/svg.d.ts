/// <reference types="vite-plugin-svgr/client" />

declare module '*.svg?react' {
  const content: string
  export default content
}

declare module '*.png' {
  const content: string
  export default content
}
