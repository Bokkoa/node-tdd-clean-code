import { URL } from 'url'
import { InvalidArgumentException } from '../errors/invalidArgError'

export class UrlLogin {
  public static parseUrl (url: string): URL {
    if (!url) {
      throw new InvalidArgumentException('url')
    }
    return new URL(url)
  }
}
