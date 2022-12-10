const myfruits = {};
const output = (myfruits) => {
    myfruits.forEach((fruit) => {
      let article = document.createElement("article");
        let name = document.createElement("h3");
        name.textContent = fruit.name; 
        
        
        article.appendChild(name);

        document.querySelector("#curses").appendChild(article);
    });
    };

const getfruits = async () => {
    const response = await fetch(
      "https://brotherblazzard.github.io/canvas-content/fruit.json"
    );
    fruitList = await response.json();
    output(fruitList);
  };
  getfruits();

const reset = () => {
    document.querySelector("#curses").innerHTML = "";
  };

const sortBy = () => {
    reset();
  
    let filter = document.querySelector("#sortBy").value;
  
    switch (filter) {
      case "fruit1":
        output(fruitList);
        break;
      case "fruit":        
        break;
      default:        
        output(
          fruitList.sort((curse1, curse2) =>
            curse1.name > curse2.name
              ? 1
              : curse2.name >
                curse1.name
              ? -1
              : 0
          )
        );
        break;
    }
  };
document.querySelector("#sortBy").addEventListener("change", sortBy);
