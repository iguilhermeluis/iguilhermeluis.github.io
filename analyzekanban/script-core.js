const init = () => {
  function groupBy(list, keyGetter) {
    const map = new Map();
    list.forEach((item) => {
      const key = keyGetter(item);
      const collection = map.get(key);
      if (!collection) {
        map.set(key, [item]);
      } else {
        collection.push(item);
      }
    });
    return map;
  }

  const getBoardsInformations = async (idBoard, token) => {
    let response = await axios.get(
      `https://scrumnebraska.kanbantool.com/api/v3/boards/${idBoard}.json?api_token=${token}`
    );

    let swimlanes = response.data.swimlanes;
    let tasks = response.data.tasks;

    const tasksGrouped = groupBy(tasks, (task) => task.swimlane_id);
    let sumTotalPoints = 0;

    tasks.map((task) => {
      sumTotalPoints += parseFloat(task.size_estimate);
    });

    let processData = [];

    tasksGrouped.forEach((value, key) => {
      let objSearch = swimlanes.filter((swimlane) => swimlane.id == key)[0];
      let sumPoint = 0;
      value.map((el) => {
        sumPoint += parseFloat(el.size_estimate);
      });
      let data = { value, key, name: objSearch.name, sumPoint };
      processData.push(data);
    });

    console.warn(`tasksGroupSwimlanes  ${idBoard}`, processData);
    console.warn(`idBoard ${idBoard} total: `, sumTotalPoints);
  };

  getBoardsInformations("512425", "M9NPVBWPFL7H");
  getBoardsInformations("515935", "M9NPVBWPFL7H");
};

init();
