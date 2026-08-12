import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('is available as the initial application component', () => {
    expect(App).toBeTypeOf('function')
  })
})

