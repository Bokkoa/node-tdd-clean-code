export class MissingFormalParameterException extends Error {
  constructor (
    public name: string
  ) {
    super(`Error in ${name}`)
  }
}
