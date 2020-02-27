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
        if (first == second) return 0
        else if (first > second) return -1
        else return 1
    })
    sortedArticles.forEach((article, index) => document.querySelector('.articles').append(article))
}

// Insertion Sort
const insertionSort = () => {
    const sort = arr => {
        const articles = document.querySelectorAll('article')
        for (let i = 0; i < arr.length; i++) {
            let curr = parseInt(arr[i].querySelector('.article-up-vote-count').innerText)
            let j

            for (j = i - 1; j >= 0 && arr[j] > curr; j--) {
                let temp = arr[j + 1]
                let temp1 = document.querySelectorAll('article')[j + 1].cloneNode(true)
                articles[j + 1] = articles[j]
                document.querySelector('.articles').append(articles[j + 1])
                arr[j + 1] = arr[j]
                articles[j] = temp1
                document.querySelector('.articles').append(articles[j])
                arr[j] = temp
            }
            arr[j + 1] = curr
            articles[j + 1] = articles[i]
            document.querySelector('.articles').append(articles[j + 1])
        }
        return articles // [article2, article1, article3]
    }
    //   const articlesArray = document.querySelectorAll('article')[0].cloneNode(true)
    //   document.querySelectorAll('article').forEach(article => {

    // })
    const articlesArray = Array.from(document.querySelectorAll('article'))
    //   console.log('articlesArray', articlesArray)
    let sortedArticles = sort(articlesArray)
    console.log('sortedArticles', sortedArticles)
    // sortedArticles = [...sortedArticles]
    // [sortedArticles[0], sortedArticles[2]] = [sortedArticles[2], sortedArticles[0]]
    // sortedArticles[0] = sortedArticles[2]
    // document.querySelector('.articles').append(sortedArticles[0])
    // sortedArticles.forEach((article, index) => {
    //     document.querySelector('.articles').append(article)
    // })
}

const incrementByOne = () => {
    event.target.nextElementSibling.innerText = parseInt(event.target.nextElementSibling.innerText) + 1
    insertionSort()
}

upVoteArrows.forEach(upArrow => upArrow.addEventListener('click', incrementByOne))