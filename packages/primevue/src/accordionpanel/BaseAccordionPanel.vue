<script>
import AccordionPanelStyle from '@mizuui/mizuvue/accordionpanel/style';
import BaseComponent from '@primevue/core/basecomponent';

export default {
    name: 'BaseAccordionPanel',
    extends: BaseComponent,
    props: {
        value: {
            type: [String, Number],
            default: undefined
        },
        disabled: {
            type: Boolean,
            default: false
        },
        as: {
            type: [String, Object],
            default: 'DIV'
        },
        asChild: {
            type: Boolean,
            default: false
        }
    },
    style: AccordionPanelStyle,
    provide() {
        return {
            $pcAccordionPanel: this,
            $parentInstance: this
        };
    }
};
</script>
