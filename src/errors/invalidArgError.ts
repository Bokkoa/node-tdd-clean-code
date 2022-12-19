export class InvalidArgumentException extends Error {
  constructor (
    public arg: string
  ) {
    super(`Invalid ${arg} as argument`)
  }
}
