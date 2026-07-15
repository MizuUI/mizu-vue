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
import Avatar from '@mizuui/mizuvue/avatar';
import AvatarGroup from '@mizuui/mizuvue/avatargroup';   //Optional for grouping
`
            }
        };
    }
};
</script>
