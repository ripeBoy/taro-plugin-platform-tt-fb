import FB from './program'
import type { IPluginContext } from '@tarojs/service'

export default (ctx: IPluginContext) => {
  ctx.registerPlatform({
    name: 'fb',
    useConfigName: 'mini',
    async fn ({ config }) {
      const program = new FB()
      program.start()
    }
  })
}
