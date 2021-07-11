<template>
  <div class="header">
    Fixed header
  </div>
  <div class="wrapper">
    <div class="inner-wrapper">
      <div ref="leftPaneRef" class="left pane">Left</div>
      <div class="center pane">
        <div class="inner">
          <div class="top pane">
            <div ref="topPaneRef" class="top-content">Center top</div>
          </div>
          <div ref="bottomRef" class="bottom">
            Center bottom
          </div>
        </div>
      </div>
      <div ref="rightPaneRef" class="right pane">Right</div>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue} from 'vue-class-component'
import {defineComponent, ref, onMounted, nextTick} from 'vue'
import $ from "jquery";
import "jquery-ui";
import "jquery-ui-css";

/// <reference path="jqueryui.d.ts" />
/// <reference path="jquery.d.ts" />

export default defineComponent({
  setup() {
    const leftPaneRef = ref<HTMLDivElement>();
    const topPaneRef = ref<HTMLDivElement>();
    const bottomRef = ref<HTMLDivElement>();
    const rightPaneRef = ref<HTMLDivElement>();

    onMounted(() => {
      const $leftPane = $(leftPaneRef.value!!);
      const $topPane = $(topPaneRef.value!!);
      const $bottom = $(bottomRef.value!!);
      const $rightPane = $(rightPaneRef.value!!);
      $leftPane.resizable({
        handles: "e, w"
      });
      $topPane.resizable({
        handles: "n, s"
      });
      $bottom.resizable({
        handles: "n, s"
      });
      $rightPane.resizable({
        handles: "e, w"
      });
    })

    return {
      leftPaneRef
      , topPaneRef
      , bottomRef
      , rightPaneRef
    }
  },
})
</script>

<style scoped lang="css">
html,
body {
  height: 100%;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 20px;
  background-color: moccasin;
}

.wrapper {
  position: absolute;
  top: 21px;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: fuchsia;
}

.inner-wrapper,
.center.pane .inner {
  display: table;
  table-layout: fixed;
  width: 100%;
  height: 100%;
}

.pane {
  display: table-cell;
}

.left.pane {
  background-color: olivedrab;
  width: 25%;
}

.center.pane {
  background-color: lightblue;
}

.center.pane .inner .top,
.center.pane .inner .bottom {
  display: table-row;
}

.center.pane .inner .top {
  background-color: lightcoral;
}

.center.pane .inner .bottom {
  background-color: orange;
  height: 100%;
  width: 100%;
}

.right.pane {
  background-color: #999;
  width: 25%;
}

.top-content {
  width: 100%;
  height: 100%;
}
</style>
