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
import ConfirmPopup from '@mizuui/mizuvue/confirmpopup';
`
            }
        };
    }
};
</script>
