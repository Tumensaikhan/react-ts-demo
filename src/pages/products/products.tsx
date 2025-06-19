import { ActionIcon, Button, Flex, Loader, Text } from "@mantine/core"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"

type Product = {
    id: string
    title: string
    description: string
    category: string
    price: number
}

type FetchProducts = {
    skip: number,
    limit: number,
    total: number,
    products: Product[]
}

type FetchProductsParams = {
    skip: number,
    limit: number,
}

export async function fetchProducts({ skip, limit }: FetchProductsParams): Promise<FetchProducts> {
    const url = 'https://dummyjson.com/products?' + new URLSearchParams({
        skip: `${skip}`,
        limit: `${limit}`
    })
    const res = await fetch(url, {
        method: 'get'
    })
    const data = await res.json()
    return data
}

export function Products() {
    const [paging, setPaging] = useState({
        skip: 0,
        limit: 20,
    })

    const { data: dataProducts, isFetching, isError, refetch } = useQuery({
        queryKey: ['products', paging.skip, paging.limit],
        queryFn: () => fetchProducts(paging),
    })

    // useMutation
    // fetchProducts -> fetchCreateProduct POST, PUT (body)
    // refetch -> mutate

    return (
        <div className="">
            <Flex columnGap="sm">
                Products page
                <Button variant="light" onClick={() => refetch()}>
                    Refetch
                </Button>
                <ActionIcon variant="outline" onClick={() => setPaging(prev => ({ ...prev, skip: Math.max(prev.skip - prev.limit, 0) }))}>
                    {'<'}
                </ActionIcon>
                {dataProducts?.total}
                <ActionIcon variant="outline" onClick={() => setPaging(prev => ({ ...prev, skip: Math.min(prev.skip + prev.limit, dataProducts!.total) }))}>
                    {'>'}
                </ActionIcon>
                {isFetching && <Loader />}
            </Flex>
            {dataProducts?.products.map((product, index) =>
                <Flex key={product.id} columnGap="sm">
                    <Text>
                        {paging.skip + index + 1}.
                    </Text>
                    <Text>
                        Нэр: {product.title}
                    </Text>
                </Flex>
            )}
            {!isFetching && isError &&
                <Text c='red'>
                    Хүсэлт алдаатай байсан.
                </Text>
            }
        </div>
    )
}
