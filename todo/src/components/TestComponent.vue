<template>
  <div id="app" class="container mx-auto bg-gray-200items-center">
    <button v-on:click="getValue" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Get value</button>
    <button v-on:click="addCard" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">add</button>
    <button v-on:click="returnButton" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">return</button>
    <div  v-for="(item,index) in lst"
          :key=index
          class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm"
    >
      <img class="rounded-t-lg" :src="item.image" alt="">
      <p class="text-gray-700 text-base">
        {{item.name}}
      </p>

<!--      <button class="px-2 text-red-600"-->
<!--              @click="removeCategory(index)"-->
<!--              title="Remove todo">&times;</button>-->
<!--      <button @click="changeData(index)"-->
<!--              class="px-2 text-green-600" title="Mark as done">&check;</button>-->
    </div>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "ItemList",

  setup() {
    let lst = ref([{id: "1", name: "1"}])
    let category = ref([{id: "1", name: "1"}])

    return{
      lst, category
    }

  }

}

</script>

<style></style>
