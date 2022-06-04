import { coreComponentTests } from './core-component.tests'

const componentName = 'project-component'

coreComponentTests(componentName)

it('dummy test in project', () => {
  expect(true).toBe(true)
})
