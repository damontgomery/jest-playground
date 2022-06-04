import { myExportedTest } from './core-component.tests'

const componentName = 'project-component'

myExportedTest(componentName)

it('dummy test in project', () => {
  expect(true).toBe(true)
})
