<template>
  <div class="v-sidebar-menu" :style="{'width': sidebarWidth}">
    <div>
      <template v-for="(item, index) in menu">
        <template v-if="item.header">
          <template>
            <div
              :key="index"
              class="vsm-header"
              :class="item.class"
              v-bind="item.attributes"
            >{{ item.title }}</div>
            
          </template>
        </template>
        <item v-else :key="index" :item="item" :first-item="true" />
        
      </template>
      <button v-on:click.prevent="odjava()">Odjava
      </button>
    </div>
  </div>
</template>

<script>
import Item from "./Item.vue";
import { animationMixin } from "../mixin";

export default {
  name: "SidebarMenu",
  components: {
    Item
  },
  props: {
    menu: {
      type: Array,
      required: true
    },
    width: {
      type: String,
      default: "300px"
    }
  },
  computed: {
    sidebarWidth() {
      return this.width;
    }
  },
  methods:{
    odjava(){
      this.$cookie.delete('estudybookPrijava')
      this.$router.push({name: 'Login'})
    },
  },

  provide() {
    const activeShow = {};
    Object.defineProperty(activeShow, "uid", {
      enumerable: true,
      get: () => this.activeShow
    });
  }
};
</script>

<style lang="scss">
@import "../scss/vue-sidebar-menu.scss";
</style>
