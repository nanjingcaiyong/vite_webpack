import { defineComponent } from "vue";

export default defineComponent({
  setup () {
    console.log('$API', $API)
    return  () => <div>Hello world's component </div>
  }
})