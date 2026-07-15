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
import Tooltip from '@mizuui/mizuvue/tooltip';

app.directive('tooltip', Tooltip);
`
            }
        };
    }
};
</script>
