
function calculateProjection() {
  const current = parseFloat(document.getElementById('currentPolicies').value);
  const rate = parseFloat(document.getElementById('growthRate').value);
  if (!isNaN(current) && !isNaN(rate)) {
    const projected = current * (1 + rate / 100);
    document.getElementById('projectionResult').innerText = 'Projected Policies: ' + projected.toFixed(2);
  }
}

document.getElementById('uploadForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const file = document.getElementById('fileInput').files[0];
  if (!file) return;

  document.getElementById('uploadStatus').innerText = `Uploading: ${file.name}`;

  const reader = new FileReader();
  reader.onload = function(event) {
    const text = event.target.result;
    const rows = text.split('\n').map(row => row.split(','));

    const tableHead = document.querySelector('#previewTable thead');
    const tableBody = document.querySelector('#previewTable tbody');
    tableHead.innerHTML = '';
    tableBody.innerHTML = '';

    if (rows.length > 0) {
      const headerRow = document.createElement('tr');
      rows[0].forEach(header => {
        const th = document.createElement('th');
        th.innerText = header;
        headerRow.appendChild(th);
      });
      tableHead.appendChild(headerRow);
    }

    rows.slice(1, 6).forEach(row => {
      const tr = document.createElement('tr');
      row.forEach(cell => {
        const td = document.createElement('td');
        td.innerText = cell;
        tr.appendChild(td);
      });
      tableBody.appendChild(tr);
    });

    document.getElementById('uploadStatus').innerText = 'Upload successful. Preview below:';
  };

  reader.readAsText(file);
});
