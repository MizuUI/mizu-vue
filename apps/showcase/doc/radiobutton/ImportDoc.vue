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
import RadioButton from '@mizuui/mizuvue/radiobutton';
import RadioButtonGroup from '@mizuui/mizuvue/radiobuttongroup';
`
            }
        };
    }
};
</script>
