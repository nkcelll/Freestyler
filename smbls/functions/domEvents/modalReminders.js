// Inside modalReminders.js
const modalReminders = (reminderClassId, elementIds) => {
  const reminders = document.querySelectorAll(`.${reminderClassId}`);

  elementIds.forEach((elementId, index) => {
    const field = document.getElementById(elementId);

    if (field.value.trim() === '') {
      reminders[index].style.display = 'flex';
    } else {
      reminders[index].style.display = 'none';
    }
  });
};

export default modalReminders;
