<template>


  <div id="app" class="container mx-auto bg-gray-200items-center">
    <button v-on:click="returnButton" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      return
    </button>

    <vue-draggable-next tag="ul" ghost-class="moving-card"
                        filter=".action-button"
                        class="grid gap-4 grid-cols-3 w-full max-w-4xl"
                        :list="currentList" :animation="200">
            <div  v-for="(item,index) in currentList"
             :key=index
             class="w-48 h-54 bg-white shadow-md border border-gray-200 rounded-lg"
             >
              <img class="mx-auto my-4 h-32 bg-gray-100 rounded-lg" :src="item.image" alt="">
              <p class="truncate px-2 text-gray-700 text-base">
                {{item.name}}
              </p>
              <div class="flex flex-row-reverse">
                  <TrashIcon class="h-10 w-10 px-2 text-red-600"
                          @click="removeCategory(index)"
                          />
                  <PencilAltIcon @click="changeData(index)"
                          class="h-10 w-10 px-2 text-green-600" />
              </div>
          </div>
        </vue-draggable-next>
    </div>

  <div class="dropzone">
    <DropZone @drop.prevent="drop" @change="selectedFile" />
  </div>
</template>

<script>
import DropZone from "@/components/DropZone.vue";
import {defineComponent ,ref,onMounted} from "vue";
import { VueDraggableNext } from 'vue-draggable-next';
import { PencilAltIcon,TrashIcon } from '@heroicons/vue/solid'
export default defineComponent({
  components: {
    VueDraggableNext,
  DropZone,
  PencilAltIcon,
  TrashIcon},
  setup() {
    let currentList = ref([])
    let originalTree = ref([])

    onMounted(() => {
      currentList.value = originalTree.value
    })

    function returnButton() {
      currentList.value = originalTree.value
    }

    function removeCategory(index) {
      console.log(index)
      currentList.value.splice(index, 1);
    }

    function changeData(index) {
      currentList.value = originalTree.value[index].content
    }

    const drop = (e) => {
      Array.from(e.dataTransfer.files).forEach(item => {
        console.log(item)
        currentList.value.push({id: item.name, name: item.name, image: URL.createObjectURL(item), content: []})
      })
    };

    const selectedFile = () => {
       Array.from(document.querySelector(".dropzoneFile").files).forEach(item => {
        console.log(item)
        currentList.value.push({id: item.name, name: item.name, image: URL.createObjectURL(item), content: []})
      })
    }

      return {
        drop,
        selectedFile,
        currentList,
        originalTree,
        returnButton,
        changeData,
        removeCategory,
      }
    }
  })
</script>


