import Button from "@suid/material/Button"
import Container from "@suid/material/Container"
import Typography from "@suid/material/Typography"
import { useNavigate, useRouteData } from "solid-app-router"
import { Accessor, createResource } from "solid-js"
import { getTip } from "../tips"

export const TipData = ({ params }) => {
  const [tip] = createResource(() => params.id, getTip)
  return tip
}

type DataTimeAttributes = {
  createdAt: string
  updatedAt: string
  publishedAt: string
}

type Tip = {
  data: {
    id: number
    attributes: {
      title: string
      content: string
      resume: string
    } & DataTimeAttributes
  }
}

const TipFullDetail = () => {
  const tip: Accessor<Tip> = useRouteData()
  const navigate = useNavigate()

  return (
    <Container>
      <Button onClick={() => navigate("/")}>Retour</Button>
      <Typography variant="h2" fontSize={26}>
        {tip()?.data?.attributes.title}
      </Typography>
      <Typography>{tip()?.data.attributes.content}</Typography>
    </Container>
  )
}

export default TipFullDetail
