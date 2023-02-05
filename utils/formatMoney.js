export default function formatMoney(amount = 0) {
  const options = {
    style: "currency",
    currency: "USD",
    minimumFractiondigits: 2,
  };

  if (amount % 100 === 0) {
    options.minimumFractiondigits = 0;
  }
  if (Math.floor(amount) !== amount) {
    amount = (amount * 100).toFixed(2);
  }

  const formatter = Intl.NumberFormat("en-US", options);
  return formatter.format(amount / 100);
}
