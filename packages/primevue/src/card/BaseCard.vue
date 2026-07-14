<script>
import CardStyle from '@mizuui/mizu-vue/card/style';
import BaseComponent from '@primevue/core/basecomponent';

export default {
    name: 'BaseCard',
    extends: BaseComponent,
    style: CardStyle,
    provide() {
        return {
            $pcCard: this,
            $parentInstance: this
        };
    }
};
</script>
