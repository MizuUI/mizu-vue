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
import Terminal from '@mizuui/mizu-vue/terminal';
import TerminalService from '@mizuui/mizu-vue/terminalservice'
`
            }
        };
    }
};
</script>
