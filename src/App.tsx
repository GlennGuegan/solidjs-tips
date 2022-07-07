import { Component, lazy } from "solid-js"

import logo from "./logo.svg"
import styles from "./App.module.css"
import { Route, Routes } from "solid-app-router"
import Tips from "./pages/tips"
import { TipData } from "./components/TipFullDetail"
const TipFullDetail = lazy(() => import("./components/TipFullDetail"))

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
      </header>
      <Routes>
        <Route path="/" component={Tips} />
        <Route path="/:id" component={TipFullDetail} data={TipData} />
      </Routes>
    </div>
  )
}

export default App
