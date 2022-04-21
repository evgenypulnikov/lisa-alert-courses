export function maxTextLength(textElement, maxLength) {
  if (textElement.length > maxLength) {
    textElement = textElement.slice(0, maxLength - 3) + '...';
  }
  return textElement;
}
