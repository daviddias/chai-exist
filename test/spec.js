/* eslint-env mocha */
'use-strict'

const chai = require('chai')
const exist = require('../src')

chai.use(exist)

const expect = chai.expect

it('exists', () => {
  const a = 'b'
  expect(a).to.exist()
})

it('not exists', () => {
  const a = null

  expect(a).to.not.exist()
})
