import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/share",
      name: "share",
      component: () => import("@/views/ShareView.vue"),
    },
    {
      path: "/sign",
      name: "sign",
      component: () => import("@/views/SignView.vue"),
    },
    {
      path: "/schedule",
      name: "schedule",
      component: () => import("@/views/ScheduleView.vue"),
    },
    {
      path: "/guests",
      name: "guests",
      component: () => import("@/views/GuestsView.vue"),
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
