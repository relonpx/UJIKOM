const menu = [
  {
    id: 0,
    name: 'Lemon Tea',
    desc: 'Teh + perasan lemon',
    price: 5000
  },
  {
    id: 1,
    name: 'Lemon Tea',
    desc: 'Teh + perasan lemon',
    price: 5000
  },
  {
    id: 2,
    name: 'Lemon Tea',
    desc: 'Teh + perasan lemon',
    price: 5000
  },
  {
    id: 3,
    name: 'Lemon Tea',
    desc: 'Teh + perasan lemon',
    price: 5000
  },
  {
    id: 4,
    name: 'Lemon Tea',
    desc: 'Teh + perasan lemon',
    price: 5000
  },
]

const cardContainer = document.querySelector('.card-wrap')

menu.map((data) => {
  cardContainer.innerHTML += card(data.id, data.name, data.desc, data.price)
})

function card(id, name, desc, price){
  return `
      <div class="card">
        <img src="assets/rumman-amin-bJzJH85Kp7g-unsplash.jpg" alt="">
        <div class="menu-desc">
          <h1>${name}</h1>
          <p style="margin-bottom: 1.5rem;">${desc}</p>
          <div class="flex ai-center jc-sb">
            <h1>${price}</h1>
            <button id="pesan${id}">Pesan</button>
          </div>
        </div>
      </div>
    `;
}

menu.map((data) => {
  const pesan = document.getElementById(`pesan${data.id}`)
  pesan.addEventListener('click', function(e){
    e.preventDefault()
    const jumlah = prompt('Silahkan masukan jumlah pesanan:')
    const total = jumlah * data.price
    localStorage.setItem('total', total)
    localStorage.setItem('pesanan', data.desc)
    localStorage.setItem('nama', data.name)
    window.location.href = 'order.html'
  })
})

    