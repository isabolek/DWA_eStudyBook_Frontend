<template>
  <div id="app">
    <div class="container">
      <router-view />
      <div class="content"></div>
        <sidebar-menu v-if="side_bar" :menu="menu"  />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      menu: [
        {
          header: true,
          title: "eStudyBook"
        },
        {
          href: "/novosti",
          title: "Novosti",
          icon: "fa fa-home"
        },
        {
          href: "/kolegij",
          title: "Kolegiji",
          icon: "fa fa-book"
        },
        {
          href: "/repozitorij",
          title: "Repozitorij",
          icon: "fa fa-book-open "
        },
        {
          href: "/profil",
          title: "Profil",
          icon: "fa fa-user"
        },
        {
          href: "/raspored",
          title: "Raspored",
          icon: "fa fa-table"
        },
        {
          href: "/kalendar",
          title: "Kalendar",
          icon: "fa fa-calendar"
        },

        {
          href: "/studomat",
          title: "Studomat",
          icon: "fa fa-list"
        },
        {
          href: "/unipu",
          title: "UNIPU",
          icon: "fa fa-list"
        },

        {
          href: "/scpu",
          title: "SCPU",
          icon: "fa fa-list"
        }
      ]
    };
  },
  computed:{
    side_bar(){
      let s = this.$route.path;
      if(s==='/')
      {
        return false;
      }
      else
      {
        return true;
      }
    }
  }
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600");

body,
html {
  margin: 0;
  padding: 0;
}

body {
  font-family: "Source Sans Pro", sans-serif;
  background-color: #f2f4f7;
}

.container {
  max-width: 800px;
}
</style>
