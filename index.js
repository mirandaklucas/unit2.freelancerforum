// just adding some documentation for checking github

// top page heading
let pageHead = document.getElementById('heading')
console.log(pageHead.innerHTML)
pageHead.innerHTML = 'Freelance Forum!'


// second page heading
let pageInfo = document.getElementById('secondHeading')
console.log(pageInfo.innerHTML)
pageInfo.innerHTML = 'Average starting price = $30'


// list header
let listHeading = document.getElementById('listHeading')
console.log(listHeading)
listHeading.innerHTML = "Available Freelancers"


// chart-type headings
let nameColumn = document.getElementById('chartHeading1')
console.log(nameColumn)
nameColumn.innerHTML = "Name"

let occupationColumn = document.getElementById('chartHeading2')
console.log(occupationColumn)
occupationColumn.innerHTML = "Occupation"

let priceColumn = document.getElementById('chartHeading3')
console.log(priceColumn)
priceColumn.innerHTML = "Starting Price"



// actual lists
/* 
let freelancerList = document.createElement('ul')
freelancerList.innerHTML = `<li>Alice</li>
                            <li>Bob</li>
                            <li>Carol</li>`
console.log(freelancerList.innerHTML)
let list = document.getElementsByTagName('body')[0]
list.appendChild(freelancerList) //actually puts the list onto the page

let occupationList = document.createElement('ul')
occupationList.innerHTML = `<li>Writer</li>
                            <li>Teacher</li>
                            <li>Programmer</li>`
console.log(occupationList.innerHTML)
let list2 = document.getElementsByTagName('body')[0]
list2.appendChild(occupationList)          

let priceList = document.createElement('ul')
priceList.innerHTML = `<li>$30</li>
                       <li>$50</li>
                       <li>$70</li>`
console.log(priceList.innerHTML)
let list3 = document.getElementsByTagName('body')[0]
list3.appendChild(priceList)         
*/

let freelancerList = [
    {
        name: 'Alice',
        occupation: 'Writer',
        price: '$30',
    },
    {
        name: 'Bob',
        occupation: 'Teacher',
        price: '$50',
    },
    {
        name: 'Carol',
        occupation: 'Programmer',
        price: '$70',
    },
    {
        name: 'Susan',
        occupation: 'Director',
        price: '$75',
    },
    {
        name: 'Justin',
        occupation: 'Soccer Coach',
        price: '$50'
    },
]

function showFreelancers() {
    let printList = document.getElementById('printList')

    for(let i = 0; i < freelancerList.length; i++){
        let currentFreelancer = freelancerList[i]
        console.log(showFreelancers)
        let personListed = document.createElement('div')
        personListed.className = 'freelancerList'
        personListed.innerHTML = `<h1>${currentFreelancer.name}</h1>
                                    <h2>${currentFreelancer.occupation}</h2>
                                    <h3>${currentFreelancer.price}</h3>`
    }
    // console.log(showFreelancers)
    printList.appendChild(printList)
}

showFreelancers()
