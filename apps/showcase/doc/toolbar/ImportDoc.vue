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
import Toolbar from '@mizuui/mizu-vue/toolbar';
`
            }
        };
    }
};
</script>
