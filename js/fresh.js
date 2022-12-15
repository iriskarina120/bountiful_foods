const list = document.querySelector("#list1");
const input = document.querySelector("#text-place1");
const button = document.querySelector("#btn1");

const list2 = document.querySelector("#list2");
const input2 = document.querySelector("#text-place2");
const button2 = document.querySelector("#btn2");

const list3 = document.querySelector("#list3");
const input3 = document.querySelector("#text-place3");
const button3 = document.querySelector("#btn3");

button.onclick = function () {
  let myItem1 = input.value;      
  
  if (input.value != "") {
    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const listBtn = document.createElement("button");    

    listItem.appendChild(listText);   
    listText.textContent = myItem1;    
    listItem.appendChild(listBtn);    
    listBtn.textContent = "X";    
    list.appendChild(listItem);    
    document.querySelector("#empty_value").textContent = "";   
    listBtn.onclick = function () {
      list.removeChild(listItem);    
      
    };
    input.focus();
    
  } else {
    document.querySelector("#empty_value").textContent =
      " You have not select any fruit";
  }
};

button2.onclick = function () {  
  let myItem2 = input2.value;    
  
  if (input2.value != "") {
    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const listBtn = document.createElement("button");    

    listItem.appendChild(listText);   
    listText.textContent = myItem2;    
    listItem.appendChild(listBtn);    
    listBtn.textContent = "X";    
    list.appendChild(listItem);    
    document.querySelector("#empty_value2").textContent = "";   
    listBtn.onclick = function () {
      list.removeChild(listItem);    
      
    };
    input2.focus();
    
  } else {
    document.querySelector("#empty_value2").textContent =
      " You have not select any fruit";
  }
};

button3.onclick = function () {  
  let myItem3 = input3.value;    
  
  if (input3.value != "") {
    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const listBtn = document.createElement("button");    

    listItem.appendChild(listText);   
    listText.textContent = myItem3;    
    listItem.appendChild(listBtn);    
    listBtn.textContent = "X";    
    list.appendChild(listItem);    
    document.querySelector("#empty_value3").textContent = "";   
    listBtn.onclick = function () {
      list.removeChild(listItem);    
      
    };
    input3.focus();
    
  } else {
    document.querySelector("#empty_value3").textContent =
      " You have not select any fruit";
  }
};

/*---------Create the list options---------*/
const tabla = document.querySelector('#fruits-types');

function cargarFruits() {
    fetch('https://iriskarina120.github.io/bountiful-json/bountiful-json/bountiful.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(fruits => {
            fruits.forEach(fruit => {
                const row = document.createElement('tr');
                row.innerHTML += `
                    
                    <option>${fruit.name}</option>                    
    
                `;
                tabla.appendChild(row);               

            });
        }) 
}

cargarFruits();

const myFruits = {};
const output = (myFruits) => {
    myFruits.forEach((fruit) => {
      let article = document.createElement("article");
        let fruitName = document.createElement("h3");
        fruitName.textContent = fruit.name;
        let carbohydrates = document.createElement("ul");        
        carbohydrates.textContent = `Carbohydrates: ${fruit.carbohydrates}`;        

        let protein = document.createElement("ul");        
        protein.textContent = `Protein: ${fruit.protein}`;       

        let fat = document.createElement("ul");        
        fat.textContent = `Fat: ${fruit.fat}`;        

        let calories = document.createElement("ul");        
        calories.textContent = `Calories: ${fruit.calories}`;        

        let sugar = document.createElement("ul");        
        sugar.textContent = `Sugar: ${fruit.sugar}`;              
        
        article.appendChild(fruitName);
        article.appendChild(carbohydrates); 
        article.appendChild(protein);       
        article.appendChild(fat);
        article.appendChild(calories);
        article.appendChild(sugar);        
            
        document.querySelector("#fruit-card").appendChild(article);
    });
    };

const getfruits = async () => {
    const response = await fetch(
      "https://iriskarina120.github.io/bountiful-json/bountiful-json/bountiful.json"
    );
    fruitList = await response.json();
    output(fruitList);
  };
  getfruits();

const reset = () => {
    document.querySelector("#myFruits").innerHTML = "";
  };
  cargarFruits();



