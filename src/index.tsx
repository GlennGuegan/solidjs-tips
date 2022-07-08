/* @refresh reload */
import { render } from "solid-js/web"
import { Router } from "solid-app-router"
import "./index.css"
import App from "./App"

import * as Sentry from "@sentry/browser"
import { BrowserTracing } from "@sentry/tracing"

Sentry.init({
  dsn: "https://e8c670e555ba4b4cac899a41d233cf9e@o1310262.ingest.sentry.io/6557389",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
})

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById("root") as HTMLElement
)
