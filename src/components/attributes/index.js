const colors = [
  '#d278ff',
  '#DB5382',
  '#AABCE4',
  '#DB5382', //redpink
  '#e8ae00', //yellow
  '#4fc6c9', //turquoise
  '#99C0F2',
  '#574DB8',
  '#ff9985', //pink
  '#574DB8', //blue
  '#4fc6c9', //turquoise
  '#B328FF',
  '#e8ae00',
];
export const propColors = (propNum) => {
  const num = parseInt(propNum);
  if (num < 0) return null;
  return colors[num % 14];
};
