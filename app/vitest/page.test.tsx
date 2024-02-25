import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Vitest from './page'

test('Vitest', () => {
  render(<Vitest />)
  expect(
    screen.getByRole('heading', { level: 1, name: 'Vitestの導入と確認' })
  ).toBeDefined()
})
