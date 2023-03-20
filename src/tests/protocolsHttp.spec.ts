import { UrlLogin } from '../protocols/protocolsHttp'

describe('Protocols http and queries', () => {
  test('Url login', () => {
    const mockUrl = 'http://localhost:3000/login'
    const parseUrl = UrlLogin.parseUrl(mockUrl)
    expect(parseUrl.href).toEqual(mockUrl)
    expect(parseUrl.port).toEqual('3000')
  })

  test('Response query', async () => {
    const parseUrl = UrlLogin.parseUrl('http://localhost:3000/login?user=user&password=password')
    const mockAuth = {
      user: 'user',
      password: 'password'
    }
    expect(parseUrl.searchParams.get('user')).toEqual(mockAuth.user)
    expect(parseUrl.searchParams.get('password')).toEqual(mockAuth.password)
  })

  test('User URL', async () => {
    const mockUrl = 'http://localhost:3000/user'
    const parseUrl = UrlLogin.parseUrl(mockUrl)
    expect(parseUrl.href).toEqual(mockUrl)
    expect(parseUrl.port).toEqual('3000')
  })

  test('Response query', async () => {
    const parseUrl = UrlLogin.parseUrl('http://localhost:3000/user?user=user&password=password&name=name&lastname=lastname')
    const mcokRes = {
      user: 'user',
      password: 'password',
      name: 'name',
      lastname: 'lastname'
    }
    expect(parseUrl.searchParams.get('user')).toEqual(mcokRes.user)
    expect(parseUrl.searchParams.get('password')).toEqual(mcokRes.password)
    expect(parseUrl.searchParams.get('name')).toEqual(mcokRes.name)
    expect(parseUrl.searchParams.get('lastname')).toEqual(mcokRes.lastname)
  })

  test('Invalid URL', () => {
    function mockError (): void {
      UrlLogin.parseUrl('')
    }

    expect(mockError).toThrowError('Invalid url as argument')
  })
})
