function toggleCheck(seriesChart) {
  document.getElementById("checkAll").addEventListener("click", (e) => {
    seriesChart.map((el) => {
      el.dataItems.values.map((value) => {
        value.show();
      });
    });
    document.getElementById("deselectAll").checked = false;
  });

  document.getElementById("deselectAll").addEventListener("click", (e) => {
    seriesChart.map((el) => {
      el.dataItems.values.map((value) => {
        value.hide();
      });
    });
    document.getElementById("checkAll").checked = false;
  });
}
