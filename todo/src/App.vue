<template>

  <div class="flex min-h-screen">
    <div class="w-64 bg-gray-50 border-r border-gray-200">
      <router-link to="/"
                   class="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group">
        <component
            :is="HomeIcon"
            class="h-5 w-5 text-gray-400 mr-2 group-hover:text-orange-500"/>
            Home
      </router-link>
      <router-link to="/todo"
                   class="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group">
        <component
            :is="CalendarIcon"
            class="h-5 w-5 text-gray-400 mr-2 group-hover:text-orange-500"/>
        Todo
      </router-link>
    </div>

    <div class="flex-1">
      <div class="flex justify-between py-3 px-6 bg-gray-50 border-b space-x-6">
        <router-view/>
      </div>
    </div>
  </div>

</template>

<script>

import {HomeIcon,CalendarIcon} from '@heroicons/vue/outline';


export default {
  components: {HomeIcon,CalendarIcon},
  data() {
    return {
      HomeIcon,
      CalendarIcon,
    };
  },
};
</script>

