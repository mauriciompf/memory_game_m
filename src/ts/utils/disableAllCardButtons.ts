const disableAllCardButtons = () => {
  for (let i = 0; i < 10; i++) {
    const cardButton = document.getElementById(
      `cardId-${i}`
    ) as HTMLButtonElement;
    if (cardButton) cardButton.disabled = true;
  }
};

export default disableAllCardButtons;