;(function () {
  if (typeof document === 'undefined' || typeof window === 'undefined') {
    return;
  }

  // Get the case parameter from the current URL
  var params = new URLSearchParams(window.location.search);
  var caseNumber = params.get('case');

  // If there's a case parameter, append it to the language toggle link
  if (caseNumber) {
    var langToggle = document.querySelector('#wb-lng a');
    if (langToggle) {
      var href = langToggle.getAttribute('href');
      if (href && !href.includes('case=')) {
        // Determine the separator (? or &)
        var separator = href.includes('?') ? '&' : '?';
        langToggle.setAttribute('href', href + separator + 'case=' + encodeURIComponent(caseNumber));
      }
    }
  }
})();
