<template>
    <DocSectionText v-bind="$attrs"></DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
// import as component
import Badge from '@mizuui/mizu-vue/badge';
import OverlayBadge from '@mizuui/mizu-vue/overlaybadge';
`
            }
        };
    }
};
</script>
