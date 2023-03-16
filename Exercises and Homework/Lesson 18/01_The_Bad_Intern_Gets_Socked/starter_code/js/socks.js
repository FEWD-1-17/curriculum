const templateBlock = `<article class="card shadow-sm productBlock">
                        <a href="#" class="productBlockImgLink"><img src="images/socks-dress.png" alt="" class="card-img-top"></a>

                        <div class="card-body">
                            <h1 class="card-title"><a href="#">Dress Socks</a></h1>

                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                            <div class="productBlockOptions">
                                <h2>Available Colors:</h2>
                                <div class="productBlockOptions_swatches">
                                    <a href="#294d06" style="background-color:#294d06"></a>
                                    <a href="#222222" style="background-color:#222222" class="productBlockOptions_swatches_selected"></a>
                                    <a href="#10273d" style="background-color:#10273d"></a>
                                    <a href="#000000" style="background-color:#ffffff"></a>
                                </div>

                                <h2>Available Sizes:</h2>

                                <div class="productBlockOptions_inner productBlockOptions_sizeGroup">
                                    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                        <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
                                        <label class="btn btn-outline-secondary btn-sm" for="btnradio1">S</label>

                                        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
                                        <label class="btn btn-outline-secondary btn-sm" for="btnradio2">M</label>

                                        <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
                                        <label class="btn btn-outline-secondary btn-sm" for="btnradio3">L</label>
                                    </div>
                                </div>

                                <h2>Price</h2>

                                <div class="productBlockOptions_inner">
                                   <p class="productBlockOptions_price">$40.99</p>
                                </div>

                            </div>

                        </div>

                        <div class="card-footer">
                            <a class="btn btn-primary btn-small" href="#">Add to Cart</a>

                        </div>
                    </article>`;


// Load the data
const myRequest = new Request('https://kasigi.github.io/petfinderJSON/sockData.json');

retch(myRequest)
    .then(response => response.json())
    .then(data => {

        // For each sock in data
        for (product of responseData) {

            // Create the outermost container of the product
            let newElement = document.createElement('div');

            // Assing the column classes
            newElement.classList.add('col-lg-4')
            newElement.classList.add('col-md-6')

            // Insert the template
            newElement.innerHTML = turtleBlock;

            // Set the Title
            newElement.querySelector('.card-title a').innerText = product.name;

            // Set the Image
            newElement.querySelector('.card-img-top').setAttribute('src', 'images/' + product.picture);
            newElement.querySelector('.card-img-top').setAttribute('alt', product.name);


            // Set the Cart Link (the button, the title of the product, and the product image)
            newElement.querySelector('.productBlockImgLink').setAttribute('src', product.link);
            newElement.querySelector('.card-footer a').setAttribute('src', product.link);
            newElement.querySelector('.card-title a').setAttribute('src', product.link);


            // Set the Price



            // Set the colors
            let colorSetElements = "";

            let currentlySelected = "productBlockOptions_swatches_selected";

            // Loop through the list of colors and create a link for it
            for (i < product.sizes.length) {
                colorSetElements += `<a href="${product.colors[i]}" style="background-color:${product.colors[i]}" class="${currentlySelected}"></a>`

                // Make the options after the first one not picked
                currentlySelected = "";

                // Set the background color of the sock to the first color
                if (i == 0) {
                    newElement.querySelector(".productBlockImgLink").style.backgroundColor = product.colors[i];
                }
            }

            // Add colors to new element
            newElement.querySelector('.productBlockOptions_swatches').innerHTML = colorSetElements;

            // Set the sizes
            // Create button group name
            let groupName = "sizeRadio";

            // Start the button group html
            let sizeGroup = `<div class="btn-group" role="group" aria-label="Basic radio toggle button group">`;

            // Loop through each size
            let checkedString = "checked";
            for (let i = 0; i < sizes; i++) {
                sizeGroup += `<input type="radio" class="btn-check" name="size" id="size" autocomplete="off" ${checkedString}>
                                        <label class="btn btn-outline-secondary btn-sm" for="${groupName}${i}">${product.sizes[i]}</label>`
                // Make the options after the first one not checked
                checkedString = "";
            }

            // finish and add size button group to new element
            sizeGroup += `</div>`;
            newElement.querySelector('.productBlockOptions_sizeGroup').innerHTML = sizeGroup;

            // Add new element to product list
            document.querySelector('.productsHouse').append(newElement);
        }

        // Add the color click events

        let colorElementsSet = document.querySelector(".productBlockOptions_swatches a");

        // Find all swatches on the page
        for (let i = 0; i < colorElementsSet; i++) {
            // Add a click event for the swatch
            colorElementsSet[i].addEventListener('click', function (e) {
                // Prevent the link from running
                colorBlob.preventDefault();

                // Get the color code
                let productColor = this.getAttribute('href');

                // Find the product image via the productBlock (parent)
                let thisProductBlock = this.closest('.productBlock');
                thisProductBlock.querySelector('.productBlockImgLink').style.backgroundColor = productColor;

                // Find all swatches in my product block and remove the selected indicator class:
                let thisBlockSwatches = thisProductBlock.querySelectorAll(".productBlockOptions_swatches a");

                for(let s=0; s <= colorElementsSet.length; s++){
                    thisBlockSwatches[s].classList.remove('productBlockOptions_swatches_selected');
                }

                // Add the selected indicator to the current swatch
                this.classList.add('productBlockOptions_swatches_selected');
            });
        }


    })
    .catch(console.error);



