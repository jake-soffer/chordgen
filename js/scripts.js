// BUSINESS LOGIC

function noteMachine(noteInput) {
  var notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
  function findRoot(note) {
    return note === noteInput; // making sure the inputted note will match with a note in the array
  }
  var rootNoteIndex = notes.findIndex(findRoot); // at this point, it found the index
  var chromaticNotes = [];
  for (var i = rootNoteIndex; i < (rootNoteIndex + 12); i += 1) {
      chromaticNotes.push(notes[i]);
  } return chromaticNotes;
}

function scaleMachine(chromaticNotes, scaleInput) {
  var newScale = [];
  if (scaleInput === "Major") {
    for (var i = 0; i < 12; i += 1) {
      if (i === 1 || i === 3 || i === 6 || i === 8 || i === 10) { continue; }
        newScale.push(chromaticNotes[i]);
      } return newScale;
    }
  else if (scaleInput === "Dorian") {
    for (var i = 0; i < 12; i += 1) {
      if (i === 1 || i === 4 || i === 6 || i === 8 || i === 11) { continue; }
        newScale.push(chromaticNotes[i]);
      } return newScale;
  }
  else if (scaleInput === "Phrygian") {
    for (var i = 0; i < 12; i += 1) {
      if (i === 2 || i === 4 || i === 6 || i === 9 || i === 11) { continue; }
        newScale.push(chromaticNotes[i]);
      } return newScale;
  }
  else if (scaleInput === "Lydian") {
    for (var i = 0; i < 12; i += 1) {
      if (i === 1 || i === 3 || i === 5 || i === 8 || i === 10) { continue; }
        newScale.push(chromaticNotes[i]);
      } return newScale;
  }
  else if (scaleInput === "Mixolydian") {
    for (var i = 0; i < 12; i += 1) {
      if (i === 1 || i === 3 || i === 6 || i === 8 || i === 11) { continue; }
        newScale.push(chromaticNotes[i]);
      } return newScale;
  }
  else if (scaleInput === "Minor") {
    for (var i = 0; i < 12; i += 1) {
      if (i === 1 || i === 4 || i === 6 || i === 9 || i === 11) { continue; }
        newScale.push(chromaticNotes[i]);
      } return newScale;
  }
  else if (scaleInput === "Locrian") {
    for (var i = 0; i < 12; i += 1) {
      if (i === 2 || i === 4 || i === 7 || i === 9 || i === 11) { continue; }
        newScale.push(chromaticNotes[i]);
      } return newScale;
  }
}

function chordMachine(newScale, scaleInput) {
  var i = { chords: ["maj", "maj7", "maj9", "maj11", "maj13"] }
  var ii = ["min", "min7", "min9", "min11", "min13"]
  var iii = ["min", "min7", "min7(b9)", "min11(b9)", "min11 (b9, b13)"]
  var iv = ["maj", "maj7", "maj9", "maj9(#11)", "maj13(#11)"]
  var v = ["maj", "7", "9", "11", "13"]
  var vi = ["min", "min7", "min9", "min11", "min11(b13)"]
  var vii = ["dim", "min7(b5)", "min7(b5, b9)", "min11(b5, b9)", "min11(b5, b9, b13)"]
  var newObject = [];
  if (scaleInput === "Major") {
    for (var i = 0; i < 7; i += 1) {
      newObject.push(newScale[0] + i.chords)
    }
  }

}



  // var chords = {
  //   majI: ["maj"],
  //   majII: ["min"],
  //   majIII: ["min"],
  //   majIV: ["maj"],
  //   majV: ["maj"],
  //   majVI: ["min"],
  //   majVII: ["dim"]
  // }


// UI LOGIC

$(document).ready(function() {
  $("form#notescaleinput").submit(function(event) {
    event.preventDefault();

    var noteInput = $(".note").val();
    var scaleInput = $(".scale").val();

    var chromaticNotes = noteMachine(noteInput)
    var newScale = scaleMachine(chromaticNotes, scaleInput)

    $(".results").text(newScale);
    });
  })
