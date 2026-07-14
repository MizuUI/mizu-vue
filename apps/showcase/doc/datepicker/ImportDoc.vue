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
import DatePicker from '@mizuui/mizu-vue/datepicker';
`
            }
        };
    }
};
</script>
