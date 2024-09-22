document.addEventListener('DOMContentLoaded', function() {
    const savedData = localStorage.getItem('savedData');
    document.getElementById('data').textContent = savedData ? savedData : 'No hay datos disponibles';
});