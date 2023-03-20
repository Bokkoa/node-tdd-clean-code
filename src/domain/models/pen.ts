export class Pen {
  name: string
  constructor (private readonly message: string) {}

  write (): string {
    return this.message
  }
}
