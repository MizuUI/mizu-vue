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
import Terminal from '@mizuui/mizuvue/terminal';
import TerminalService from '@mizuui/mizuvue/terminalservice'
`
            }
        };
    }
};
</script>
