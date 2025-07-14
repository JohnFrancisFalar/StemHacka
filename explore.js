// const category = [

//     {
//         subject: 'Science',
//         Context: 'The systematic study of the natural and physical world through observation and experimentation.',
//         image: 'LogoPics/ScienceExplore.png',
//         buttonText: 'Start Journey',
//         link: 'Category/science.html'
//     },
//     {
//         subject: 'Engineering',
//         Context: 'It involves using science and math to design, build, and improve systems, structures, and technologies.',
//         image: 'LogoPics/EngineeringExplore.png',
//         buttonText: 'Start Journey',
//         link: 'Category/engineering.html'
//     },
//     {
//         subject: 'Technology',
//         Context: 'The practical application of scientific knowledge and the development of new technologies.',
//         image: 'LogoPics/TechnologyExplore.png',
//         buttonText: 'Start Journey',
//         link: 'Category/technology.html'
//     },
//     {
//         subject: 'Mathematics',
//         Context: 'The foundational language and tool for understanding and manipulating the world, from the smallest particles to the largest structures.',
//         image: 'LogoPics/MathExplore.png',
//         buttonText: 'Start Journey',
//         link: 'Category/math.html'
//     }
// ]

const container = document.querySelector('.category');

category.forEach(item => {
  const card = document.createElement('div');
  card.style.border = '1px solid #ccc';
  card.style.borderRadius = '10px';
  card.style.padding = '16px';
  card.style.marginBottom = '20px';
  card.style.textAlign = 'center';
  card.style.boxShadow = '0 2px 6px rgba(0,0,0,0.1)';
  card.style.background = '#fff';

  // Image
  const img = document.createElement('img');
  img.src = item.image;
  img.alt = item.subject;
  img.style.width = '100%';
  img.style.maxWidth = '150px';
  img.style.borderRadius = '8px';
  img.style.marginBottom = '10px';
  card.appendChild(img);

  // Title
  const title = document.createElement('h2');
  title.textContent = item.subject;
  card.appendChild(title);

  // Context / description
  const desc = document.createElement('p');
  desc.textContent = item.Context;
  card.appendChild(desc);

  // Button
  const btn = document.createElement('button');
  btn.textContent = item.buttonText;
  btn.onclick = () => location.href = item.link;
  btn.style.marginTop = '10px';
  btn.style.padding = '10px 20px';
  btn.style.border = 'none';
  btn.style.borderRadius = '5px';
  btn.style.backgroundColor = '#007bff';
  btn.style.color = '#fff';
  btn.style.cursor = 'pointer';
  card.appendChild(btn);

  container.appendChild(card);
});
