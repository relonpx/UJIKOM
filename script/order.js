const formatUang = (rupiah) => {
  return rupiah.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });
};

let desc = localStorage.getItem('pesanan')
let nama = localStorage.getItem('nama')
let info = document.getElementById('info').innerHTML = `Anda telah memesan ${nama} : ${desc}`
let data = localStorage.getItem('total')
let total = document.getElementById('total').innerHTML = formatUang(parseInt(data))

let saldo = 20000
const saldo_u = document.getElementById('saldo').innerHTML = formatUang(saldo)

const bayar = () => {
  let restoPay = document.getElementById('restoPay').checked
  let cash = document.getElementById('cash').checked
  console.log(restoPay, cash);

  if(!restoPay && !cash){
    alert('Silahkan pilih metode pembayaran')
  } else {
    if(restoPay){
      if(saldo < data){
        let konfirmasi = confirm('Saldo tidak cukup! apakah anda ingin top up?')
        if(konfirmasi != false){
          const topUp = prompt('Masukan nominal pecahan 10.000')
          if(topUp % 10000 != 0 || topUp == 0){
            alert('Pecahan yang anda masukan salah!')
          } else {
            saldo = saldo +  parseInt(topUp)
            document.getElementById("saldo").innerHTML = formatUang(saldo);
          }
        }
      } else {
        window.location.href = 'restopay.html'
      }
    } else if(cash){
      window.location.href = 'cashier.html'
    }
  }
}