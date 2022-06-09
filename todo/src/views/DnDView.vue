<template>
  <div id="app" class="container mx-auto bg-gray-200items-center">
  <vue-draggable-next tag="ul" ghost-class="moving-card" filter=".action-button" class="grid gap-4 grid-cols-3 w-full max-w-lg" :list="users" :animation="200">
    <div v-for="user in users"
         :key="user.id"
         class=" w-40 h-40 bg-white shadow-md rounded m-2 flex justify-center items-center text-lg text-gray-700"
         >
      {{user.name}}
    </div>
    </vue-draggable-next>
  </div>
</template>

<script>
import {defineComponent ,ref} from "vue";
import { EditIcon, Trash2Icon } from "vue-feather-icons";
import { VueDraggableNext } from 'vue-draggable-next';
export default defineComponent({
  components: {VueDraggableNext},
  setup() {
    let users = ref([{id: "1", name: "1",avatar: "https://pickaface.net/gallery/avatar/unr_sample_161118_2054_ynlrg.png"},
      {id:"2",name:"2"},
      {id:"3",name:"3"},
      {id:"4",name:"4"},
      {id:"5",name:"5"},
      {id:"6",name:"6"},
      {id:"7",name:"7"},
      {id:"8",name:"8"},
      {id:"9",name:"9"},
      {id:"10",name:"10"},
      {id:"11",name:"11"},
      {id:"12",name:"12"},
      {id:"13",name:"13"}
    ])


    return {
      VueDraggableNext,
      EditIcon,
      Trash2Icon,
      users,
}
  }
});
</script>


