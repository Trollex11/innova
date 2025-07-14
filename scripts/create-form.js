let questionCount = 0;

function addQuestion() {
  questionCount++;
  const container = document.getElementById("questions");
  const div = document.createElement("div");
  div.className = "question-block";
  div.innerHTML = `
    <label>Pytanie ${questionCount}:</label>
    <input type="text" placeholder="Treść pytania" class="question-text" />
    <select class="question-type">
      <option value="text">Odpowiedź tekstowa</option>
      <option value="checkbox">Checkbox (Tak/Nie)</option>
      <option value="date">Data</option>
    </select>
  `;
  container.appendChild(div);
}

function generateForm() {
  const webhook = document.getElementById("webhookUrl").value;
  const questions = [...document.getElementsByClassName("question-block")].map(block => {
    return {
      text: block.querySelector(".question-text").value,
      type: block.querySelector(".question-type").value
    };
  });
  if (!webhook || questions.length === 0) {
    alert("Wprowadź webhook i przynajmniej jedno pytanie, debilu.");
    return;
  }
  const formId = Date.now().toString(36);
  localStorage.setItem("form_" + formId, JSON.stringify({ webhook, questions }));
  const url = `${window.location.origin}/form.html?id=${formId}`;
  document.getElementById("generatedLink").innerHTML = `
    <p>Link do formularza:</p>
    <a href="${url}" target="_blank">${url}</a>
  `;
}
