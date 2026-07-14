<template>
    <DocSectionText v-bind="$attrs"></DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import ImageCompare from '@mizuui/mizu-vue/imagecompare';
`
            }
        };
    }
};
</script>
