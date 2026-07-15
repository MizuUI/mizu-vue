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
import Splitter from '@mizuui/mizuvue/splitter';
import SplitterPanel from '@mizuui/mizuvue/splitterpanel';
`
            }
        };
    }
};
</script>
