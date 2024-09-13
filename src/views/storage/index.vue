<template>
  <UniExample>
    <div>
      <h2 data-id>本地缓存</h2>
      <h3 data-id data-level="1">使用示例</h3>
      <HighlightCode>
        <pre><code :class="`line-numbers language-ts`">
// 缓存 json 数据到 localstorage 中
storageL('key', {a: 'b'})

// 直接返回 json 数据 {a: 'b'}，无需转义
storageL('key')

// 缓存 json 数据到 sessionStorage 中
storageL('key', {a: 'b'}, true)

// 直接返回 json 数据 {a: 'b'}，无需转义
// null,undefined 不会缓存
storageL('key', null, true)

// 相当于 localStorage.removeItem('key')
rmStorageL('key')

// 相当于 sessionStorage.removeItem('key')
rmStorageL('key', true)

// 相当于 localStorage.clear()
rmStorageLAll()

// 相当于 sessionStorage.clear()
rmStorageLAll(true)

// 语法类似 storageL，不同的是，会在一个对象作用域下新增数据
// 相当于在json对象中添加属性，然后把整个json对象缓存
// 为了不污染全局的storage
// 缓存的数据中带有时间戳，用于后期清除缓存
uniStorage('key', {a: 'b'})
uniStorage('key')
uniStorage('key', {a: 'b'}, true)
uniStorage('key', null, true)

// 在 uniStorage 基础上生成一个新的封装，key带有指定前缀的方法
uniCreateStorage('pre_')

// 在 uniStorage 基础上生成一个新的封装，在新的对象下面添加属性
uniCreateKeyStorage('obj')

// 清除 uniStorage 中的指定 key 的缓存

// 会同时清除 sessionstorage 和 localstorage
// 第二个参数默认是 7 天，超过 7 天的数据会被清理
uniStorageClear('key')

// 指定 10 天
uniStorageClear('key', 10 * 24 * 60 * 60 * 1000)

// 0 会直接清除，不考虑时间问题
uniStorageClear('key', 0)
        </code></pre>
      </HighlightCode>
      <h3 data-id data-level="1">TS 描述</h3>
      <p>
        <ElText> 可能会有差异，请直接在编辑器中查看你的版本对应的 </ElText>
        <ElText type="warning"> TS </ElText>
        <ElText> 描述 </ElText>
      </p>
      <HighlightCode>
        <pre><code :class="`line-numbers language-ts`">
export declare function storageL(key: string, val?: any, isSession?: boolean): any;
export declare function rmStorageL(key: string, isSession?: boolean): void;
export declare function rmStorageLAll(isSession?: boolean): void;
export declare function uniStorageClear(_key: string, max?: number): void;
export declare function uniStorage(key: string, val?: any, isSession?: boolean): any;
export declare function uniCreateStorage&lt;T extends Record&lt;string, any&gt;&gt;(_key: string): (key: string, storageVal?: T, isSession?: boolean) =&gt; T | undefined;
export declare function uniCreateKeyStorage&lt;T extends Record&lt;string, any&gt;&gt;(key: string): (storageVal?: T, isSession?: boolean) =&gt; T;
        </code></pre>
      </HighlightCode>
    </div>
  </UniExample>
</template>
<script setup lang="ts">
import HighlightCode from '@/components/HighlightCode'
import UniExample from '@/components/UniExample'
import { ElText } from 'element-plus'
</script>
