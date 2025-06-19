import { Tabs } from "@mantine/core";
import { InputType } from "./input-type/inputType";
import { NestedForm } from "./nested-form/nestedForm";
import { ReactHookForm } from "./react-hook-form/reactHookForm";

export function Form() {
    return (
        <Tabs defaultValue="inputType" keepMounted={false}>
            <Tabs.List>
                <Tabs.Tab value="inputType">
                    Input type
                </Tabs.Tab>
                <Tabs.Tab value="nestedForm">
                    Nested form
                </Tabs.Tab>
                <Tabs.Tab value="reactHookForm">
                    React Hook Form
                </Tabs.Tab>
                <Tabs.Tab value="customForm">
                    Custom Form
                </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="inputType">
                <InputType />
            </Tabs.Panel>
            <Tabs.Panel value="nestedForm">
                <NestedForm />
            </Tabs.Panel>
            <Tabs.Panel value="reactHookForm">
                <ReactHookForm />
            </Tabs.Panel>
            <Tabs.Panel value="customForm">
                tttt
            </Tabs.Panel>
        </Tabs>
    )
}
