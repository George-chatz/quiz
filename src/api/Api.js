
const computerScience = () => {
    fetch("https://opentdb.com/api.php?amount=50&category=18&difficulty=medium&type=multiple")
      .then((res) => res.json())
      .then((CSquestions) => {
        setData(CSquestions.value);
        console.log(CSquestions)
      });
  };
  