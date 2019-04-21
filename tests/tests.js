const { test } = require('@ianwalter/bff')
const { transformSync } = require('@babel/core')
const preset = require('..')

test('basic config', ({ expect }) => {
  const src = `
    import React, { lazy } from 'react'
    import ReactDOM from 'react-dom'

    const msg = lazy(() => import('./Msg'))

    ReactDOM.render(
      <h1>{msg}</h1>,
      document.getElementById('app')
    )
  `
  const { code } = transformSync(src, { presets: [preset] })
  expect(code).toMatchSnapshot()
})
