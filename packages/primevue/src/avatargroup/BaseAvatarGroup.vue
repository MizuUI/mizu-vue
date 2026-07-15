<script>
import AvatarGroupStyle from '@mizuui/mizuvue/avatargroup/style';
import BaseComponent from '@primevue/core/basecomponent';

export default {
    name: 'BaseAvatarGroup',
    extends: BaseComponent,
    style: AvatarGroupStyle,
    provide() {
        return {
            $pcAvatarGroup: this,
            $parentInstance: this
        };
    }
};
</script>
