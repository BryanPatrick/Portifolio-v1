import Vue from "vue";
import VueRouter from "vue-router";

import HomeView from "@/views/HomeView";
import AboutView from "@/views/AboutView";
import ContactView from "@/views/ContactView";
import ProjectsView from "@/views/ProjectsView";
import SimplifiedCurriculumView from "@/views/SimplifiedCurriculumView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/about",
    name: "AboutView",
    component: AboutView,
  },
  {
    path: "/contact",
    name: "ContactView",
    component: ContactView,
  },
  {
    path: "/projects",
    name: "ProjectsView",
    component: ProjectsView,
  },
  {
    path: "/simplified-curriculum",
    name: "SimplifiedCurriculumView",
    component: SimplifiedCurriculumView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
