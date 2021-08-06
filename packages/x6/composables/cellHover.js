import { Channel } from "../common/transmit";
import { CustomEventTypeEnum } from "../common/enums";

const changePortsVisible = (node, visible) => {
  const ports = document.querySelectorAll(`g[data-cell-id="${node.id}"] .x6-port-body`);
  ports.forEach((port) => {
    port.style.visibility = visible ? 'visible' : 'hidden';
  });
};

export default (graph) => {
  const tooltipDom = document.getElementById("tooltip-container")

  graph.on('node:mouseenter', ({ node }) => {
    changePortsVisible(node, true);

    const { x, y } = graph.localToGraph(node.store.data.position.x, node.store.data.position.y)
    // 此处做变通, 添加html模板定制化
    // tooltipDom.innerHTML = node.attrs.label.text
    Channel.dispatchEvent(CustomEventTypeEnum.TOOLTIPS_CALLBACK, node.attrs.label.text)

    tooltipDom.style.display = 'block';
    tooltipDom.style.left = x + 320 + 'px';
    tooltipDom.style.top = y - 10 + 'px'
  });

  graph.on('node:mouseleave', ({ node }) => {
    changePortsVisible(node, false);
    tooltipDom.style.display = 'none'
  });
}
