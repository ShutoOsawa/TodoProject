<template>

  <div class="home">
    <h1>DropZone</h1>
    <DropZone @drop.prevent="drop" @change="selectedFile" />
    <span class="file-info">File: {{ dropzoneFile.name }}</span>
  </div>
  <div id="app" class="container mx-auto bg-gray-200items-center">
    <button v-on:click="getValue" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Get value</button>
    <button v-on:click="addCard" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">add</button>
    <button v-on:click="returnButton" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">return</button>

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
</template>

<script>
import DropZone from "@/components/DropZone.vue";
import {defineComponent ,ref} from "vue";
import { VueDraggableNext } from 'vue-draggable-next';

export default defineComponent({
  components: {VueDraggableNext,
  DropZone},
  setup() {

    let lst = ref([])
    let category = ref([])

    function returnButton(){
      console.log(category.value)
      lst.value = category.value
    }
    function getValue(){
      console.log(lst.value)
    }

    function removeCategory(index){
     // if(!confirm("Are you sure?")){
      //  return;
      //}
      console.log(index)
      lst.value.splice(index,1);
    }

    function changeData(index){
      console.log(lst.value)
      console.log(index)
      lst.value = category.value[index].content
    }

    function addCard(){
      lst.value.push({id: "add", name: "added", image: "", content: []})
      console.log(lst.value)
      category.value=  lst.value
    }
    let dropzonePath = ref("")
    let dropzoneFile = ref("")

    const drop = (e) => {
      dropzoneFile.value = e.dataTransfer.files[0];
      dropzonePath.value = URL.createObjectURL(e.dataTransfer.files[0]);
      lst.value.push({id: dropzoneFile.value, name: dropzoneFile.value,image: dropzonePath.value, content: []})
    };

    const selectedFile = () => {
      dropzoneFile.value = document.querySelector(".dropzoneFile").files[0];
      dropzonePath.value = URL.createObjectURL(document.querySelector(".dropzoneFile").files[0]);
      lst.value.push({id: dropzoneFile.value.name, name: dropzoneFile.value.name,image: dropzonePath.value, content: []})
    };

    return {
      dropzoneFile, drop, selectedFile,
      lst,
      returnButton,
      changeData,
      removeCategory,
      category,
      addCard,
      getValue,
      VueDraggableNext,
  }
  }
});
</script>


