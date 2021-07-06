function addItem(item) {
  const itemHTML = `<div class="col-lg-4 col-md-6 text-center ${item.category}">
            <div class="single-product-item">
              <div class="product-image">
                <a href="single-product.html"
                  ><img
                    src="${item.img}"
                    alt=""
                /></a>
              </div>
              <h3>${item.name}</h3>
              <audio controls class="container">
              <source src="${item.sound}" type="audio/ogg">
						  </audio>
              <p class="product-price">
                <span>${item.supplier}</span>$${item.price}
              </p>
              <a href="cart.html" class="cart-btn"
                ><i class="fas fa-shopping-cart"></i> Agregar</a
              >
            </div>
          </div>`;
  const itemsContainer = document.getElementById("list-items");
  itemsContainer.innerHTML += itemHTML;
}
// Listas de objetos a importarse automáticamente guardando la estructura que está en la función. Pidieron 10 pero son 12 //
addItem({
  name: "Piano",
  img: "https://d1aeri3ty3izns.cloudfront.net/media/67/671442/600/preview.jpg",
  category: "cuerdas",
  sound: "/assets/sounds/SGD.ogg",
  supplier: "Yamaha",
  price: "10,000.00",
  description:
    "Piano de cola con pedal. Para el armazón sobre el que se asientan las cuerdas se usa madera de roble, abeto, haya o nogal.",
});

addItem({
  name: "Trompeta",
  img: "http://images.musicstore.de/images/1280/yamaha-ytr-2330-trompeta-si-bemol_1_BLA0003132-000.jpg",
  category: "viento",
  sound: "/assets/sounds/guitarra2.ogg",
  supplier: "Silvertone",
  price: "5,000.00",
  description:
    "Boquilla de trompeta (3 C 5C 7C) para instrumentos de embouchure hecho de latón chapado en oro, compatible con instrumentos musicales Yamaha Bach.",
});

addItem({
  name: "Clarinete",
  img: "https://www.atelierdecelia.com/productos/imagenes/img_3791_1715cce435bb965ed28aa255e7382d3d_20.jpg",
  category: "viento",
  sound: "/assets/sounds/guitarra2.ogg",
  supplier: "Yamaha",
  price: "7,000.00",
  description:
    "Embocadura de caña sujeta a la boquilla mediante una abrazadera.",
});

addItem({
  name: "Saxofón alto",
  img: "https://karmamusic.mx/5440-large_default/sax-alto-laqueado-cyrus-winds------c.jpg",
  category: "viento",
  sound: "/assets/sounds/guitarra2.ogg",
  supplier: "Silvertone",
  price: "14,000.00",
  description:
    "Hecho de latón y consta de una boquilla de plástico, madera o de metal con una única caña.",
});

addItem({
  name: "Saxofón Sopranino",
  img: "https://ae01.alicdn.com/kf/HTB1EtOSaGSs3KVjSZPiq6AsiVXab.jpg_q50.jpg",
  category: "viento",
  sound: "/assets/sounds/guitarra2.ogg",
  supplier: "Silvertone",
  price: "16,000.00",
  description:
    "Contiene 25 llaves y una boquilla en la cual se coloca una caña sostenida por la abrazadera (normalmente) de metal.",
});

addItem({
  name: "Guitarra Eléctrica",
  img: "https://resources.sears.com.mx/medios-plazavip/fotos/productos_sears1/original/3221317.jpg",
  category: "cuerdas",
  sound: "/assets/sounds/SGD.ogg",
  supplier: "Gibson",
  price: "30,000.00",
  description:
    "Hecha de materiales sintéticos que incluyen materiales plásticos (como el policarbonato) y aleaciones de aluminio.",
});

addItem({
  name: "Batería Junior",
  img: "https://www.electronicateran.com/391-large_default/bateria-acustica-yamaha-gigmaker-color-negra.jpg",
  category: "percusion",
  sound: "/assets/sounds/SBD.ogg",
  supplier: "Yamaha",
  price: "12,000.00",
  description:
    "Contiene ccesorios relativamente comunes (tales como el cencerro, panderetas, bloques de madera, entre otros).",
});

addItem({
  name: "Guitarra Clásica",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRuXUxuKy6eLtS_jUC_fuJ2dtePy-Ffoe7Tw&usqp=CAU",
  category: "cuerdas",
  sound: "/assets/sounds/guitarra2.ogg",
  supplier: "Yamaha",
  price: "2,000.00",
  description:
    "Hechas de madera de palisandro de la India (muy popular entre las guitarras que se utilizan entre los guitarristas flamencos) y ébano.",
});

addItem({
  name: "Bajo",
  img: "https://www.mrcdinstrumentos.com.mx/shared/productos/16833/0370760506.jpg",
  category: "cuerdas",
  sound: "/assets/sounds/SBJD.ogg",
  supplier: "Yamaha",
  price: "2,500.00",
  description:
    "Hecha de materiales sintéticos que incluyen materiales plásticos (como el policarbonato) y aleaciones de aluminio.",
});

addItem({
  name: "Violín",
  img: "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/3pp/asr/aba8435b-1bcd-4c76-a2d8-2c4155bb06d4.6b298595f5be5cdd8917ff782f4f1d23.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff",
  category: "cuerdas",
  sound: "/assets/sounds/guitarra2.ogg",
  supplier: "Yamaha",
  price: "20,000.00",
  description:
    "Hechas de madera de palisandro de la India (muy popular entre las guitarras que se utilizan entre los guitarristas flamencos) y ébano.",
});

addItem({
  name: "Contrabajo",
  img: "https://www.mrcdinstrumentos.com.mx/shared/productos/105/AMCB001.jpg",
  category: "cuerdas",
  sound: "/assets/sounds/guitarra2.ogg",
  supplier: "Silvertone",
  price: "11,000.00",
  description:
    "Hechas de madera de palisandro de la India (muy popular entre las guitarras que se utilizan entre los guitarristas flamencos) y ébano.",
});

if (localStorage.productList != null) {
  let list = JSON.parse(localStorage.productList);
  list.forEach(product => {
    addItem({
      name: product.name,
      img: product.img,
      category: product.category,
      supplier: product.supplier,
      price: product.price,
      description: product.description,
    });
  });
}
