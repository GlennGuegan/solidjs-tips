

const CMS_URL = import.meta.env.CMS_URL || import.meta.env.VITE_SOLID_APP_CMS_URL
const CMS_API_KEY = import.meta.env.CMS_API_KEY || import.meta.env.VITE_SOLID_APP_CMS_APIKEY

export const getTips = async () =>
  (
    await fetch(`${CMS_URL}/tips?populate=*`, {
      headers: {
        Authorization:
          `Bearer ${CMS_API_KEY}`,
      },
    })
  ).json()

export const getTip = async (id: string) => (
  await fetch(`${CMS_URL}/tips/${id}/?populate=*`, {
    headers: {
      Authorization:
        `Bearer ${CMS_API_KEY}`,
    },
  })
).json()
