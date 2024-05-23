function createFormatter (separator, sumbol, sumbolFirst, formatter){
    return (value) => formatter (separator, symbol, sumbolFirst, value)
}