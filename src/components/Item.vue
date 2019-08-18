<template>
  <div
    class="vsm-item"
    :class="[{'first-item' : firstItem}, {'open-item' : show}, {'active-item' : active}, {'parent-active-item' : childActive}]">
    <template v-if="isRouterLink">
      <router-link class="vsm-link" :to="item.href">
        <template v-if="item.icon">
          <i
            v-if="typeof item.icon === 'string' || (item.icon instanceof String)"
            class="vsm-icon"
            :class="item.icon"
          />
        </template>
        <template>
          <span class="vsm-title">{{ item.title }}</span>
        </template>
      </router-link>
    </template>
  </div>
</template>

<script>
import { itemMixin, animationMixin } from "../mixin";

export default {
  components: {},
  mixins: [itemMixin, animationMixin],
  props: {
    item: {
      type: Object,
      required: true
    },
    firstItem: {
      type: Boolean,
      default: false
    }
  }
};
</script>