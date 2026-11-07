# Vue.js Studies

A collection of Vue 3 learning examples and small CRUD applications. The frontend is built with Vue CLI, Vue Router, TypeScript, and Bootstrap. A Spring Boot REST API and PostgreSQL database are included for the patient-management example.

## Project areas

- **AI-generated project** — authentication and a reusable UI component showcase.
- **Basics** — examples covering interpolation, conditionals, loops, forms, events, lifecycle hooks, props, routing, requests, and dynamic component rendering.
- **Firestore** — board listing, details, creation, and editing using Firebase Firestore.
- **Spring Boot** — patient listing, creation, editing, and deletion through a REST API.
- **Supabase** — smoothie recipe listing, creation, editing, and deletion.

The main navigation on the home screen switches between these areas.

## Requirements

- Node.js and npm
- Java 17 or newer
- PostgreSQL for the Spring Boot patient example
- Firebase and Supabase projects for the respective examples

## Run the frontend

From this directory (`frontend/reusable-components`):

```sh
npm install
npm run serve -- --port 8081
```

Open the local URL printed by Vue CLI (normally `http://localhost:8081`). Port `8081` matches the Spring Boot controller's local CORS configuration.

Useful commands:

```sh
npm run build
npm run lint
```

## Configure Firebase and Supabase

Create a local `.env` file in `frontend/reusable-components` and provide the credentials for your own projects. Do not commit credentials or production secrets.

Firebase variables used by `src/firebase.ts`:

```dotenv
VUE_APP_FIREBASE_API_KEY=
VUE_APP_FIREBASE_AUTH_DOMAIN=
VUE_APP_FIREBASE_DATABASE_URL=
VUE_APP_FIREBASE_PROJECT_ID=
VUE_APP_FIREBASE_STORAGE_BUCKET=
VUE_APP_FIREBASE_MESSAGING_SENDER_ID=
VUE_APP_FIREBASE_APP_ID=
VUE_APP_FIREBASE_MEASUREMENT_ID=
```

Supabase variables used by `src/components/simple-studies/SupabaseConfig/supabaseClient.js`:

```dotenv
VUE_APP_SUPABASE_URL=
VUE_APP_SUPABASE_KEY=
```

Restart the frontend after changing environment variables. The Firestore example uses a `boards` collection. The Supabase example expects a `smoothies` table with `title`, `method`, and `rating` fields.

## Run the Spring Boot backend

The backend is in the repository's `backend` directory. From the repository root, open a separate terminal and run:

```powershell
cd backend
.\gradlew.bat bootRun
```

The API listens on `http://localhost:8080`. Configure PostgreSQL to match the connection settings in `backend/src/main/resources/application.properties`; the default database name in that file is `springbootproject`. Do not commit local database passwords or other secrets.

### Patient API

| Method | Endpoint | Purpose |
| --- | --- | --- |
| `GET` | `/patients` | List patients |
| `GET` | `/patient/{id}` | Get a patient |
| `POST` | `/add` | Create a patient |
| `PUT` | `/patient` | Update a patient |
| `DELETE` | `/patient/{id}` | Delete a patient |

The frontend sends patient data with `name`, `email`, `pNo`, and `gender` fields.

## Routes

| Path | Area |
| --- | --- |
| `/` | Authentication and UI showcase |
| `/basics` | Vue fundamentals examples |
| `/firestore` | Firestore board list |
| `/add-board` | Add a Firestore board |
| `/show-board/:id` | View a Firestore board |
| `/edit-board/:id` | Edit a Firestore board |
| `/springboot` | Spring Boot patient list |
| `/add` | Add a patient |
| `/edit/:id` | Edit a patient |
| `/supabase` | Supabase smoothie list |
| `/create` | Create a smoothie |
| `/:id` | Edit a smoothie |

## Repository structure

```text
frontend/reusable-components/   Vue application
backend/                        Spring Boot REST API
OtherConcepts/                  Vue, JavaScript, TypeScript, HTML, and CSS notes
```

## Notes

- The frontend and backend are separate processes and should run in separate terminals.
- Firebase and Supabase examples require valid project credentials and corresponding remote data setup.
- `npm run lint` may report existing unused-variable warnings.
