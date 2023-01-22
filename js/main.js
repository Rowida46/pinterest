// https://dummyjson.com/quotes

// fetch qoutes 

var qoutesSEction = $("#qoutesSection");

console.log(qoutesSEction.html())

function fecthQoutes() {
  // fetch("https://dummyjson.com/quotes").then(res => res.json()).then(dispalyQoutes)
  fetch("https://dummyjson.com/quotes").then(res => res.json()).then(dispalyQoutes)

}

/**
 * 
 <div class = "col-md-6 col-lg-4 col-xl-3 p-2 new">
                        <div class = "collection-img position-relative">
                            <img src = "images/c_polo-shirt.png" class = "w-100">
                            <span class = "position-absolute bg-primary text-white d-flex align-items-center justify-content-center">sale</span>
                        </div>
                       
                    </div>
 */



function dispalyQoutes(qoutes) {
  console.log(typeof qoutes)
  console.log(qoutes)
  //qoutesSEction.html("")

  qoutes.quotes.forEach(element => {
    console.log(element.author, element.quote)
    qoutesSEction.append(` 
            <div class=" h-100 col-lg-6 mb-4 mb-lg-0 col-sm-12 col-md-12 box-shadow ">
            <figure class="bg-white p-3 rounded" style="border-left: .25rem solid #a34e78;">
              <blockquote class="blockquote pb-2">
                <p>
                ${element.quote}

                </p>
              </blockquote>
              <figcaption class="blockquote-footer mb-0 font-italic">
              ${element.author}
                
              </figcaption>
            </figure>
          </div>
        `)
  });
}

fecthQoutes();