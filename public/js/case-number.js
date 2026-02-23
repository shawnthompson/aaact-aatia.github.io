;(function () {
  if (typeof document === 'undefined' || typeof window === 'undefined') {
    return;
  }

  function readCaseNumber() {
    var params = new URLSearchParams(window.location.search);
    var keys = ['case', 'caseNumber', 'case_number'];
    for (var i = 0; i < keys.length; i++) {
      var value = params.get(keys[i]);
      if (value) {
        var trimmed = value.trim();
        if (trimmed) {
          return trimmed;
        }
      }
    }
    return '';
  }

  var caseNumber = readCaseNumber();
  var hasCaseNumber = caseNumber !== '';
  var display = document.getElementById('caseNumberDisplay');
  var hidden = document.getElementById('caseNumberHidden');
  var submissionId = document.getElementById('submissionIdHidden');
  var form = document.getElementById('clientSatisfactionForm');
  var missingMessage = document.getElementById('caseNumberMissing');

  if (display) {
    display.textContent = hasCaseNumber ? caseNumber : 'Not provided';
  }

  if (hidden) {
    hidden.value = hasCaseNumber ? caseNumber : '';
  }

  if (submissionId) {
    submissionId.value = hasCaseNumber ? caseNumber : '';
  }

  if (form) {
    form.hidden = !hasCaseNumber;
  }

  if (missingMessage) {
    missingMessage.hidden = hasCaseNumber;
  }
})();
