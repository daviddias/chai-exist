module.exports = (chai, utils) => {
  function exist (expected) {
    const val = this._obj

    this.assert(Boolean(val),
      'expected #{this} to exist',
      'expected #{this} to not exist',
      true,
      val
    )
  }

  utils.addMethod(chai.Assertion.prototype, 'exist', exist)
}
