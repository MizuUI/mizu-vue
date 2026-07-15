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
import Tabs from '@mizuui/mizuvue/tabs';
import TabList from '@mizuui/mizuvue/tablist';
import Tab from '@mizuui/mizuvue/tab';
import TabPanels from '@mizuui/mizuvue/tabpanels';
import TabPanel from '@mizuui/mizuvue/tabpanel';
`
            }
        };
    }
};
</script>
