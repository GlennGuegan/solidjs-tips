import Box from "@suid/material/Box"
import Button from "@suid/material/Button"
import Card from "@suid/material/Card"
import CardContent from "@suid/material/CardContent"
import CardMedia from "@suid/material/CardMedia"
import Chip from "@suid/material/Chip"
import Stack from "@suid/material/Stack"
import Typography from "@suid/material/Typography"
import { useNavigate } from "solid-app-router"
import { Component, For } from "solid-js"
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
  }

  return (
    <Card sx={{ marginTop: "2em" }}>
      <Box
        component="img"
        src={
          props.tip.image?.data !== null &&
          props.tip.image?.data.attributes.url
        }
        sx={{
          pt: 2,
          width: 300,
        }}
      />
      <CardContent>
        <CardMedia
          image={
            props.tip.image?.data !== null &&
            props.tip.image?.data.attributes.url
          }
        />
        <Typography variant="h3" sx={{ fontSize: 22 }}>
          {props.tip.title}
        </Typography>
        <Typography
          sx={{ padding: 2, textAlign: "left" }}
          variant="body1"
        >
          <SolidMarkdown children={props.tip.resume} />
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={1}
        >
          <For
            each={props.tip?.tags.data}
            children={(item) => (
              <Chip label={item.attributes.label} />
            )}
          />
        </Stack>

        <Button variant="text" onClick={onSeeFullTip}>
          En savoir plus
        </Button>
      </CardContent>
    </Card>
  )
}

export default TipDetail
