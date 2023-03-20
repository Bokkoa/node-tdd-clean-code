import { URL } from 'url'
import { InvalidArgumentException } from '../errors/invalidArgError'

export class UrlLogin {
  private readonly foo: string
  private readonly bar: string
  public static parseUrl (url: string): URL {
    if (url === undefined || url == null) {
      throw new InvalidArgumentException('url')
    }
    return new URL(url)
  }
}
