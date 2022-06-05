<template>
  <div class="container mx-auto">
    <h1 class="mt-8 text-2xl">APIFetch</h1>
  </div>
</template>

<script>
import axios from 'axios'
import {onMounted} from 'vue'
export default {
  setup() {
    onMounted(async () => {
      let res = await axios.get('http://127.0.0.1:5000/incomes')
      console.log(res)
    });
  }
}
</script>
