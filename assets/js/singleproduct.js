let id = localStorage.getItem("id");
let url = "http://localhost:8080/product/"+id;

fetch(url)
        .then(response => response.json())
        .then(element => {         
            const product = {
              name:element.name,
              img: element.image,
              category: element.category,
              sound: element.song,
              supplier: element.supplier,
              price: element.price,
              description: element.description,
            };
            document.getElementById("nombreProducto").innerHTML=product.name;
            document.getElementById("precioProducto").innerHTML=product.price;
            document.getElementById("descripcionProducto").innerHTML=product.description;
            document.getElementById("audioProducto").src=product.sound;
            document.getElementById("categoriaProducto").innerHTML=`<strong>Categoría: </strong>${product.category}`;
            
            console.log(product)         
        })
        .catch(err=>console.log(err))