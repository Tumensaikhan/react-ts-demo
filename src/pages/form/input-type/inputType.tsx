import { Box, Button, Flex } from "@mantine/core";
import { useRef, useState } from "react";

export function InputType() {
    const ref = useRef<HTMLInputElement>(null)

    function action() {
        const value = ref.current?.value
        console.log(value)
    }

    const [value, setValue] = useState('')

    return (
        <Box p="md">
            <Flex direction='column' rowGap='sm' w={200}>
                Uncontrolled component
                <input defaultValue='' ref={ref} />
            </Flex>

            <Flex direction='column' rowGap='sm' w={200}>
                Controlled component
                <input value={value} onChange={e => setValue(e.currentTarget.value)} />
            </Flex>

            <Button onClick={action} mt="md">
                Action
            </Button>
        </Box>
    )
}
