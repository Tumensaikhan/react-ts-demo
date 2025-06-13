import "./App.css";
import { Input } from "./components/input/input";
import { Login } from "./pages/login/login";

export function App() {

  return (
    <>
      <h1>APP HEADER sdasdasdasd</h1>
      <Login />
      <Input />
      <Input placeholder="Нэвтрэх нэр" error />
    </>
  );
}

// react router
// css libraray:  css, css.module,   sass, less    styled-components, emotions,      tailwind
// component libraray:  material-ui, antd, chakra, mantine, bootstrap,       shadcn
// global state manager:  localStrage, sessionStroge    redux (reducer, get -> selector, setter -> dispatch),      zustand
// request:  axios, fetch (browser API)
// react query  (server state manager) (cache, cacheInvalidate)
// form       react-hooks-form       

// next lesson:
// zustand
// react-hooks-form
// custom form

// TODO:
// react-hooks-form -oor form hiij ireerei
// ajliin anketiin form 8-10 fieldtei (anket page)
