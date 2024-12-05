export default function testShiftPlusPointer(elem: HTMLElement) {
  elem.addEventListener('pointerup', (event: PointerEvent) => {
    if (event.shiftKey && event.type === 'pointerup') {
      elem.setAttribute('aria-selected', 'true');
    }
  })
}
