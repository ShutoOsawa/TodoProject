<template>


  <div id="app" class="container mx-auto bg-gray-200items-center">
    <button v-on:click="returnButton" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      return
    </button>

    <vue-draggable-next tag="ul" ghost-class="moving-card"
                        filter=".action-button"
                        class="grid gap-4 grid-cols-3 w-full max-w-lg"
                        :list="lst" :animation="200">
            <div  v-for="(item,index) in lst"
             :key=index
             class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm"
             >
              <img class="rounded-t-lg" :src="item.image" alt="">
              <p class="text-gray-700 text-base">
                {{item.name}}
              </p>

            <button class="px-2 text-red-600"
                    @click="removeCategory(index)"
                    title="Remove todo">&times;</button>
            <button @click="changeData(index)"
                    class="px-2 text-green-600" title="Mark as done">&check;</button>
          </div>
        </vue-draggable-next>
    </div>

  <div class="home">
    <h1>DropZone</h1>
    <DropZone @drop.prevent="drop" @change="selectedFile" />
  </div>
</template>

<script>
import DropZone from "@/components/DropZone.vue";
import {defineComponent ,ref,onMounted} from "vue";

import { VueDraggableNext } from 'vue-draggable-next';

export default defineComponent({
  components: {VueDraggableNext,
  DropZone},
  setup() {

    let lst = ref([])
    let category = ref([])

    onMounted(() => {
      lst.value = category.value
    })

    function returnButton() {
      lst.value = category.value
    }

    function removeCategory(index) {
      console.log(index)
      lst.value.splice(index, 1);
    }

    function changeData(index) {
      lst.value = category.value[index].content
    }

    const drop = (e) => {
      Array.from(e.dataTransfer.files).forEach(item => {
        console.log(item)
        lst.value.push({id: item.name, name: item.name, image: URL.createObjectURL(item), content: []})
      })
    };

    const selectedFile = () => {
       Array.from(document.querySelector(".dropzoneFile").files).forEach(item => {
        console.log(item)
        lst.value.push({id: item.name, name: item.name, image: URL.createObjectURL(item), content: []})
      })
    }

      return {
        drop, selectedFile,
        lst,
        returnButton,
        changeData,
        removeCategory,
        category,
      }
    }
  })
</script>


