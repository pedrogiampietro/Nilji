// Convertendo Data para formatação DD/MM/AA

module.exports = {

    date(timestamp) {
        const date = new Date(timestamp)

        const year = date.getFullYear()
        const month = `0${date.getMonth() + 1}`.slice(-2)
        const day = `0${date.getDate()}`.slice(-2)
        const hour = date.getHours()
        const minutes = date.getMinutes()

        return {
            day,
            month,
            year,
            hour,
            minutes,
            iso: `${year}-${month}-${day}`,
            birthDay: `${day}/${month}`,
            format: `${day}/${month}/${year}`
        }
    },

    dateConverterBuggedTimestamp(data) {
        // Não foi possível utilizar "Intl.DateTimeFormat" aqui, pois há algum problema ao transformar a data do formulário em timestamp (computa 1 dia a menos)

        const defaultDate = new Date(data)


        // Foi necessário converter duas vezes a "defaultDate" para criar uma string no formato desejado

        let defaultDateString = JSON.stringify(defaultDate)
        defaultDateString = defaultDateString.toString()
        

        // Foi necessário fazer 3 splits para limpar o array, para chegar ao formato desejado

        let dateArray = infoQuotationMarksSplitter(defaultDateString)
        dateArray = infoTimeSplitter(dateArray[1])
        dateArray = infoDashSplitter(dateArray[0])
        
        
        const day = dateArray[2]
        const month = dateArray[1]
        const year = dateArray[0]

        const slashFormattedDate = `${day}/${month}/${year}`
        const dashFormattedDateReverse = `${year}-${month}-${day}`

        return {
            day,
            month,
            year,
            
            slashFormattedDate,
            dashFormattedDateReverse
        }
    },

    formatPrice(price) {

        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(price / 100)
    },

    ageConverter(timestamp) {
        const calculate = Date.now() - timestamp
        const newDate = new Date(calculate)
    
        const age = newDate.getUTCFullYear() - 1970

        return Math.abs(age)
    },

    genderConverter(gender) {
        let extendedGender= ""
        gender == "M" ? extendedGender = "Masculino" : extendedGender = "Feminino"

        return extendedGender
    },
    infoCommaSplitter(info) {
        return info.split(",")
     },
 
     infoDashSplitter(info) {
         return info.split("-")
      },
 
      infoQuotationMarksSplitter(info) {
       return info.split('"')
    },
 
      infoTimeSplitter(info) {
       return info.split("T")
    },
 
    infoSlashSplitter(info) {
       return info.split("/")
    }
}