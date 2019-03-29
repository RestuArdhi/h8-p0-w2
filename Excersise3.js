var nama = 'Restu';
var peran = 'Penyihir';

if (nama === '' && peran === '') {
  console.log('Nama harus diisi!')
}
else if(nama === 'Restu' && peran === '') {
  console.log('Halo' + ' ' + nama + ',' + ' ' + 'Pilih peranmu untuk memulai game!');
}
else if (nama === 'Restu' && peran === 'Ksatria') {
  console.log('Selamat datang di Dunia Proxytia,' + ' ' + nama);
  console.log('Halo' + ' ' + peran + ' ' + nama + ',' + ' ' + 'kamu dapat menyerang dengan senjatamu!');
}
else if (nama === 'Restu' && peran === 'Tabib') {
  console.log('Selamat datang di Dunia Proxytia,' + ' ' + nama);
  console.log('Halo' + ' ' + peran + ' ' + nama + ',' + ' ' + 'kamu akan membantu temanmu yang terluka.');
}
else if (nama === 'Restu' && peran === 'Penyihir') {
  console.log('Selamat datang di Dunia Proxytia, Restu');
  console.log('Halo' + ' ' + peran + ' ' + nama + ',' + ' ' + 'ciptakan keajaiban yang membantu kemenanganmu!');
}