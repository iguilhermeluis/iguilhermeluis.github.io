function createRangerY(obj, min, max, color, text) {
    var range = obj.axisRanges.create();
    range.value = min;
    range.endValue = max;
    range.axisFill.fill = am4core.color(color);
    range.axisFill.fillOpacity = 0.2;
    range.grid.strokeOpacity = 0;
    createEnventY(obj, max, color, text);
}

function createEnventY(obj, value, color, text) {
    var event = obj.axisRanges.create();
    event.value = value;
    event.bullet = new am4core.Triangle();
    event.bullet.width = 15;
    event.bullet.height = 11;
    event.bullet.fill = am4core.color(color);
    event.bullet.horizontalCenter = "bottom";
    event.bullet.verticalCenter = "top";
    event.bullet.tooltipText = text;
    event.bullet.direction = "right";
    event.grid.disabled = true;
    event.bullet.dy = (-1 * (event.bullet.height) / 2);
    event.bullet.dx = (-1 * (event.bullet.width));
}

function createRangerX(obj, min, max, color, text) {
    var range = obj.axisRanges.create();
    range.value = min;
    range.endValue = max;
    range.axisFill.fill = am4core.color(color);
    range.axisFill.fillOpacity = 0.2;
    range.grid.strokeOpacity = 0;
    createEnventX(obj, min, color, text);
}

function createEnventX(obj, value, color, text) {
    var event = obj.axisRanges.create();
    event.value = value;
    event.bullet = new am4core.Triangle();
    event.bullet.width = 15;
    event.bullet.height = 11;
    event.bullet.fill = am4core.color(color);
    event.bullet.horizontalCenter = "middle";
    event.bullet.tooltipText = text;

    return event;
}
