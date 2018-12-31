// const fetchData = async () => {
//   await (await fetch("http://localhost:9000/getusers")).json();
// };

// fetchData()
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => console.log("err"));

fetch("/.netlify/functions/getusers")
  .then(function(response) {
    return response;
  })
  .then(function(myJson) {
    // console.log(myJson.hits);

    const data = myJson.hits;

    data.forEach(res => {
      const box = document.getElementById("box");
      const li = document.createElement("li");
      li.className = "list-group-item";
      const node = document.createTextNode(res.views);
      li.appendChild(node);
      box.appendChild(li);
    });
  });
