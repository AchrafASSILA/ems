import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/auth/login.vue";
import Register from "../components/auth/register.vue";
import Admin from "../components/admin/admin.vue";
import Home from "../components/admin/home.vue";
import Users from "../components/admin/users.vue";
import store from "../store";
const routes = [
    // {
    //     path: "/admin",
    //     redirect: "/dashboard",
    //     component: Admin,
    //     meta: { requiresAuth: true },
    // },
    // children: [   ],
    {
        path: "/dashboard",
        name: "dashboard",
        meta: { requiresAuth: true },
        component: Home,
    },
    {
        meta: { requiresAuth: true },
        path: "/users",
        name: "users",
        component: Users,
    },
    {
        path: "/",
        component: Login,
        name: "login",
    },
    {
        path: "/register",
        component: Register,
        name: "register",
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

!store.state.user.token;
router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !sessionStorage.getItem("TOKEN")) {
        next({ name: "login" });
    } else if (
        sessionStorage.getItem("TOKEN") &&
        (to.name == "login" || to.name == "register")
    ) {
        next({ name: "dashboard" });
    } else {
        next();
    }
});
export default router;
