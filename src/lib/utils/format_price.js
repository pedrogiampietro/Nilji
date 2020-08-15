module.exports = {

    //formatando valor em reais.

    formatPrice(price) {

        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(price / 100)
    }
}