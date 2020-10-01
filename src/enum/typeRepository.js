const typeRepository = {
    DECK : 'deck',
    CARD : 'card',
    
    /**
     * check if the value passed belongs to typeRepository
     * @param value {string}
     * @retun boolean - 
     */
    isValue : value => {
        let values = Object.values(typeRepository)
        return values.includes(value)
    }

}


export default typeRepository