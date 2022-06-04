export const myExportedTest = (componentName) => {
  it(`Contains hello world`, () => {
    expect(
      `<${componentName}>Hello world</${componentName}>`
      .toLowerCase()
      .includes('hello world'))
      .toBe(true)
  })
}
