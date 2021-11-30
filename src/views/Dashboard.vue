<template>
    <v-app dark>
        <side-bar></side-bar>
        <dashboard-content></dashboard-content>
        <v-footer app></v-footer>
    </v-app>
</template>

<script>
import SideBar from "@/components/Sidebar";
import DashboardContent from "@/views/Content";
export default {
  name: "Dashboard",
  components: {
    SideBar,
    DashboardContent
  }
};
</script>

<style scoped>
</style>
