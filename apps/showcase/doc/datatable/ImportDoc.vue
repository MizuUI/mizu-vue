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
import DataTable from '@mizuui/mizu-vue/datatable';
import Column from '@mizuui/mizu-vue/column';
import ColumnGroup from '@mizuui/mizu-vue/columngroup';   // optional
import Row from '@mizuui/mizu-vue/row';                   // optional
`
            }
        };
    }
};
</script>
