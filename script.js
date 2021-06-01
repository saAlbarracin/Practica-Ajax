      const btnShow = document.getElementById("btnShow");
      const h1Title = document.getElementById("title");
      const h3Date = document.getElementById("date");
      const pExplanation = document.getElementById("explanation");
      const imgPicture = document.getElementById("image");

      // trae los datos del backend
      btnShow.addEventListener("click", function () {
        // Enviar un request GET a https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
        // y recibir la respuesta

        const inpDate = document.getElementById("inputDate").value;
        console.log(inpDate);
        const xhr = new XMLHttpRequest();

        xhr.addEventListener("load", function () {
          const response = JSON.parse(xhr.responseText);
            console.log('---', response)
          imgPicture.src = response.url;
          h1Title.textContent = response.title;
          h3Date.textContent = response.date;
          pExplanation.textContent = response.explanation;
        });

        xhr.open(
          "GET",
          "https://api.nasa.gov/planetary/apod?api_key=RHt4jhhPnbnlcz4erwp2id2g9QpjqmQuUpB6d0uE&date=" +
            inpDate
        );
        xhr.send();
      });