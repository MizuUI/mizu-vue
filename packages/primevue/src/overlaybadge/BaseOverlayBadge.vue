<script>
import Badge from '@mizuui/mizu-vue/badge';
import OverlayBadgeStyle from '@mizuui/mizu-vue/overlaybadge/style';

export default {
    name: 'OverlayBadge',
    extends: Badge,
    style: OverlayBadgeStyle,
    provide() {
        return {
            $pcOverlayBadge: this,
            $parentInstance: this
        };
    }
};
</script>
