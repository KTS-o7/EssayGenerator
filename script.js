function generate() {

  var prompt_text = document.getElementById('essay-topic').value + document.getElementById('tone').value
  var url = "https://api.openai.com/v1/engines/text-davinci-002/completions";

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url);

  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Authorization", "Bearer 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");
  xhr.onreadystatechange = function () {
     if (xhr.readyState === 4) {
        open_ai_response = xhr.responseText;
        console.log(xhr.status);
        console.log(open_ai_response);
	     response();
     }};

  var data = `{
    "prompt": "${prompt_text}",
    "temperature": 0.7,
    "max_tokens": 256,
    "top_p": 1,
    "frequency_penalty": 0.75,
    "presence_penalty": 0
  }`;

  xhr.send(data);
}

function response(){
	document.getElementById('generated-essay').innerHTML = open_ai_response;
}
