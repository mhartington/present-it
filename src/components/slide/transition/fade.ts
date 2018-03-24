export function slideFade(el: HTMLElement, direction: 'enter' | 'leave') {
  let animationBuilder;
  const easeTiming = { duration: 300, easing: 'cubic-bezier(0.26, 0.86, 0.44, 0.985)' };
  if (direction === 'enter') {
    animationBuilder = new KeyframeEffect(el, [{ opacity: 0 }, { opacity: 1 }], easeTiming)
  }
  if (direction === 'leave') {
    animationBuilder = new KeyframeEffect(el, [{ opacity: 1 }, { opacity: 0 }], easeTiming)
  }
  return new Animation(animationBuilder, document.timeline);
}
