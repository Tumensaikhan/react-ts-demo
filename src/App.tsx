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
// global state manager:  localStrage, sessionStroge      redux (reducer, get -> selector, setter -> dispatch),         zustand
// request:  axios, fetch (browser API)
// react query  (server state manager) (cache, cacheInvalidate)
// form         react-hooks-form       

// TODO:
// request: fetch, axios
// public api: https://developers.thecatapi.com/
// image: url talbaraar img tagand zurag bairshuulah
// cats page - 10n muur zurag nerteigee haragddag
