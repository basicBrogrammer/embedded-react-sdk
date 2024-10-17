import { useMutation } from '@tanstack/react-query'
import createClient from 'openapi-fetch'
import type { paths } from '@/generated/schema.js'
/**
 * BodyParams helps to drill into the nested types within the "paths" of the generated open api schema.
 */
type _BodyParams<Path extends keyof paths, Method extends 'PUT' | 'POST'> = NonNullable<
  Parameters<ReturnType<typeof createClient<Pick<paths, Path>>>[Method]>['1']
>
export type BodyParams<Path extends keyof paths, Method extends 'PUT' | 'POST'> =
  _BodyParams<Path, Method> extends {
    body?: unknown
  }
    ? _BodyParams<Path, Method>['body']
    : never
export type OnError = Parameters<typeof useMutation>[0]['onError']
export {}
