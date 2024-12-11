import { GET_GLOBAL_CONFIG } from '@/core/App/AppEntity/AppRepository.constants'
import { serverApolloClientCosmosIndexer } from '@/app/api/apiConfig'

export const revalidate = 0

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const data = await serverApolloClientCosmosIndexer.query({
      query: GET_GLOBAL_CONFIG,
      variables: {
        id: 1,
      },
      fetchPolicy: 'network-only',
    })

    return Response.json(data?.data?.frontend_configs_by_pk?.config)
  } catch (error) {
    console.error('error while getting config', error)
    return Response.json({})
  }
}
