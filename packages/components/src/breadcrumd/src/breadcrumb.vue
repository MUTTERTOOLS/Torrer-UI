<script lang="ts">
import { h, RendererElement, RendererNode, VNode, VNodeArrayChildren } from 'vue';
export default {
  name: 'TassBreadcrumb',
  render(props: { separatorIcon: string }) {
    const items = (this.$slots as any).default();
    const dymanicItems:
      | VNode<RendererNode, RendererElement, { [key: string]: any }>
      | VNodeArrayChildren
      | (() => any) = [];
    items.forEach(
      (
        item: VNodeArrayChildren | VNode<RendererNode, RendererElement, { [key: string]: any }>,
        i: number,
      ) => {
        dymanicItems.push(item);
        if (i < items.length - 1) {
          dymanicItems.push(h('i', { class: `tas-icon-${props.separatorIcon}` }));
        }
      },
    );
    return h('div', { class: 'tas-bread' }, dymanicItems);
  },
};
</script>

<style lang="less">
.breadcrumb {
  i {
    font-size: 11px;
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 2px;
    line-height: 22px;
  }
}
</style>
