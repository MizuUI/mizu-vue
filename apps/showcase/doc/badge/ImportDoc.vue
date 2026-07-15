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
import Badge from '@mizuui/mizuvue/badge';
import OverlayBadge from '@mizuui/mizuvue/overlaybadge';
`
            }
        };
    }
};
</script>
