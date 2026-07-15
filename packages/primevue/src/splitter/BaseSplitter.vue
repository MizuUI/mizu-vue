<script>
import SplitterStyle from '@mizuui/mizuvue/splitter/style';
import BaseComponent from '@primevue/core/basecomponent';

export default {
    name: 'BaseSplitter',
    extends: BaseComponent,
    props: {
        layout: {
            type: String,
            default: 'horizontal'
        },
        gutterSize: {
            type: Number,
            default: 4
        },
        stateKey: {
            type: String,
            default: null
        },
        stateStorage: {
            type: String,
            default: 'session'
        },
        step: {
            type: Number,
            default: 5
        }
    },
    style: SplitterStyle,
    provide() {
        return {
            $pcSplitter: this,
            $parentInstance: this
        };
    }
};
</script>
