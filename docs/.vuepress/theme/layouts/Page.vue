<script setup lang="ts">
import PageMeta from '@theme/PageMeta.vue'
import PageNav from '@theme/PageNav.vue'
</script>

<template>
  <main class="page">
    <slot name="top"/>

    <div class="theme-default-content">
      <div class="local-main-box">
        <div class="local-content-box">
          <slot name="content-top"/>

          <Content/>

          <slot name="content-bottom"/>
        </div>
        <div class="local-toc-box">
          <Toc/>
        </div>
      </div>
    </div>

    <PageMeta/>

    <PageNav/>

    <slot name="bottom"/>
  </main>
</template>
<style lang="scss">
.theme-default-content {

  .local-main-box {
    display: flex;
    flex-direction: row;

    .local-content-box {
      flex: 1;
    }

    .local-toc-box {
      flex-shrink: 0;
    }
  }
}

</style>