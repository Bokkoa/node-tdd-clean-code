import { Team } from '../domain/models/team'

describe('Team class', () => {
  it('position', () => {
    const team = new Team()

    const position = {
      name: 'goalkeeper',
      tShirt: 1,
      skills: ['Kick hard', 'Run fast', 'Jump high']
    }

    expect(team.position(position.name, position.tShirt, position.skills)).toEqual(['goalkeeper', 1, ['Kick hard', 'Run fast', 'Jump high']])
  })

  it('position', () => {
    const team = new Team()

    const position = {
      name: 'center midfield',
      tShirt: 2,
      skills: ['Kick hard', 'Run fast']
    }

    expect(team.position(position.name, position.tShirt, position.skills)).toEqual(['center midfield', 2, ['Kick hard', 'Run fast']])
  })

  it('soccer play', () => {
    const soccerPlay = new Team()

    expect(soccerPlay.attacker('')).toBe('attacker')
  })
})
