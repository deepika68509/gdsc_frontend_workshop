import { items } from "./data.js";

const formEle = document.getElementsById("item-form");
const listEle = document.getElementById("list-container"); 
const placeInput = document.getElementById("place"); 
const imageInput = document.getElementById("image"); 
const locationInput = document.getElementById("location"); 
const linkInput = document.getElementById("link"); 
const dateInput = document.getElementById("date"); 

function renderList() {
    listEle.innerHTML = items.map(
        (item)=> 
        <div class="card">
          <><img
            src ${item.image} /><div class="card-content">
                <div class="card-header">
                    <div class="card-header-text">
                        <a
                            target="_blank"
                            href $ {...item.link}
                        >$</a>
                        <p>Agra, India</p>
                    </div>
                    <div class="card-header-actions">
                        <button>
                            <img src="./assets/edit-icon.svg" alt="edit-button" />
                        </button>
                        <button>
                            <img src="./assets/trash-icon.svg" alt="delete-button" />
                        </button>
                    </div>
                </div>
                <p>
                    I'm looking forward to leisurely walking through the lush gardens
                    surrounding the Taj. I'll keep my camera ready for every
                    picturesque corner.
                </p>
                <p class="card-footer">${item.date}</p>
            </div></>
        </div>
    )
    
}