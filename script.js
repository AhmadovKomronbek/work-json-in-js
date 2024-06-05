fetch("data.json")
        .then(response => response.json())
        .then(data => {
            var selectValue = document.getElementById("select");
            var button = document.getElementById("generate");
            var nameValue = document.getElementById("name-value");
            var descriptionValue = document.getElementById("description-value");
            var lifeValue = document.getElementById("life-value");
            var weightValue = document.getElementById("weight-value");
            
            function change_text(){
                nameValue.innerHTML = data["data"][selectValue.value]["attributes"]["name"]
                descriptionValue.innerHTML = data["data"][selectValue.value]["attributes"]["description"]
                var normalLife = (data["data"][selectValue.value]["attributes"]["life"]["max"] + data["data"][selectValue.value]["attributes"]["life"]["min"]) / 2
                lifeValue.innerHTML = normalLife

                var maleWeight = (data["data"][selectValue.value]["attributes"]["male_weight"]["max"] + data["data"][selectValue.value]["attributes"]["male_weight"]["min"]) / 2
                var femaleWeight = (data["data"][selectValue.value]["attributes"]["female_weight"]["max"] + data["data"][selectValue.value]["attributes"]["female_weight"]["min"]) / 2
                weightValue.innerHTML = (maleWeight + femaleWeight) / 2
            }
            
            change_text()

            button.addEventListener("click", change_text)
        })