function addItem(item) {
 const itemHTML = `<div class="col-lg-4 col-md-6 text-center strawberry">
            <div class="single-product-item">
              <div class="product-image">
                <a href="single-product.html"
                  ><img
                    src="${item.img}"
                    alt=""
                /></a>
              </div>
              <h3>${item.name}</h3>
              <p class="product-price">
                <span>Guitarra Electrica IBANEZ GRG140-SB</span>$5,700.00
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
/*addItem({
  name: "Piano",
  img: "https://d1aeri3ty3izns.cloudfront.net/media/67/671442/600/preview.jpg",
  description:
    "Piano de cola con pedal. Para el armazón sobre el que se asientan las cuerdas se usa madera de roble, abeto, haya o nogal.",
});

addItem({
  name: "Trompeta",
  img: "http://images.musicstore.de/images/1280/yamaha-ytr-2330-trompeta-si-bemol_1_BLA0003132-000.jpg",
  description:
    "Boquilla de trompeta (3 C 5C 7C) para instrumentos de embouchure hecho de latón chapado en oro, compatible con instrumentos musicales Yamaha Bach.",
});

addItem({
  name: "Clarinete",
  img: "https://www.atelierdecelia.com/productos/imagenes/img_3791_1715cce435bb965ed28aa255e7382d3d_20.jpg",
  description:
    "Embocadura de caña sujeta a la boquilla mediante una abrazadera.",
});

 addItem({'name':'Saxofón alto',
    'img':'https://karmamusic.mx/5440-large_default/sax-alto-laqueado-cyrus-winds------c.jpg',
    'description':'Hecho de latón y consta de una boquilla de plástico, madera o de metal con una única caña.'})

    addItem({'name':'Saxofón Sopranino',
    'img':'https://ae01.alicdn.com/kf/HTB1EtOSaGSs3KVjSZPiq6AsiVXab.jpg_q50.jpg',
    'description':'Contiene 25 llaves y una boquilla en la cual se coloca una caña sostenida por la abrazadera (normalmente) de metal.'})

    addItem({'name':'Guitarra Eléctrica',
    'img':'https://resources.sears.com.mx/medios-plazavip/fotos/productos_sears1/original/3221317.jpg',
    'description':'Hecha de materiales sintéticos que incluyen materiales plásticos (como el policarbonato) y aleaciones de aluminio.'})

    addItem({'name':'Batería Junior',
    'img':'https://www.electronicateran.com/391-large_default/bateria-acustica-yamaha-gigmaker-color-negra.jpg',
    'description':'Contiene ccesorios relativamente comunes (tales como el cencerro, panderetas, bloques de madera, entre otros).'})

    addItem({'name':'Guitarra Clásica',
    'img':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRuXUxuKy6eLtS_jUC_fuJ2dtePy-Ffoe7Tw&usqp=CAU',
    'description':'Hechas de madera de palisandro de la India (muy popular entre las guitarras que se utilizan entre los guitarristas flamencos) y ébano.'})

    addItem({'name':'Bajo',
    'img':'https://www.mrcdinstrumentos.com.mx/shared/productos/16833/0370760506.jpg',
    'description':'Hecha de materiales sintéticos que incluyen materiales plásticos (como el policarbonato) y aleaciones de aluminio.'})

    addItem({'name':'Violín',
    'img':'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/3pp/asr/aba8435b-1bcd-4c76-a2d8-2c4155bb06d4.6b298595f5be5cdd8917ff782f4f1d23.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff',
    'description':'Hechas de madera de palisandro de la India (muy popular entre las guitarras que se utilizan entre los guitarristas flamencos) y ébano.'})

    addItem({'name':'Chello',
    'img':'https://http2.mlstatic.com/D_NQ_NP_772746-MLM42338413434_062020-O.jpg',
    'description':'Hechas de madera de palisandro de la India (muy popular entre las guitarras que se utilizan entre los guitarristas flamencos) y ébano.'})

    addItem({'name':'Contrabajo',
    'img':'https://www.mrcdinstrumentos.com.mx/shared/productos/105/AMCB001.jpg',
    'description':'Hechas de madera de palisandro de la India (muy popular entre las guitarras que se utilizan entre los guitarristas flamencos) y ébano.'}) */
