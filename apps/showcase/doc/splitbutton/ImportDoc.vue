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
import SplitButton from '@mizuui/mizu-vue/splitbutton';
`
            }
        };
    }
};
</script>
