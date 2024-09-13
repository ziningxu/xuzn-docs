<template>
  <UniExample :exp-keys="ks">
    <template #pre>
      <h1>函数库</h1>
    </template>
    <div>
      <h3 data-id>TS 描述</h3>
      <p>
        <ElText> 可能会有差异，请直接在编辑器中查看你的版本对应的 </ElText>
        <ElText type="warning"> TS </ElText>
        <ElText> 描述 </ElText>
      </p>
      <HighlightCode>
        <pre><code :class="`line-numbers language-ts`">
export declare function clipboardWriteText(txt: any): Promise&lt;void&gt;;
type RGBType = [r: number, g: number, b: number];
export declare function hexToRgb(str: string): RGBType;
export declare function rgbToHex(a: number, b: number, c: number): string;
export declare function darken(color: string, level: number): string;
export declare function lighten(color: string, level: number): string;
export declare function getElePrimaryColor(color: string): string[];
export declare function cloneJson(json: any): any;
export declare function downloadFile(blob: Blob, filename: string): void;
export declare function splitNumber(val: string | number, separator?: string): string;
export declare function centerLineToHump(str: string, firstUpper?: boolean): string;
export declare function toHumpObj(val: Record&lt;string, any&gt;, first?: boolean): Record&lt;string, any&gt;;
export declare function useUniAttrs(): Record&lt;string, any&gt;;
export declare function toggleFullScreen(isFull?: boolean, el?: HTMLElement): Promise&lt;void&gt;;
export declare function sleep(time?: number): Promise&lt;unknown&gt;;
export declare function getUrlQueryToArray(url?: string): string[][];
export declare function getUrlQuery(url?: string): Record&lt;string, string&gt;;
export declare function getUrlQueryHasArray(url?: string): Record&lt;string, string | string[]&gt;;
        </code></pre>
      </HighlightCode>
    </div>
  </UniExample>
</template>
<script setup lang="ts">
import HighlightCode from '@/components/HighlightCode'
import UniExample from '@/components/UniExample'
const ks = ['functionLib/']
</script>
