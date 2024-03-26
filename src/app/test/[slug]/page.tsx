// export const generateMetadata = ({ params }: Props) => {
//   return {
//     title: `${params.slug} 제품 이름`,
//     description: "My Notes description",
//     icons: {
//       icon: "/favicon.ico",
//     },
//   }
// }

type Props = {
  params: {
    slug: string
  }
}

type Data = {
  data: string[]
}

export default async function TestPage({ params }: Props) {
  console.log(params.slug)

  const res = await fetch(`https://meowfacts.herokuapp.com?${params.slug}`, {
    next: { tags: [params.slug] },
  })
  const data: Data = await res.json()
  const text = data.data[0]

  return (
    <div>
      <h1>{params.slug} 제품 설명 페이지</h1>
      <div>{text}</div>
    </div>
  )
}
