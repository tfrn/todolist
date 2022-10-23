
        const liveToast = document.querySelector("#liveToast");
        let liste = JSON.parse(localStorage.getItem("liste"));
        let task = document.getElementById("task");
        let listeul = document.getElementById("list");

        function newElement(){
            if (task.value == "" || !task.value.trim() ) {
                $(`.error`).toast("show");
            }
            else{
            liste.push(task.value);
            localStorage.setItem("liste", JSON.stringify(liste)); 
            location.reload();
            $(`.success`).toast("show");
            }
        }

        for(let i=0;i<liste.length;i++){
            let lielementi = document.createElement("li");
            lielementi.setAttribute('id', i);
            let x = document.createElement("span");
            x.setAttribute('class', "close");
            x.setAttribute('id', i);
            x.setAttribute('onclick', "tikla(this.id)");
            let xt =document.createTextNode("x");
            x.appendChild(xt);
            let t = document.createTextNode(liste[i]);
            lielementi.appendChild(t);
            lielementi.appendChild(x);
            listeul.appendChild(lielementi); 
            lielementi.addEventListener("click", selectItem);
            function selectItem(){
                lielementi.classList.toggle("checked");
            }           
        }

        function tikla(tiklanan_id){
            let deger = tiklanan_id;
            liste.splice(deger, 1);
            localStorage.setItem("liste", JSON.stringify(liste)); 
            location.reload();
        }

