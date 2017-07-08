
$("#schoolSort tr:odd").addClass("bg-blue");
$("#schoolSort tr:even").addClass("bg-white");

$("#schoolSort tr td:first-child").addClass("font-size");
$("#schoolSort tr:odd td:not(td:last-child)").addClass("text-white");
$("#schoolSort tr:even td:not(td:last-child)").addClass("text-blue");
$("#schoolSort  td:last-child").addClass("text-blue");

