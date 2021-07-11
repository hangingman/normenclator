<template>
  <BaseUI/>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import BaseUI from "./components/BaseUI.vue";
//import 'jquery-ui-dist/jquery-ui.theme.css'

@Options({
  components: {
    BaseUI,
  },
})
export default class App extends Vue {}
</script>
