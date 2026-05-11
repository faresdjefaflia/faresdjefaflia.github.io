<template>
  <!-- START ABOUT TEXT -->
  <div class="text-color05 w-4/5 sm:w-3/5">

    <h1>فارس<br>جفافلية</h1>

    <br>

    <p>السلام عليكم، اسمي <strong>فارس</strong> عمري {{age}} عاماً. شغوف بالمنطق، التحليل، وبناء الأنظمة المعقدة.
      أنا <strong>مطور ويب شامل (Full-Stack)</strong> و <strong>مبرمج أنظمة</strong>، ولدي اهتمام بتصميم UX/UI. أحب التعلم المستمر وطرح المشاريع مفتوحة المصدر.
    </p>
    <p>كذلك مهتم جداً بعلوم الشريعة وأقسامها.</p>

    <br>

    <p>أول موقع إلكتروني قمت ببرمجته كان في عام 2019، وسبق لي العمل لمدة سنتين كتقني شبكات لدى &quot;<strong><a target="_blank" href="https://www.algerietelecom.dz/ar">اتصالات الجزائر</a></strong>&quot;.</p>

    <br>

    <p>حالياً، أمتلك وأدير عملي الخاص <strong><a target="_blank" href="https://elmoziml.com/">المزمل (elmoziml.com)</a></strong>، حيث أقدم من خلاله حلولاً برمجية وخدمات رقمية متكاملة للأنشطة التجارية، المؤسسات، والوكالات.</p>

    <br>

    <p>كما أعمل على تطوير وإدارة مشروع <strong><a target="_blank" href="https://garage.kontrilo.com/">Kontrilo Garage</a></strong>، وهو نظام (ERP) شامل ومتكامل مخصص لإدارة ورشات وصيانة السيارات.</p>

    <br>

    <p>أمتلك خبرة متقدمة في بناء الأنظمة من الصفر، <strong>تخطيط وهندسة قواعد البيانات</strong>، و <strong>دمج تقنيات الذكاء الاصطناعي (AI)</strong> في التطبيقات.
      في الواجهة الأمامية، لدي مرونة عالية في التعامل مع مختلف التقنيات، وأعتمد بشكل رئيسي واحترافي على <strong><a target="_blank" href="https://nextjs.org/">Next.js@</a></strong>، بالإضافة إلى إجادتي التامة للعمل بـ <strong><a target="_blank" href="https://svelte.dev/">Svelte@</a></strong> و <strong><a target="_blank" href="https://nuxt.com/">Nuxt.js@</a></strong> مع <strong><a target="_blank" href="https://tailwindcss.com/">TailwindCSS@</a></strong>. 
      أما في الواجهة الخلفية (Back-end) فأعتمد على بيئة <strong><a target="_blank" href="https://nodejs.org/">Node.js</a></strong> لبناء أنظمة قوية وقابلة للتوسع.
    </p>

    <br>

    <p>بالإضافة إلى البرمجة، أجيد استخدام برامج التصميم الأساسية من أدوبي لتصميم الواجهات وتجربة المستخدم مثل: <strong>Figma</strong> و <strong>Illustrator</strong>.</p>

    <br>
    <br>

    <p>من أجل سيرتي الذاتية أو معرفة المزيد عني يمكنك <strong><a target="_blank"
          href="https://docs.google.com/document/d/1gQSRnNJPpc8pkhXge9SnD5fPLmelekdQ-OrUDtI9_DE/edit?usp=sharing">النقر هنا</a></strong>.

      <br>

      أو يمكنك أن تجدني في <strong><a target="_blank" href="https://twitter.com/_frs99">Twitter</a></strong>، <strong><a
          target="_blank" href="https://github.com/faresdjefaflia">Github</a></strong> أو <strong><a target="_blank"
          href="https://t.me/faresdjefaflia">Telegram</a></strong>.
    </p>

    <br>

    <p class="font-light text-sm text-left"><a target="_blank"
        href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a> FARES {{ year }}</p>

    <div class="mt-5">

      <NuxtLink
        class="float-right inline-block bg-color04 text-color01 font-medium px-6 py-2 rounded-md mt-3 transition-all hover:mr-1"
        to="/" aria-label="link">/رجوع</NuxtLink>

      <NuxtLink
        class="float-left inline-block bg-color04 text-color01 font-medium px-6 py-2 rounded-md mt-3 transition-all hover:ml-1"
        to="/portfolio/" aria-label="link">/أعمالي</NuxtLink>

    </div>

  </div>
  <!-- END ABOUT TEXT -->
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