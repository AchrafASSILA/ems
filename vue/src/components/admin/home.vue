<template>
    <Admin>
        <h1>dashboard admin</h1>
    </Admin>
</template>

<script>
import axiosClient from "../../axios.js";
import { useRouter } from "vue-router";
import Admin from "./admin.vue";
export default {
    components: { Admin },
    data() {
        return {};
    },
};
</script>

<style></style>
