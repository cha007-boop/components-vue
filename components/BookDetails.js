app.component('book-details', {
    props: {
        booklist: {
            type: Array,
            required: true
        }
    },
    template:
        /*html*/
        `
      <h2>Books List</h2>
      <div>       
        <ul>
          <li v-for="book in booklist" :key="book.id">
            {{ book.title }} by {{ book.author }} ({{ book.published }})
          </li>
        </ul> 
      </div>
  `
})