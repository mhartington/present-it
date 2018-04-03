export function slideTransition(el: HTMLElement, direction: 'enter' | 'leave') {
  let animationBuilder;
  const easeTiming = {
    duration: 300,
    easing: 'cubic-bezier(0.26, 0.86, 0.44, 0.985)'
  };
  if (direction === 'enter') {
    animationBuilder = new KeyframeEffect(
      el,
      [
        { transform: 'translate3d(100%, 0, 0)' },
        { transform: 'translate3d(0, 0, 0)' }
      ],
      easeTiming
    );
  }
  if (direction === 'leave') {
    animationBuilder = new KeyframeEffect(
      el,
      [
        { transform: 'translate3d(0, 0, 0)' },
        { transform: 'translate3d(-100%, 0, 0)' }
      ],
      easeTiming
    );
  }
  return new Animation(animationBuilder, document.timeline);
}
