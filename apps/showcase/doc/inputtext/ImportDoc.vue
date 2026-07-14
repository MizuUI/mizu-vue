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
import InputText from '@mizuui/mizu-vue/inputtext';
`
            }
        };
    }
};
</script>
