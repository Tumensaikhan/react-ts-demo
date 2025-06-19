import { ActionIcon, Box, Button, Flex, Input, Table, TextInput, Title } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import { useState } from "react";

type child = {
    name: string
    age: number | null
}

type FamilyForm = {
    father: {
        name: string
        age: number | null
    }
    mother: {
        name: string
        age: number | null
        job: {
            company: string
            position: string
        }
    }
    children: child[]
}

const initialFamilyForm: FamilyForm = {
    father: {
        name: '',
        age: null
    },
    mother: {
        name: '',
        age: null,
        job: {
            company: '',
            position: ''
        }
    },
    children: []
}

export function NestedForm() {
    const [form, setForm] = useState(initialFamilyForm)

    function handleChange(key: string, value: any) {
        const keys = key.split('.')
        setForm(prev => {
            const next: any = structuredClone(prev)
            if (keys.length === 1) {
                next[keys[0]] = value
            } else if (keys.length === 2) {
                next[keys[0]][keys[1]] = value
            } else if (keys.length === 3) {
                next[keys[0]][keys[1]][keys[2]] = value
            }
            return next
        })
    }

    function addRow() {
        setForm(prev => {
            const next = structuredClone(prev)
            next.children.push({
                name: '',
                age: null
            })
            return next
        })
    }

    function removeRow(i: number) {
        setForm(prev => {
            const next = structuredClone(prev)
            next.children.splice(i, 1)
            return next
        })
    }

    function handleRowChange(i: number, key: string, value: any) {
        setForm(prev => {
            const next: any = structuredClone(prev)
            next.children[i][key] = value
            return next
        })
    }

    return (
        <Box p="md" w={400}>
            <Flex direction="column" rowGap="sm">
                <Title order={4}>
                    Father:
                </Title>
                <TextInput label="Name:" value={form.father.name} onChange={e => handleChange('father.name', e.currentTarget.value)} />
                <TextInput label="Age:" value={form.father.age ?? ''} onChange={e => handleChange('father.age', e.currentTarget.value)} />
            </Flex>

            <Flex direction="column" rowGap="sm" mt="xl">
                <Title order={4}>
                    Mother:
                </Title>
                <TextInput label="Name:" value={form.mother.name} onChange={e => handleChange('mother.name', e.currentTarget.value)} />
                <TextInput label="Age:" value={form.mother.age ?? ''} onChange={e => handleChange('mother.age', e.currentTarget.value)} />

                <Flex direction="column" rowGap="sm" mt="md" pl="md">
                    <Title order={4}>
                        Job:
                    </Title>
                    <TextInput label="Company:" value={form.mother.job.company} onChange={e => handleChange('mother.job.company', e.currentTarget.value)} />
                    <TextInput label="Position:" value={form.mother.job.position} onChange={e => handleChange('mother.job.position', e.currentTarget.value)} />
                </Flex>
            </Flex>

            <Table mt="xl">
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>
                            #
                        </Table.Th>
                        <Table.Th>
                            Name
                        </Table.Th>
                        <Table.Th>
                            Age
                        </Table.Th>
                        <Table.Th>
                            Remove
                        </Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                    {form.children.map((child, i) =>
                        <Table.Tr>
                            <Table.Td>
                                {i + 1}.
                            </Table.Td>
                            <Table.Td>
                                <Input value={child.name} onChange={e => handleRowChange(i, 'name', e.currentTarget.value)} />
                            </Table.Td>
                            <Table.Td>
                                <Input value={child.age ?? ''} onChange={e => handleRowChange(i, 'age', e.currentTarget.value)} />
                            </Table.Td>
                            <Table.Td>
                                <ActionIcon c="red" size={24} variant="transparent" onClick={() => removeRow(i)}>
                                    <IconTrash />
                                </ActionIcon>
                            </Table.Td>
                        </Table.Tr>
                    )}
                    <Table.Tr>
                        <Table.Td colSpan={99} onClick={addRow}>
                            <Button variant="transparent" w="100%">
                                Add row
                            </Button>
                        </Table.Td>
                    </Table.Tr>
                </Table.Tbody>
            </Table>
        </Box>
    )
}
