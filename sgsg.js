const axios = require('axios');

const webhookURL = 'https://discord.com/api/webhooks/1276487838464082003/6BuVBfEOc33Hehny1rpn7c1yf23_GIPeQHlPD1zR9_Se-pPQ28sl695gJL6azxte80Bo';

axios.post(webhookURL, {
  embeds: [
    {
      
      
      
      description: '>>> 1. Название вашего стенда.\n\n2. Oписание вашего стенда.(являетсы ои он ближним или дальний, средним. Описание самого стенда, характер, и сами критерии.)\n\n3. Статистика вашего стенда.\n\n4. Способности вашего стенда.(зависит от статов)\n\n5. Фото или гиф вашего стенда.(обязательно!) \n\nPs. Ot senky: Стенд полностью будет принадлежат вам, по этому он должен быть прописаным. Это значит он не должен переходить рамки всего возможного и не возможного, не мета крейтить, ещё минимум слов 250-450, знаки препинания и пробелы не считаются.',
      color:0xffffff,
      image:{
        url:'https://media.discordapp.net/attachments/1272134304150851717/1276480949873541211/8251c6458ed623456c867e4f9fbc831f.jpg?ex=66cda386&is=66cc5206&hm=e1793f450bc91be93703d36117f542496434378160944ff06482ed9b939f8fed&=&format=webp&width=422&height=597'
      }
    }
  ]
})
.then(response => {
  console.log('Сообщение отправлено успешно:', response.data);
})
.catch(error => {
  console.error('Ошибка при отправке сообщения:', error);
});