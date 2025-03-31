export const noteBackgroundColorGenerator = () => {
  const cardBackgroundColor = [
    "bg-danger text-white",
    "bg-primary text-white",
    "bg-secondary text-white",
    "bg-success text-white",
    "bg-warning text-white",
    "bg-info text-white",
    "bg-dark text-white",
    "bg-white text-black",
  ];
  const randomNumber = Math.floor(Math.random() * 8);
  return cardBackgroundColor[randomNumber];
};
