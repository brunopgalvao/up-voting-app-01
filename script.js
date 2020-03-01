const upVoteArrows = document.querySelectorAll('.card-up-vote-arrow')

// Selection Sort
// Bubble Sort
// Merge Sort
// Quick Sort
// Shell Sort


// Built-in Native Sorting Algorithm
const builtInSort = () => {
    const cards = document.querySelectorAll('.card')
    const sortedCards = Array.from(cards).sort((a, b) => {
        let first = parseInt(a.querySelector('.card-up-vote-count').innerText)
        let second = parseInt(b.querySelector('.card-up-vote-count').innerText)
        if (first == second) return 0
        else if (first > second) return -1
        else return 1
    })
    sortedCards.forEach((card, index) => document.querySelector('.cards').append(card))
}

// Bubble Sort - can i make this independent of the dom?
const bubbleSort = (cards) => {
    for (let i = (cards.length - 1); i >= 0; i--)
        for (let j = (cards.length - i); j > 0; j--)
            if (cards[j] < cards[j - 1])
                [cards[j - 1], cards[j]] = [cards[j], cards[j - 1]]
    console.log(cards)
    return cards
}

// Insertion Sort
const insertionSort = () => {
    const sortAsc = cardsArr => {
        const cards = document.querySelectorAll('.card')
        for (let i = 0; i < cardsArr.length; i++) {
            let curr = parseInt(cardsArr[i].querySelector('.card-up-vote-count').innerText)
            let j

            for (j = i - 1; j >= 0 && cardsArr[j] > curr; j--) {
                let temp = cardsArr[j + 1]
                let temp1 = document.querySelectorAll('article')[j + 1].cloneNode(true)
                cards[j + 1] = cards[j]
                document.querySelector('.cards').append(cards[j + 1])
                cardsArr[j + 1] = cardsArr[j]
                cards[j] = temp1
                document.querySelector('.cards').append(cards[j])
                cardsArr[j] = temp
            }
            cardsArr[j + 1] = curr
            cards[j + 1] = cards[i]
            document.querySelector('.cards').append(cards[j + 1])
        }
        return cards
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