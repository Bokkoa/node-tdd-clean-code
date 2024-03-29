import request from 'supertest'
import app from '../config/app'

describe('Cors', () => {
  it('should verify open cors', async () => {
    app.get('/test-cors', (req, res) => {
      res.send()
    })

    await request(app)
      .get('/test-cors')
      .expect('access-control-allow-origin', '*')
      .expect('access-control-allow-headers', '*')
      .expect('access-control-allow-methods', '*')
  })
})
