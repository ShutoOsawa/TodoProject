<template>
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
             class="w-40 h-40 bg-white shadow-md rounded m-2 flex justify-center items-center text-lg text-gray-700"
             >
            {{item.name}}
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
import {defineComponent ,ref,onMounted} from "vue";
import { EditIcon, Trash2Icon } from "vue-feather-icons";
import { VueDraggableNext } from 'vue-draggable-next';
export default defineComponent({
  components: {VueDraggableNext},
  setup() {

    let lst = ref([ ])
    let category = ref([ ])
    // let lst = ref([{id: "a", name: "a"},
    //   {id:"b",name:"b"},
    //   {id:"c",name:"c"},
    //   {id:"d",name:"d"},
    //   {id:"e",name:"e"},
    //   {id:"f",name:"f", content:
    //         [{id: "1", name: "1"},
    //           {id:"2",name:"2"},
    //           {id:"3",name:"3"},
    //           {id:"4",name:"4"},
    //         ]},
    // ])
    //
    // let category = ref([{id: "a", name: "a",content:[]},
    //   {id:"b",name:"b",content:[]},
    //   {id:"c",name:"c",content:[]},
    //   {id:"d",name:"d",content:[]},
    //     {id:"e",name:"e",content:[]},
    //     {id:"f",name:"f", content:
    //           [{id: "1", name: "1"},
    //             {id:"2",name:"2"},
    //             {id:"3",name:"3"},
    //             {id:"4",name:"4"},
    //             ]},
    //   ])

    onMounted(() => {
      lst.value = category.value
    })

    function returnButton(){
      console.log(category.value)
      lst.value = category.value
    }
    function getValue(){
      console.log(category.value)
    }

    function removeCategory(index){
     // if(!confirm("Are you sure?")){
      //  return;
      //}
      console.log(index)
      lst.value.splice(index,1);
      /** alert('removed');*/
    }
    let depth = ref(0)
   // let contentloc = 0

    function changeData(index){
      console.log(category.value[index])
      lst.value = category.value[index]["content"]
      depth.value += 1
    //  contentloc = index
    }

    function addCard(){
      lst.value.push({id: "add", name: "added",content: []})
      //category.value.push({id: "add", name: "added",content: []})
      console.log(category)

    }

    return {
      lst,
      returnButton,
      changeData,
      removeCategory,
      category,
      addCard,
      getValue,
      VueDraggableNext,
      EditIcon,
      Trash2Icon,
}
  }
});
</script>


