/* eslint-disable */
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.jpeg" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  const value: string;
  export default value;
}

// src/shims-env.d.ts

declare namespace NodeJS {
  interface ProcessEnv {
    readonly VUE_APP_FIREBASE_API_KEY: string;
    readonly VUE_APP_FIREBASE_AUTH_DOMAIN: string;
    readonly VUE_APP_FIREBASE_DATABASE_URL: string;
    readonly VUE_APP_FIREBASE_PROJECT_ID: string;
    readonly VUE_APP_FIREBASE_STORAGE_BUCKET: string;
    readonly VUE_APP_FIREBASE_MESSAGING_SENDER_ID: string;
    readonly VUE_APP_FIREBASE_APP_ID: string;
    readonly VUE_APP_FIREBASE_MEASUREMENT_ID: string;

    readonly SUPABASE_URL: string;
    readonly SUPABASE_KEY: string;

    readonly NODE_ENV: "development" | "production" | "test";
  }
}
