<script>
import TheHeader from '@/components/TheHeader';
import TheCartDrawer from '@/components/TheCartDrawer';
import TheNotification from '@/components/TheNotification';

export default {
  components: { TheHeader, TheCartDrawer, TheNotification },
  methods: {
    setComponentsInGlobalRoot() {
      this.$root.$notification = this.$refs.notification;
    },
  },
  mounted() {
    this.setComponentsInGlobalRoot();
  },
};
</script>

<template>
  <div>
    <the-header/>
    <the-cart-drawer/>
    <the-notification ref="notification"/>
    <router-view />
  </div>
</template>
