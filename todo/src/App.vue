<template>

  <div class="flex min-h-screen">
    <div class="w-80 bg-gray-50 border-r border-gray-200">

      <div>
        <router-link to="/"
                     class="flex items-center text-gray-500 hover:text-orange-600 group">
        <img :src="ApplicationLogo" class="w-full h-54"/>
        </router-link>
      </div>

      <div class="mb-10">
        <h3 class="mx-6 mb-2 text-sm text-gray-400 uppercase tracking-widest">
          Main
        </h3>

        <router-link to="/"
                     class="flex items-center text-2xl px-6 py-2.5 text-gray-500 hover:text-orange-600 group">
          <component
              :is="HomeIcon"
              class="h-5 w-5 text-gray-400 text-2xl mr-2 group-hover:text-orange-500"/>
              Home
        </router-link>


        <router-link to="/todo"
                     class="flex items-center text-2xl px-6 py-2.5 text-gray-500 hover:text-orange-600 group">
          <component
              :is="CalendarIcon"
              class="h-5 w-5 text-gray-400 text-2xl mr-2 group-hover:text-orange-500"/>
          Todo
        </router-link>

        <router-link to="/graph"
                     class="flex items-center text-2xl px-6 py-2.5 text-gray-500 hover:text-orange-600 group">
          <component
              :is="CalendarIcon"
              class="h-5 w-5 text-gray-400 text-2xl mr-2 group-hover:text-orange-500"/>
          Graph
        </router-link>

        <router-link to="/apifetch"
                     class="flex items-center text-2xl px-6 py-2.5 text-gray-500 hover:text-orange-600 group">
          <component
              :is="CalendarIcon"
              class="h-5 w-5 text-gray-400 text-2xl mr-2 group-hover:text-orange-500"/>
          APIFetch
        </router-link>

        <router-link to="/dndview"
                     class="flex items-center text-2xl px-6 py-2.5 text-gray-500 hover:text-orange-600 group">
          <component
              :is="CalendarIcon"
              class="h-5 w-5 text-gray-400 text-2xl mr-2 group-hover:text-orange-500"/>
          DndView
        </router-link>

        <router-link to="/gridview"
                     class="flex items-center text-2xl px-6 py-2.5 text-gray-500 hover:text-orange-600 group">
          <component
              :is="CalendarIcon"
              class="h-5 w-5 text-gray-400 text-2xl mr-2 group-hover:text-orange-500"/>
          GridView
        </router-link>

        <router-link to="/dragdropview"
                     class="flex items-center text-2xl px-6 py-2.5 text-gray-500 hover:text-orange-600 group">
          <component
              :is="CalendarIcon"
              class="h-5 w-5 text-gray-400 text-2xl mr-2 group-hover:text-orange-500"/>
          DragDropView
        </router-link>
    </div>
  </div>

    <div class="flex-1 py-3 px-6 bg-gray-50 border-b space-x-6">
      <router-view/>
    </div>
  </div>

</template>

<script>

import {HomeIcon,CalendarIcon} from '@heroicons/vue/outline';
import ApplicationLogo from '@/assets/soup_n_toh.png';

export default {
  components: {HomeIcon,CalendarIcon},
  data() {
    return {
      HomeIcon,
      CalendarIcon,
      ApplicationLogo,
    };
  },
};
</script>

