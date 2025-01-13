// script.js

let cart = [];

// Fungsi untuk menampilkan halaman berdasarkan pilihan menu
function showHome() {
  hideAllPages();
  document.getElementById("home").style.display = "block";
  window.scrollTo(0, 0);
}

function showProducts() {
  hideAllPages();
  document.getElementById("products").style.display = "block";
  window.scrollTo(0, 0);
}

function showCart() {
  hideAllPages();
  document.getElementById("cart").style.display = "block";
  updateCart();
  window.scrollTo(0, 0);
}

function showContact() {
  hideAllPages();
  document.getElementById("contact").style.display = "block";
  window.scrollTo(0, 0);
}

// Fungsi untuk menyembunyikan semua halaman
function hideAllPages() {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
    page.style.display = 'none';
  });
}

// Fungsi untuk menambahkan item ke keranjang
function addToCart(product, price, image) {
  cart.push({ product, price, image });
  alert(product + " telah ditambahkan ke keranjang.");
  document.getElementById("checkout-button").style.display = "block";
}

// Fungsi untuk menghapus item dari keranjang
function removeFromCart(index) {
  cart.splice(index, 1); // Menghapus item berdasarkan index
  updateCart(); // Perbarui tampilan keranjang
}

// Fungsi untuk memperbarui tampilan keranjang
function updateCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>Keranjang Anda kosong.</p>";
    document.getElementById("checkout-button").style.display = "none";
  } else {
    let htmlContent = "<ul>";
    let totalPrice = 0;
    cart.forEach((item, index) => {
      htmlContent += `
        <li>
          <img src="${item.image}" alt="${item.product}" style="width: 50px; height: 50px;">
          ${item.product} - Rp ${item.price.toLocaleString()}
          <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Hapus</button>
        </li>
      `;
      totalPrice += item.price;
    });
    htmlContent += `</ul><p>Total: Rp ${totalPrice.toLocaleString()}</p>`;
    cartItemsContainer.innerHTML = htmlContent;
  }
}

// Fungsi checkout
function checkout() {
  alert("Terima kasih telah berbelanja! Total pembayaran: Rp " + cart.reduce((acc, item) => acc + item.price, 0).toLocaleString());
  cart = []; // Kosongkan keranjang
  updateCart(); // Perbarui tampilan keranjang
  showHome(); // Kembali ke halaman utama
}
