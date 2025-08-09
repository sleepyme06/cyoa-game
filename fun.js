    window.onload = function() {
        var hash = window.location.hash || '#path-a';
        var ids = ['path-a', 'part-b', 'part-c'];
        ids.forEach(function(id) {
            var el = document.getElementById(id);
            if (el) el.style.display = 'none';
        });
        var showId = hash.replace('#', '');
        var showEl = document.getElementById(showId);
         if (showEl) {
          showEl.style.display = 'block';
        } else {
         // Fallback to default section if hash is invalid
         document.getElementById('path-a').style.display = 'block';
        }
    };