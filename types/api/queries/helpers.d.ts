export declare function handleResponse<T>(
  {
    response,
    data,
  }: {
    response: Response
    data?: T
  },
  opts?: {
    statusCodeOverrides: Record<number, string>
  },
): T
