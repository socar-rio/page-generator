import { revalidateTag } from "next/cache"

type Props = {
  params: {
    slug: string
  }
}

const ResetPage = ({ params }: Props) => {
  revalidateTag(params.slug)

  return (
    <div>
      <p>Reset path revalidateTag</p>
    </div>
  )
}

export default ResetPage
