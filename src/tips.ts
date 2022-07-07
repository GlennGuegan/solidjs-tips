

const CMS_URL = import.meta.env.CMS_URL
const CMS_API_KEY = import.meta.env.CMS_API_KEY
console.log(CMS_URL)
export const getTips = async () =>
  (
    await fetch(`${CMS_URL}/tips`, {
      headers: {
        Authorization:
          `Bearer ${CMS_API_KEY}`,
      },
    })
  ).json()

export const getTip = async (id: string) => (
  await fetch(`${CMS_URL}/tips/${id}`, {
    headers: {
      Authorization:
        `Bearer ${CMS_API_KEY}`,
    },
  })
).json()
