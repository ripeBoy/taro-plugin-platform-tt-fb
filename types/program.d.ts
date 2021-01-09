import { TT } from '@tarojs/plugin-platform-tt';
export default class FB extends TT {
    platform: string;
    runtimePath: string;
    reactComponents: string;
    /**
     * 增加组件或修改组件属性
     */
    modifyComponents(): void;
}
