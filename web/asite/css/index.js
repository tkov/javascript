let snippets = 
[
  {
      'title': 'Flexbox Layout',
      'desc': 'Flexbox is a one-dimentional layout method for arrangin items in rows or column',
      'code': 'display:flex',
  }
];


const snippetsContainer = document.querySelector('#snippets-container');

for (var el of snippets) {
  console.log(el);
  snippetsContainer.appendChild(createSnippetCard(el));
}


var inputTitle = document.getElementById('input-title')
var textAreaDesc = document.getElementById("ta-desc");
var textAreaCode = document.getElementById("ta-code");
var submitBtn = document.getElementById('submit-btn');

submitBtn.onclick = function(e) {
	e.preventDefault();
  console.log('form button clicked!');

  newSnippet = {
    'title': inputTitle.value,
    'desc': textAreaDesc.value,
    'code': textAreaCode.value,
  }

  snippets.push(
    newSnippet
    );  

  snippetsContainer.appendChild(createSnippetCard(newSnippet));

  
  document.getElementById('test').innerText = j.code;
};


textAreaCode.onkeyup = function(e) {
  e = e || window.event;
  if (e.keyCode === 13) {
    e.preventDefault();
  }
  
  if (e.key === 'Tab') {
  	e.preventDefault();
  	console.log('I hit the TAB key!');
  }
  
  
};




function createSnippetCard(snippet){
  let cardDiv = document.createElement('div');
  cardDiv.classList.add('card', 'card-tall', 'flex-col');
  let html = `
          <!-- Title -->  <h3>
          ${snippet.title}
          </h3>
          <!-- Description -->
          <p class="desc">${snippet.desc}</p>
          <div class="code-wrapper">
          <pre>${snippet.code}
          </pre>
          </div>
          <div class="snippet-examples">
            <ul class="flex-row row-sa">
              <!-- todo -->
            </ul>
          </div>
          `;
  cardDiv.innerHTML = html;
  return cardDiv;
}