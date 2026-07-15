<script>
import FluidStyle from '@mizuui/mizuvue/fluid/style';
import BaseComponent from '@primevue/core/basecomponent';

export default {
    name: 'BaseFluid',
    extends: BaseComponent,
    style: FluidStyle,
    provide() {
        return {
            $pcFluid: this,
            $parentInstance: this
        };
    }
};
</script>
