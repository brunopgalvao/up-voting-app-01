const upVoteArrows = document.querySelectorAll('.article-up-vote-arrow')

// Selection Sort
// Bubble Sort
// Merge Sort
// Quick Sort
// Shell Sort


// Built-in Native Sorting Algorithm
const builtInSort = () => {
    const articles = document.querySelectorAll('article')
    const sortedArticles = Array.from(articles).sort((a, b) => {
        let first = parseInt(a.querySelector('.article-up-vote-count').innerText)
        let second = parseInt(b.querySelector('.article-up-vote-count').innerText)
        if(first == second) return 0
        else if(first > second) return -1
        else return 1
    })
    sortedArticles.forEach((article, index) => document.querySelector('.articles').append(article))
}

// Insertion Sort
const insertionSort = () => {
    const sort = arr => {
        for (let i = 0; i < arr.length; i++) {
        let curr = parseInt(arr[i].querySelector('.article-up-vote-count').innerText)
          let j

          for (j = i - 1; j >= 0 && arr[j] > curr; j--) {
            let temp = arr[j + 1]
            console.log(`moving ${j} to ${j+1}`)
            arr[j + 1] = arr[j]
            console.log(`moving temp to ${j}`)
            arr[j] = temp
          }
          arr[j + 1] = curr
        }
        return arr
      }
      console.log('articles:', document.querySelectorAll('article'))
      const articlesArray = [...Array.from(document.querySelectorAll('article'))]
      const sortedArticles = sort(articlesArray)
      console.log('sortedArticles', sortedArticles)
      sortedArticles.forEach((article, index) => {
          document.querySelector('.articles').append(document.querySelectorAll('article')[article])
        })
}

const incrementByOne = () => {
    event.target.nextElementSibling.innerText = parseInt(event.target.nextElementSibling.innerText) + 1
    insertionSort()
}

upVoteArrows.forEach(upArrow => upArrow.addEventListener('click', incrementByOne))