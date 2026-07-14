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
import Tabs from '@mizuui/mizu-vue/tabs';
import TabList from '@mizuui/mizu-vue/tablist';
import Tab from '@mizuui/mizu-vue/tab';
import TabPanels from '@mizuui/mizu-vue/tabpanels';
import TabPanel from '@mizuui/mizu-vue/tabpanel';
`
            }
        };
    }
};
</script>
