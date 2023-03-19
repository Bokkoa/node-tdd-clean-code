import { IBird } from '../interfaces/IBird'
export class Bird {
  constructor (public bird: IBird) {
    Object.assign(this, bird)
  }

  fly (): string {
    return this.bird.name
  }
}

export class Eagle extends Bird {
  fly (): string {
    return this.bird.name
  }
}

export class Penguin extends Bird {
  fly (): any {
    return new Error('This bird can\'t fly')
  }

  walk (): string {
    return 'I can walk'
  }

  swim (): any {
    return 'I can swim'
  }
}
