# `@tarojs/plugin-platform-tt-fb`

Taro 插件。用于支持编译为飞书小程序。

## 使用

#### 1. 配置插件

```js
// Taro 项目配置
module.exports = {
  // ...
  plugins: [
    '@tarojs/plugin-platform-tt-fb'
  ]
}
```

#### 2. 编译为飞书小程序

```shell
taro build --type fb
taro build --type fb --watch
```

#### 其它

##### 平台判断

```js
if (process.TARO_ENV === 'fb') {
  // ...
}
```

##### API

飞书小程序拓展了一些独有 API，可以通过 `Taro.xxx` 来调用，例：

```js
Taro.enterChat()
```

##### 组件

飞书小程序拓展了一些独有组件，可像普通 Taro 内置组件一样使用，例：

```js
import { editor } from '@tarojs/components'

function Index () {
  return (
    <>
      <editor
              id="editor"
              placeholder="{{placeholder}}"
              contents="{{contents}}"
              read-only="{{readOnly}}"
              plugins="{{plugins}}"
              placeholderStyle="{{placeholderStyle}}"
              bindready="onEditorReady"
              bindmentionselect = "onMentionSelect"
              bindmentionclick = "onMentionClick"
              bindinput="onEditorInputValueChange"
              bindinsertimage="onInsertImages"
              bindgetfileinfo="onGetFileInfo"
              bindeditorclick="onEditorClick">
      </editor> 
    </>
  )
}
```
