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
import Accordion from '@mizuui/mizuvue/accordion';
import AccordionPanel from '@mizuui/mizuvue/accordionpanel';
import AccordionHeader from '@mizuui/mizuvue/accordionheader';
import AccordionContent from '@mizuui/mizuvue/accordioncontent';
`
            }
        };
    }
};
</script>
