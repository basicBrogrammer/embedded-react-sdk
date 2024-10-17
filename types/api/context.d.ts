import { QueryClient } from '@tanstack/react-query'
import { GustoClient } from './client'
export declare const queryClient: QueryClient
type GustoApiContextType = {
  GustoClient: GustoClient
}
export declare function GustoApiContextProvider({
  children,
  context,
}: {
  context: {
    GustoClient: GustoClient
  }
  children: React.ReactNode
}): import('react/jsx-runtime').JSX.Element
export declare const useGustoApi: () => GustoApiContextType
export {}
