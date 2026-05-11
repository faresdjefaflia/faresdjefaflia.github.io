<template>
  <div class="text-color05 w-4/5 sm:w-3/5">

    <h1>Fares<br>Djefaflia</h1>

    <br>

    <p>Hello, my name is <strong>Fares</strong>. I am {{ age }} years old, and I am passionate about logic, analysis, and building complex systems.</p>

    <p>I am a <strong>Full-Stack Web Developer</strong> and a <strong>Systems Programmer</strong>, with a strong interest in UX/UI design. I enjoy continuous learning and contributing to open-source projects.</p>

    <br>

    <p>The first website I programmed was in 2019, and I previously worked for two years as a network technician at "<strong><a target="_blank" href="https://www.algerietelecom.dz/ar">Algerie Telecom</a></strong>."</p>

    <br>

    <p>Currently, I own and manage my own business, <strong><a target="_blank" href="https://elmoziml.com/">Elmoziml (elmoziml.com)</a></strong>, where I provide comprehensive software solutions and digital services for businesses, enterprises, and agencies.</p>

    <br>

    <p>I am also developing and managing <strong><a target="_blank" href="https://garage.kontrilo.com/">Kontrilo Garage</a></strong>, a comprehensive and fully integrated ERP system dedicated to managing car repair and maintenance workshops.</p>

    <br>

    <p>I have advanced experience in building systems from scratch, <strong>database architecture and planning</strong>, and <strong>integrating Artificial Intelligence (AI)</strong> into applications.</p>
    
    <p>In front-end development, I am highly flexible with various technologies, relying primarily and professionally on <strong><a target="_blank" href="https://nextjs.org/">Next.js</a></strong>. I am also fully proficient in <strong><a target="_blank" href="https://svelte.dev/">Svelte</a></strong> and <strong><a target="_blank" href="https://nuxt.com/">Nuxt.js</a></strong> alongside <strong><a target="_blank" href="https://tailwindcss.com/">TailwindCSS</a></strong>.</p>
    
    <p>For the back-end, I rely on a <strong><a target="_blank" href="https://nodejs.org/">Node.js</a></strong> environment to build robust and scalable systems.</p>

    <br>

    <p>Additionally, I am proficient in using essential Adobe design software for UI and user experience, such as <strong>Figma</strong> and <strong>Illustrator</strong>.</p>

    <br>
    <br>

    <p>If you would like to view my resume or learn more about me, <strong><a target="_blank"
          href="https://docs.google.com/document/d/1gQSRnNJPpc8pkhXge9SnD5fPLmelekdQ-OrUDtI9_DE/edit?usp=sharing">click here</a></strong>.
    </p>

    <br>

    <p>You can find me on <strong><a target="_blank" href="https://twitter.com/_frs99">Twitter</a></strong>, <strong><a
          target="_blank" href="https://github.com/faresdjefaflia">GitHub</a></strong>, or <strong><a target="_blank"
          href="https://t.me/faresdjefaflia">Telegram</a></strong>.</p>

    <br>

    <p class="font-light text-sm text-left"><a target="_blank"
        href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a> FARES {{ year }}</p>

    <div class="mt-5">
      <NuxtLink
        class="float-left inline-block bg-color04 text-color01 font-medium px-6 py-2 rounded-md mt-3 transition-all hover:ml-1"
        to="/en/" aria-label="link">/Back</NuxtLink>
      <NuxtLink
        class="float-right inline-block bg-color04 text-color01 font-medium px-6 py-2 rounded-md mt-3 transition-all hover:mr-1"
        to="/en/portfolio/" aria-label="link">/Portfolio</NuxtLink>
    </div>

  </div>
</template>

<script setup>
  let d = new Date
  let year = d.getFullYear()
  let age = year - 1999
</script>

<style scoped>
  h1{
    font-size: 38px;
    font-weight: bold;
  }
  strong a{
    text-decoration: revert;
    padding: 0 2px 0 2px;
    transition: all 0.5s;
    border-radius: 3px;
    
  } strong a:hover{background-color: #C9ADA7; color: #22223B;}
</style>