export const coreComponentTests = (componentName) => {
  it(`Contains hello world`, () => {
    expect(
      `<${componentName}>Hello world</${componentName}>`
      .toLowerCase()
      .includes('hello world'))
      .toBe(true)
  })

  // Demonstrate a test that only works on core-component.
  it(`Is a core component`, () => {
    expect(
      `<${componentName}>Hello world</${componentName}>`
      .toLowerCase()
      .includes('core-component'))
      .toBe(true)
  })
}
