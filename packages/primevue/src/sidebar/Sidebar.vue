<script>
import Drawer from '@mizuui/mizu-vue/drawer';

export default {
    name: 'Sidebar',
    extends: Drawer,
    mounted() {
        console.warn('Deprecated since v4. Use Drawer component instead.');
    }
};
</script>
