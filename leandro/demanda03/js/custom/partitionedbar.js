am4core.ready(function () {
  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end

  // Create chart instance
  var chart = am4core.create("partitionedbar", am4charts.XYChart);

  // Add data
  chart.data = [
    {
      region: "Central",
      state: "North Dakota",
      sales: 920,
    },
    {
      region: "Central",
      state: "South Dakota",
      sales: 1317,
    },
    {
      region: "Central",
      state: "Kansas",
      sales: 2916,
    },
    {
      region: "Central",
      state: "Iowa",
      sales: 4577,
    },
    {
      region: "Central",
      state: "Nebraska",
      sales: 7464,
    },
    {
      region: "Central",
      state: "Oklahoma",
      sales: 19686,
    },
    {
      region: "Central",
      state: "Missouri",
      sales: 22207,
    },
    {
      region: "Central",
      state: "Minnesota",
      sales: 29865,
    },
    {
      region: "Central",
      state: "Wisconsin",
      sales: 32125,
    },
    {
      region: "Central",
      state: "Indiana",
      sales: 53549,
    },
    {
      region: "Central",
      state: "Michigan",
      sales: 76281,
    },
    {
      region: "Central",
      state: "Illinois",
      sales: 80162,
    },
    {
      region: "Central",
      state: "Texas",
      sales: 170187,
    },
    {
      region: "East",
      state: "West Virginia",
      sales: 1209,
    },
    {
      region: "East",
      state: "Maine",
      sales: 1270,
    },
    {
      region: "East",
      state: "District of Columbia",
      sales: 2866,
    },
    {
      region: "East",
      state: "New Hampshire",
      sales: 7294,
    },
    {
      region: "East",
      state: "Vermont",
      sales: 8929,
    },
    {
      region: "East",
      state: "Connecticut",
      sales: 13386,
    },
    {
      region: "East",
      state: "Rhode Island",
      sales: 22629,
    },
    {
      region: "East",
      state: "Maryland",
      sales: 23707,
    },
    {
      region: "East",
      state: "Delaware",
      sales: 27453,
    },
    {
      region: "East",
      state: "Massachusetts",
      sales: 28639,
    },
    {
      region: "East",
      state: "New Jersey",
      sales: 35763,
    },
    {
      region: "East",
      state: "Ohio",
      sales: 78253,
    },
    {
      region: "East",
      state: "Pennsylvania",
      sales: 116522,
    },
    {
      region: "East",
      state: "New York",
      sales: 310914,
    },
    {
      region: "South",
      state: "South Carolina",
      sales: 8483,
    },
    {
      region: "South",
      state: "Louisiana",
      sales: 9219,
    },
    {
      region: "South",
      state: "Mississippi",
      sales: 10772,
    },
    {
      region: "South",
      state: "Arkansas",
      sales: 11678,
    },
    {
      region: "South",
      state: "Alabama",
      sales: 19511,
    },
    {
      region: "South",
      state: "Tennessee",
      sales: 30662,
    },
    {
      region: "South",
      state: "Kentucky",
      sales: 36598,
    },
    {
      region: "South",
      state: "Georgia",
      sales: 49103,
    },
    {
      region: "South",
      state: "North Carolina",
      sales: 55604,
    },
    {
      region: "South",
      state: "Virginia",
      sales: 70641,
    },
    {
      region: "South",
      state: "Florida",
      sales: 89479,
    },
    {
      region: "West",
      state: "Wyoming",
      sales: 1603,
    },
    {
      region: "West",
      state: "Idaho",
      sales: 4380,
    },
    {
      region: "West",
      state: "New Mexico",
      sales: 4779,
    },
    {
      region: "West",
      state: "Montana",
      sales: 5589,
    },
    {
      region: "West",
      state: "Utah",
      sales: 11223,
    },
    {
      region: "West",
      state: "Nevada",
      sales: 16729,
    },
    {
      region: "West",
      state: "Oregon",
      sales: 17431,
    },
    {
      region: "West",
      state: "Colorado",
      sales: 32110,
    },
    {
      region: "West",
      state: "Arizona",
      sales: 35283,
    },
    {
      region: "West",
      state: "Washington",
      sales: 138656,
    },
    {
      region: "West",
      state: "California",
      sales: 457731,
    },
  ];

  // Create axes
  var yAxis = chart.yAxes.push(new am4charts.CategoryAxis());
  yAxis.dataFields.category = "state";
  yAxis.renderer.grid.template.location = 0;
  yAxis.renderer.labels.template.fontSize = 10;
  yAxis.renderer.minGridDistance = 10;

  var xAxis = chart.xAxes.push(new am4charts.ValueAxis());

  // Create series
  var series = chart.series.push(new am4charts.ColumnSeries());
  series.dataFields.valueX = "sales";
  series.dataFields.categoryY = "state";
  series.columns.template.tooltipText = "{categoryY}: [bold]{valueX}[/]";
  series.columns.template.strokeWidth = 0;
  series.columns.template.adapter.add("fill", function (fill, target) {
    if (target.dataItem) {
      switch (target.dataItem.dataContext.region) {
        case "Central":
          return chart.colors.getIndex(0);
          break;
        case "East":
          return chart.colors.getIndex(1);
          break;
        case "South":
          return chart.colors.getIndex(2);
          break;
        case "West":
          return chart.colors.getIndex(3);
          break;
      }
    }
    return fill;
  });

  // Add ranges
  function addRange(label, start, end, color) {
    var range = yAxis.axisRanges.create();
    range.category = start;
    range.endCategory = end;
    range.label.text = label;
    range.label.disabled = false;
    range.label.fill = color;
    range.label.location = 0;
    range.label.dx = -130;
    range.label.dy = 12;
    range.label.fontWeight = "bold";
    range.label.fontSize = 12;
    range.label.horizontalCenter = "left";
    range.label.inside = true;

    range.grid.stroke = am4core.color("#396478");
    range.grid.strokeOpacity = 1;
    range.tick.length = 200;
    range.tick.disabled = false;
    range.tick.strokeOpacity = 0.6;
    range.tick.stroke = am4core.color("#396478");
    range.tick.location = 0;

    range.locations.category = 1;
  }

  addRange("Central", "Texas", "North Dakota", chart.colors.getIndex(0));
  addRange("East", "New York", "West Virginia", chart.colors.getIndex(1));
  addRange("South", "Florida", "South Carolina", chart.colors.getIndex(2));
  addRange("West", "California", "Wyoming", chart.colors.getIndex(3));

  chart.cursor = new am4charts.XYCursor();
}); // end am4core.ready()
