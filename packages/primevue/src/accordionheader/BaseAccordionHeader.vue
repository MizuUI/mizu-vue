<script>
import AccordionHeaderStyle from '@mizuui/mizu-vue/accordionheader/style';
import BaseComponent from '@primevue/core/basecomponent';

export default {
    name: 'BaseAccordionHeader',
    extends: BaseComponent,
    props: {
        as: {
            type: [String, Object],
            default: 'BUTTON'
        },
        asChild: {
            type: Boolean,
            default: false
        }
    },
    style: AccordionHeaderStyle,
    provide() {
        return {
            $pcAccordionHeader: this,
            $parentInstance: this
        };
    }
};
</script>
