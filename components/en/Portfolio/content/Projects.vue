<template>
  <div class="mt-4">
    <h1 class="font-bold text-color03 text-3xl">Projects</h1>
    <p class="ml-2 font-light text-color03 text-sm mt-2">All my projects in design or programming</p>
    <a href="https://www.behance.net/elmoziml">
      <p class="font-light text-color05 bg-color02 p-3 rounded-lg text-sm mt-2 flex items-center">
        <i class="fi fi-brands-behance mr-2 text-[16px] w-[16px] h-[16px]"></i>
        You can visit my portfolio for UI designs on Behance
      </p>
    </a>
    <div class="mt-3 my-0 mx-auto sm:flex sm:flex-wrap sm:justify-between lg:max-w-2xl">
      <a v-for="item in data[0].body" :key="item" :href="item.link" target="_blank" class="inline-block w-full px-3 py-2 rounded-sm transition-all lg:w-80 hover:bg-color02" aria-label="link">
        <article class="flex items-center">
          <div class="flex justify-center items-center w-11">
            <img :src="item.img">
          </div>
          <div class="ml-3">
            <h2 class="text-color05 font-medium">{{item.name}}</h2>
            <p class="text-color05 text-xs font-light">{{item.description}}</p>
            <div class="flex items-center">
              <i class="text-xs text-color03 fi fi-brands-github h-3 mr-1"></i>
              <p class="text-xs text-color03">{{item.linkG}}</p>
            </div>
          </div>
        </article>
      </a>
    </div>
  </div>
</template>

<script setup>
  const { data } = await useAsyncData( () => queryContent('/api/portfolio').find())
</script>
