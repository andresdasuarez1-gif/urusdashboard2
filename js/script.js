
const quoteCtx = document.getElementById('quoteChart').getContext('2d');
new Chart(quoteCtx, {
  type: 'line',
  data: {
    labels: ['Week 1', 'Week 2', 'Week 3'],
    datasets: [{
      label: 'Quotes',
      data: [10, 20, 15],
      borderColor: 'blue',
      fill: false
    }]
  }
});

const conversionCtx = document.getElementById('conversionChart').getContext('2d');
new Chart(conversionCtx, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar'],
    datasets: [{
      label: 'Conversion Rate',
      data: [30, 45, 50],
      backgroundColor: 'green'
    }]
  }
});

function calculateProjection() {
  const current = parseFloat(document.getElementById('currentPolicies').value);
  const rate = parseFloat(document.getElementById('growthRate').value);
  if (!isNaN(current) && !isNaN(rate)) {
    const projected = current * (1 + rate / 100);
    document.getElementById('projectionResult').innerText = `Projected Policies: ${projected.toFixed(2)}`;
  }
}
