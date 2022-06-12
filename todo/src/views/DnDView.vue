<template>

  <div class="home">
    <h1>DropZone</h1>
    <DropZone
        @drop.prevent="drop" @change="selectedFile" />
    <span class="file-info">File: {{ dropzoneFile.name }}</span>
  </div>
  <ItemList />



</template>

<script>
import DropZone from "@/components/DropZone.vue";
import {defineComponent ,ref} from "vue";
import ItemList from "@/components/ItemList.vue";

export default defineComponent({
  components: {
  DropZone,
  ItemList},
  setup() {

    let dropzonePath = ref("")
    let dropzoneFile = ref("")

      const drop = (e) => {
      dropzoneFile.value = e.dataTransfer.files[0];
      dropzonePath.value = URL.createObjectURL(e.dataTransfer.files[0]);
      //lst.value.push({id: dropzoneFile.value, name: dropzoneFile.value,image: dropzonePath.value, content: []})
    };

    const selectedFile = () => {
      dropzoneFile.value = document.querySelector(".dropzoneFile").files[0];
      dropzonePath.value = URL.createObjectURL(document.querySelector(".dropzoneFile").files[0]);
      //lst.value.push({id: dropzoneFile.value.name, name: dropzoneFile.value.name,image: dropzonePath.value, content: []})
    };

    return {
      dropzoneFile, drop, selectedFile,
  }
  }
});
</script>


