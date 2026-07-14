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
import Avatar from '@mizuui/mizu-vue/avatar';
import AvatarGroup from '@mizuui/mizu-vue/avatargroup';   //Optional for grouping
`
            }
        };
    }
};
</script>
