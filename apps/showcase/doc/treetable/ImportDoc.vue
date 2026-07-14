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
import TreeTable from '@mizuui/mizu-vue/treetable';
import Column from '@mizuui/mizu-vue/column';
`
            }
        };
    }
};
</script>
