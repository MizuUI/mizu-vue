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
import DataTable from '@mizuui/mizuvue/datatable';
import Column from '@mizuui/mizuvue/column';
import ColumnGroup from '@mizuui/mizuvue/columngroup';   // optional
import Row from '@mizuui/mizuvue/row';                   // optional
`
            }
        };
    }
};
</script>
