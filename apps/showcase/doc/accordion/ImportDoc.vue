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
import Accordion from '@mizuui/mizu-vue/accordion';
import AccordionPanel from '@mizuui/mizu-vue/accordionpanel';
import AccordionHeader from '@mizuui/mizu-vue/accordionheader';
import AccordionContent from '@mizuui/mizu-vue/accordioncontent';
`
            }
        };
    }
};
</script>
