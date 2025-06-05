import { Box, Button, Checkbox, Drawer, Flex, Select, TextInput } from "@mantine/core";
import { useState } from "react";

const carCategories = [
    'Jeep',
    'Sedan',
    'Truck',
    'Convertable'
]

type Car = {
    number?: string
    mark?: string
    category?: string | null
    isInService?: boolean
}

export function Dashboard() {
    const [opened, setOpened] = useState<boolean>(false)

    const [car, setCar] = useState<Car>({
        number: undefined,
        mark: undefined,
        category: undefined,
        isInService: undefined
    })

    function handleChange(key: string, value: any) {
        setCar(prev => ({
            ...prev,
            [key]: value
        }))
    }

    // rerender hiihgui
    let a = 'text'
    a = 'bbbbbbbbbb'

    return (
        <div className="">
            Dashboard

            <div className="">
                <Button color="cyan.9" variant="outline" size="xs" onClick={() => setOpened(true)}>
                    Network status
                </Button>
            </div>

            <Drawer
                opened={opened}
                onClose={() => setOpened(false)}
                position="right"
            >
                <div style={{ height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    Network status is GOOD!
                </div>
            </Drawer>

            <form>
                <Flex direction="column" rowGap="md" mt="xl">
                    <TextInput
                        label="Дугаар"
                        value={car.number}
                        onChange={e => handleChange('number', e.currentTarget.value)}
                    />
                    <TextInput
                        label="Дугаар"
                        value={car.mark}
                        onChange={e => handleChange('mark', e.currentTarget.value)}
                    />
                    <Select
                        label="Дугаар"
                        data={carCategories}
                        value={car.category}
                        onChange={value => handleChange('category', value)}
                    />
                    <Checkbox
                        label="Дугаар"
                        checked={car.isInService}
                        onChange={e => handleChange('isInService', e.currentTarget.checked)}
                    />
                </Flex>
            </form>

            <Box>
                {JSON.stringify(car)}
            </Box>
        </div>
    )
}
