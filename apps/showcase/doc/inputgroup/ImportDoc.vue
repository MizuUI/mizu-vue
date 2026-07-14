<template>
    <DocSectionText v-bind="$attrs" />
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import InputGroup from '@mizuui/mizu-vue/inputgroup';
import InputGroupAddon from '@mizuui/mizu-vue/inputgroupaddon';
`
            }
        };
    }
};
</script>
