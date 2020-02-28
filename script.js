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

// Bubble Sort - can i make this independent of the dom?
const bubbleSort = (arr) => {
    for (let i = (arr.length - 1); i >= 0; i--)
        for (let j = (arr.length - i); j > 0; j--)
            if (arr[j] < arr[j - 1])
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
    console.log(arr)
    return arr
}

// Insertion Sort
const insertionSort = () => {
    const sortAsc = arr => {
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
        return articles
    }

    const sortDesc = arr => {
        const articles = document.querySelectorAll('article')
        for(let i = arr.length - 1; i >= 0; i--) {
            let curr = parseInt(arr[i].querySelector('.article-up-vote-count').innerText)
            let j

            for(j = i; j < arr.length && arr[j+1] > curr; j++) { 
                arr[j] = arr[j + 1]
                articles[j] = articles[j + 1]
                document.querySelector('.articles').append(articles[j])
            }
            
            arr[j] = curr
            articles[j] = articles[i]
            document.querySelector('.articles').append(articles[j])
            console.log('arr', arr)
        }
        return arr
    }

    const articlesArray = Array.from(document.querySelectorAll('article'))
    sortAsc(articlesArray)
}

const incrementByOne = () => {
    event.target.nextElementSibling.innerText = parseInt(event.target.nextElementSibling.innerText) + 1
    insertionSort()
}

upVoteArrows.forEach(upArrow => upArrow.addEventListener('click', incrementByOne))