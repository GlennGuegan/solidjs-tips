import Container from "@suid/material/Container"
import { createResource } from "solid-js"
import TipList from "../components/TipList"
import { getTips } from "../tips"

const tips = [...Array(20).keys()].map((v) => `Tip - ${v}`)

const Tips = () => {
  const [data] = createResource(getTips)
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
