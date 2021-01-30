const modal = {
    open(){
        document
        .querySelector('.modal-overlay')
        .classList
        .add('active')
    },
    close(){
        document
        .querySelector('.modal-overlay')
        .classList
        .remove('active')
    }
}

const transactions = [
]

const DOM = {
    transactionsContainer: document.querySelector('#data-tabletbody'),
    addTransaction(transaction, index) {
        transaction.innerHTML = DOM.innerHTMLTransaction()

        DOM.transactionsContainer.appendChild(tr)
    }

    innerHTMLTransaction(transaction) {
        const CSSclass = transaction.amount > 0 ? "income" : "expense"

        const amount = Utils.formatCurrency(transaction.amount)

        const html = `
        <td class="description">${transaction.description}</td>
        <td class="${CSSclass}">${amount}</td>
        <td class="date">${transaction.date}</td>
        <td>
            <img src="/devfinances/img/minus.svg" alt="Remover transação">
        </td>`

        return html
    },

    updateBalance () {
        document
            .getElementById('incomeDisplay')
            .innerHTML = "soma das entradas"
    }
}


const Utils = {
    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : ""
        value = String (value).replace(/\D/g, "")

        value =  Number(value) / 100

        value = value.toLocalString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })

        return signal + value
    }
}

transactions.forEach(function(transaction){
    DOM.addTransaction(transaction)
})


const Transaction = {
    incomes() {

    },
    expenses() {

    },
    total() {

    }
}