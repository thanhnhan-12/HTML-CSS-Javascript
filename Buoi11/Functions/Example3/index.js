var names = new Array("James", "Kevin", "Brad");

function change_names(names) {
  names[0] = "Stuart";
}

function display_names() {
  document.writeln("<H3>List of Students Names: </H3>");
  document.write("<UL>");
    for(var i = 0; i < names.length; i++) {
      document.write("<LI>" + names[i] + "</LI>");
    }
  document.write("</UL>");

  change_names(names);
  document.write("<H3> List of Changed Students Names: </H3>");
  document.write("<UL>");
    for(var i = 0; i < names.length; i++) {
      document.write("<LI>" + names[i] + "</LI>");
    }
  document.write("</UL>");
}

display_names(names);