export function getTagBgColor(selected: boolean, name: string) {
  return selected ? `bg-${name}` : "bg-gray";
}

export function getTypeBgColor(name: string) {
  return `bg-${name}`;
}
