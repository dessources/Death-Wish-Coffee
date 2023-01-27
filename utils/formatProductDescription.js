export default function formatProductDescription(size, style) {
  if (style || size) {
    let sep = size && style ? " / " : "";
    let formatedStyle = style ? style.charAt(0).toUpperCase() + style.slice(1) : "";
    let formatedSize = size ? size.replace("_", " ") : "";
    return "\u2013 " + formatedStyle + sep + formatedSize;
  }
  return "";
}
