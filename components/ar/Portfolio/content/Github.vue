<template>
  <div class="mt-4">
    <h1 class="font-bold text-color03 text-3xl">مشاريع على Github</h1>
    <p class="mr-2 font-light text-color03 text-sm mt-2"> هذا هو github وستجد بعض الفوضى هنا 😒</p>
    <div style="direction: ltr" class="mt-3 my-0 mx-auto sm:flex sm:flex-wrap sm:justify-between lg:max-w-2xl">
      <a v-for="r in repos" :key="r" target="_blank" class="inline-block w-full py-2 px-2 rounded-sm transition-all lg:w-80 hover:bg-color02" :href="r.html_url" aria-label="link">
        <article class="flex">
          <div class="flex justify-center items-center">
            <i class="text-lg text-color03 fi fi-brands-github h-5"></i>
          </div>
          <div class="ml-1">
            <h2 class="text-color05 text-sm">{{"/" + r.full_name}}</h2>
          </div>
        </article>
      </a>
    </div>
  </div>
</template>

<script setup>
  const {data: repos} = await useFetch('https://api.github.com/users/faresdjefaflia/repos')
</script>
