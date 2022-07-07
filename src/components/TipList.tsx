import { createEffect, createSignal, For, onMount } from "solid-js"
import TipDetail from "./TipDetail"

type Tip = {
  id: string
  attributes: object
}

const TipList = (props: any) => {
  const [tips, setTips] = createSignal([])
  createEffect(() => {
    const tipsProps = props?.tips?.data?.map(
      ({ id, attributes }: Tip) => ({
        id: id,
        ...attributes,
      })
    )
    setTips(tipsProps)
  })

  return <For each={tips()}>{(item) => <TipDetail tip={item} />}</For>
}

export default TipList
