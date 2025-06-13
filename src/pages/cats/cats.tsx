import { Button, Loader, Text } from "@mantine/core"
import { useEffect, useState } from "react"

type Cat = {
    id: string
    height: number
    width: number
    url: string
}

async function fetchCats(): Promise<Cat[]> {
    const url = 'https://api.thecatapi.com/v1/images/search?' + new URLSearchParams({
        limit: '10'
    })
    const res = await fetch(url, {
        method: 'get'
    })
    const data = await res.json()
    return data
}

export function Cats() {
    const [cats, setCats] = useState<Cat[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [status, setStatus] = useState<'SUCCESS' | 'ERROR'>()

    async function refetch() {
        try {
            setIsLoading(true)
            const data = await fetchCats()
            setCats(data)
            setStatus('SUCCESS')
        } catch {
            setStatus('ERROR')
        } finally {
            setIsLoading(false)
        }
    }

    // creates side-effect, becareful!
    useEffect(() => {
        refetch()
    }, [])

    return (
        <div className="">
            <Button variant="light" onClick={refetch}>
                Refetch
            </Button>
            {isLoading && <Loader />}
            {isLoading === false && status === 'SUCCESS' &&
                cats.map(cat =>
                    <img src={cat.url} key={cat.id} style={{ width: 300 }} />
                )}
            {isLoading === false && status === 'ERROR' &&
                <Text c='red'>
                    Хүсэлт алдаатай байсан.
                </Text>
            }
        </div>
    )
}
