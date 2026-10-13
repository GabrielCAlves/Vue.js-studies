import { createRouter, createWebHistory } from "vue-router";

//FirestoreCRUDWebApplication
// import BoardList from "../components/simple-studies/FirestoreCRUDWebApplication/BoardList.vue";
// import ShowBoard from "../components/simple-studies/FirestoreCRUDWebApplication/ShowBoard.vue";
// import AddBoard from "../components/simple-studies/FirestoreCRUDWebApplication/AddBoard.vue";
// import EditBoard from "../components/simple-studies/FirestoreCRUDWebApplication/EditBoard.vue";

//SpringbootCRUDWebApplication
import ViewPatients from "../components/views/SpringBootCRUDWebApplication/ViewPatients.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    //================ Firebastore ===================
    // {
    //   path: '/',
    //   name: 'BoardList',
    //   component: BoardList,
    // },
    // {
    //   path: '/show-board/:id',
    //   name: 'ShowBoard',
    //   component: ShowBoard,
    // },
    // {
    //   path: '/add-board',
    //   name: 'AddBoard',
    //   component: AddBoard,
    // },
    // {
    //   path: '/edit-board/:id',
    //   name: 'EditBoard',
    //   component: EditBoard,
    // },
    //================== Springboot =========================
    // {
    //   path: "/",
    //   name: "home",
    //   component: ViewPatients,
    // },
    // {
    //   path: "/add",
    //   name: "add",
    //   component: () =>
    //     import(
    //       "../components/views/SpringBootCRUDWebApplication/AddPatient.vue"
    //     ),
    // },
    // {
    //   path: "/edit/:id",
    //   name: "edit",
    //   component: () =>
    //     import(
    //       "../components/views/SpringBootCRUDWebApplication/UpdatePatient.vue"
    //     ),
    // },
    //================= Supabase =====================
    {
      path: "/",
      name: "home",
      component: () =>
        import("../components/views/SupabaseCRUDWebApplication/Home.vue"),
    },
    {
      path: "/create",
      name: "create",
      component: () =>
        import("../components/views/SupabaseCRUDWebApplication/Create.vue"),
    },
    {
      path: "/:id",
      name: "update",
      component: () =>
        import("../components/views/SupabaseCRUDWebApplication/Update.vue"),
    },
  ],
});

export default router;
