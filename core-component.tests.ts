export const myExportedTest = (componentName) => {
  it(`Contains hello world`, () => {
    expect(
      `<${componentName}>Hello world</${componentName}>`
      .toLowerCase()
      .includes('hello world'))
      .toBe(true)
  })
}

export const myExportedTestThatOnlyWorksOnCore = (componentName) => {
  it(`Is a core component`, () => {
    expect(
      `<${componentName}>Hello world</${componentName}>`
      .toLowerCase()
      .includes('core-component'))
      .toBe(true)
  })
}
