<template>
  <header class="app-header navbar">
    <button class="navbar-toggler mobile-sidebar-toggler d-lg-none" type="button" @click="mobileSidebarToggle">
      <span class="navbar-toggler-icon"></span>
    </button>
    <b-link class="navbar-brand" to="#"></b-link>
    <button class="navbar-toggler sidebar-toggler d-md-down-none" type="button" @click="sidebarToggle">
      <span class="navbar-toggler-icon"></span>
    </button>
    <b-navbar-nav class="ml-auto">
      <b-nav-item class="d-md-down-none">
<!--        <i class="icon-location-pin"></i>-->
      </b-nav-item>
      <HeaderDropdownAccnt/>
    </b-navbar-nav>
    <button class="navbar-toggler aside-menu-toggler d-md-down-none" type="button" @click="asideToggle">
<!--      <span class="navbar-toggler-icon"></span>-->
    </button>
  </header>
</template>
<script>
  import HeaderDropdownAccnt from './HeaderDropdownAccnt.vue'
  import HeaderDropdownTasks from './HeaderDropdownTasks.vue'
  import HeaderDropdownNotif from './HeaderDropdownNotif.vue'
  import HeaderDropdownMssgs from './HeaderDropdownMssgs.vue'

  export default {
    name: 'header',
    components: {
      HeaderDropdownAccnt,
      HeaderDropdownTasks,
      HeaderDropdownNotif,
      HeaderDropdownMssgs
    },
    methods: {
      sidebarToggle (e) {
        e.preventDefault()
        document.body.classList.toggle('sidebar-hidden')
      },
      sidebarMinimize (e) {
        e.preventDefault()
        document.body.classList.toggle('sidebar-minimized')
      },
      mobileSidebarToggle (e) {
        e.preventDefault()
        document.body.classList.toggle('sidebar-mobile-show')
      },
      asideToggle (e) {
        e.preventDefault()
        document.body.classList.toggle('aside-menu-hidden')
      }
    }
  }
</script>
