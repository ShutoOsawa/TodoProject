<template>
  <div class="container mx-auto">
    <h1 class="mt-8 text-2xl">Home</h1>

  <div id="app" class="min-h-screen bg-gray-200 flex items-center justify-center">
    <vue-draggable-next tag="ul" ghost-class="moving-card" filter=".action-button" class="w-full max-w-md" :list="users" :animation="200">
      <li v-for="user in users"
          :key="user.id"
          class="p-4 mb-3 flex justify-between items-center bg-white shadow rounded-lg cursor-move">
        <img class="w-10 h-10" :src="user.avatar" :alt="user.name">
        {{user.name}}
        <button aria-label="Edit user"
                class="p-1 focus:outline-none focus:shadow-outline text-teal-500 hover:text-teal-600"
                @click="onEdit(user)">
          Edit
        </button>
        <button aria-label="Delete user"
                class="p-1 focus:outline-none focus:shadow-outline text-red-500 hover:text-red-600"
                @click="onDelete(user)">
          Trash
        </button>
        <button aria-label="Delete user"
                class="p-1 focus:outline-none focus:shadow-outline text-red-500 hover:text-red-600"
                @click="onReplace()">
          replace
        </button>
      </li>
      </vue-draggable-next>
  </div>

  </div>
</template>

<script>
import {defineComponent ,ref} from "vue";
import { EditIcon, Trash2Icon } from "vue-feather-icons";
import { VueDraggableNext } from 'vue-draggable-next';
export default defineComponent({
  components: {VueDraggableNext},
  setup() {
    let users = ref([{id: "1", name: "toh",avatar: "https://pickaface.net/gallery/avatar/unr_sample_161118_2054_ynlrg.png"},
      {id:"2",name:"soup"},
      {id:"3",name:"soups"},
      ])

    function onEdit(user){
      alert(`Editing ${user.name}`);
    }

    function onDelete(user){
      alert(`Deleting ${user.name}`);
    }

    function onReplace(){
      users.value = [{id: "1", name: "toh",avatar: "https://pickaface.net/gallery/avatar/unr_sample_161118_2054_ynlrg.png"},
        {id:"2",name:"soup"},
        {id:"3",name:"soups"}];
    }

    return {
      VueDraggableNext,
      EditIcon,
      Trash2Icon,
      users,
    onEdit,
    onDelete,
    onReplace}
  }
});
</script>
