export const attributeValue = (self, attribute, fallbackValue = null) =>
  self.hasAttribute(attribute) ? self.getAttribute(attribute) : fallbackValue;

export const makeTemplate = (template) => {
  const $template = document.createElement('template');

  $template.innerHTML = template;

  return $template.content.cloneNode(true);
};

export const basicTemplate = `
  <style></style>
  <slot></slot>
`;
