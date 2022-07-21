import Button from "@suid/material/Button"
import Card from "@suid/material/Card"
import CardContent from "@suid/material/CardContent"
import CardHeader from "@suid/material/CardHeader"
import Typography from "@suid/material/Typography"
import { useNavigate } from "solid-app-router"
import { Component } from "solid-js"
import SolidMarkdown from "solid-markdown"

type TipDetailProps = {
  tip: {
    id: number
    title: string
    resume: string
  }
}

const TipDetail: Component<TipDetailProps> = (props) => {
  const navigate = useNavigate()

  const onSeeFullTip = () => {
    navigate(`/${props.tip.id}`)
    throw new Error("hello sentry")
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h3" sx={{ fontSize: 22 }}>
          {props.tip.title}
        </Typography>
        <Typography sx={{ padding: 2 }} variant="body1">
          {props.tip.resume}
        <Typography
          sx={{ padding: 2, textAlign: "left" }}
          variant="body1"
        >
          <SolidMarkdown children={props.tip.resume} />
        </Typography>
        <Button variant="text" onClick={onSeeFullTip}>
          En savoir plus
        </Button>
      </CardContent>
    </Card>
  )
}

export default TipDetail
