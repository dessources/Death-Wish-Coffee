export default function getRightFunc(triangleRight) {
  const iconRight =
    window.innerWidth <= 940
      ? document.querySelector("#shoppingCartIcon2").getBoundingClientRect().right
      : document.querySelector("#shoppingCartIcon").getBoundingClientRect().right;
  const pageRight = document.body.getBoundingClientRect().right;
  // console.log("icon ", iconRight, "page ", pageRight, "triangle", triangleRight);
  // console.log("resule", pageRight - iconRight - parseFloat(triangleRight) + 1.5);
  return pageRight - iconRight - parseFloat(triangleRight) + 1.5;
}
