<script>
import ConfirmPopupStyle from '@mizuui/mizuvue/confirmpopup/style';
import BaseComponent from '@primevue/core/basecomponent';

export default {
    name: 'BaseConfirmPopup',
    extends: BaseComponent,
    props: {
        group: String
    },
    style: ConfirmPopupStyle,
    provide() {
        return {
            $pcConfirmPopup: this,
            $parentInstance: this
        };
    }
};
</script>
