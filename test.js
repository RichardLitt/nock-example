/* global describe, it */
const assert = require('assert')
const fetch = require('node-fetch')

// const tutorial = require('./index.js')

describe('The tests should run', () => {
  it('and a tautology should pass.', (done) => {
    assert.equal(true, true)
    done()
  })
})

describe('Nock should interrupt a call', () => {
  it('and it should replace a URL so called.', (done) => {
    fetch('https://api.github.com/users/RichardLitt')
      .then(res => res.json())
      .then(json => {
        assert.deepEqual(json.login, 'RichardLitt')
        done()
      })
  })
})
