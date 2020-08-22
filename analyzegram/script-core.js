//let arraysInstagrams = [];

let arraysInstagrams = [
  "casa.brou",
  "galpaogourmetgg",
  "graopararj",
  "sushidapraca",
  "trupeesperta",
  "fregatapizzeria",
  "fitzza.rj",
  "tropical.sushi",
  "maissushi",
  "exclusivosushi",
  "stambulrestaurante",
  "abibrestaurante",
  "vitaligelato",
  "senhorafatia",
  "pizzaria_quadratti",
];

let analyzedUsers = [];

let orderBy = (array, target) => {
  return array.sort(function (a, b) {
    return a[target] < b[target] ? -1 : a[target] > b[target] ? 1 : 0;
  });
};

let analyzeInstagram = async (user) => {
  axios
    .get(`https://www.instagram.com/${user}/?__a=1`)
    .then((response) => {
      let sum_edge_media_to_comment = 0;
      let sum_edge_liked_by = 0;
      let total_edge_length =
        response.data.graphql.user.edge_owner_to_timeline_media.edges.length;
      let is_private = response.data.graphql.user.is_private;

      response.data.graphql.user.edge_owner_to_timeline_media.edges.map(
        (edge) => {
          let edge_media_to_comment = edge.node.edge_media_to_comment.count;
          let edge_liked_by = edge.node.edge_liked_by.count;
          let display_url = edge.node.display_url;

          sum_edge_media_to_comment += edge_media_to_comment;
          sum_edge_liked_by += edge_liked_by;
        }
      );

      let avg_edge_media_to_comment =
        sum_edge_media_to_comment / total_edge_length;
      let avg_edge_liked_by = sum_edge_liked_by / total_edge_length;

      let data = {
        user: is_private ? user + " (privado)" : user,
        avg_edge_liked_by: is_private ? 0 : avg_edge_liked_by,
        avg_edge_media_to_comment: is_private ? 0 : avg_edge_media_to_comment,
        profile_pic_url: response.data.graphql.user.profile_pic_url,
        sum_edge_media_to_comment: is_private ? 0 : sum_edge_media_to_comment,
        sum_edge_liked_by: is_private ? 0 : sum_edge_media_to_comment,
      };
      analyzedUsers.push(data);

      let last_element_array = arraysInstagrams[arraysInstagrams.length - 1];

      if (user === last_element_array) {
        let orderArrays = orderBy(analyzedUsers, avg_edge_liked_by);

        console.warn("dados processados", orderArrays);

        let html = "";

        orderArrays.map((el) => {
          console.warn("el", el);
          html += `<tr>
              <td><img src="${el.profile_pic_url}" width='30' alt="${
            el.user
          }" /></td>
              <td>${el.user}</td>
              <td>${el.avg_edge_liked_by.toFixed(2)}</td>
              <td>${el.avg_edge_media_to_comment.toFixed(2)}</td>
            </tr>`;
        });

        console.warn(html);

        document.getElementById("completed-tasks").innerHTML = html;

        let btnAnalyze = document.getElementById("btnAnalyze");
        btnAnalyze.innerText = "ANALIZAR INSTAGRAMS";
        btnAnalyze.style.background = "#000";
      }

      return data;
    })
    .catch((err) => console.error(err));
};

let startAnalysis = async () => {
  arraysInstagrams = [];
  document.getElementById("completed-tasks").innerHTML = "";

  document
    .querySelectorAll("#incomplete-tasks li label")
    .forEach((el) => arraysInstagrams.push(el.innerText));

  console.warn(arraysInstagrams);

  if (arraysInstagrams.length <= 0) {
    alert("Adicione pelo menos 1 Instragram");
    return false;
  }
  let btnAnalyze = document.getElementById("btnAnalyze");
  btnAnalyze.innerText = "Analizando...";
  btnAnalyze.style.background = "#333";

  arraysInstagrams.map((user) => analyzeInstagram(user));
};

//startAnalysis();
