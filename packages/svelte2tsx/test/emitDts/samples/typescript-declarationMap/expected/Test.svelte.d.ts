import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        astring: string;
    };
    events: {
        event: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            astring: string;
        };
    };
};
export type TestProps = typeof __propDef.props;
export type TestEvents = typeof __propDef.events;
export type TestSlots = typeof __propDef.slots;
export default class Test extends SvelteComponent<TestProps, TestEvents, TestSlots> {
    get astring(): string;
}
export {};
//# sourceMappingURL=Test.svelte.d.ts.map