<template>
  <div id="loading" class="fixed inset-0 z-100 flex items-center justify-center bg-[#22223B]">
    <img class="w-24 lg:w-46" src="../assets/img/Loading.png" alt="">
  </div>
</template>

<script setup>
  onMounted(() => {
    function onReady(callback) {
      var intervalId = window.setInterval(function () {
        if (document.getElementsByTagName('body')[0] !== undefined) {
          window.clearInterval(intervalId);
          callback.call(this);
        }
      }, 1000);
    }

    function setVisible(selector, visible) {
      document.querySelector(selector).style.display = visible ? 'block' : 'none';
    }

    onReady(function () {
      setVisible('.page', true);
      setVisible('#loading', false);
    });
  })
</script>
