<script>
import ConfirmDialogStyle from '@mizuui/mizuvue/confirmdialog/style';
import BaseComponent from '@primevue/core/basecomponent';

export default {
    name: 'BaseConfirmDialog',
    extends: BaseComponent,
    props: {
        group: String,
        breakpoints: {
            type: Object,
            default: null
        },
        draggable: {
            type: Boolean,
            default: true
        }
    },
    style: ConfirmDialogStyle,
    provide() {
        return {
            $pcConfirmDialog: this,
            $parentInstance: this
        };
    }
};
</script>
