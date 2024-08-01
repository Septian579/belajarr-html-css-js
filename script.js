const button = document.getElementById('button')
const berubah = document.getElementById('berubah');
button.addEventListener('click', () => {
  if (berubah.textContent === 'Belum' || berubah.textContent === 'Tidak ada aksi') {
    berubah.style.color = 'green'; 
    berubah.textContent = 'Sudah';
  } else{
    berubah.style.color = 'red';
    berubah.textContent = 'Belum';
    
  }
} );

  const button2 = document.getElementById('button2');
  const berubah2 = document.getElementById('berubah2');
  button2.addEventListener('click', () => {
  if (berubah2.textContent === 'Belum') {
    berubah2.style.color = 'green';
    berubah2.textContent = 'Sudah';
  } else{
    berubah2.style.color = 'red';
    berubah2.textContent = 'Belum';
  }
  } );

  const button3 = document.getElementById('button3');
  const berubah3 = document.getElementById('berubah3');
  button3.addEventListener('click', () => {
  if (berubah3.textContent === 'Belum') {
    berubah3.style.color = 'green';
    berubah3.textContent = 'Sudah';
  } else{
    berubah3.style.color = 'red';
    berubah3.textContent = 'Belum';
  }
  } );
 

