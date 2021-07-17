<template>
  <BaseUI/>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import BaseUI from "./components/BaseUI.vue";

@Options({
  components: {
    BaseUI,
  },
})
export default class App extends Vue {}
</script>
