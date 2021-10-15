export const getCurrentMonth = () => {
    let now = new Date()
    return `${now.getFullYear()}-${now.getMonth()+1}`
}

export const filterListByMonth = (transactions, date) => {
    let newTransactions = []
    let [year, month] = date.split('-')
    let currentMonth = month


    for(let i in transactions){
        if( 
            transactions[i].date.includes(`${year}-${currentMonth}`)
        )

        newTransactions.push(transactions[i])
    }
    
    console.log(currentMonth)
    
    return newTransactions
}