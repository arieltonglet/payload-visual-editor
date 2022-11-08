export default (
  el: HTMLElement,
  selector: string = ".blocks-field__row"
): HTMLElement => {
  return el.closest(selector);
};
