function Status({ items }) {
  if (!items.length)
    return (
      <p className="stats footer-text">Start adding some items to your list</p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const precentage = Math.round((numPacked / numItems) * 100);
  return (
    <>
      <footer className="stats footer-text">
        {precentage === 100
          ? "You got everythinng! Ready to go ✈"
          : `You have ${numItems} items on your list, and you already packed ${numPacked} (${precentage}%)`}
      </footer>
    </>
  );
}

export default Status;
