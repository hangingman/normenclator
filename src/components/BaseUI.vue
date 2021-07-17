<template>
  <div class="window">
    <header class="toolbar toolbar-header">
      Fixed header
    </header>
    <div class="window-content">
      <div class="pane-group">
        <div ref="leftPaneRef" class="pane left">Left</div>
        <div class="pane center">
          <div class="inner">
            <div class="pane">
              <div ref="topPaneRef" class="top-content">Center top</div>
            </div>
            <div ref="bottomRef" class="bottom">
              Center bottom
            </div>
          </div>
        </div>
        <div ref="rightPaneRef" class="pane right">Right</div>
      </div>
    </div>
    <footer class="toolbar toolbar-footer">
    </footer>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref, onMounted} from 'vue'
import $ from "jquery";
import "jquery-ui";
import "jquery-ui-css";

/// <reference path="jqueryui.d.ts" />
/// <reference path="jquery.d.ts" />

export default defineComponent({
  setup() {
    function setWidthInPercent(element: JQuery<HTMLElement>) {
      const percentageWidth = (element.width()!! / element.parent().width()!!) * 100
      element.width(percentageWidth + '%')
    }

    const leftPaneRef = ref<HTMLDivElement>();
    const topPaneRef = ref<HTMLDivElement>();
    const rightPaneRef = ref<HTMLDivElement>();

    onMounted(() => {
      const $leftPane = $(leftPaneRef.value!!);
      const $topPane = $(topPaneRef.value!!);
      const $rightPane = $(rightPaneRef.value!!);

      $leftPane.resizable({
        handles: "e, w",
        stop: (event, ui) => {
          setWidthInPercent(ui.element)
        }
      });
      $topPane.resizable({
        handles: "s",
        stop: (event, ui) => {
          ui.element.width("")
        }
      });
      $rightPane.resizable({
        handles: "e, w",
        resize: (event, ui) => {
          ui.position.left = 0
        },
        stop: (event, ui) => {
          setWidthInPercent(ui.element)
        }
      });
    })

    return {
      leftPaneRef
      , topPaneRef
      , rightPaneRef
    }
  },
})
</script>

<style scoped lang="css">
.pane.left {
  width: 25%;
  flex: 0 1 auto;
}

.pane.right {
  width: 25%;
  flex: 0 1 auto;
}
</style>
