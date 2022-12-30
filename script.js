function newCitation() {
   const body = document.body;

   fetch('https://animechan.vercel.app/api/random/anime?title=demon')
      .then(response => response.json())
      .then(quote => {
         const div = document.querySelector('.container');

         const character = document.createTextNode('Character: ' + quote['character']);
         const character_paragraph = document.createElement('p');
         character_paragraph.setAttribute('class', 'character')
         character_paragraph.append(character);
         div.append(character_paragraph);

         const citation = document.createTextNode(quote['quote']);
         const citation_paragraph = document.createElement('p');
         citation_paragraph.setAttribute('class', 'citation')
         citation_paragraph.append(citation);
         div.append(citation_paragraph);


      });
}

