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
    {
      path: "/",
      name: "home",
      component: ViewPatients,
    },
    {
      path: "/add",
      name: "add",
      component: () =>
        import(
          "../components/views/SpringBootCRUDWebApplication/AddPatient.vue"
        ),
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: () =>
        import(
          "../components/views/SpringBootCRUDWebApplication/UpdatePatient.vue"
        ),
    },
  ],
});

export default router;
