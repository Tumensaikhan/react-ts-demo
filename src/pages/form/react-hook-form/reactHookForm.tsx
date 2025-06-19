import { ActionIcon, Box, Button, Flex, Input, Select, Table, TextInput, Title } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import { Controller, useFieldArray, useForm } from "react-hook-form";

const ownerTypes = [{
    label: 'State',
    value: 'state',
}, {
    label: 'Private',
    value: 'private'
}]
const levelTypes = ['elementary', 'middle', 'collage']
const genders = ['male', 'female']

type SchoolForm = {
    name: string
    yearFounded: number
    type: {
        owner: 'state' | 'private' | null
        level: string | null
    }
    principle: {
        name: string
        education: string
        stats: {
            yearsOfExperience: number
            iq: number
        }
    }
    teachers: {
        name: string
        subject: string
        gender: 'male' | 'female' | null
    }[]
}

export function ReactHookForm() {
    const {
        register,
        control,
        formState: { errors },
        handleSubmit
    } = useForm<SchoolForm>()

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'teachers'
    })

    function addRow() {
        append({
            name: '',
            subject: '',
            gender: null
        })
    }

    function save(data: SchoolForm) {
        console.log(data)
    }

    function handleClick() {
        handleSubmit(save)()
    }

    return (
        <Box p="md" w={400}>
            <Flex direction="column" rowGap="sm">
                <Title order={3}>
                    School:
                </Title>
                <TextInput
                    label="Name:"
                    size="xs"
                    {...register('name', { required: true })}
                    required
                    error={!!errors.name}
                />
                <TextInput
                    label="Founded year:"
                    size="xs"
                    {...register('yearFounded', { required: true })}
                    required
                    error={!!errors.yearFounded}
                />
                <Controller
                    control={control}
                    name="type.owner"
                    rules={{ required: true }}
                    render={({ field: { value, onChange, onBlur } }) =>
                        <Select
                            label="Owner type:"
                            data={ownerTypes}
                            size="xs"
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                            required
                            error={!!errors.type?.owner}
                        />
                    }
                />
                <Controller
                    control={control}
                    name="type.level"
                    rules={{ required: true }}
                    render={({ field: { value, onChange, onBlur } }) =>
                        <Select
                            label="Level type:"
                            data={levelTypes}
                            size="xs"
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                            required
                            error={!!errors.type?.level}
                        />
                    }
                />
            </Flex>

            <Flex direction="column" rowGap="sm" mt="xl">
                <Title order={4}>
                    Principle:
                </Title>
                <TextInput label="Name:" size="xs" {...register('principle.name')} />
                <TextInput label="Education:" size="xs" {...register('principle.education')} />

                <Flex direction="column" rowGap="sm" pl="xl">
                    <TextInput label="Years of experience:" size="xs" {...register('principle.stats.yearsOfExperience')} />
                    <TextInput label="IQ:" size="xs" {...register('principle.stats.iq')} />
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
                            Subject
                        </Table.Th>
                        <Table.Th>
                            Gender
                        </Table.Th>
                        <Table.Th>
                            Remove
                        </Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                    {fields.map((_teacher, i) =>
                        <Table.Tr>
                            <Table.Td>
                                {i + 1}.
                            </Table.Td>
                            <Table.Td>
                                <Input {...register(`teachers.[${i}].name` as any)} />
                            </Table.Td>
                            <Table.Td>
                                <Input {...register(`teachers.[${i}].subject` as any)} />
                            </Table.Td>
                            <Table.Td>
                                <Controller
                                    control={control}
                                    name={`teachers.[${i}].gender` as any}
                                    rules={{ required: true }}
                                    render={({ field: { value, onChange, onBlur } }) =>
                                        <Select
                                            data={genders}
                                            size="xs"
                                            value={value}
                                            onChange={onChange}
                                            onBlur={onBlur}
                                            required
                                            error={!!errors.teachers?.[i]?.gender}
                                        />
                                    }
                                />
                            </Table.Td>
                            <Table.Td>
                                <ActionIcon c="red" size={24} variant="transparent" onClick={() => remove(i)}>
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

            <Button mt="xl" onClick={handleClick}>
                Submit
            </Button>
        </Box>
    )
}
