<script>
import ColumnGroupStyle from '@mizuui/mizuvue/columngroup/style';
import BaseComponent from '@primevue/core/basecomponent';

export default {
    name: 'BaseColumnGroup',
    extends: BaseComponent,
    props: {
        type: {
            type: String,
            default: null
        }
    },
    style: ColumnGroupStyle,
    provide() {
        return {
            $pcColumnGroup: this,
            $parentInstance: this
        };
    }
};
</script>
