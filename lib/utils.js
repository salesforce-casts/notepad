import useAnimation from './animation';
import useTextStore from './text-store';

let timeoutId;

function handleUserInput() {
  useAnimation.getState().triggerAnimation();
}

export function onInput(text) {
  useTextStore.setState({ text });
  clearTimeout(timeoutId);
  timeoutId = setTimeout(handleUserInput, 1500);
}
