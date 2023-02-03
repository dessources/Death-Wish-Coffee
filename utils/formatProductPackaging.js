export default function formatProductPackaging(format, size) {
  const amount = size?.split("_")[0];
  console.log(amount);
  if (format === "bagged") {
    switch (size?.split("_")[1]) {
      case "bag":
        return `1 - 14oz bag`;
      case "bags":
        return `${amount} - 14oz bags`;
      case "lb":
        return `1 - 1lb bag`;
      case "lbs":
        return amount === 5 ? `1 - 5lbs bag` : `${amount} - 1lb bag`;
    }
  } else {
    switch (amount) {
      case "10":
        return `1 - 10 count box`;
      case "20":
        return `2 - 10 count boxes`;
      case "30":
        return `3 - 10 count boxes`;
      case "50":
        return `1 - 50 count box`;
    }
  }
}
