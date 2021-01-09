import { TT } from '@tarojs/plugin-platform-tt'
// import { components } from './components'

const PACKAGE_NAME = '@tarojs/plugin-platform-tt-fb'

export default class FB extends TT {
  platform = 'fb'
  runtimePath = `${PACKAGE_NAME}/dist/runtime`
  reactComponents = `${PACKAGE_NAME}/dist/components`

  /**
   * 增加组件或修改组件属性
   */
  modifyComponents () {
    // 先按支付宝标准对齐组件
    super.modifyComponents()

    // 再处理钉钉与支付宝的组件差异
    // this.template.mergeComponents(this.ctx, components)
  }
}
