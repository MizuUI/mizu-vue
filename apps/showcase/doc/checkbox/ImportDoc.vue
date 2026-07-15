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
import Checkbox from '@mizuui/mizuvue/checkbox';
import CheckboxGroup from '@mizuui/mizuvue/checkboxgroup';
`
            }
        };
    }
};
</script>
