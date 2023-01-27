export default function formatDateTime(timestamp) {
  const months = [
    "Janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre",
  ];
  const dateTime = new Date(timestamp * 1000);
  const month = months[dateTime.getMonth()];
  const date = dateTime.getDate();
  const year = dateTime.getFullYear();
  //   const hours = dateTime.getHours();
  //   const minutes = dateTime.getMinutes();

  return `${date} ${month} ${year}`; /* ${hours}:${minutes}`*/
}
