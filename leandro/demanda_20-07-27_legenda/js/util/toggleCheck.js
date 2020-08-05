function toggleCheck(
  seriesChart,
  isGlobal,
  filter,
  valueSearch,
  checkId,
  uncheckId,
  colorSearch
) {
  document.getElementById(checkId).addEventListener("click", (e) => {
    seriesChart.map((el) => {
      el.dataItems.values.map((value) => {
        if (isGlobal) {
          value.show();
          document
            .querySelectorAll(
              `g[role="switch"]  g[fillBackup="${value.dataContext["CorFundoR"]}"]`
            )
            .forEach((el) =>
              el.setAttribute("fill", el.getAttribute("fillBackup"))
            );
          document
            .querySelectorAll(
              `g[role="switch"]  g[fillBackup="${value.dataContext["CorFundoFM"]}"]`
            )
            .forEach((el) =>
              el.setAttribute("fill", el.getAttribute("fillBackup"))
            );
          return true;
        }

        value.show();
        document
          .querySelectorAll(
            `g[role="switch"]  g[fillBackup="${value.dataContext[colorSearch]}"]`
          )
          .forEach((el) =>
            el.setAttribute("fill", el.getAttribute("fillBackup"))
          );
      });
    });
    document.getElementById(uncheckId).checked = false;
  });

  document.getElementById(uncheckId).addEventListener("click", (e) => {
    seriesChart.map((el) => {
      el.dataItems.values.map((value) => {
        if (isGlobal) {
          value.hide();

          document
            .querySelectorAll(
              `g[role="switch"]  g[fill="${value.dataContext["CorFundoR"]}"]`
            )
            .forEach((el) => {
              el.setAttribute("fillBackup", el.getAttribute("fill"));
              el.setAttribute("fill", "#999999");
            });

          document
            .querySelectorAll(
              `g[role="switch"]  g[fill="${value.dataContext["CorFundoFM"]}"]`
            )
            .forEach((el) => {
              el.setAttribute("fillBackup", el.getAttribute("fill"));
              el.setAttribute("fill", "#999999");
            });

          return true;
        }

        value.hide();
        document
          .querySelectorAll(
            `g[role="switch"]  g[fill="${value.dataContext[colorSearch]}"]`
          )
          .forEach((el) => {
            el.setAttribute("fillBackup", el.getAttribute("fill"));
            el.setAttribute("fill", "#999999");
          });
      });
    });
    document.getElementById(checkId).checked = false;
  });
}
