<script setup>
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
</script>
<template>
  <ParentLayout/>
</template>

<style lang="scss">

.sidebar {
  background-color: #F5F7F9;

  .sidebar-item {

    &.sidebar-heading {
      font-size: .9em;
      font-weight: 400;
      font-family: gitbook-content-font, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    }
  }
}

</style>