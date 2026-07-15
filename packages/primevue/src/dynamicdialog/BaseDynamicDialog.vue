<script>
import DynamicDialogStyle from '@mizuui/mizuvue/dynamicdialog/style';
import BaseComponent from '@primevue/core/basecomponent';

export default {
    name: 'BaseDynamicDialog',
    extends: BaseComponent,
    props: {},
    style: DynamicDialogStyle,
    provide() {
        return {
            $pcDynamicDialog: this,
            $parentInstance: this
        };
    }
};
</script>
