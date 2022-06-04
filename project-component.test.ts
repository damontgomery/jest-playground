import { myExportedTest, myExportedTestThatOnlyWorksOnCore } from './core-component.tests'

const componentName = 'project-component'

myExportedTest(componentName)
myExportedTestThatOnlyWorksOnCore(componentName)

it('dummy test in project', () => {
  expect(true).toBe(true)
})
