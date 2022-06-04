import { myExportedTest, myExportedTestThatOnlyWorksOnCore } from './core-component.tests'

const componentName = 'core-component'

myExportedTest(componentName)
myExportedTestThatOnlyWorksOnCore(componentName)
