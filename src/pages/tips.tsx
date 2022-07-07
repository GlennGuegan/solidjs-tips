import Container from "@suid/material/Container"
import { createResource, For, onMount } from "solid-js"
import TipDetail from "../components/TipDetail"
import TipList from "../components/TipList"
import { getTips } from "../tips"

const tips = [...Array(20).keys()].map((v) => `Tip - ${v}`)

const Tips = () => {
  const [data] = createResource(getTips)
  console.log(data.loading)
  return (
    <Container
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: 3,
      }}
    >
      <TipList tips={data()} />
    </Container>
  )
}

export default Tips
