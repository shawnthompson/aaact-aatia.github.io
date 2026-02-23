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
  var field = document.getElementById('caseNumberField');
  var subject = document.getElementById('subjectHidden');
  var form = document.getElementById('clientSatisfactionForm');
  var missingMessage = document.getElementById('caseNumberMissing');

  if (display) {
    display.textContent = hasCaseNumber ? caseNumber : (display.getAttribute('data-missing-text') || 'Not provided');
  }

  if (field) {
    field.value = hasCaseNumber ? caseNumber : '';
  }

  if (subject) {
    subject.value = hasCaseNumber ? 'Client satisfaction feedback - ' + caseNumber : 'Client satisfaction feedback';
  }

  if (form) {
    if (hasCaseNumber) {
      form.removeAttribute('hidden');
    } else {
      form.setAttribute('hidden', '');
    }
  }

  if (missingMessage) {
    missingMessage.hidden = hasCaseNumber;
  }
})();
