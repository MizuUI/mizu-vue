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
import IconField from '@mizuui/mizu-vue/iconfield';
import InputIcon from '@mizuui/mizu-vue/inputicon';
`
            }
        };
    }
};
</script>
