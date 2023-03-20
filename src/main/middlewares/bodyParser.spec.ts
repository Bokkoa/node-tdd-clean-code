import request from 'supertest'
import app from '../config/app'

describe('Middlewares', () => {
  it('should body parsers', async () => {
    app.post('/body-parser', (req, res) => {
      res.send(req.body)
    })

    await request(app)
      .post('/body-parser')
      .send({ name: 'Kone' })
      .expect({ name: 'Kone' })
  })
})
